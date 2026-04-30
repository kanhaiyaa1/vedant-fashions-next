"use client";
import { useState, useRef, useCallback } from "react";
import { UploadCloud, X, CheckCircle2, FileText, AlertCircle } from "lucide-react";
import { bulkOrderSchema, type BulkOrderData } from "@/lib/inquiry-schemas";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";
import { FormShell, TextField, TextAreaField, CountrySelect, ProductInterestSelect, SelectField } from "./FormFields";
import { createClient } from "@/lib/supabase/client";
import type { ZodError } from "zod";

const incoterms = ["FOB Mumbai", "CIF European Port", "DDP Your Warehouse", "EXW Factory"] as const;
const MAX_FILES = 3;
const MAX_SIZE = 10 * 1024 * 1024; // 10 MB
const ACCEPTED = ".pdf,.jpg,.jpeg,.png,.ai,.cdr";

type UploadState = "idle" | "uploading" | "sending";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function uploadFile(file: File): Promise<string | null> {
  const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;

  // Try authenticated Supabase client upload first
  try {
    const supabase = createClient();
    const { data, error } = await supabase.storage
      .from("rfq-attachments")
      .upload(fileName, file, { cacheControl: "3600", upsert: false });
    if (data && !error) return data.path;
  } catch {
    // fall through to server upload
  }

  // Fall back to server-side upload (works for unauthenticated users)
  try {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("fileName", fileName);
    const res = await fetch("/api/upload-attachment", { method: "POST", body: fd });
    if (res.ok) {
      const json = await res.json();
      return json.path as string;
    }
  } catch {
    // ignore — return null
  }

  return null;
}

const BulkOrderForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<BulkOrderData>({
    name: "", company: "", email: "", phone: "", country: "",
    productInterest: "", quantity: "", targetDate: "", incoterm: "",
    shippingPort: "", annualVolume: "", message: "",
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [doneFiles, setDoneFiles] = useState<Set<string>>(new Set());
  const [fileError, setFileError] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set = (key: keyof BulkOrderData) => (v: string) => {
    setForm((p) => ({ ...p, [key]: v }));
    setErrors((p) => { const n = { ...p }; delete n[key]; return n; });
  };

  const addFiles = useCallback((incoming: File[]) => {
    setFileError("");
    const oversized = incoming.filter((f) => f.size > MAX_SIZE);
    if (oversized.length) {
      setFileError(`File too large — max 10 MB (${oversized.map((f) => f.name).join(", ")})`);
      return;
    }
    setSelectedFiles((prev) => {
      const merged = [...prev, ...incoming];
      if (merged.length > MAX_FILES) {
        setFileError(`Maximum ${MAX_FILES} files allowed`);
        return prev;
      }
      return merged;
    });
  }, []);

  const removeFile = (name: string) => {
    setSelectedFiles((prev) => prev.filter((f) => f.name !== name));
    setDoneFiles((prev) => { const s = new Set(prev); s.delete(name); return s; });
    setFileError("");
  };

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(Array.from(e.dataTransfer.files));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(Array.from(e.target.files));
    e.target.value = "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      bulkOrderSchema.parse(form);
    } catch (err) {
      const zodErr = err as ZodError;
      const fieldErrors: Record<string, string> = {};
      zodErr.issues.forEach((issue) => { if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message; });
      setErrors(fieldErrors);
      return;
    }

    const uploadedPaths: string[] = [];

    if (selectedFiles.length > 0) {
      setUploadState("uploading");
      for (const file of selectedFiles) {
        const path = await uploadFile(file);
        if (path) {
          uploadedPaths.push(path);
          setDoneFiles((prev) => new Set([...prev, file.name]));
        }
      }
    }

    setUploadState("sending");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formType: "bulk", attachmentPaths: uploadedPaths }),
      });
      setSubmitted(true);
      trackEvent(GA_EVENTS.ENQUIRY_SUBMITTED, { form_type: "bulk", country: form.country });
    } finally {
      setUploadState("idle");
    }
  };

  const isSubmitting = uploadState !== "idle";
  const submittingLabel =
    uploadState === "uploading"
      ? `Uploading files… (${doneFiles.size}/${selectedFiles.length})`
      : "Sending enquiry…";

  return (
    <FormShell
      subtitle="Bulk Orders"
      title="Bulk Order Request"
      description="Place a bulk order with competitive pricing. Minimum order quantities apply per style and colour."
      submitted={submitted}
      submitting={isSubmitting}
      submittingLabel={submittingLabel}
      successMessage="Your bulk order request has been received. Our export manager will contact you within 24 hours with pricing tiers and shipping options."
      onSubmit={handleSubmit}
    >
      <div className="grid md:grid-cols-2 gap-5">
        <TextField label="Full Name" required value={form.name} onChange={set("name")} placeholder="e.g. Anna Schmidt" error={errors.name} />
        <TextField label="Company" required value={form.company} onChange={set("company")} placeholder="e.g. Nordstil GmbH" error={errors.company} />
        <TextField label="Business Email" required type="email" value={form.email} onChange={set("email")} placeholder="anna@nordstil.de" error={errors.email} />
        <TextField label="Phone" value={form.phone || ""} onChange={set("phone")} placeholder="+49 40 123 4567" error={errors.phone} />
        <CountrySelect value={form.country} onChange={set("country")} error={errors.country} />
        <ProductInterestSelect value={form.productInterest} onChange={set("productInterest")} error={errors.productInterest} required />
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <TextField label="Order Quantity" required value={form.quantity} onChange={set("quantity")} placeholder="e.g. 5,000 pcs" error={errors.quantity} />
        <TextField label="Delivery Date" required type="date" value={form.targetDate} onChange={set("targetDate")} error={errors.targetDate} />
        <SelectField label="Incoterm" required value={form.incoterm} onChange={set("incoterm")} options={incoterms} placeholder="Select Incoterm" error={errors.incoterm} />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <TextField label="Destination Port / City" value={form.shippingPort || ""} onChange={set("shippingPort")} placeholder="e.g. Hamburg, Rotterdam" error={errors.shippingPort} />
        <TextField label="Estimated Annual Volume" value={form.annualVolume || ""} onChange={set("annualVolume")} placeholder="e.g. 20,000 pcs/year" error={errors.annualVolume} />
      </div>
      <TextAreaField label="Additional Requirements" value={form.message || ""} onChange={set("message")} placeholder="Packaging, labeling, special shipping instructions..." error={errors.message} />

      {/* ── File Upload ──────────────────────────────────────────── */}
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Attach Tech Pack / Reference Images <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <p className="text-xs text-muted-foreground">Accepted: PDF, JPG, PNG, AI, CDR — Max 10 MB per file, up to {MAX_FILES} files</p>
        </div>

        {/* Drop zone */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center gap-2 border-2 rounded-lg p-8 cursor-pointer transition-colors text-center select-none
            ${isDragging
              ? "border-olive bg-olive/5"
              : "border-dashed border-border hover:border-olive/60 hover:bg-accent/40"
            }`}
        >
          <UploadCloud className={`w-8 h-8 ${isDragging ? "text-olive" : "text-muted-foreground"}`} />
          <div>
            <p className="text-sm font-medium text-foreground">Drop files here or click to browse</p>
            <p className="text-xs text-muted-foreground mt-0.5">{MAX_FILES - selectedFiles.length} slot{MAX_FILES - selectedFiles.length !== 1 ? "s" : ""} remaining</p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPTED}
            multiple
            onChange={handleInputChange}
            className="hidden"
          />
        </div>

        {/* File error */}
        {fileError && (
          <p className="flex items-center gap-1.5 text-xs text-destructive">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            {fileError}
          </p>
        )}

        {/* Selected files list */}
        {selectedFiles.length > 0 && (
          <ul className="space-y-2">
            {selectedFiles.map((file) => {
              const done = doneFiles.has(file.name);
              const uploading = uploadState === "uploading" && !done;
              return (
                <li key={file.name} className="flex items-center gap-3 bg-secondary/60 rounded-md px-3 py-2">
                  <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{file.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-muted-foreground">{formatBytes(file.size)}</p>
                      {uploading && (
                        <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                          <div className="h-full bg-olive/60 animate-pulse w-2/3 rounded-full" />
                        </div>
                      )}
                      {done && (
                        <span className="flex items-center gap-1 text-xs text-olive font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Uploaded
                        </span>
                      )}
                    </div>
                  </div>
                  {!isSubmitting && (
                    <button
                      type="button"
                      onClick={() => removeFile(file.name)}
                      className="text-muted-foreground hover:text-destructive transition-colors p-0.5 rounded"
                      aria-label={`Remove ${file.name}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </FormShell>
  );
};

export default BulkOrderForm;

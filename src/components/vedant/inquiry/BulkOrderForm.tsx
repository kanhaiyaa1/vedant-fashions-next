"use client";
import { useState } from "react";
import { bulkOrderSchema, type BulkOrderData } from "@/lib/inquiry-schemas";
import { FormShell, TextField, TextAreaField, CountrySelect, ProductInterestSelect, SelectField } from "./FormFields";
import type { ZodError } from "zod";

const incoterms = ["FOB Mumbai", "CIF European Port", "DDP Your Warehouse", "EXW Factory"] as const;

const BulkOrderForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<BulkOrderData>({
    name: "", company: "", email: "", phone: "", country: "",
    productInterest: "", quantity: "", targetDate: "", incoterm: "",
    shippingPort: "", annualVolume: "", message: "",
  });

  const set = (key: keyof BulkOrderData) => (v: string) => {
    setForm((p) => ({ ...p, [key]: v }));
    setErrors((p) => { const n = { ...p }; delete n[key]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      bulkOrderSchema.parse(form);
    } catch (err) {
      const zodErr = err as ZodError;
      const fieldErrors: Record<string, string> = {};
      zodErr.issues.forEach((e) => { if (e.path[0]) fieldErrors[e.path[0] as string] = e.message; });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formType: "bulk" }),
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormShell
      subtitle="Bulk Orders"
      title="Bulk Order Request"
      description="Place a bulk order with competitive pricing. Minimum order quantities apply per style and colour."
      submitted={submitted}
      submitting={submitting}
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
    </FormShell>
  );
};

export default BulkOrderForm;

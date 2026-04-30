"use client";
import { useState } from "react";
import { privateLabelSchema, type PrivateLabelData } from "@/lib/inquiry-schemas";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";
import { FormShell, TextField, TextAreaField, CountrySelect, ProductInterestSelect, SelectField } from "./FormFields";
import type { ZodError } from "zod";

const techPackOptions = ["Yes, ready to share", "In progress", "No, need development support"] as const;

const PrivateLabelForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<PrivateLabelData>({
    name: "", company: "", email: "", phone: "", country: "",
    brandName: "", productInterest: "", quantity: "", hasTechPack: "",
    labelingNeeds: "", targetPrice: "", message: "",
  });

  const set = (key: keyof PrivateLabelData) => (v: string) => {
    setForm((p) => ({ ...p, [key]: v }));
    setErrors((p) => { const n = { ...p }; delete n[key]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      privateLabelSchema.parse(form);
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
        body: JSON.stringify({ ...form, formType: "private-label" }),
      });
      setSubmitted(true);
      trackEvent(GA_EVENTS.ENQUIRY_SUBMITTED, { form_type: "private-label", country: form.country });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormShell
      subtitle="Private Label"
      title="Private Label Manufacturing"
      description="Launch your own brand with our full-service private label programme. From design to delivery, we handle everything."
      submitted={submitted}
      submitting={submitting}
      successMessage="Your private label inquiry has been received. Our brand development team will schedule a consultation within 48 hours."
      onSubmit={handleSubmit}
    >
      <div className="grid md:grid-cols-2 gap-5">
        <TextField label="Full Name" required value={form.name} onChange={set("name")} placeholder="e.g. Anna Schmidt" error={errors.name} />
        <TextField label="Company" required value={form.company} onChange={set("company")} placeholder="e.g. Nordstil GmbH" error={errors.company} />
        <TextField label="Business Email" required type="email" value={form.email} onChange={set("email")} placeholder="anna@nordstil.de" error={errors.email} />
        <TextField label="Phone" value={form.phone || ""} onChange={set("phone")} placeholder="+49 40 123 4567" error={errors.phone} />
        <CountrySelect value={form.country} onChange={set("country")} error={errors.country} />
        <TextField label="Brand Name" required value={form.brandName} onChange={set("brandName")} placeholder="Your brand name" error={errors.brandName} />
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <ProductInterestSelect value={form.productInterest} onChange={set("productInterest")} error={errors.productInterest} required />
        <TextField label="Initial Order Quantity" required value={form.quantity} onChange={set("quantity")} placeholder="e.g. 2,000 pcs" error={errors.quantity} />
        <SelectField label="Tech Pack Status" required value={form.hasTechPack} onChange={set("hasTechPack")} options={techPackOptions} placeholder="Select status" error={errors.hasTechPack} />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <TextAreaField label="Labeling & Packaging Needs" value={form.labelingNeeds || ""} onChange={set("labelingNeeds")} placeholder="Woven labels, hang tags, poly bags, custom boxes..." rows={3} error={errors.labelingNeeds} />
        <TextField label="Target FOB Price (per piece)" value={form.targetPrice || ""} onChange={set("targetPrice")} placeholder="e.g. €8–12" error={errors.targetPrice} />
      </div>
      <TextAreaField label="Additional Details" value={form.message || ""} onChange={set("message")} placeholder="Design references, target market, seasonal timeline..." error={errors.message} />
    </FormShell>
  );
};

export default PrivateLabelForm;

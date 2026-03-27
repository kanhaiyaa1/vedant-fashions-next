"use client";
import { useState } from "react";
import { generalInquirySchema, type GeneralInquiryData } from "@/lib/inquiry-schemas";
import { FormShell, TextField, TextAreaField, CountrySelect, ProductInterestSelect } from "./FormFields";
import type { ZodError } from "zod";

const GeneralInquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<GeneralInquiryData>({
    name: "", company: "", email: "", phone: "", country: "", productInterest: "", message: "",
  });

  const set = (key: keyof GeneralInquiryData) => (v: string) => {
    setForm((p) => ({ ...p, [key]: v }));
    setErrors((p) => { const n = { ...p }; delete n[key]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      generalInquirySchema.parse(form);
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
        body: JSON.stringify({ ...form, formType: "general" }),
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormShell
      subtitle="Get in Touch"
      title="General Inquiry"
      description="Have a question about our products, capabilities, or export services? We're here to help."
      submitted={submitted}
      submitting={submitting}
      onSubmit={handleSubmit}
    >
      <div className="grid md:grid-cols-2 gap-5">
        <TextField label="Full Name" required value={form.name} onChange={set("name")} placeholder="e.g. Anna Schmidt" error={errors.name} />
        <TextField label="Company" required value={form.company} onChange={set("company")} placeholder="e.g. Nordstil GmbH" error={errors.company} />
        <TextField label="Business Email" required type="email" value={form.email} onChange={set("email")} placeholder="anna@nordstil.de" error={errors.email} />
        <TextField label="Phone" value={form.phone || ""} onChange={set("phone")} placeholder="+49 40 123 4567" error={errors.phone} />
        <CountrySelect value={form.country} onChange={set("country")} error={errors.country} />
        <ProductInterestSelect value={form.productInterest || ""} onChange={set("productInterest")} error={errors.productInterest} />
      </div>
      <TextAreaField label="Message" required value={form.message} onChange={set("message")} placeholder="Tell us about your requirements, timeline, and any specific certifications needed..." error={errors.message} />
    </FormShell>
  );
};

export default GeneralInquiryForm;

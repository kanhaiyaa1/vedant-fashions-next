"use client";
import { useState } from "react";
import { productInquirySchema, type ProductInquiryData } from "@/lib/inquiry-schemas";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";
import { FormShell, TextField, TextAreaField, CountrySelect, ProductInterestSelect } from "./FormFields";
import type { ZodError } from "zod";

const ProductInquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<ProductInquiryData>({
    name: "", company: "", email: "", phone: "", country: "",
    productInterest: "", quantity: "", targetDate: "", colorRequirements: "", message: "",
  });

  const set = (key: keyof ProductInquiryData) => (v: string) => {
    setForm((p) => ({ ...p, [key]: v }));
    setErrors((p) => { const n = { ...p }; delete n[key]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      productInquirySchema.parse(form);
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
        body: JSON.stringify({ ...form, formType: "product" }),
      });
      setSubmitted(true);
      trackEvent(GA_EVENTS.ENQUIRY_SUBMITTED, { form_type: "product", country: form.country });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormShell
      subtitle="Product Inquiry"
      title="Request Product Details"
      description="Interested in a specific product? Get detailed pricing, fabric options, and lead times."
      submitted={submitted}
      submitting={submitting}
      successMessage="We've received your product inquiry. Our team will send you detailed specifications, pricing, and available fabric options within 24 hours."
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
      <div className="grid md:grid-cols-2 gap-5">
        <TextField label="Quantity Required" required value={form.quantity} onChange={set("quantity")} placeholder="e.g. 1,000 pcs" error={errors.quantity} />
        <TextField label="Target Delivery Date" type="date" value={form.targetDate || ""} onChange={set("targetDate")} error={errors.targetDate} />
      </div>
      <TextAreaField label="Color / Customization Requirements" value={form.colorRequirements || ""} onChange={set("colorRequirements")} placeholder="Specific Pantone colours, custom prints, embroidery details..." error={errors.colorRequirements} />
      <TextAreaField label="Additional Notes" value={form.message || ""} onChange={set("message")} placeholder="Any other requirements or questions..." error={errors.message} />
    </FormShell>
  );
};

export default ProductInquiryForm;

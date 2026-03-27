"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProductInquiryFormProps {
  productName: string;
  productId: string;
}

const ProductInquiryForm = ({ productName, productId }: ProductInquiryFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (submitted) {
    return (
      <div className="border border-olive/30 bg-olive/5 rounded p-6 text-center space-y-3">
        <p className="font-display text-xl text-foreground">Inquiry Received</p>
        <p className="text-body-sm text-muted-foreground">
          Thank you for your interest in {productName}. Our export team will respond within 24 hours with pricing and availability.
        </p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "product",
          productName,
          productId,
          company: fd.get("company") ?? "",
          name: fd.get("name") ?? "",
          email: fd.get("email") ?? "",
          country: fd.get("country") ?? "",
          quantity: fd.get("quantity") ?? "",
          targetDate: fd.get("targetDate") ?? "",
          message: fd.get("message") ?? "",
        }),
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border rounded p-6 space-y-5"
    >
      <div>
        <p className="font-display text-lg font-medium text-foreground">Request a Quote</p>
        <p className="text-caption mt-1">For: {productName} (#{productId})</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-caption">Company Name *</Label>
          <Input name="company" required placeholder="Your company" className="bg-background" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-caption">Contact Name *</Label>
          <Input name="name" required placeholder="Full name" className="bg-background" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-caption">Email *</Label>
          <Input name="email" required type="email" placeholder="email@company.com" className="bg-background" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-caption">Country *</Label>
          <Select name="country" required>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {["Germany", "France", "Italy", "Spain", "Netherlands", "Poland", "United Kingdom", "Russia", "Other"].map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-caption">Quantity Required</Label>
          <Input name="quantity" placeholder="e.g. 1,000 pcs" className="bg-background" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-caption">Target Delivery Date</Label>
          <Input name="targetDate" type="date" className="bg-background" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label className="text-caption">Additional Requirements</Label>
        <Textarea name="message" placeholder="Custom colours, labels, packaging, size grading..." className="bg-background min-h-[80px]" />
      </div>

      <Button type="submit" disabled={submitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        {submitting ? "Sending…" : "Submit Inquiry"}
      </Button>
      <p className="text-caption text-center">Response within 24 hours. No commitment required.</p>
    </form>
  );
};

export default ProductInquiryForm;

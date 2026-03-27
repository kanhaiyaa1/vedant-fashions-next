"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(150),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  country: z.string().min(1, "Please select a country"),
  productInterest: z.string().optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

const countries = ["Germany", "France", "Italy", "Netherlands", "Spain", "Poland", "United Kingdom", "Russia", "Other"];
const products = ["Organic Cotton", "Tencel™ Lyocell", "Recycled Polyester", "Linen Blends", "Custom Development", "Full Catalogue"];

const InquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormData>({
    name: "", company: "", email: "", phone: "", country: "", productInterest: "", message: "",
  });

  const set = (key: keyof FormData) => (v: string) => {
    setForm((p) => ({ ...p, [key]: v }));
    setErrors((p) => { const n = { ...p }; delete n[key]; return n; });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      schema.parse(form);
      setSubmitted(true);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.issues.forEach((e) => { if (e.path[0]) fieldErrors[e.path[0] as string] = e.message; });
        setErrors(fieldErrors);
      }
    }
  };

  if (submitted) {
    return (
      <section className="section-spacing bg-cream">
        <div className="container-tight text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-olive/10 flex items-center justify-center">
            <Send className="w-6 h-6 text-olive" />
          </div>
          <h2 className="text-display-sm text-foreground">Thank You</h2>
          <p className="text-body-lg text-muted-foreground">
            Your inquiry has been received. Our export team will respond within 24 business hours.
          </p>
        </div>
      </section>
    );
  }

  const fieldClass = (key: string) => errors[key] ? "bg-background border-destructive" : "bg-background";

  return (
    <section id="inquiry" className="section-spacing bg-cream">
      <div className="container-tight">
        <div className="text-center mb-16 space-y-4">
          <p className="text-subheading text-gold">Get in Touch</p>
          <h2 className="text-display-md text-foreground">Request a Quote</h2>
          <p className="text-body text-muted-foreground max-w-lg mx-auto">
            Tell us about your requirements and our export team will prepare a tailored proposal.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded p-6 md:p-10 space-y-6" noValidate>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Full Name *</Label>
              <Input id="name" value={form.name} onChange={(e) => set("name")(e.target.value)} placeholder="e.g. Anna Schmidt" className={fieldClass("name")} />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="company" className="text-xs uppercase tracking-wider text-muted-foreground">Company *</Label>
              <Input id="company" value={form.company} onChange={(e) => set("company")(e.target.value)} placeholder="e.g. Nordstil GmbH" className={fieldClass("company")} />
              {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Business Email *</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => set("email")(e.target.value)} placeholder="anna@nordstil.de" className={fieldClass("email")} />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground">Phone</Label>
              <Input id="phone" type="tel" value={form.phone || ""} onChange={(e) => set("phone")(e.target.value)} placeholder="+49 40 123 4567" className="bg-background" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Country *</Label>
              <Select value={form.country} onValueChange={set("country")}>
                <SelectTrigger className={fieldClass("country")}>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.country && <p className="text-xs text-destructive">{errors.country}</p>}
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">Product Interest</Label>
              <Select value={form.productInterest || ""} onValueChange={set("productInterest")}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">Message</Label>
            <Textarea id="message" rows={4} value={form.message || ""} onChange={(e) => set("message")(e.target.value)} placeholder="Tell us about your volume requirements, timeline, and any specific certifications needed..." className="bg-background resize-none" />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-caption">
              By submitting, you agree to our privacy policy. We never share your data with third parties.
            </p>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase text-xs tracking-widest px-8 h-12 shrink-0">
              Submit Inquiry
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;

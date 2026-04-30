"use client";
import { type ReactNode } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countries, productInterests } from "@/lib/inquiry-schemas";

// ── Field wrapper with error ────────────────────────────────────────

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}

export const Field = ({ label, required, error, children }: FieldProps) => (
  <div className="space-y-1.5">
    <Label className="text-xs uppercase tracking-wider text-muted-foreground">
      {label} {required && "*"}
    </Label>
    {children}
    {error && <p className="text-xs text-destructive mt-1">{error}</p>}
  </div>
);

// ── Country select ──────────────────────────────────────────────────

export const CountrySelect = ({ value, onChange, error }: { value: string; onChange: (v: string) => void; error?: string }) => (
  <Field label="Country" required error={error}>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="bg-background">
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
      <SelectContent>
        {countries.map((c) => (
          <SelectItem key={c} value={c}>{c}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </Field>
);

// ── Product interest select ─────────────────────────────────────────

export const ProductInterestSelect = ({ value, onChange, error, required }: { value: string; onChange: (v: string) => void; error?: string; required?: boolean }) => (
  <Field label="Product Interest" required={required} error={error}>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="bg-background">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        {productInterests.map((p) => (
          <SelectItem key={p} value={p}>{p}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </Field>
);

// ── Text input shorthand ────────────────────────────────────────────

interface TextFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}

export const TextField = ({ label, required, error, value, onChange, placeholder, type = "text" }: TextFieldProps) => (
  <Field label={label} required={required} error={error}>
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="bg-background"
    />
  </Field>
);

// ── Textarea shorthand ──────────────────────────────────────────────

export const TextAreaField = ({ label, required, error, value, onChange, placeholder, rows = 4 }: TextFieldProps & { rows?: number }) => (
  <Field label={label} required={required} error={error}>
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="bg-background resize-none"
    />
  </Field>
);

// ── Select shorthand ────────────────────────────────────────────────

export const SelectField = ({ label, required, error, value, onChange, placeholder, options }: {
  label: string; required?: boolean; error?: string; value: string; onChange: (v: string) => void; placeholder?: string; options: readonly string[];
}) => (
  <Field label={label} required={required} error={error}>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="bg-background">
        <SelectValue placeholder={placeholder || "Select..."} />
      </SelectTrigger>
      <SelectContent>
        {options.map((o) => (
          <SelectItem key={o} value={o}>{o}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </Field>
);

// ── Form wrapper ────────────────────────────────────────────────────

interface FormShellProps {
  subtitle: string;
  title: string;
  description: string;
  submitted: boolean;
  submitting?: boolean;
  submittingLabel?: string;
  successMessage?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
  children: ReactNode;
}

export const FormShell = ({ subtitle, title, description, submitted, submitting, submittingLabel, successMessage, onSubmit, children }: FormShellProps) => {
  if (submitted) {
    return (
      <div className="bg-card border border-olive/20 rounded p-8 md:p-12 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-olive/10 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-olive" />
        </div>
        <h3 className="font-display text-2xl text-foreground">Inquiry Received</h3>
        <p className="text-body text-muted-foreground max-w-md mx-auto">
          {successMessage || "Thank you. Our export team will respond within 24 business hours with a tailored proposal."}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-10 space-y-3">
        <p className="text-subheading text-gold">{subtitle}</p>
        <h2 className="text-display-sm text-foreground">{title}</h2>
        <p className="text-body text-muted-foreground max-w-lg mx-auto">{description}</p>
      </div>

      <form onSubmit={onSubmit} className="bg-card border border-border rounded p-6 md:p-10 space-y-6" noValidate>
        {children}

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-border">
          <p className="text-caption">
            By submitting, you agree to our privacy policy. We never share your data.
          </p>
          <Button type="submit" disabled={submitting} className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase text-xs tracking-widest px-8 h-12 shrink-0">
            {submitting ? (submittingLabel ?? "Sending…") : "Submit Inquiry"}
            <Send className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    </div>
  );
};

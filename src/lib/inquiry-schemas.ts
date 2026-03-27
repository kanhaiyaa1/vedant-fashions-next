import { z } from "zod";

// ── Shared fields ───────────────────────────────────────────────────

const name = z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters");
const company = z.string().trim().min(1, "Company name is required").max(150, "Company name must be under 150 characters");
const email = z.string().trim().email("Please enter a valid email address").max(255, "Email must be under 255 characters");
const phone = z.string().trim().max(30, "Phone number too long").optional().or(z.literal(""));
const message = z.string().trim().max(2000, "Message must be under 2,000 characters").optional().or(z.literal(""));

export const countries = [
  "Germany", "France", "Italy", "Spain", "Netherlands",
  "Poland", "United Kingdom", "Russia", "Belgium",
  "Austria", "Switzerland", "Sweden", "Denmark",
  "Norway", "Finland", "Portugal", "Czech Republic", "Other",
] as const;

const country = z.string().min(1, "Please select a country");

export const productInterests = [
  "Woven Blouses", "Cotton Dresses", "Linen Shirts", "Resort Wear",
  "Private Label", "OEM Production", "Fabric Only", "Full Catalogue",
] as const;

const productInterest = z.string().optional().or(z.literal(""));

const quantity = z.string().trim().max(50, "Quantity description too long").optional().or(z.literal(""));

// ── General Inquiry ─────────────────────────────────────────────────

export const generalInquirySchema = z.object({
  name,
  company,
  email,
  phone,
  country,
  productInterest,
  message: z.string().trim().min(1, "Please describe your inquiry").max(2000, "Message must be under 2,000 characters"),
});
export type GeneralInquiryData = z.infer<typeof generalInquirySchema>;

// ── Product Inquiry ─────────────────────────────────────────────────

export const productInquirySchema = z.object({
  name,
  company,
  email,
  phone,
  country,
  productInterest: z.string().min(1, "Please select a product category"),
  quantity: z.string().trim().min(1, "Please specify the quantity").max(50),
  targetDate: z.string().optional().or(z.literal("")),
  colorRequirements: z.string().trim().max(500, "Too long").optional().or(z.literal("")),
  message,
});
export type ProductInquiryData = z.infer<typeof productInquirySchema>;

// ── Bulk Order ──────────────────────────────────────────────────────

export const bulkOrderSchema = z.object({
  name,
  company,
  email,
  phone,
  country,
  productInterest: z.string().min(1, "Please select a product category"),
  quantity: z.string().trim().min(1, "Please specify the order quantity").max(50),
  targetDate: z.string().min(1, "Please specify a delivery date"),
  incoterm: z.string().min(1, "Please select an Incoterm"),
  shippingPort: z.string().trim().max(100).optional().or(z.literal("")),
  annualVolume: z.string().trim().max(100).optional().or(z.literal("")),
  message,
});
export type BulkOrderData = z.infer<typeof bulkOrderSchema>;

// ── Private Label ───────────────────────────────────────────────────

export const privateLabelSchema = z.object({
  name,
  company,
  email,
  phone,
  country,
  brandName: z.string().trim().min(1, "Brand name is required").max(100),
  productInterest: z.string().min(1, "Please select a product category"),
  quantity: z.string().trim().min(1, "Please specify the quantity").max(50),
  hasTechPack: z.string().min(1, "Please indicate if you have a tech pack"),
  labelingNeeds: z.string().trim().max(500).optional().or(z.literal("")),
  targetPrice: z.string().trim().max(100).optional().or(z.literal("")),
  message,
});
export type PrivateLabelData = z.infer<typeof privateLabelSchema>;

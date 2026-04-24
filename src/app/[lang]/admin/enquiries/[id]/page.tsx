import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import StatusForm from "./StatusForm";
import ReplyForm from "./ReplyForm";

interface EnquiryDetailPageProps {
  params: Promise<{ lang: string; id: string }>;
}

export async function generateMetadata({ params }: EnquiryDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  return { title: `Enquiry ${id.slice(0, 8)} | Admin | Vedant Fashion` };
}

const STATUS_COLORS: Record<string, string> = {
  new: "bg-red-100 text-red-700",
  read: "bg-yellow-100 text-yellow-700",
  replied: "bg-green-100 text-green-700",
  closed: "bg-gray-200 text-gray-600",
};

function Field({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <div className="space-y-0.5">
      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
      <p className="text-sm text-gray-200">{value}</p>
    </div>
  );
}

export default async function EnquiryDetailPage({ params }: EnquiryDetailPageProps) {
  const { lang, id } = await params;
  const supabase = await createClient();

  const { data: enq } = await supabase
    .from("enquiries")
    .select("*")
    .eq("id", id)
    .single();

  if (!enq) notFound();

  const { data: buyer } = await supabase
    .from("buyers")
    .select("full_name, company, country, phone, email")
    .eq("id", enq.buyer_id)
    .single();

  const displayName = enq.name ?? buyer?.full_name ?? "Unknown";
  const displayCompany = enq.company ?? buyer?.company ?? "Unknown";
  const displayEmail = enq.email ?? buyer?.email ?? "";
  const displayPhone = enq.phone ?? buyer?.phone ?? "";
  const displayCountry = enq.country ?? buyer?.country ?? "";

  return (
    <div className="p-6 md:p-10 max-w-screen-xl space-y-6">
      {/* Back + header */}
      <div className="flex items-center gap-4">
        <Link
          href={`/${lang}/admin/enquiries`}
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Enquiries
        </Link>
      </div>

      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold text-white">{displayName}</h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {displayCompany} · {displayCountry}
          </p>
        </div>
        <span
          className={`text-xs font-medium px-3 py-1.5 rounded-full capitalize ${
            STATUS_COLORS[enq.status] ?? "bg-gray-200 text-gray-600"
          }`}
        >
          {enq.status ?? "new"}
        </span>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* LEFT — Enquiry details */}
        <div className="space-y-6">
          {/* Contact details */}
          <div className="bg-gray-900 rounded-lg p-6 space-y-4">
            <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest border-b border-gray-700 pb-3">
              Contact Details
            </h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <Field label="Name" value={displayName} />
              <Field label="Company" value={displayCompany} />
              <Field label="Email" value={displayEmail} />
              <Field label="Phone" value={displayPhone} />
              <Field label="Country" value={displayCountry} />
              <Field label="Submitted" value={
                enq.created_at
                  ? new Date(enq.created_at).toLocaleString("en-GB", {
                      day: "2-digit", month: "short", year: "numeric",
                      hour: "2-digit", minute: "2-digit",
                    })
                  : null
              } />
            </div>
          </div>

          {/* Enquiry details */}
          <div className="bg-gray-900 rounded-lg p-6 space-y-4">
            <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest border-b border-gray-700 pb-3">
              Enquiry Details
            </h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <Field label="Form Type" value={enq.form_type?.replace("_", " ")} />
              <Field label="Product Interest" value={enq.product_interest} />
              <Field label="Quantity" value={enq.quantity} />
              <Field label="Annual Volume" value={enq.annual_volume} />
              <Field label="Incoterm" value={enq.incoterm} />
              <Field label="Shipping Port" value={enq.shipping_port} />
            </div>

            {enq.message && (
              <div className="space-y-1.5 pt-2 border-t border-gray-800">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Message</p>
                <p className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {enq.message}
                </p>
              </div>
            )}
          </div>

          {/* Status change */}
          <div className="bg-gray-900 rounded-lg p-6 space-y-4">
            <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest border-b border-gray-700 pb-3">
              Update Status
            </h2>
            <StatusForm id={enq.id} current={enq.status ?? "new"} />
          </div>
        </div>

        {/* RIGHT — Reply panel */}
        <div className="bg-gray-900 rounded-lg p-6 space-y-4">
          <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest border-b border-gray-700 pb-3">
            Reply
          </h2>
          <ReplyForm
            id={enq.id}
            buyerName={displayName}
            buyerEmail={displayEmail}
            buyerCompany={displayCompany}
            existingReply={enq.reply_text}
            repliedAt={enq.replied_at}
          />
        </div>
      </div>
    </div>
  );
}

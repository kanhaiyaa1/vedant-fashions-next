import { Metadata } from "next";
import ResetPasswordForm from "./ResetPasswordForm";

export const metadata: Metadata = {
  title: "Reset Password | Vedant Fashion",
};

interface ResetPasswordPageProps {
  params: Promise<{ lang: string }>;
}

export default async function ResetPasswordPage({ params }: ResetPasswordPageProps) {
  const { lang } = await params;
  return <ResetPasswordForm locale={lang} />;
}

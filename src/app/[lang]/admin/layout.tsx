import { redirect } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import AdminNav from "./AdminNav";

interface AdminLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function AdminLayout({ children, params }: AdminLayoutProps) {
  const { lang } = await params;
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/${lang}/login`);
  }

  const { data: admin } = await supabase
    .from("admins")
    .select("id")
    .eq("id", user.id)
    .single();

  if (!admin) {
    redirect(`/${lang}/login`);
  }

  return (
    <div className="min-h-screen flex bg-gray-950">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:w-64 flex-col bg-gray-900 text-white shrink-0 fixed inset-y-0 left-0 z-30">
        <AdminNav lang={lang} email={user.email ?? ""} />
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 inset-x-0 z-30 bg-gray-900 text-white px-4 h-14 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Image
            src="/images/Vedant-Fashion-logo.png"
            alt="Vedant Fashion"
            width={120}
            height={36}
            className="h-8 w-auto object-contain brightness-0 invert"
          />
          <span className="text-gray-400 text-xs">Admin</span>
        </div>
        <p className="text-xs text-gray-400 truncate max-w-[180px]">{user.email}</p>
      </div>

      {/* Main content */}
      <main className="flex-1 md:ml-64 min-h-screen bg-gray-950 text-white pt-14 md:pt-0">
        {children}
      </main>
    </div>
  );
}

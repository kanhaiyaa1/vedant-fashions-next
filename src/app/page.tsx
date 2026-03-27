import { redirect } from "next/navigation";

// Root "/" redirects to the default English locale
export default function RootPage() {
  redirect("/en");
}

import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحة تسجيل الدخول إلى Next.js | TailAdmin - قالب لوحة تحكم Next.js",
  description: "هذا قالب لوحة تحكم TailAdmin لصفحة تسجيل الدخول باستخدام Next.js",
};

export default function SignIn() {
  return <SignInForm />;
}

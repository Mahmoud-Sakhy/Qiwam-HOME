import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحة التسجيل في Next.js | TailAdmin - قالب لوحة تحكم Next.js",
  description: "هذا قالب لوحة تحكم TailAdmin لصفحة التسجيل في Next.js",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}

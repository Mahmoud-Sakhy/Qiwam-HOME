import Calendar from "@/components/calendar/Calendar";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "تقويم Next.js | TailAdmin - قالب لوحة تحكم Next.js",
  description:
    "هذه صفحة تقويم Next.js لقالب لوحة تحكم TailAdmin Tailwind CSS",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Calendar" />
      <Calendar />
    </div>
  );
}

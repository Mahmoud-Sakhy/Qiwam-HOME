import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ResponsiveImage from "@/components/ui/images/ResponsiveImage";
import ThreeColumnImageGrid from "@/components/ui/images/ThreeColumnImageGrid";
import TwoColumnImageGrid from "@/components/ui/images/TwoColumnImageGrid";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "صور Next.js | TailAdmin - قالب لوحة تحكم Next.js",
  description:
    "هذه صفحة صور Next.js الخاصة بـ TailAdmin - قالب لوحة تحكم إدارة CSS لـ Next.js Tailwind",
  // other metadata
};

export default function Images() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Images" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="صورة متجاوبة">
          <ResponsiveImage />
        </ComponentCard>
        <ComponentCard title="صورة في شبكة ثنائية">
          <TwoColumnImageGrid />
        </ComponentCard>
        <ComponentCard title="صورة في شبكة ثلاثية">
          <ThreeColumnImageGrid />
        </ComponentCard>
      </div>
    </div>
  );
}

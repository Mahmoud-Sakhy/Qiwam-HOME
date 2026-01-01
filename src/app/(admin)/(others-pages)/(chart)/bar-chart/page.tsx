import BarChartOne from "@/components/charts/bar/BarChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "مخطط شريطي Next.js | TailAdmin - قالب لوحة تحكم Next.js",
  description:
    "هذه صفحة مخطط شريطي لـ Next.js في TailAdmin - قالب لوحة تحكم إدارة CSS لـ Next.js Tailwind",
};

export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Bar Chart" />
      <div className="space-y-6">
        <ComponentCard title="Bar Chart 1">
          <BarChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}

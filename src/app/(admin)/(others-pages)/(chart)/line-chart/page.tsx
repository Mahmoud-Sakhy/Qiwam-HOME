import LineChartOne from "@/components/charts/line/LineChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "مخطط خطي Next.js | TailAdmin - قالب لوحة تحكم Next.js",
  description:
    "هذه صفحة مخطط خطي لـ Next.js في TailAdmin - قالب لوحة تحكم إدارة CSS لـ Next.js Tailwind",
};
export default function LineChart() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Line Chart" />
      <div className="space-y-6">
        <ComponentCard title="Line Chart 1">
          <LineChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}

import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Alert from "@/components/ui/alert/Alert";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "تنبيهات Next.js | TailAdmin - قالب لوحة تحكم Next.js",
  description:
    "هذه صفحة التنبيهات لـ Next.js في TailAdmin - قالب لوحة تحكم Next.js باستخدام Tailwind CSS",
  // بيانات وصفية أخرى
};

export default function Alerts() {
  return (
    <div>
      <PageBreadcrumb pageTitle="التنبيهات" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="تنبيه النجاح">
          <Alert
            variant="success"
            title="رسالة نجاح"
            message="كن حذرًا عند تنفيذ هذا الإجراء."
            showLink={true}
            linkHref="/"
            linkText="تعرف على المزيد"
          />
          <Alert
            variant="success"
            title="رسالة نجاح"
            message="كن حذرًا عند تنفيذ هذا الإجراء."
            showLink={false}
          />
        </ComponentCard>
        
        <ComponentCard title="تنبيه التحذير">
          <Alert
            variant="warning"
            title="رسالة تحذير"
            message="كن حذرًا عند تنفيذ هذا الإجراء."
            showLink={true}
            linkHref="/"
            linkText="تعرف على المزيد"
          />
          <Alert
            variant="warning"
            title="رسالة تحذير"
            message="كن حذرًا عند تنفيذ هذا الإجراء."
            showLink={false}
          />
        </ComponentCard>
        
        <ComponentCard title="تنبيه الخطأ">
          <Alert
            variant="error"
            title="رسالة خطأ"
            message="كن حذرًا عند تنفيذ هذا الإجراء."
            showLink={true}
            linkHref="/"
            linkText="تعرف على المزيد"
          />
          <Alert
            variant="error"
            title="رسالة خطأ"
            message="كن حذرًا عند تنفيذ هذا الإجراء."
            showLink={false}
          />
        </ComponentCard>
        
        <ComponentCard title="تنبيه المعلومات">
          <Alert
            variant="info"
            title="رسالة معلومات"
            message="كن حذرًا عند تنفيذ هذا الإجراء."
            showLink={true}
            linkHref="/"
            linkText="تعرف على المزيد"
          />
          <Alert
            variant="info"
            title="رسالة معلومات"
            message="كن حذرًا عند تنفيذ هذا الإجراء."
            showLink={false}
          />
        </ComponentCard>
      </div>
    </div>
  );
}
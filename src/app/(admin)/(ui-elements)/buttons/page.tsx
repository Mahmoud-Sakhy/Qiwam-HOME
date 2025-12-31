import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Button from "@/components/ui/button/Button";
import { BoxIcon } from "@/icons";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "الأزرار Next.js | TailAdmin - قالب لوحة تحكم Next.js",
  description:
    "هذه صفحة الأزرار لـ Next.js في TailAdmin - قالب لوحة تحكم Next.js باستخدام Tailwind CSS",
};

export default function Buttons() {
  return (
    <div>
      <PageBreadcrumb pageTitle="الأزرار" />
      <div className="space-y-5 sm:space-y-6">
        {/* زر أساسي */}
        <ComponentCard title="زر أساسي">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary">
              نص الزر
            </Button>
            <Button size="md" variant="primary">
              نص الزر
            </Button>
          </div>
        </ComponentCard>
        
        {/* زر أساسي مع أيقونة يسارية */}
        <ComponentCard title="زر أساسي مع أيقونة يسارية">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary" startIcon={<BoxIcon />}>
              نص الزر
            </Button>
            <Button size="md" variant="primary" startIcon={<BoxIcon />}>
              نص الزر
            </Button>
          </div>
        </ComponentCard>
        
        {/* زر أساسي مع أيقونة يمينية */}
        <ComponentCard title="زر أساسي مع أيقونة يمينية">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary" endIcon={<BoxIcon />}>
              نص الزر
            </Button>
            <Button size="md" variant="primary" endIcon={<BoxIcon />}>
              نص الزر
            </Button>
          </div>
        </ComponentCard>
        
        {/* زر ثانوي */}
        <ComponentCard title="زر ثانوي">
          <div className="flex items-center gap-5">
            {/* زر مخطط */}
            <Button size="sm" variant="outline">
              نص الزر
            </Button>
            <Button size="md" variant="outline">
              نص الزر
            </Button>
          </div>
        </ComponentCard>
        
        {/* زر مخطط مع أيقونة يسارية */}
        <ComponentCard title="زر مخطط مع أيقونة يسارية">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="outline" startIcon={<BoxIcon />}>
              نص الزر
            </Button>
            <Button size="md" variant="outline" startIcon={<BoxIcon />}>
              نص الزر
            </Button>
          </div>
        </ComponentCard>
        
        {/* زر مخطط مع أيقونة يمينية */}
        <ComponentCard title="زر مخطط مع أيقونة يمينية">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="outline" endIcon={<BoxIcon />}>
              نص الزر
            </Button>
            <Button size="md" variant="outline" endIcon={<BoxIcon />}>
              نص الزر
            </Button>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
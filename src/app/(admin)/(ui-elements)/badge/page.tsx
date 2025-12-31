import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Badge from "@/components/ui/badge/Badge";
import { PlusIcon } from "@/icons";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "الشارات Next.js | TailAdmin - قالب لوحة تحكم Next.js",
  description:
    "هذه صفحة الشارات لـ Next.js في TailAdmin - قالب لوحة تحكم Next.js باستخدام Tailwind CSS",
  // بيانات وصفية أخرى
};

export default function BadgePage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="الشارات" />
      <div className="space-y-5 sm:space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              بخلفية فاتحة
            </h3>
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              {/* نوع فاتح */}
              <Badge variant="light" color="primary">
                أساسي
              </Badge>
              <Badge variant="light" color="success">
                نجاح
              </Badge>{" "}
              <Badge variant="light" color="error">
                خطأ
              </Badge>{" "}
              <Badge variant="light" color="warning">
                تحذير
              </Badge>{" "}
              <Badge variant="light" color="info">
                معلومات
              </Badge>
              <Badge variant="light" color="light">
                فاتح
              </Badge>
              <Badge variant="light" color="dark">
                داكن
              </Badge>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              بخلفية صلبة
            </h3>
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              {/* نوع صلب */}
              <Badge variant="solid" color="primary">
                أساسي
              </Badge>
              <Badge variant="solid" color="success">
                نجاح
              </Badge>{" "}
              <Badge variant="solid" color="error">
                خطأ
              </Badge>{" "}
              <Badge variant="solid" color="warning">
                تحذير
              </Badge>{" "}
              <Badge variant="solid" color="info">
                معلومات
              </Badge>
              <Badge variant="solid" color="light">
                فاتح
              </Badge>
              <Badge variant="solid" color="dark">
                داكن
              </Badge>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              خلفية فاتحة مع أيقونة يسارية
            </h3>
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              <Badge variant="light" color="primary" startIcon={<PlusIcon />}>
                أساسي
              </Badge>
              <Badge variant="light" color="success" startIcon={<PlusIcon />}>
                نجاح
              </Badge>{" "}
              <Badge variant="light" color="error" startIcon={<PlusIcon />}>
                خطأ
              </Badge>{" "}
              <Badge variant="light" color="warning" startIcon={<PlusIcon />}>
                تحذير
              </Badge>{" "}
              <Badge variant="light" color="info" startIcon={<PlusIcon />}>
                معلومات
              </Badge>
              <Badge variant="light" color="light" startIcon={<PlusIcon />}>
                فاتح
              </Badge>
              <Badge variant="light" color="dark" startIcon={<PlusIcon />}>
                داكن
              </Badge>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              خلفية صلبة مع أيقونة يسارية
            </h3>
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              <Badge variant="solid" color="primary" startIcon={<PlusIcon />}>
                أساسي
              </Badge>
              <Badge variant="solid" color="success" startIcon={<PlusIcon />}>
                نجاح
              </Badge>{" "}
              <Badge variant="solid" color="error" startIcon={<PlusIcon />}>
                خطأ
              </Badge>{" "}
              <Badge variant="solid" color="warning" startIcon={<PlusIcon />}>
                تحذير
              </Badge>{" "}
              <Badge variant="solid" color="info" startIcon={<PlusIcon />}>
                معلومات
              </Badge>
              <Badge variant="solid" color="light" startIcon={<PlusIcon />}>
                فاتح
              </Badge>
              <Badge variant="solid" color="dark" startIcon={<PlusIcon />}>
                داكن
              </Badge>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              خلفية فاتحة مع أيقونة يمينية
            </h3>
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              <Badge variant="light" color="primary" endIcon={<PlusIcon />}>
                أساسي
              </Badge>
              <Badge variant="light" color="success" endIcon={<PlusIcon />}>
                نجاح
              </Badge>{" "}
              <Badge variant="light" color="error" endIcon={<PlusIcon />}>
                خطأ
              </Badge>{" "}
              <Badge variant="light" color="warning" endIcon={<PlusIcon />}>
                تحذير
              </Badge>{" "}
              <Badge variant="light" color="info" endIcon={<PlusIcon />}>
                معلومات
              </Badge>
              <Badge variant="light" color="light" endIcon={<PlusIcon />}>
                فاتح
              </Badge>
              <Badge variant="light" color="dark" endIcon={<PlusIcon />}>
                داكن
              </Badge>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="px-6 py-5">
            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
              خلفية صلبة مع أيقونة يمينية
            </h3>
          </div>
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 xl:p-10">
            <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
              <Badge variant="solid" color="primary" endIcon={<PlusIcon />}>
                أساسي
              </Badge>
              <Badge variant="solid" color="success" endIcon={<PlusIcon />}>
                نجاح
              </Badge>{" "}
              <Badge variant="solid" color="error" endIcon={<PlusIcon />}>
                خطأ
              </Badge>{" "}
              <Badge variant="solid" color="warning" endIcon={<PlusIcon />}>
                تحذير
              </Badge>{" "}
              <Badge variant="solid" color="info" endIcon={<PlusIcon />}>
                معلومات
              </Badge>
              <Badge variant="solid" color="light" endIcon={<PlusIcon />}>
                فاتح
              </Badge>
              <Badge variant="solid" color="dark" endIcon={<PlusIcon />}>
                داكن
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
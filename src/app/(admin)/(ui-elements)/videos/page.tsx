import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import VideosExample from "@/components/ui/video/VideosExample";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "فيديوهات Next.js | TailAdmin - قالب لوحة تحكم Next.js",
  description:
    "هذه صفحة فيديوهات Next.js الخاصة بـ TailAdmin - قالب لوحة تحكم إدارة CSS لـ Next.js Tailwind",
};

export default function VideoPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Videos" />

      <VideosExample />
    </div>
  );
}

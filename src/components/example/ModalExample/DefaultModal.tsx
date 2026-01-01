"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";

import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button";
import { useModal } from "@/hooks/useModal";

export default function DefaultModal() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <div>
      <ComponentCard title="النافذة المنبثقة الافتراضية">
        <Button size="sm" onClick={openModal}>
          فتح النافذة المنبثقة
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          className="max-w-[600px] p-5 lg:p-10"
        >
          <h4 className="font-semibold text-gray-800 mb-7 text-title-sm dark:text-white/90">
            عنوان النافذة المنبثقة
          </h4>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </p>
          <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى
            زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية.
          </p>
          <div className="flex items-center justify-end w-full gap-3 mt-8">
            <Button size="sm" variant="outline" onClick={closeModal}>
              إغلاق
            </Button>
            <Button size="sm" onClick={handleSave}>
              حفظ التغييرات
            </Button>
          </div>
        </Modal>
      </ComponentCard>
    </div>
  );
}
"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import { useModal } from "@/hooks/useModal";

export default function FormInModal() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <ComponentCard title="نموذج في النافذة المنبثقة">
      <Button size="sm" onClick={openModal}>
        فتح النافذة المنبثقة
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[584px] p-5 lg:p-10"
      >
        <form className="">
          <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
            المعلومات الشخصية
          </h4>

          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="col-span-1">
              <Label>الاسم الأول</Label>
              <Input type="text" placeholder="أحمد" />
            </div>

            <div className="col-span-1">
              <Label>اسم العائلة</Label>
              <Input type="text" placeholder="محمد" />
            </div>

            <div className="col-span-1">
              <Label>البريد الإلكتروني</Label>
              <Input type="email" placeholder="ahmed.mohamed@example.com" />
            </div>

            <div className="col-span-1">
              <Label>الهاتف</Label>
              <Input type="text" placeholder="+٩٦٦ ٥٠٠٠٠٠٠٠٠" />
            </div>

            <div className="col-span-1 sm:col-span-2">
              <Label>نبذة عنك</Label>
              <Input type="text" placeholder="مدير فريق" />
            </div>
          </div>

          <div className="flex items-center justify-end w-full gap-3 mt-6">
            <Button size="sm" variant="outline" onClick={closeModal}>
              إغلاق
            </Button>
            <Button size="sm" onClick={handleSave}>
              حفظ التغييرات
            </Button>
          </div>
        </form>
      </Modal>
    </ComponentCard>
  );
}
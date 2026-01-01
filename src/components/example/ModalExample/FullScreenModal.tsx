"use client";
import { useModal } from "@/hooks/useModal";
import ComponentCard from "../../common/ComponentCard";

import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";

export default function FullScreenModal() {
  const {
    isOpen: isFullscreenModalOpen,
    openModal: openFullscreenModal,
    closeModal: closeFullscreenModal,
  } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeFullscreenModal();
  };
  return (
    <ComponentCard title="النافذة المنبثقة ملء الشاشة">
      <Button size="sm" onClick={openFullscreenModal}>
        فتح النافذة المنبثقة
      </Button>
      <Modal
        isOpen={isFullscreenModalOpen}
        onClose={closeFullscreenModal}
        isFullscreen={true}
        showCloseButton={true}
      >
        <div className="fixed top-0 left-0 flex flex-col justify-between w-full h-screen p-6 overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-900 lg:p-10">
          <div>
            <h4 className="font-semibold text-gray-800 mb-7 text-title-sm dark:text-white/90">
              عنوان النافذة المنبثقة
            </h4>
            <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </p>
            <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
              إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى
              زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
              لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث
              يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع.
            </p>
            <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
              ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل
              الشكل كاملاً.
            </p>
          </div>
          <div className="flex items-center justify-end w-full gap-3 mt-8">
            <Button size="sm" variant="outline" onClick={closeFullscreenModal}>
              إغلاق
            </Button>
            <Button size="sm" onClick={handleSave}>
              حفظ التغييرات
            </Button>
          </div>
        </div>
      </Modal>
    </ComponentCard>
  );
}
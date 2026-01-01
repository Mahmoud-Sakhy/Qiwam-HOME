"use client";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import TextArea from "../input/TextArea";
import Label from "../Label";

export default function TextAreaInput() {
  const [message, setMessage] = useState("");
  const [messageTwo, setMessageTwo] = useState("");

  return (
    <ComponentCard title="حقل المنطقة النصية (Textarea)">
      <div className="space-y-6" dir="rtl">
        {/* حقل نصي افتراضي */}
        <div>
          <Label>الوصف</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
            placeholder="أدخل وصفًا هنا..."
          />
        </div>

        {/* حقل نصي معطل */}
        <div>
          <Label>الوصف</Label>
          <TextArea
            rows={6}
            disabled
            placeholder="هذا الحقل معطل"
          />
        </div>

        {/* حقل نصي مع خطأ */}
        <div>
          <Label>الوصف</Label>
          <TextArea
            rows={6}
            value={messageTwo}
            error
            onChange={(value) => setMessageTwo(value)}
            hint="الرجاء إدخال رسالة صالحة."
            placeholder="أدخل رسالتك هنا..."
          />
        </div>
      </div>
    </ComponentCard>
  );
}
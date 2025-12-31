"use client";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Input from "../input/InputField";
import Label from "../Label";

export default function InputStates() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  // التحقق من صحة البريد الإلكتروني
  const validateEmail = (value: string) => {
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setError(!isValidEmail);
    return isValidEmail;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  return (
    <ComponentCard
      title="حالات الإدخال"
      desc="أنماط التحقق من الصحة لحالات الخطأ والنجاح والتعطيل في عناصر النموذج."
    >
      <div className="space-y-5 sm:space-y-6" dir="rtl">
        {/* حقل إدخال مع خطأ */}
        <div>
          <Label>البريد الإلكتروني</Label>
          <Input
            type="email"
            defaultValue={email}
            error={error}
            onChange={handleEmailChange}
            placeholder="أدخل بريدك الإلكتروني"
            hint={error ? "هذا عنوان بريد إلكتروني غير صالح." : ""}
          />
        </div>

        {/* حقل إدخال ناجح */}
        <div>
          <Label>البريد الإلكتروني</Label>
          <Input
            type="email"
            defaultValue={email}
            success={!error && email !== ""}
            onChange={handleEmailChange}
            placeholder="أدخل بريدك الإلكتروني"
            hint={!error && email !== "" ? "بريد إلكتروني صالح!" : ""}
          />
        </div>

        {/* حقل إدخال معطل */}
        <div>
          <Label>البريد الإلكتروني</Label>
          <Input
            type="text"
            defaultValue="disabled@example.com"
            disabled={true}
            placeholder="بريد إلكتروني معطل"
            hint="هذا الحقل معطل."
          />
        </div>
      </div>
    </ComponentCard>
  );
}
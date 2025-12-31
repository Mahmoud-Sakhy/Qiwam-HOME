"use client";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Radio from "../input/Radio";

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = useState<string>("option2");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <ComponentCard title="أزرار الراديو">
      <div className="flex flex-wrap items-center gap-8" dir="rtl">
        <Radio
          id="radio1"
          name="group1"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleRadioChange}
          label="افتراضي"
        />
        <Radio
          id="radio2"
          name="group1"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleRadioChange}
          label="محدد"
        />
        <Radio
          id="radio3"
          name="group1"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={handleRadioChange}
          label="معطل"
          disabled={true}
        />
      </div>
    </ComponentCard>
  );
}
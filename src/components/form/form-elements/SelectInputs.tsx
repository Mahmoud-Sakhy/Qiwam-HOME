"use client";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";
import MultiSelect from "../MultiSelect";
import { ChevronDownIcon } from "@/icons";

export default function SelectInputs() {
  const options = [
    { value: "marketing", label: "التسويق" },
    { value: "template", label: "القوالب" },
    { value: "development", label: "التطوير" },
  ];

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = (value: string) => {
    console.log("القيمة المحددة:", value);
  };

  const multiOptions = [
    { value: "1", text: "الخيار الأول", selected: false },
    { value: "2", text: "الخيار الثاني", selected: false },
    { value: "3", text: "الخيار الثالث", selected: false },
    { value: "4", text: "الخيار الرابع", selected: false },
    { value: "5", text: "الخيار الخامس", selected: false },
  ];

  return (
    <ComponentCard title="حقول الاختيار">
      <div className="space-y-6" dir="rtl">
        <div>
          <Label>حقل اختيار واحد</Label>
          <div className="relative">
            <Select
              options={options}
              placeholder="اختر خيارًا"
              onChange={handleSelectChange}
              className="dark:bg-dark-900"
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none left-3 top-1/2 dark:text-gray-400">
              <ChevronDownIcon />
            </span>
          </div>
        </div>

        <div>
          <Label>حقل اختيار متعدد</Label>
          <div className="relative">
            <MultiSelect
              label="خيارات الاختيار المتعدد"
              options={multiOptions}
              defaultSelected={["1", "3"]}
              onChange={(values) => setSelectedValues(values)}
            />
          </div>
          <p className="sr-only">
            القيم المحددة: {selectedValues.join("، ")}
          </p>
        </div>
      </div>
    </ComponentCard>
  );
}
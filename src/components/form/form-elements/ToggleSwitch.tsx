"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Switch from "../switch/Switch";

export default function ToggleSwitch() {
  const handleSwitchChange = (checked: boolean) => {
    console.log("حالة المفتاح الآن:", checked ? "تشغيل" : "إيقاف");
  };
  return (
    <ComponentCard title="مفتاح تبديل">
      <div className="flex gap-4">
        <Switch
          label="افتراضي"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch
          label="مفعل"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch label="معطل" disabled={true} />
      </div>{" "}
      <div className="flex gap-4">
        <Switch
          label="افتراضي"
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch
          label="مفعل"
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch label="معطل" disabled={true} color="gray" />
      </div>
    </ComponentCard>
  );
}
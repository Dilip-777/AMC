"use client";
import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import "../ui/styles/datepicker.css";
import { cn } from "../utils/cn";
import { useField } from "formik";

interface FormDateProps {
  label: string;
  name: string;
  className?: string;
  placeholder: string;
  setFieldValue?: (field: string, value: any) => void;
  required?: boolean;
  divClassName?: string;
}

const FormDate = ({
  label,
  name,
  placeholder,
  divClassName,
  className,
  setFieldValue,
  required,
}: FormDateProps) => {
  const [field, meta] = useField(name);
  const isError = Boolean(meta.touched && meta.error);
  const [value, setValue] = useState({
    startDate: field.value || null,
    endDate: field.value || null,
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue.startDate);
    setValue(newValue);
    console.log(field.name, "sldkfjsl");
  };

  useEffect(() => {
    if (setFieldValue) {
      setFieldValue("date", value.startDate || "");
    }
  }, [value]);

  console.log("field", field.value, field.name, "sldkfjsl");

  return (
    <div className={cn("mb-4.5", divClassName)}>
      <label className="mb-1.5 block text-white">
        {label} {required && <span className="text-meta-1">*</span>}
      </label>
      <Datepicker
        useRange={false}
        asSingle={true}
        value={value}
        displayFormat="DD/MM/YYYY"
        placeholder={placeholder}
        //   showFooter={true}
        onChange={handleValueChange}
        toggleClassName="absolute right-4 top-[30%]"
        // inputClassName="relative  w-full  rounded border-2  bg-transparent py-3 px-5 outline-none transition  border-form-strokedark focus:border-primary bg-form-input text-white"
        inputClassName={cn(
          "w-full rounded border-2  !bg-transparent py-3 px-5 font-medium outline-none transition   disabled:cursor-default disabled:bg-whiter  bg-form-input ",
          isError
            ? "border-danger"
            : "border-form-strokedark focus:border-primary active:border-primary",
          className
        )}
      />
      {isError && <div className="text-danger text-xs mt-1">{meta.error}</div>}
    </div>
  );
};
export default FormDate;

"use client";
import React, { useEffect, useState } from "react";
import Datepicker, { DateType } from "react-tailwindcss-datepicker";
import "../ui/styles/datepicker.css";
import { cn } from "../utils/cn";
import { Formik, useField } from "formik";

interface FormDateProps {
  label: string;
  startName: string;
  endName: string;
  className?: string;
  placeholder: string;
  handleChange: ({
    startDate,
    endDate,
  }: {
    startDate: DateType | undefined;
    endDate: DateType | undefined;
  }) => void;
  value: { startDate: DateType; endDate: DateType };
  setFieldValue?: (field: string, value: any) => void;
  required?: boolean;
  divClassName?: string;
}

const FormikDateRange = ({
  label,
  startName,
  endName,
  placeholder,
  divClassName,
  className,
  value,
  handleChange,
  required,
}: FormDateProps) => {
  const [field, meta] = useField(startName);
  const [fieldEnd, metaEnd] = useField(endName);
  const isError = Boolean(
    meta.touched && meta.error && metaEnd.touched && metaEnd.error
  );

  console.log(
    "field:",
    field,
    "meta:",
    meta,
    "fieldEnd:",
    fieldEnd,
    "metaEnd:",
    metaEnd
  );

  //   const [value, setValue] = useState({
  //     startDate: field.value || null,
  //     endDate: field.value || null,
  //   });

  //   const handleValueChange = (newValue: any) => {
  //     console.log("newValue:", newValue.startDate);
  //     setValue(newValue);
  //     console.log(field.name, "sldkfjsl");
  //   };

  //   useEffect(() => {
  //     if (setFieldValue) {
  //       setFieldValue("date", value.startDate || "");
  //     }
  //   }, [value]);

  return (
    <div className={cn("", divClassName)}>
      <label className="mb-1.5 block text-white">
        {label} {required && <span className="text-meta-1">*</span>}
      </label>
      <Datepicker
        useRange={true}
        // asSingle={true}
        // showFooter={true}
        value={value}
        displayFormat="DD/MM/YYYY"
        placeholder={placeholder}
        //   showFooter={true}
        onChange={(newValue) =>
          handleChange({
            startDate: newValue?.startDate,
            endDate: newValue?.endDate,
          })
        }
        toggleClassName="absolute right-4 top-[30%] "
        inputClassName={cn(
          "w-full rounded border-2   py-3 px-5 font-medium outline-none transition   disabled:cursor-default disabled:bg-whiter  bg-form-input ",
          isError
            ? "border-danger"
            : "border-form-strokedark focus:border-primary active:border-primary",
          className
        )}
      />
      {isError && <div className="text-danger text-xs mt-1">Required</div>}
    </div>
  );
};
export default FormikDateRange;

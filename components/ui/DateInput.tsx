"use client";
import React, { useState } from "react";
import Datepicker, { DatepickerType } from "react-tailwindcss-datepicker";
import "./styles/datepicker.css";
import { cn } from "../utils/cn";

interface DatePickerProps extends DatepickerType {
  label?: string;
  divClassName?: string;
}

const DatePicker = ({
  label,
  toggleClassName,
  inputClassName,
  containerClassName,
  divClassName,
  ...props
}: DatePickerProps) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className={cn("", divClassName)}>
      {label && <label className="mb-1.5 block text-white">{label}</label>}
      <Datepicker
        toggleClassName={cn(
          "absolute right-4 top-[30%] text-primary",
          toggleClassName
        )}
        inputClassName={cn(
          "relative  w-full  rounded border-2  bg-transparent py-3 px-5 outline-none transition  border-form-strokedark focus:border-primary bg-form-input text-white",
          inputClassName
        )}
        containerClassName={cn(
          "relative z-20 bg-form-input text-black",
          containerClassName
        )}
        {...props}
      />
    </div>
    // <Datepicker
    //   primaryColor="blue"
    //   useRange={false}
    //   asSingle={true}
    //   value={value}
    //   //   showFooter={true}
    //   onChange={handleValueChange}
    //   toggleClassName="absolute right-4 top-[30%] text-primary"
    //   inputClassName="relative  w-full  rounded border-2  bg-transparent py-3 px-5 outline-none transition  border-form-strokedark focus:border-primary bg-form-input text-white"
    //   containerClassName="relative z-20 bg-form-input text-black"
    // />
  );
};
export default DatePicker;

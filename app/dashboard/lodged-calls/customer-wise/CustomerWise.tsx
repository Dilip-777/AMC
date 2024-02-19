"use client";
import Input from "@/components/ui/Input";
import DatePicker from "@/components/ui/DateInput";
import { DateValueType } from "react-tailwindcss-datepicker";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const CustomerWise = () => {
  const [value, setValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  return (
    <>
      <div className="flex md:flex-wrap lg:flex-nowrap gap-6 mx-8 my-4 w-full items-end">
        <Input
          label="Customer Name"
          name="customerName"
          placeholder="Enter Customer Name"
          className="min-w-[250px]"
        />
        <DatePicker
          value={value}
          useRange={false}
          asSingle={false}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          displayFormat="DD/MM/YYYY"
          label="Date Range"
          divClassName="!w-1/3"
          //   inputClassName="w-1/2"
        />
        <Button
          label="Search"
          className="bg-primary text-white h-fit mb-2"
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default CustomerWise;

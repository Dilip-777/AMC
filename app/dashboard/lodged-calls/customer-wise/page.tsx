import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import LodgedCallsTable from "../Table";
import Input from "@/components/ui/Input";
import DatePicker from "@/components/ui/DateInput";
import { DateValueType } from "react-tailwindcss-datepicker";
import CustomerWise from "./CustomerWise";

export const metadata: Metadata = {
  title: "Customer Wise Lodged Calls",
  description: "This is Lodged Calls page",
  // other metadata
};

const LodgedCalls = () => {
  let value: DateValueType = {
    startDate: null,
    endDate: null,
  };
  return (
    <>
      <Breadcrumb pageName="Customer Wise Lodged Calls" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <CustomerWise />
          <LodgedCallsTable />
        </div>
      </div>
    </>
  );
};

export default LodgedCalls;

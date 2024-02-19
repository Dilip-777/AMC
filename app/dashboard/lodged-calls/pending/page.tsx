import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DatePickerOne from "@/components/ui/DateInput";
import LodgedCallsTable from "../Table";

export const metadata: Metadata = {
  title: "Pending Lodged Calls",
  description: "This is Lodged Calls page",
  // other metadata
};

const LodgedCalls = () => {
  return (
    <>
      <Breadcrumb pageName="Pending Lodged Calls" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <LodgedCallsTable />
        </div>
      </div>
    </>
  );
};

export default LodgedCalls;

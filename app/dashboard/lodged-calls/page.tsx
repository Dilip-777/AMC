import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import LodgedCallsTable from "./Table";
import DatePickerOne from "@/components/ui/DateInput";
import Tabs from "./Tabs";

export const metadata: Metadata = {
  title: "Lodged Calls",
  description: "This is Lodged Calls page",
  // other metadata
};

const LodgedCalls = () => {
  return (
    <>
      <Breadcrumb pageName="LodgedCalls" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <Tabs />
        </div>
      </div>
    </>
  );
};

export default LodgedCalls;

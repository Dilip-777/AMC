import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import LodgedCallsForm from "./LodgedCallsForm";
export const metadata: Metadata = {
  title: "Add Lodged Calls",
  description: "This is Lodged Calls page",
  // other metadata
};

const AddLodgedCalls = () => {
  return (
    <>
      <Breadcrumb pageName="Add Lodged Calls" />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <LodgedCallsForm />
        </div>
      </div>
    </>
  );
};

export default AddLodgedCalls;

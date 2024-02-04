import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import ExecutiveForm from "./ExecutiveForm";
export const metadata: Metadata = {
  title: "Add Lodged Calls",
  description: "This is Lodged Calls page",
  // other metadata
};

const AddExecutive = () => {
  return (
    <>
      <Breadcrumb pageName="Add Executive" />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <ExecutiveForm />
        </div>
      </div>
    </>
  );
};

export default AddExecutive;

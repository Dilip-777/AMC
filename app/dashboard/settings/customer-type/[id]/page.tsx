import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import CustomerTypeForm from "./CustomerTypeForm";
export const metadata: Metadata = {
  title: "Add Customers Type",
  description: "This is Customers Type page",
  // other metadata
};

const AddCustomerType = () => {
  return (
    <>
      <Breadcrumb pageName="Add Customers Type" nav={false} />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-full">
          <CustomerTypeForm />
        </div>
      </div>
    </>
  );
};

export default AddCustomerType;

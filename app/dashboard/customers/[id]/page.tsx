import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import CustomerForm from "./CustomerForm";
export const metadata: Metadata = {
  title: "Add Customers",
  description: "This is Customers page",
  // other metadata
};

const AddCustomers = () => {
  return (
    <>
      <Breadcrumb pageName="Add Customers" nav={false} />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <CustomerForm />
        </div>
      </div>
    </>
  );
};

export default AddCustomers;

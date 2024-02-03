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

      {/* <div className="grid grid-cols-2 gap-9 sm:grid-cols-2"> */}
      <div className="flex flex-col gap-9">
        {/* <!-- Contact Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          {/* <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Contact Form
            </h3>
          </div> */}
          <CustomerForm />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default AddCustomers;

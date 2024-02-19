import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import CompanyForm from "./companyForm";
export const metadata: Metadata = {
  title: "Company Information Details",
  description: "This is Customers page",
  // other metadata
};

const AddCustomers = () => {
  return (
    <>
      <Breadcrumb pageName="Company Information Details" nav={false} />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <CompanyForm />
        </div>
      </div>
    </>
  );
};

export default AddCustomers;

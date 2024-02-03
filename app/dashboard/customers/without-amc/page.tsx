import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import CustomerWithoutAMCTable from "./Table";
export const metadata: Metadata = {
  title: "Customers",
  description: "This is Customers page",
  // other metadata
};

const Customers = () => {
  return (
    <>
      <Breadcrumb pageName="Customers" nav={false} />

      <div className="flex flex-col gap-10">
        <CustomerWithoutAMCTable />
      </div>
    </>
  );
};

export default Customers;

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";
import { Customer } from "@/types/package";

import { Metadata } from "next";
import CustomerTable from "./table";
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
        <CustomerTable />
      </div>
    </>
  );
};

export default Customers;

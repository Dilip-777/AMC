import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import CustomerTable from "../../customers/table";
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

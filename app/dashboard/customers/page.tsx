import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import CustomerTable from "./table";
import { db } from "@/db";
import { customers } from "@/db/schema";
export const metadata: Metadata = {
  title: "Customers",
  description: "This is Customers page",
  // other metadata
};

const Customers = async () => {
  const data = await db.select().from(customers);
  return (
    <>
      <Breadcrumb pageName="Customers" nav={false} />

      <div className="flex flex-col gap-10 bg-boxdark border-strokedark">
        <CustomerTable data={data} />
      </div>
    </>
  );
};

export default Customers;

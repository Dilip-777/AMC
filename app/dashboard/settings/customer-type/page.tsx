import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import CustomerTypeTable from "./CustomerTypeTable";
import { db } from "@/db";
import { custtype } from "@/db/schema";
export const metadata: Metadata = {
  title: "Customer Type",
  description: "This is Customers page",
  // other metadata
};

const CustomerType = async () => {
  const data = await db.select().from(custtype);
  return (
    <>
      <Breadcrumb pageName="Customer Type" nav={false} />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <CustomerTypeTable data={data} />
        </div>
      </div>
    </>
  );
};

export default CustomerType;

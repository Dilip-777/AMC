import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import CustomerWithAMCTable from "./Table";
import { db } from "@/db";
import { amc, customers } from "@/db/schema";
import { eq, exists } from "drizzle-orm";
export const metadata: Metadata = {
  title: "Customers",
  description: "This is Customers page",
  // other metadata
};

const Customers = async () => {
  const data = await db
    .select()
    .from(customers)
    .where(
      exists(db.select().from(amc).where(eq(customers.id, amc.customerId)))
    );
  return (
    <>
      <Breadcrumb pageName="Customers With AMC" nav={false} />

      <div className="flex flex-col gap-10">
        <CustomerWithAMCTable data={data} />
      </div>
    </>
  );
};

export default Customers;

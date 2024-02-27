import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import CustomerWithoutAMCTable from "./Table";
import { db } from "@/db";
import { amc, customers } from "@/db/schema";
import { eq, notExists } from "drizzle-orm";
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
      notExists(db.select().from(amc).where(eq(customers.id, amc.customerId)))
    );
  return (
    <>
      <Breadcrumb pageName="Customers Without AMC" nav={false} />

      <div className="flex flex-col gap-10">
        <CustomerWithoutAMCTable data={data} />
      </div>
    </>
  );
};

export default Customers;

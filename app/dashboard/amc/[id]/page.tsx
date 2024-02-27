import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import AMCForm from "./AMCForm";
import { db } from "@/db";
import { customers } from "@/db/schema";
export const metadata: Metadata = {
  title: "Add AMc",
  description: "This is Customers page",
  // other metadata
};

const AddAMC = async () => {
  const data = await db.select().from(customers);
  return (
    <>
      <Breadcrumb pageName="Add AMC" nav={false} />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <AMCForm customers={data} />
        </div>
      </div>
    </>
  );
};

export default AddAMC;

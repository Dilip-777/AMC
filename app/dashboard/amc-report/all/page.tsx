import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import AllAMCTable from "./AllAmcTable";
import { db } from "@/db";

export const metadata: Metadata = {
  title: "All AMC Records",
  description: "This is All AMC Records page",
  // other metadata
};

const AMCRecords = async () => {
  const data = await db.query.amc.findMany({
    with: {
      customer: true,
    },
  });
  return (
    <>
      <Breadcrumb pageName="All AMC Records" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <AllAMCTable data={data} />
        </div>
      </div>
    </>
  );
};

export default AMCRecords;

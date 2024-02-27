import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import AllAMCTable from "../all/AllAmcTable";
import { db } from "@/db";

export const metadata: Metadata = {
  title: "Active AMC",
  description: "This is Active AMC page",
  // other metadata
};

const ActiveAMC = async () => {
  const data = await db.query.amc.findMany({
    with: {
      customer: true,
    },
  });
  return (
    <>
      <Breadcrumb pageName="Active AMC" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <AllAMCTable data={data} />
        </div>
      </div>
    </>
  );
};

export default ActiveAMC;

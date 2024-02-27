import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import AllAMCTable from "../../amc-report/all/AllAmcTable";
import { db } from "@/db";

export const metadata: Metadata = {
  title: "Expired AMC Remainder",
  description: "This is Expired AMC page",
  // other metadata
};

const ExpiredAMC = async () => {
  const data = await db.query.amc.findMany({
    with: {
      customer: true,
    },
  });
  return (
    <>
      <Breadcrumb pageName="Expired AMC Remainder" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <AllAMCTable data={data} />
        </div>
      </div>
    </>
  );
};

export default ExpiredAMC;

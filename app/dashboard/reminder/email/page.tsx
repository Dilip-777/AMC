import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import AllAMCTable from "../../amc-report/all/AllAmcTable";

export const metadata: Metadata = {
  title: "Expired AMC Remainder",
  description: "This is Expired AMC page",
  // other metadata
};

const ExpiredAMC = () => {
  return (
    <>
      <Breadcrumb pageName="Expired AMC Remainder" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <AllAMCTable />
        </div>
      </div>
    </>
  );
};

export default ExpiredAMC;

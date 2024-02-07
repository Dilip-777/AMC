import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import AllAMCTable from "../all/AllAmcTable";

export const metadata: Metadata = {
  title: "Active AMC",
  description: "This is Active AMC page",
  // other metadata
};

const ActiveAMC = () => {
  return (
    <>
      <Breadcrumb pageName="Active AMC" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <AllAMCTable />
        </div>
      </div>
    </>
  );
};

export default ActiveAMC;

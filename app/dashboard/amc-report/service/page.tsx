import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import ServiceAMCTable from "./ServiceAMCTable";

export const metadata: Metadata = {
  title: "Service AMC",
  description: "This is Service AMC page",
  // other metadata
};

const LodgedCalls = () => {
  return (
    <>
      <Breadcrumb pageName="Service AMC" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <ServiceAMCTable />
        </div>
      </div>
    </>
  );
};

export default LodgedCalls;

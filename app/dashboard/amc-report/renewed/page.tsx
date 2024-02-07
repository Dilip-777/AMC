import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import RenewedAMCTabe from "./RenewedTable";

export const metadata: Metadata = {
  title: "Renewed AMC",
  description: "This is Renewed AMC page",
  // other metadata
};

const LodgedCalls = () => {
  return (
    <>
      <Breadcrumb pageName="Renewed AMC" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <RenewedAMCTabe />
        </div>
      </div>
    </>
  );
};

export default LodgedCalls;

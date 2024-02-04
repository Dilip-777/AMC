import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import ExecutiveTable from "./ExecutiveTable";
export const metadata: Metadata = {
  title: "Executive",
  description: "This is Executive page",
  // other metadata
};

const Executive = () => {
  return (
    <>
      <Breadcrumb pageName="Executive" />

      <div className="flex flex-col gap-10">
        <ExecutiveTable />
      </div>
    </>
  );
};

export default Executive;

"use client";

import { useState } from "react";
import LodgedCallsTable from "./Table";
import Pagination from "@/components/ui/Pagination";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState(1);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const tabs = [
    {
      id: 1,
      name: "All Call Logs",
    },
    {
      id: 2,
      name: "Paid Calls",
    },
    {
      id: 3,
      name: "Service Date Calls",
    },
  ];
  return (
    <div>
      <div className="mb-6 flex border-b border-stroke dark:border-strokedark  w-full justify-between">
        {tabs.map((tab) => (
          <p
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`cursor-pointer border-t-[1.5px]  w-full text-center py-4 text-sm font-medium  md:text-base ${
              currentTab === tab.id
                ? " bg-transparent border-secondary text-secondary"
                : "border-transparent bg-black"
            }`}
          >
            {tab.name}
          </p>
        ))}
      </div>
      <div className="mt-6">
        {currentTab === 1 && <LodgedCallsTable />}
        {currentTab === 2 && <LodgedCallsTable />}
        {currentTab === 3 && <LodgedCallsTable />}
      </div>
      <Pagination
        length={50}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        page={page}
        setPage={setPage}
        options={[5, 10, 25]}
      />
      {/* <div className="flex justify-between items-center flex-row-reverse mt-6 p-5 ">
        <div className="flex items-center gap-4">
          <p className="text-sm whitespace-nowrap text-black dark:text-white">
            {rowsPerPage * page + 1} - {rowsPerPage * (page + 1)} of {length}
          </p>
          <select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            className="relative  w-full rounded border-none  bg-transparent p-2 outline-none transition focus:border-primary active:border-primary  dark:bg-form-input dark:focus:border-primary"
          >
            {[5, 10, 25].map((row) => (
              <option key={row} value={row}>
                {row}
              </option>
            ))}
          </select>
          <ToolTip text="Previous" onClick={() => handleChangePage(page - 1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </ToolTip>
          <ToolTip text="Next" onClick={() => handleChangePage(page + 1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </ToolTip>
        </div>
      </div> */}
    </div>
  );
}

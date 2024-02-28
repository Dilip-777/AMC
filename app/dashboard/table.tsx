"use client";

import TableThree from "@/components/Tables/TableThree";
import Pagination from "@/components/ui/Pagination";
import { AMC, Customer } from "@/db/schema";
import { useEffect, useState } from "react";
import moment from "moment";

interface AMCWithCustomer extends AMC {
  customer: Customer;
}

const headCells = [
  { id: "sno", label: "S No", valueGetter: (row: AMCWithCustomer) => row.id },
  {
    id: "amccode",
    label: "AMC Code",
    valueGetter: (row: AMCWithCustomer) => row.code,
  },
  {
    id: "customer",
    label: "Customer Name",
    valueGetter: (row: AMCWithCustomer) => row.customer.name,
  },
  {
    id: "company",
    label: "Company",
    valueGetter: (row: AMCWithCustomer) => row.customer.company,
  },
  {
    id: "contact",
    label: "Contact",
    valueGetter: (row: AMCWithCustomer) => row.customer.mobile,
  },
  {
    id: "amcrage",
    label: "AMC Range",
    valueGetter: (row: AMCWithCustomer) =>
      `${moment(row.startDate).format("DD/MM/YYYY")} - ${moment(
        row.endDate
      ).format("DD/MM/YYYY")}`,
  },
  {
    id: "amcdaysover",
    label: "AMC Days Over",
    valueGetter: (row: AMCWithCustomer) => 15,
  },
];

export default function DashboardTable({
  data,
}: {
  data: (AMC & { customer: Customer })[];
}) {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [amcs, setamcs] = useState(data);
  const [currentTab, setCurrentTab] = useState(1);

  const tabs = [
    {
      id: 1,
      name: "Upcoming 60 Days",
    },
    {
      id: 2,
      name: "Past 60 Days",
    },
  ];

  useEffect(() => {
    if (search === "") {
      setamcs(data);
    } else {
      setamcs(
        data.filter((amc) =>
          amc.code.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, data]);
  const currentDate = new Date();

  // Calculate the current date plus 60 days
  const currentDatePlus60Days = new Date(currentDate);
  currentDatePlus60Days.setDate(currentDate.getDate() + 60);
  return (
    <div className="border-strokedark bg-boxdark">
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
      <div className="flex justify-between items-center mx-8 my-4 ">
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2">
            <svg
              className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                fill=""
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                fill=""
              />
            </svg>
          </button>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Type to search..."
            className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
          />
        </div>
      </div>

      <div className="mt-6">
        {currentTab === 1 && (
          <TableThree
            tableData={amcs.filter((a) => a.endDate > new Date())}
            headCells={headCells}
          />
        )}
        {currentTab === 2 && (
          <TableThree
            tableData={amcs.filter((a) => a.endDate < new Date())}
            headCells={headCells}
          />
        )}
      </div>

      <Pagination
        length={amcs.length}
        options={[10, 20, 30, 40, 50]}
        page={page}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
}

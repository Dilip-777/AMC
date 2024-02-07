"use client";

import TableThree from "@/components/Tables/TableThree";
import ToolTip from "@/components/ui/Tooltip";

const headCells = [
  { id: "sno", label: "S No", valueGetter: (row: any) => 1 },
  {
    id: "code",
    label: "AMC Code (Prev. )",
    valueGetter: (row: any) => row.code,
  },
  {
    id: "type",
    label: "AMC Type",
    valueGetter: (row: any) => row.type,
  },

  {
    id: "customer",
    label: "Customer Name",
    valueGetter: (row: any) => row.customer,
  },

  {
    id: "mobile",
    label: "Mobile No",
    valueGetter: (row: any) => row.mobile,
  },
  {
    id: "amcrange",
    label: "AMC Range",
    valueGetter: (row: any) => row.amcrange,
  },

  {
    id: "renewedCode",
    label: "Renewed (New)",
    valueGetter: (row: any) => row.renewedCode,
  },
];

const tableData = [
  {
    code: "AMC001",
    type: "Annual",
    customer: "John Doe",
    mobile: "9876543210",
    amcrange: "2024-01-01 to 2025-01-01",
    renewedCode: "AMC002",
  },
  {
    code: "AMC002",
    type: "Annual",
    customer: "Jane Smith",
    mobile: "8765432109",
    amcrange: "2023-12-15 to 2024-12-15",
    renewedCode: "AMC003",
  },
  {
    code: "AMC003",
    type: "Bi-Annual",
    customer: "Bob Johnson",
    mobile: "7654321098",
    amcrange: "2024-02-01 to 2025-02-01",
    renewedCode: "AMC004",
  },
  {
    code: "AMC004",
    type: "Annual",
    customer: "Alice Williams",
    mobile: "6543210987",
    amcrange: "2024-03-10 to 2025-03-10",
    renewedCode: "AMC005",
  },
  {
    code: "AMC005",
    type: "Monthly",
    customer: "Charlie Brown",
    mobile: "5432109876",
    amcrange: "2024-04-05 to 2025-04-05",
    renewedCode: "AMC006",
  },
  {
    code: "AMC006",
    type: "Annual",
    customer: "Eve Davis",
    mobile: "4321098765",
    amcrange: "2024-05-20 to 2025-05-20",
    renewedCode: "AMC007",
  },
  {
    code: "AMC007",
    type: "Bi-Annual",
    customer: "Frank Miller",
    mobile: "3210987654",
    amcrange: "2023-11-11 to 2024-11-11",
    renewedCode: "AMC008",
  },
  {
    code: "AMC008",
    type: "Monthly",
    customer: "Grace Taylor",
    mobile: "2109876543",
    amcrange: "2024-06-30 to 2025-06-30",
    renewedCode: "AMC009",
  },
  {
    code: "AMC009",
    type: "Annual",
    customer: "Henry Clark",
    mobile: "1098765432",
    amcrange: "2024-09-15 to 2025-09-15",
    renewedCode: "AMC010",
  },
  {
    code: "AMC010",
    type: "Bi-Annual",
    customer: "Ivy Moore",
    mobile: "0987654321",
    amcrange: "2024-07-02 to 2025-07-02",
    renewedCode: "AMC011",
  },
];

export default function RenewedAMCTabe() {
  return (
    <div>
      <div className="flex justify-between items-center mx-8 my-4">
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
            type="text"
            placeholder="Type to search..."
            className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
          />
        </div>
        <div className="flex gap-10">
          <ToolTip text="Excel">
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
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
              />
            </svg>
          </ToolTip>
          <ToolTip text="PDF">
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </ToolTip>
        </div>
      </div>
      <TableThree tableData={tableData} headCells={headCells} />
    </div>
  );
}

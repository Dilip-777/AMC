"use client";

import TableThree from "@/components/Tables/TableThree";
import ToolTip from "@/components/ui/Tooltip";

const ActionRendered = () => (
  <div className="flex items-center justify-center space-x-3.5">
    <button className="hover:text-primary">
      <svg
        className="fill-current"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
          fill=""
        />
        <path
          d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
          fill=""
        />
      </svg>
    </button>
    <button className="hover:text-primary">
      <svg
        className="fill-current"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
          fill=""
        />
        <path
          d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
          fill=""
        />
        <path
          d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
          fill=""
        />
        <path
          d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
          fill=""
        />
      </svg>
    </button>
  </div>
);

const headCells = [
  { id: "sno", label: "S No", valueGetter: (row: any) => 1 },
  {
    id: "code",
    label: "AMC Code",
    valueGetter: (row: any) => row.code,
  },
  {
    id: "customer",
    label: "Customer",
    valueGetter: (row: any) => row.customer,
  },
  {
    id: "address",
    label: "Address",
    valueGetter: (row: any) => row.address,
  },
  {
    id: "mobile",
    label: "Mobile No",
    valueGetter: (row: any) => row.mobile,
  },
  {
    id: "amcRange",
    label: "AMC Range",
    valueGetter: (row: any) => row.amcRange,
  },
  {
    id: "daysleft",
    label: "Days Left",
    valueGetter: (row: any) => row.daysleft,
  },
  {
    id: "actions",
    label: "Actions",
    actionComponent: <ActionRendered />,
  },
];

const tableData = [
  {
    code: "AMC001",
    customer: "John Doe",
    address: "123 Main St, Cityville",
    mobile: "9876543210",
    amcRange: "2024-01-01 to 2025-01-01",
    daysleft: 30,
  },
  {
    code: "AMC002",
    customer: "Jane Smith",
    address: "456 Oak St, Townsville",
    mobile: "8765432109",
    amcRange: "2023-12-15 to 2024-12-15",
    daysleft: 10,
  },
  {
    code: "AMC003",
    customer: "Bob Johnson",
    address: "789 Maple St, Villageland",
    mobile: "7654321098",
    amcRange: "2024-02-01 to 2025-02-01",
    daysleft: 28,
  },
  {
    code: "AMC004",
    customer: "Alice Williams",
    address: "321 Pine St, Hamletville",
    mobile: "6543210987",
    amcRange: "2024-03-10 to 2025-03-10",
    daysleft: 50,
  },
  {
    code: "AMC005",
    customer: "Charlie Brown",
    address: "654 Cedar St, Countryside",
    mobile: "5432109876",
    amcRange: "2024-04-05 to 2025-04-05",
    daysleft: 70,
  },
  {
    code: "AMC006",
    customer: "Eve Davis",
    address: "987 Birch St, Suburbia",
    mobile: "4321098765",
    amcRange: "2024-05-20 to 2025-05-20",
    daysleft: 15,
  },
  {
    code: "AMC007",
    customer: "Frank Miller",
    address: "654 Elm St, Metropolis",
    mobile: "3210987654",
    amcRange: "2023-11-11 to 2024-11-11",
    daysleft: 5,
  },
  {
    code: "AMC008",
    customer: "Grace Taylor",
    address: "987 Willow St, Citytown",
    mobile: "2109876543",
    amcRange: "2024-06-30 to 2025-06-30",
    daysleft: 45,
  },
  {
    code: "AMC009",
    customer: "Henry Clark",
    address: "321 Spruce St, Urbanville",
    mobile: "1098765432",
    amcRange: "2024-09-15 to 2025-09-15",
    daysleft: 60,
  },
  {
    code: "AMC010",
    customer: "Ivy Moore",
    address: "654 Fir St, Villagetown",
    mobile: "0987654321",
    amcRange: "2024-07-02 to 2025-07-02",
    daysleft: 25,
  },
];

export default function AllAMCTable() {
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
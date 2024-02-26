"use client";

import ToolTip from "./Tooltip";

interface PaginationProps {
  length: number;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  page: number;
  setPage: (page: number) => void;
  options: number[];
}

export default function Pagination({
  length,
  rowsPerPage,
  setRowsPerPage,
  page,
  setPage,
  options,
}: PaginationProps) {
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (newPage: number) => {
    if (newPage < 0 || newPage + 1 > Math.ceil(length / rowsPerPage)) return;
    setPage(newPage);
  };
  return (
    <div className="flex justify-between items-center flex-row-reverse mt-6 p-5 ">
      <div className="flex items-center gap-4">
        <p className="whitespace-nowrap">Rows Per Page: </p>
        <select
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          className="relative  w-full rounded border-none  bg-transparent p-2 outline-none transition focus:border-primary active:border-primary  dark:bg-form-input dark:focus:border-primary"
        >
          {options.map((row) => (
            <option key={row} value={row}>
              {row}
            </option>
          ))}
        </select>
        <p className="whitespace-nowrap ">
          {rowsPerPage * page + 1} -{" "}
          {Math.min(rowsPerPage * (page + 1), length)} of {length}
        </p>

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
    </div>
  );
}

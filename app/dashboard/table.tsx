"use client";

import TableThree from "@/components/Tables/TableThree";
import { AMC } from "@/types";

const headCells = [
  { id: "sno", label: "S No", valueGetter: (row: AMC) => 1 },
  {
    id: "amccode",
    label: "AMC Code",
    valueGetter: (row: AMC) => row.id,
  },
  {
    id: "customer",
    label: "Customer Name",
    valueGetter: (row: AMC) => row.customer,
  },
  {
    id: "company",
    label: "Company",
    valueGetter: (row: AMC) => row.company,
  },
  {
    id: "contact",
    label: "Contact",
    valueGetter: (row: AMC) => row.contactnumber,
  },
  {
    id: "amcrage",
    label: "AMC Range",
    valueGetter: (row: AMC) => row.amcrange,
  },
  {
    id: "amcdaysover",
    label: "AMC Days Over",
    valueGetter: (row: AMC) => row.amcdaysover,
  },
];

const tableData: AMC[] = [
  {
    id: 1,
    amccode: "AMC001",
    customer: "Customer 1",
    company: "Company A",
    contactnumber: "123-456-7890",
    amcrange: "Jan 2022 - Dec 2022",
    amcdaysover: 15,
  },
  {
    id: 2,
    amccode: "AMC002",
    customer: "Customer 2",
    company: "Company B",
    contactnumber: "987-654-3210",
    amcrange: "Feb 2022 - Jan 2023",
    amcdaysover: 5,
  },
  {
    id: 3,
    amccode: "AMC003",
    customer: "Customer 3",
    company: "Company C",
    contactnumber: "555-555-5555",
    amcrange: "Mar 2022 - Feb 2023",
    amcdaysover: 8,
  },
  {
    id: 4,
    amccode: "AMC004",
    customer: "Customer 4",
    company: "Company D",
    contactnumber: "777-888-9999",
    amcrange: "Apr 2022 - Mar 2023",
    amcdaysover: 12,
  },
  {
    id: 5,
    amccode: "AMC005",
    customer: "Customer 5",
    company: "Company E",
    contactnumber: "111-222-3333",
    amcrange: "May 2022 - Apr 2023",
    amcdaysover: 20,
  },
  {
    id: 6,
    amccode: "AMC006",
    customer: "Customer 6",
    company: "Company F",
    contactnumber: "444-555-6666",
    amcrange: "Jun 2022 - May 2023",
    amcdaysover: 3,
  },
  {
    id: 7,
    amccode: "AMC007",
    customer: "Customer 7",
    company: "Company G",
    contactnumber: "666-777-8888",
    amcrange: "Jul 2022 - Jun 2023",
    amcdaysover: 10,
  },
  {
    id: 8,
    amccode: "AMC008",
    customer: "Customer 8",
    company: "Company H",
    contactnumber: "999-000-1111",
    amcrange: "Aug 2022 - Jul 2023",
    amcdaysover: 7,
  },
  {
    id: 9,
    amccode: "AMC009",
    customer: "Customer 9",
    company: "Company I",
    contactnumber: "222-333-4444",
    amcrange: "Sep 2022 - Aug 2023",
    amcdaysover: 18,
  },
  {
    id: 10,
    amccode: "AMC010",
    customer: "Customer 10",
    company: "Company J",
    contactnumber: "333-444-5555",
    amcrange: "Oct 2022 - Sep 2023",
    amcdaysover: 6,
  },
];

export default function DashboardTable() {
  return <TableThree tableData={tableData} headCells={headCells} />;
}

"use client";

import TableThree from "@/components/Tables/TableThree";
import { Customer } from "@/types/package";

const headCells = [
  { id: "sno", label: "S No", valueGetter: (row: Customer) => 1 },
  {
    id: "id",
    label: "Customer ID",
    valueGetter: (row: Customer) => row.id,
  },
  { id: "name", label: "Name", valueGetter: (row: Customer) => row.name },
  {
    id: "email",
    label: "Email",
    valueGetter: (row: Customer) => row.email,
  },
  {
    id: "address",
    label: "Address",
    valueGetter: (row: Customer) => row.address,
  },
  {
    id: "status",
    label: "Status",
    valueGetter: (row: Customer) => row.status,
  },
];

const tableData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    type: "Regular",
    address: "123 Main St, Anytown, USA",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    type: "VIP",
    address: "456 Oak Ave",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    type: "Regular",
    address: "789 Elm Blvd",
    status: "Active",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice.brown@example.com",
    type: "Regular",
    address: "101 Pine Rd",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    type: "VIP",
    address: "202 Maple Lane",
    status: "Active",
  },
  {
    id: 6,
    name: "Eva Wilson",
    email: "eva.wilson@example.com",
    type: "Regular",
    address: "303 Cedar Street",
    status: "Inactive",
  },
  {
    id: 7,
    name: "David White",
    email: "david.white@example.com",
    type: "Regular",
    address: "404 Birch Court",
    status: "Active",
  },
  {
    id: 8,
    name: "Grace Taylor",
    email: "grace.taylor@example.com",
    type: "VIP",
    address: "505 Spruce Place",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Frank Miller",
    email: "frank.miller@example.com",
    type: "Regular",
    address: "606 Pinecrest Road",
    status: "Active",
  },
  {
    id: 10,
    name: "Helen Anderson",
    email: "helen.anderson@example.com",
    type: "Regular",
    address: "707 Elm Street",
    status: "Inactive",
  },
];

export default function CustomerWithAMCTable() {
  return <TableThree tableData={tableData} headCells={headCells} />;
}

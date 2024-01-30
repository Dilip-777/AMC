import { NavItem } from "@/types";
import {
  AMCIcon,
  AMCReportsIcon,
  CustomersIcon,
  DashboardIcon,
  ExecutiveIcon,
  ServiceCallIcon,
} from "./Icons/sidebar";

export const navItems: NavItem[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    Icon: DashboardIcon,
    level: 1,
  },
  {
    name: "Customers",
    path: "/dashboard",
    Icon: CustomersIcon,
    level: 1,
    children: [
      {
        name: "Manage Customers",
        path: "/dashboard/customers",
        level: 2,
      },
      {
        name: "Add Customer",
        path: "/dashboard/customers/add",
        level: 2,
      },
    ],
  },

  {
    name: "AMC",
    path: "/dashboard/amc",
    Icon: AMCIcon,
    level: 1,
    children: [
      {
        name: "Customer Without AMC",
        path: "/dashboard/customers-without-amc",
        level: 2,
      },
      {
        name: "Running AMC Customers",
        path: "/dashboard/runnning-amc-customers",
        level: 2,
      },
    ],
  },
  {
    name: "Service Calls",
    path: "/dashboard/calls",
    Icon: ServiceCallIcon,
    level: 1,
    children: [
      {
        name: "Add New Call",
        path: "/dashboard/calls/add",
        level: 2,
      },
      {
        name: "Lodged Calls",
        path: "/dashboard/calls/lodged-calls",
        level: 2,
      },
    ],
  },
  {
    name: "Executive",
    path: "/dashboard/calls",
    Icon: ExecutiveIcon,
    level: 1,
    children: [
      {
        name: "Manage Executive",
        path: "/dashboard/executive/add",
        level: 2,
      },
      {
        name: "Add New Executive",
        path: "/dashboard/executive",
        level: 2,
      },
    ],
  },
  {
    name: "AMC Reports",
    path: "/dashboard/calls",
    Icon: AMCReportsIcon,
    level: 1,
    children: [
      {
        name: "All AMC Records",
        path: "/dashboard/amc/all",
        level: 2,
      },
      {
        name: "Service AMC",
        path: "/dashboard/calls/lodged-calls",
        level: 2,
      },
      {
        name: "Active AMCs",
        path: "/dashboard/calls/lodged-calls",
        level: 2,
      },
      {
        name: "AMC Renewed",
        path: "/dashboard/calls/lodged-calls",
        level: 2,
      },
      {
        name: "AMCs Expired",
        path: "/dashboard/calls/lodged-calls",
        level: 2,
      },
      {
        name: "No AMC Issued Customers",
        path: "/dashboard/calls/lodged-calls",
        level: 2,
      },
    ],
  },
];

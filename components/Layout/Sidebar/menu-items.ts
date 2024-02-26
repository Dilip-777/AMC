import { NavItem } from "@/types";
import {
  AMCIcon,
  AMCReportsIcon,
  CustomersIcon,
  DashboardIcon,
  ExecutiveIcon,
  ReminderIcon,
  ServiceCallIcon,
  SettingsIcon,
} from "../../ui/Icons/sidebar";

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
        path: "/dashboard/customers/without-amc",
        level: 2,
      },
      {
        name: "Running AMC Customers",
        path: "/dashboard/customers/with-amc",
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
        path: "/dashboard/lodged-calls/add",
        level: 2,
      },
      {
        name: "Lodged Calls",
        path: "/dashboard/lodged-calls",
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
        path: "/dashboard/executive",
        level: 2,
      },
      {
        name: "Add New Executive",
        path: "/dashboard/executive/add",
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
        path: "/dashboard/amc-report/all",
        level: 2,
      },
      {
        name: "Service AMC",
        path: "/dashboard/amc-report/service",
        level: 2,
      },
      {
        name: "Active AMCs",
        path: "/dashboard/amc-report/active",
        level: 2,
      },
      {
        name: "AMC Renewed",
        path: "/dashboard/amc-report/renewed",
        level: 2,
      },
      {
        name: "AMCs Expired",
        path: "/dashboard/amc-report/expired",
        level: 2,
      },
      {
        name: "No AMC Issued Customers",
        path: "/dashboard/amc-report/not-issued",
        level: 2,
      },
    ],
  },
  {
    name: "Call Report",
    path: "/dashboard/calls",
    Icon: ServiceCallIcon,
    level: 1,
    children: [
      {
        name: "Pending Calls",
        path: "/dashboard/lodged-calls/pending",
        level: 2,
      },
      {
        name: "Closed Calls",
        path: "/dashboard/lodged-calls/closed",
        level: 2,
      },
      {
        name: "Customer wise Calls",
        path: "/dashboard/lodged-calls/customer-wise",
        level: 2,
      },
    ],
  },
  {
    name: "Reminder",
    path: "/reminder",
    Icon: ReminderIcon,
    level: 1,
    children: [
      {
        name: "Expired AMC Email Reminder",
        path: "/dashboard/reminder/email",
        level: 2,
      },
      {
        name: "Send SMS Reminder",
        path: "/dashboard/reminder/sms",
        level: 2,
      },
    ],
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    Icon: SettingsIcon,
    level: 1,
    children: [
      {
        name: "Company Settings",
        path: "/dashboard/settings/company",
        level: 2,
      },
      {
        name: "Manage Call Type",
        path: "/dashboard/settings/call-type",
        level: 2,
      },
      {
        name: "Manage Customer Type",
        path: "/dashboard/settings/customer-type",
        level: 2,
      },
      {
        name: "Add Customer Type",
        path: "/dashboard/settings/customer-type/add",
        level: 2,
      },
      {
        name: "Manage Zone",
        path: "/dashboard/settings/zone",
        level: 2,
      },
    ],
  },
];

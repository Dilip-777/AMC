import { relations } from "drizzle-orm";
import {
  boolean,
  date,
  decimal,
  pgTable,
  serial,
  text,
  pgEnum,
  varchar,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  content: text("content"),
  done: boolean("done"),
});

export const amc = pgTable("amc", {
  id: serial("id").primaryKey(),
  code: text("code").notNull(),
  startDate: date("startDate", { mode: "date" }).notNull(),
  endDate: date("endDate", { mode: "date" }).notNull(),
  invoiceDate: date("invoiceDate", { mode: "date" }).notNull(),
  customerCode: text("customerCode").notNull(),
  customerId: integer("customerId").notNull(),
});

export const amcRelations = relations(amc, ({ many, one }) => ({
  services: many(services),
  customer: one(customers, {
    fields: [amc.customerId],
    references: [customers.id],
  }),
}));

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  amcId: integer("amcId").notNull(),
  serviceDate: date("serviceDate", { mode: "date" }).notNull(),
  note: text("note"),
});

export const servicesRelations = relations(services, ({ one }) => ({
  amc: one(amc, {
    fields: [services.amcId],
    references: [amc.id],
  }),
}));

export const custstatusEnum = pgEnum("custstatus", ["Inactive", "Active"]);

export const customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  code: text("code").notNull(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  type: text("type").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zip: text("zip").notNull(),
  mobile: text("mobile").notNull(),
  email: text("email").notNull(),
  image: text("image"),
  note: text("note"),
  zone: text("zone").notNull(),
  status: custstatusEnum("status").notNull().default("Active"),
});

export const customerRelations = relations(customers, ({ many }) => ({
  amcs: many(amc),
}));

export const userStatusEnum = pgEnum("user_status", ["0", "1"]);

// Table: users
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  // age: integer("age").notNull(),
  // date: date("date").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  // ip: text("ip"),
  status: userStatusEnum("status").notNull().default("0"),
});

export const custtypeStatusEnum = pgEnum("custtype_status", [
  "Inactive",
  "Active",
]);

export const custtype = pgTable("custtype", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  status: custtypeStatusEnum("status").notNull().default("Inactive"),
});

// Table: user_detail
// export const user_detail = pgTable("user_detail", {
//   id: serial("id").primaryKey(),
//   name: text("name").notNull(),
//   age: text("age").notNull(),
// });

// Enum: warranty status
// export const warrantyStatusEnum = pgEnum("warranty_status", [
//   "0",
//   "1",
//   "2",
//   "3",
// ]);

// Table: warrantymaster
// export const warrantymaster = pgTable("warrantymaster", {
//   SlNo: serial("SlNo").primaryKey(),
//   wccode: text("wccode").notNull(),
//   invoiceno: text("invoiceno").notNull(),
//   invoicedate: date("invoicedate").notNull(),
//   wcissuedate: date("wcissuedate").notNull(),
//   custcode: text("custcode").notNull(),
//   sitecode: text("sitecode").notNull(),
//   wcenddate: date("wcenddate").notNull(),
//   prodserialcode: text("prodserialcode").notNull(),
//   prodprice: text("prodprice").notNull(),
//   prodqty: text("prodqty").notNull(),
//   prodtotal: text("prodtotal").notNull(),
//   wcstatus: warrantyStatusEnum("wcstatus").notNull().default("1"),
// });

export type CustType = typeof custtype.$inferSelect;

export type User = typeof users.$inferSelect;

export type Customer = typeof customers.$inferSelect;

export type AMC = typeof amc.$inferSelect;

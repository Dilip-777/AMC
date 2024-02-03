import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  content: text("content"),
  done: boolean("done"),
});

export const customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  name: text("name"),
  code: text("code"),
  email: text("email"),
  address: text("address"),
  mobile: text("phone"),
  city: text("city"),
  state: text("state"),
  zip: text("zip"),
  dvrno: text("dvrno"),
  note: text("note"),
  created_at: text("created_at"),
});

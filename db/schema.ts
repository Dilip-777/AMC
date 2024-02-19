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
} from "drizzle-orm/pg-core";

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

export const amcinstamt = pgTable("amcinstamt", {
  SlNo: serial("SlNo").primaryKey(),
  amccode: text("amccode").notNull(),
  custcode: text("custcode").notNull(),
  sitecode: text("sitecode").notNull(),
  wccode: text("wccode").notNull(),
  totalbill: decimal("totalbill", {
    precision: 10,
    scale: 2,
  }).notNull(),
  contractamt: decimal("contractamt", {
    precision: 10,
    scale: 2,
  }).notNull(),
  gst: text("gst").notNull(),
  gstamt: decimal("gstamt", {
    precision: 10,
    scale: 2,
  }).notNull(),
  totalamt: decimal("totalamt", {
    precision: 10,
    scale: 2,
  }).notNull(),
  installment: text("installment").notNull(),
  installmentdate: text("installmentdate").notNull(),
});

export const wcstatusEnum = pgEnum("wcstatus", ["0", "1", "2", "3"]);
export const renewEnum = pgEnum("renew", ["0", "1"]);

export const amcmaster = pgTable("amcmaster", {
  SlNo: serial("SlNo").primaryKey(),
  amccode: text("amccode").notNull(),
  sitecode: text("sitecode").notNull(),
  amcissuedate: date("amcissuedate").notNull(),
  amcenddate: date("amcenddate").notNull(),
  wccode: text("wccode").notNull(),
  invoiceno: text("invoiceno").notNull(),
  invoicedate: date("invoicedate").notNull(),
  wcissuedate: date("wcissuedate").notNull(),
  custcode: text("custcode").notNull(),
  wcenddate: date("wcenddate").notNull(),
  prodserialcode: text("prodserialcode").notNull(),
  prodprice: text("prodprice").notNull(),
  prodqty: text("prodqty").notNull(),
  prodtotal: text("prodtotal").notNull(),
  wcstatus: wcstatusEnum("wcstatus").notNull().default("0"),
  renew: renewEnum("renew").notNull().default("0"),
  renew_amccode: text("renew_amccode").notNull().default("0"),
});

export const servstatusEnum = pgEnum("servstatus", ["0", "1", "2", "3"]);

export const amcservsch = pgTable("amcservsch", {
  SlNo: serial("SlNo").primaryKey(),
  amccode: text("amccode").notNull(),
  custcode: text("custcode").notNull(),
  sitecode: text("sitecode").notNull(),
  wccode: text("wccode").notNull(),
  amcissuedate: date("amcissuedate").notNull(),
  amcenddate: date("amcenddate").notNull(),
  servicedate: date("servicedate").notNull(),
  notes: text("notes").notNull(),
  servstatus: servstatusEnum("servstatus").notNull().default("0"),
  servdonedate: date("servdonedate").notNull(),
});

export const branchstatusEnum = pgEnum("branchstatus", ["0", "1", "2"]);
export const invstatusEnum = pgEnum("invstatus", ["0", "1"]);

// Table definitions
export const amcRenew = pgTable("amc_renew", {
  SlNo: serial("SlNo").primaryKey(),
  prev_amccode: varchar("prev_amccode").notNull(),
  renew_amccode: varchar("renew_amccode").notNull(),
  renew_date: varchar("renew_date").notNull(),
});

export const branch = pgTable("branch", {
  SlNo: serial("SlNo").primaryKey(),
  branchcode: varchar("branchcode").notNull(),
  branchtype: varchar("branchtype").notNull(),
  branchname: varchar("branchname").notNull(),
  branchaddress: varchar("branchaddress").notNull(),
  branchmobno: varchar("branchmobno").notNull(),
  password: varchar("password").notNull(),
  branchemail: varchar("branchemail").notNull(),
  branchstatus: branchstatusEnum("branchstatus").notNull().default("1"),
});

export const callinvoice = pgTable("callinvoice", {
  SlNo: serial("SlNo").primaryKey(),
  complcode: varchar("complcode").notNull(),
  sitecode: varchar("sitecode").notNull(),
  custcode: varchar("custcode").notNull(),
  callinvcode: varchar("callinvcode").notNull(),
  callinvdate: date("callinvdate").notNull(),
  contractamt: decimal("contractamt").notNull(),
  gst: varchar("gst").notNull(),
  gstamt: decimal("gstamt").notNull(),
  totalamt: decimal("totalamt").notNull(),
  discount: decimal("discount").notNull(),
  netamount: decimal("netamount").notNull(),
  invstatus: invstatusEnum("invstatus").notNull(),
});

export const statusEnum = pgEnum("status", ["0", "1"]);

export const calltype = pgTable("calltype", {
  SlNo: serial("SlNo").primaryKey(),
  calltype: text("calltype").notNull(),
  status: statusEnum("status").notNull().default("1"),
});

export const callstatusEnum = pgEnum("callstatus", ["0", "1", "2"]);

// Table: callupdate
export const callupdate = pgTable("callupdate", {
  SlNo: serial("SlNo").primaryKey(),
  complcode: text("complcode").notNull(),
  complupdtcode: text("complupdtcode").notNull(),
  compldate: date("compldate").notNull(),
  calldate: date("calldate").notNull(),
  amccode: text("amccode").notNull(),
  jobcode: text("jobcode"),
  amcissuedate: date("amcissuedate").notNull(),
  amcenddate: date("amcenddate").notNull(),
  callstatus: callstatusEnum("callstatus").notNull().default("0"),
  custcode: text("custcode").notNull(),
  execode: text("execode").notNull(),
  solution: text("solution").notNull(),
  description: text("description").notNull(),
  remark: text("remark").notNull(),
  totalbill: text("totalbill").notNull(),
});

// Table: callupdatelog
export const callupdatelog = pgTable("callupdatelog", {
  SlNo: serial("SlNo").primaryKey(),
  complcode: text("complcode").notNull(),
  amccode: text("amccode").notNull(),
  jobcode: text("jobcode"),
  prodserialcode: text("prodserialcode").notNull(),
  prodqty: text("prodqty").notNull(),
  prodprice: text("prodprice").notNull(),
  prodtotal: text("prodtotal").notNull(),
  complupdtcode: text("complupdtcode").notNull(),
});

// Table: company_info
export const company_info = pgTable("company_info", {
  SlNo: serial("SlNo").primaryKey(),
  company_logo: text("company_logo").notNull(),
  site_name: text("site_name").notNull(),
  comp_name: text("comp_name").notNull(),
  comp_address: text("comp_address").notNull(),
  comp_currency: text("comp_currency").notNull(),
  comp_phone: text("comp_phone").notNull(),
  comp_tax_no: text("comp_tax_no").notNull(),
});

export const complpriorityEnum = pgEnum("complpriority", ["0", "1", "2"]);
export const complstatusEnum = pgEnum("complstatus", ["0", "1", "2", "3"]);

export const complaintmaster = pgTable("complaintmaster", {
  SlNo: serial("SlNo").primaryKey(),
  complcode: text("complcode").notNull(),
  compldate: date("compldate").notNull(),
  custcode: text("custcode").notNull(),
  sitecode: text("sitecode").notNull(),
  amccode: text("amccode").notNull(),
  jobcode: text("jobcode"),
  servicedate: date("servicedate").notNull(),
  prodserialcode: text("prodserialcode"),
  complmobno: text("complmobno").notNull(),
  complsub: text("complsub").notNull(),
  compldesc: text("compldesc").notNull(),
  complpriority: complpriorityEnum("complpriority").notNull().default("0"),
  execode: text("execode").notNull(),
  complstatus: complstatusEnum("complstatus").notNull().default("1"),
});

export const custstatusEnum = pgEnum("custstatus", ["0", "1"]);

export const custmaster = pgTable("custmaster", {
  SlNo: serial("SlNo").primaryKey(),
  custcode: text("custcode").notNull(),
  custname: text("custname").notNull(),
  company: text("company").notNull(),
  custtype: text("custtype").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  pincode: text("pincode").notNull(),
  mobileno: text("mobileno").notNull(),
  phoneno: text("phoneno").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  custimage: text("custimage").notNull(),
  note: text("note").notNull(),
  custstatus: custstatusEnum("custstatus").notNull().default("1"),
});

// Table: cust_note
export const cust_note = pgTable("cust_note", {
  SlNo: serial("SlNo").primaryKey(),
  note: text("note").notNull(),
  custcode: text("custcode").notNull(),
  date: date("date").notNull(),
  time: date("time").notNull(),
});

export const exestatusEnum = pgEnum("exestatus", ["0", "1", "2"]);

export const executive = pgTable("executive", {
  SlNo: serial("SlNo").primaryKey(),
  execode: text("execode").notNull(),
  exetype: text("exetype").notNull(),
  exename: text("exename").notNull(),
  exeaddress: text("exeaddress").notNull(),
  exemobno: text("exemobno").notNull(),
  password: text("password").notNull(),
  exeemail: text("exeemail").notNull(),
  exestatus: exestatusEnum("exestatus").notNull().default("1"),
});

export const execodeEnum = pgEnum("execode", ["0", "1"]);
export const executivehauf = pgTable("executivehauf", {
  SlNo: serial("SlNo").primaryKey(),
  execode: execodeEnum("execode").notNull(),
  exename: text("exename").notNull(),
  exesalary: text("exesalary").notNull(),
  exephone: text("exephone").notNull(),
  exetime: text("exetime").notNull(),
  exedue: text("exedue").notNull(),
  exeadmin: text("exeadmin").notNull(),
  exetempo: text("exetempo").notNull(),
  exebusk: text("exebusk").notNull(),
  exeinfo: text("exeinfo").notNull(),
});

export const jobstatusEnum = pgEnum("jobstatus", ["0", "1", "2", "3"]);
export const invoiceEnum = pgEnum("invoice", ["0", "1"]);
export const jobcardmaster = pgTable("jobcardmaster", {
  SlNo: serial("SlNo").primaryKey(),
  jobcode: text("jobcode").notNull(),
  jobdate: date("jobdate").notNull(),
  refno: text("refno").notNull(),
  custcode: text("custcode").notNull(),
  sitecode: text("sitecode").notNull(),
  jobdetails: text("jobdetails").notNull(),
  jobstatus: jobstatusEnum("jobstatus").notNull().default("1"),
  timestamp: date("timestamp").notNull().default("CURRENT_TIMESTAMP"),
  jobdonedate: date("jobdonedate"),
  jobdonetime: date("jobdonetime"),
  complcode: text("complcode"),
  invoice: invoiceEnum("invoice").notNull().default("0"),
});

// Table: jobdetails
export const jobdetails = pgTable("jobdetails", {
  SlNo: serial("SlNo").primaryKey(),
  jobcode: text("jobcode").notNull(),
  prodcode: text("prodcode").notNull(),
  proddetails: text("proddetails").notNull(),
  prodspec: text("prodspec").notNull(),
});

export const notification = pgTable("notification", {
  SlNo: serial("SlNo").primaryKey(),
  uid: text("uid").notNull(),
  details: text("details").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  status: statusEnum("status").notNull().default("0"),
});

// Table: notification_cust
export const notification_cust = pgTable("notification_cust", {
  SlNo: serial("SlNo").primaryKey(),
  uid: text("uid").notNull(),
  details: text("details").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  status: statusEnum("status").notNull().default("0"),
});

// Table: notification_exe
export const notification_exe = pgTable("notification_exe", {
  SlNo: serial("SlNo").primaryKey(),
  uid: text("uid").notNull(),
  details: text("details").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  status: statusEnum("status").notNull().default("0"),
});

// Table: orders
export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  card_number: decimal("card_number", { precision: 20, scale: 0 }).notNull(),
  card_exp_month: text("card_exp_month").notNull(),
  card_exp_year: text("card_exp_year").notNull(),
  item_name: text("item_name").notNull(),
  item_number: text("item_number").notNull(),
  item_price: decimal("item_price", { precision: 10, scale: 2 }).notNull(),
  item_price_currency: text("item_price_currency").notNull(),
  paid_amount: text("paid_amount").notNull(),
  paid_amount_currency: text("paid_amount_currency").notNull(),
  txn_id: text("txn_id").notNull(),
  payment_status: text("payment_status").notNull(),
  created: date("created").notNull(),
  modified: date("modified").notNull(),
});

// Table: payment_transaction
export const payment_transaction = pgTable("payment_transaction", {
  id: serial("id").primaryKey(),
  transaction_id: text("transaction_id").notNull(),
  amount: decimal("amount", { precision: 11, scale: 0 }).notNull(),
  currency_type: text("currency_type").notNull(),
  item_number: integer("item_number").notNull(),
});

export const prodstatusEnum = pgEnum("prodstatus", ["0", "1"]);
export const prodmaster = pgTable("prodmaster", {
  SlNo: serial("SlNo").primaryKey(),
  prodcode: text("prodcode").notNull(),
  prodgrpcode: text("prodgrpcode").notNull(),
  prodmodel: text("prodmodel").notNull(),
  prodbrand: text("prodbrand").notNull(),
  prodname: text("prodname").notNull(),
  produnit: text("produnit").notNull(),
  prodwarrenty: text("prodwarrenty").notNull(),
  prodimg: text("prodimg"),
  proddetails: text("proddetails").notNull(),
  prodstatus: prodstatusEnum("prodstatus").notNull().default("1"),
});

export const prodgrpstatusEnum = pgEnum("prodgrpstatus", ["0", "1"]);
export const productgroup = pgTable("productgroup", {
  SlNo: serial("SlNo").primaryKey(),
  prodgrpcode: text("prodgrpcode").notNull(),
  prodgrpname: text("prodgrpname").notNull(),
  prodgrpstatus: prodgrpstatusEnum("prodgrpstatus").notNull().default("1"),
});

export const prodmdlstatusEnum = pgEnum("prodmdlstatus", ["0", "1"]);
export const productmodel = pgTable("productmodel", {
  SlNo: serial("SlNo").primaryKey(),
  prodmdlcode: text("prodmdlcode").notNull(),
  prodmdlname: text("prodmdlname").notNull(),
  prodcode: text("prodcode").notNull(),
  prodmdlstatus: prodmdlstatusEnum("prodmdlstatus").notNull().default("1"),
});

export const prodserialstatusEnum = pgEnum("prodserialstatus", ["0", "1"]);
export const prodtreatEnum = pgEnum("prodtreat", ["0", "1"]);
export const productserial = pgTable("productserial", {
  SlNo: serial("SlNo").primaryKey(),
  prodserialcode: text("prodserialcode").notNull(),
  prodmdlcode: text("prodmdlcode").notNull(),
  prodcode: text("prodcode").notNull(),
  prodprice: text("prodprice").notNull(),
  prodcolor: text("prodcolor").notNull(),
  prodmotorno: text("prodmotorno").notNull(),
  prodchesisno: text("prodchesisno").notNull(),
  prodserialstatus: prodserialstatusEnum("prodserialstatus")
    .notNull()
    .default("1"),
  prodtreat: prodtreatEnum("prodtreat").notNull().default("0"),
});

export const qtstatusEnum = pgEnum("qtstatus", ["0", "1", "2", "3"]);
export const custapproveEnum = pgEnum("custapprove", ["0", "1"]);
export const quotationmaster = pgTable("quotationmaster", {
  SlNo: serial("SlNo").primaryKey(),
  qtcode: text("qtcode").notNull(),
  tccode: text("tccode").notNull(),
  pono: text("pono").notNull(),
  podate: date("podate").notNull(),
  amcissuedate: date("amcissuedate").notNull(),
  custcode: text("custcode").notNull(),
  sitecode: text("sitecode").notNull(),
  amcenddate: date("amcenddate").notNull(),
  prodserialcode: text("prodserialcode").notNull(),
  prodprice: text("prodprice").notNull(),
  prodqty: text("prodqty").notNull(),
  prodtotal: text("prodtotal").notNull(),
  services: text("services").notNull(),
  estamt: text("estamt").notNull(),
  qtstatus: qtstatusEnum("qtstatus").notNull().default("1"),
  custapprove: custapproveEnum("custapprove").notNull().default("0"),
  approvaldate: text("approvaldate"),
  approvaltime: text("approvaltime"),
});

// Table: receipt
export const receipt = pgTable("receipt", {
  SlNo: serial("SlNo").primaryKey(),
  receiptcode: text("receiptcode").notNull(),
  amccode: text("amccode").notNull(),
  custcode: text("custcode").notNull(),
  sitecode: text("sitecode").notNull(),
  date: date("date").notNull(),
  paymode: text("paymode").notNull(),
  totalamt: integer("totalamt").notNull(),
  paidamt: integer("paidamt").notNull(),
  dueamt: integer("dueamt").notNull(),
  instrument_details: text("instrument_details").notNull(),
  pay_date: date("pay_date").notNull(),
  note: text("note").notNull(),
});

// Table: receipt_callinv
export const receipt_callinv = pgTable("receipt_callinv", {
  SlNo: serial("SlNo").primaryKey(),
  receiptcode: text("receiptcode").notNull(),
  amccode: text("amccode").notNull(),
  complcode: text("complcode").notNull(),
  callinvcode: text("callinvcode").notNull(),
  callinvdate: text("callinvdate").notNull(),
  custcode: text("custcode").notNull(),
  sitecode: text("sitecode").notNull(),
  date: date("date").notNull(),
  paymode: text("paymode").notNull(),
  netamount: text("netamount").notNull(),
  paidamt: integer("paidamt").notNull(),
  dueamt: integer("dueamt").notNull(),
  instrument_details: text("instrument_details").notNull(),
  pay_date: date("pay_date").notNull(),
  note: text("note").notNull(),
});

// Table: receipt_statement
export const receipt_statement = pgTable("receipt_statement", {
  SlNo: serial("SlNo").primaryKey(),
  receiptcode: text("receiptcode").notNull(),
  custcode: text("custcode").notNull(),
  sitecode: text("sitecode").notNull(),
  amccode: text("amccode").notNull(),
  date: date("date").notNull(),
  paymode: text("paymode").notNull(),
  totalamt: integer("totalamt").notNull(),
  paidamt: integer("paidamt").notNull(),
  dueamt: integer("dueamt").notNull(),
  instrument_details: text("instrument_details").notNull(),
  pay_date: date("pay_date").notNull(),
  note: text("note").notNull(),
});

export const siteStatusEnum = pgEnum("site_status", ["0", "1"]);

// Table: site
export const site = pgTable("site", {
  SlNo: serial("SlNo").primaryKey(),
  sitecode: text("sitecode").notNull(),
  sitename: text("sitename").notNull(),
  sitelocation: text("sitelocation").notNull(),
  custcode: text("custcode").notNull(),
  sitestatus: siteStatusEnum("sitestatus").notNull().default("1"),
});

// Enum: tncmaster status
export const tncmasterStatusEnum = pgEnum("tncmaster_status", ["0", "1"]);

// Table: tncmaster
export const tncmaster = pgTable("tncmaster", {
  SlNo: serial("SlNo").primaryKey(),
  name: text("name").notNull(),
  sercov: text("sercov").notNull(),
  tnc: text("tnc").notNull(),
  status: tncmasterStatusEnum("status").notNull().default("1"),
});

// Enum: user status
export const userStatusEnum = pgEnum("user_status", ["0", "1"]);

// Table: users
export const users = pgTable("users", {
  UserID: serial("UserID").primaryKey(),
  Username: text("Username").notNull(),
  Password: text("Password").notNull(),
  EmailAddress: text("EmailAddress").notNull(),
  date: date("date").notNull(),
  time: date("time").notNull(),
  ip: text("ip"),
  status: userStatusEnum("status").notNull().default("0"),
});

// Table: user_detail
export const user_detail = pgTable("user_detail", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: text("age").notNull(),
});

// Enum: warranty status
export const warrantyStatusEnum = pgEnum("warranty_status", [
  "0",
  "1",
  "2",
  "3",
]);

// Table: warrantymaster
export const warrantymaster = pgTable("warrantymaster", {
  SlNo: serial("SlNo").primaryKey(),
  wccode: text("wccode").notNull(),
  invoiceno: text("invoiceno").notNull(),
  invoicedate: date("invoicedate").notNull(),
  wcissuedate: date("wcissuedate").notNull(),
  custcode: text("custcode").notNull(),
  sitecode: text("sitecode").notNull(),
  wcenddate: date("wcenddate").notNull(),
  prodserialcode: text("prodserialcode").notNull(),
  prodprice: text("prodprice").notNull(),
  prodqty: text("prodqty").notNull(),
  prodtotal: text("prodtotal").notNull(),
  wcstatus: warrantyStatusEnum("wcstatus").notNull().default("1"),
});

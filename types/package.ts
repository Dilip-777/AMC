export type Package = {
  name: string;
  price: number;
  invoiceDate: string;
  status: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  address: string;
  type: string;
  status: string;
};

"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import FormInput from "@/components/FormikComponents/Input";
import { Button } from "@/components/ui/Button";
import FormSelect from "@/components/FormikComponents/FormSelect";

const ValidationSchema = z.object({
  name: z.string().min(3).max(20),
  code: z.string(),
  email: z.string().email(),
  mobile: z.string().min(10).max(10),
  type: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  dvrno: z.string().optional(),
  note: z.string().optional(),
});

export default function CustomerForm() {
  const initialValues = {
    name: "",
    code: "",
    email: "",
    mobile: "",
    type: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    dvrno: "",
    note: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(ValidationSchema)}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <div className="p-6.5 grid grid-cols-3 gap-x-8 gap-y-4">
              <FormInput label="Name" name="name" required />
              <FormInput label="Code" name="code" required />
              <FormInput label="Email" name="email" required />
              <FormInput label="Mobile" name="mobile" required />
              <FormInput label="Type" name="type" required />
              <FormInput label="Address" name="address" required />
              <FormInput label="City" name="city" required />
              <FormInput label="State" name="state" required />
              <FormInput label="Zip" name="zip" required />
              <FormInput label="DVR Number" name="dvrno" />
              <FormInput label="Note" name="note" />
            </div>
            <Button label="Submit" className="m-6.5 mt-0" />
          </Form>
        );
      }}
    </Formik>
  );
}

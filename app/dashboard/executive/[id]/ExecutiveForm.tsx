"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import FormInput from "@/components/FormikComponents/Input";
import { Button } from "@/components/ui/Button";
import FormSelect from "@/components/FormikComponents/FormSelect";
import FormDate from "@/components/FormikComponents/FormDate";

const ValidationSchema = z.object({
  code: z.string(),
  name: z.string(),
  type: z.string(),
  address: z.string(),
  number: z.string().min(10).max(10),
  email: z.string().email(),
  password: z.string().min(4).max(20),
});

export default function ExecutiveForm() {
  const initialValues = {
    code: "",
    name: "",
    type: "",
    address: "",
    number: "",
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(ValidationSchema)}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, values, setFieldValue }) => {
        console.log(values);

        return (
          <Form>
            <div className="p-6.5 grid grid-cols-3 gap-x-8 gap-y-4">
              <FormInput
                name="code"
                label="Executive Code"
                placeholder="Enter Executive Code"
                required
              />
              <FormInput
                name="name"
                label="Executive Name"
                placeholder="Enter Executive Name"
                required
              />
              <FormSelect
                label="Executive Type"
                name="type"
                options={[
                  {
                    value: "Admin",
                    label: "Admin",
                  },
                  {
                    value: "Executive",
                    label: "Executive",
                  },
                ]}
                placeholder="Select Executive Type"
                required
              />

              <FormInput
                name="address"
                label="Address"
                placeholder="Enter Address"
                required
              />
              <FormInput
                name="number"
                label="Phone Number"
                placeholder="Enter Phone Number"
                required
              />
              <FormInput
                name="email"
                label="Email"
                placeholder="Enter Email"
                required
              />
              <FormInput
                name="password"
                label="Password"
                placeholder="Enter Password"
                required
              />
            </div>
            <Button label="Submit" className="m-6.5 mt-0" />
          </Form>
        );
      }}
    </Formik>
  );
}

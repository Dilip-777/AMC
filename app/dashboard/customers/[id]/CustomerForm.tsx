"use client";

import { Formik, Form } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import FormInput from "@/components/FormikComponents/Input";
import { Button } from "@/components/ui/Button";
import FormSelect from "@/components/FormikComponents/FormSelect";
import { trpc } from "@/app/_trpc/client";
import { useRouter } from "next/navigation";

const ValidationSchema = z.object({
  name: z.string().min(3).max(20),
  code: z.string(),
  company: z.string(),
  email: z.string().email(),
  mobile: z.string().min(10).max(10),
  type: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  zone: z.string(),
  status: z.enum(["Active", "Inactive"]),
  note: z.string().optional(),
});

export default function CustomerForm() {
  const router = useRouter();
  const customerscreate = trpc.customers.create.useMutation();
  const initialValues = {
    name: "",
    code: "",
    company: "",
    email: "",
    mobile: "",
    type: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    note: "",
    status: "Active" as "Active" | "Inactive",
    zone: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(ValidationSchema)}
      onSubmit={async (values) => {
        try {
          await customerscreate.mutateAsync({
            name: values.name,
            code: values.code,
            company: values.company,
            email: values.email,
            mobile: values.mobile,
            type: values.type,
            address: values.address,
            city: values.city,
            state: values.state,
            zip: values.zip,
            zone: values.zone,
            status: values.status,
            note: values.note,
          });
          router.push("/dashboard/customers");
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <div className="p-6.5 grid grid-cols-3 gap-x-8 gap-y-4">
              <FormInput
                label="Name"
                name="name"
                required
                placeholder="Enter Customer Name"
              />
              <FormInput
                label="Code"
                name="code"
                required
                placeholder="Enter Customer Code"
              />
              <FormInput
                label="Company Name"
                name="company"
                required
                placeholder="Enter Company Name"
              />
              <FormInput
                label="Email"
                name="email"
                required
                placeholder="Enter Email"
              />
              <FormInput
                label="Mobile"
                name="mobile"
                required
                placeholder="Enter Mobile Number"
              />
              <FormInput
                label="Type"
                name="type"
                required
                placeholder="Select Customer Type"
              />
              <FormInput
                label="Address"
                name="address"
                required
                placeholder="Enter Customer Address"
              />
              <FormInput
                label="City"
                name="city"
                required
                placeholder="Enter the City"
              />
              <FormInput
                label="State"
                name="state"
                required
                placeholder="Enter the State"
              />
              <FormInput
                label="Zip"
                name="zip"
                required
                placeholder="Enter Zip Code"
              />
              <FormSelect
                name="status"
                label="Status"
                required
                placeholder="Select Status"
                options={[
                  { value: "Active", label: "Active" },
                  { value: "Inactive", label: "Inactive" },
                ]}
              />
              <FormInput
                label="Zone"
                name="zone"
                required
                placeholder="Enter Zone"
              />
              <FormInput label="Note" name="note" placeholder="Enter Note" />
            </div>
            <Button
              label="Submit"
              className="m-6.5 mt-0"
              type="submit"
              loading={isSubmitting}
            />
          </Form>
        );
      }}
    </Formik>
  );
}

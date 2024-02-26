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
  name: z.string(),
  status: z.enum(["Inactive", "Active"]),
});

export default function CustomerTypeForm() {
  const router = useRouter();
  const customertypecreate = trpc.customertype.create.useMutation();
  const initialValues = {
    name: "",
    status: "Active" as "Active" | "Inactive",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(ValidationSchema)}
      onSubmit={async (values) => {
        try {
          await customertypecreate.mutateAsync({
            name: values.name,
            status: values.status,
          });
          router.push("/dashboard/settings/customer-type");
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
                placeholder="Enter Name"
              />
              <FormSelect
                label="Status"
                name="status"
                required
                placeholder="Enter Status"
                options={[
                  { value: "Active", label: "Active" },
                  { value: "Inactive", label: "Inactive" },
                ]}
              />
            </div>
            <Button
              label="Submit"
              className="m-6.5 mt-0"
              loading={isSubmitting}
            />
          </Form>
        );
      }}
    </Formik>
  );
}

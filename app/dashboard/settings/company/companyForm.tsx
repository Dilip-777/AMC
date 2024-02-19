"use client";

import { Formik, Form } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import FormInput from "@/components/FormikComponents/Input";
import { Button } from "@/components/ui/Button";
import FormSelect from "@/components/FormikComponents/FormSelect";
import TextArea from "@/components/FormikComponents/TextArea";
import FormUpload from "@/components/FormikComponents/FormUpload";

const ValidationSchema = z.object({
  name: z.string().min(3).max(20),
  gstno: z.string(),
  projectname: z.string(),
  mobile: z.string().min(10).max(10),
  address: z.string(),
  companycurrency: z.string(),
  companylogo: z.string().optional(),
});

export default function CompanyForm() {
  const initialValues = {
    name: "",
    gstno: "",
    projectname: "",
    mobile: "",
    address: "",
    companycurrency: "",
    companylogo: "",
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
              <FormInput label="Company Name" name="name" required />
              <FormInput label="GST (Tax) No" name="gstno" required />
              <TextArea
                label="Address"
                name="address"
                required
                divClassName="row-span-2 "
              />
              <FormInput label="Project Name" name="projectname" required />
              <FormInput label="Company Phone" name="mobile" required />
              <FormInput
                label="Company Currency"
                name="companycurrency"
                required
              />
              <FormUpload
                placeholder="Select a File"
                label="Company Logo"
                name="companylogo"
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

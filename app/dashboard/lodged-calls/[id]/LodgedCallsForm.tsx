"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import FormInput from "@/components/FormikComponents/Input";
import { Button } from "@/components/ui/Button";
import FormSelect from "@/components/FormikComponents/FormSelect";
import FormDate from "@/components/FormikComponents/FormDate";

const ValidationSchema = z.object({
  callId: z.string().min(3).max(20),
  callType: z.string(),
  date: z.string(),
  priority: z.string().min(10).max(10),
  customer: z.string(),
  amcCode: z.string(),
  jobCode: z.string(),
  assignedTo: z.string(),
  callDetails: z.string(),
  amcStatus: z.string().optional(),
  serviceCallDate: z.string().optional(),
});

export default function LodgedCallsForm() {
  const initialValues = {
    callId: "",
    callType: "",
    date: "",
    priority: "",
    customer: "",
    amcCode: "",
    jobCode: "",
    assignedTo: "",
    callDetails: "",
    amcStatus: "",
    serviceCallDate: "",
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
                label="Call ID"
                name="callId"
                required
                placeholder="Enter Call ID"
              />
              <FormSelect
                label="Call Type"
                name="callType"
                options={[
                  {
                    value: "AMC",
                    label: "AMC",
                  },
                  {
                    value: "Service",
                    label: "Service",
                  },
                ]}
                placeholder="Select Call Type"
                required
              />
              <FormDate
                label="Date"
                name="date"
                required
                placeholder="Select Date"
                setFieldValue={setFieldValue}
              />
              <FormSelect
                label="Priority"
                name="priority"
                required
                options={[
                  {
                    value: "Low",
                    label: "Low",
                  },
                  {
                    value: "Medium",
                    label: "Medium",
                  },
                  {
                    value: "High",
                    label: "High",
                  },
                ]}
                placeholder="Select Priority"
              />
              <FormSelect
                label="Customer"
                name="customer"
                options={[
                  {
                    value: "1",
                    label: "Customer 1",
                  },
                  {
                    value: "2",
                    label: "Customer 2",
                  },
                ]}
                placeholder="Select Customer"
                required
              />
              <FormSelect
                label="AMC Code"
                name="amcCode"
                required
                options={[
                  {
                    value: "1",
                    label: "AMC 1",
                  },
                  {
                    value: "2",
                    label: "AMC 2",
                  },
                ]}
                placeholder="Select AMC Code"
              />
              <FormSelect
                label="Job Code"
                name="jobCode"
                required
                options={[
                  {
                    value: "1",
                    label: "Job 1",
                  },
                  {
                    value: "2",
                    label: "Job 2",
                  },
                ]}
                placeholder="Select Job Code"
              />
              <FormSelect
                label="Assigned To"
                name="assignedTo"
                required
                options={[
                  {
                    value: "1",
                    label: "User 1",
                  },
                  {
                    value: "2",
                    label: "User 2",
                  },
                ]}
                placeholder="Select User"
              />
              <FormInput
                label="Call Details"
                name="callDetails"
                required
                placeholder="Enter Call Details"
              />
              <FormInput
                label="AMC Status"
                name="amcStatus"
                placeholder="Enter AMC Status"
              />
              <FormDate
                label="Service Call Date"
                name="serviceCallDate"
                placeholder="Select Service Call Date"
              />
            </div>
            <Button label="Submit" className="m-6.5 mt-0" />
          </Form>
        );
      }}
    </Formik>
  );
}

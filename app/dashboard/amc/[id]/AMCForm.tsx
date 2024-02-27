"use client";

import { Formik, Form, FieldArray } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import FormInput from "@/components/FormikComponents/Input";
import { Button } from "@/components/ui/Button";
import FormSelect from "@/components/FormikComponents/FormSelect";
import { trpc } from "@/app/_trpc/client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Customer } from "@/db/schema";
import FormikDateRange from "@/components/FormikComponents/DateRange";
import FormDate from "@/components/FormikComponents/FormDate";

const ValidationSchema = z.object({
  code: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  invoiceDate: z.string(),
  customerId: z.string(),
  services: z.array(
    z.object({
      serviceDate: z.string(),
      note: z.string().optional(),
    })
  ),
});

export default function AMCForm({ customers }: { customers: Customer[] }) {
  const router = useRouter();
  const amcCreate = trpc.amc.create.useMutation();
  const searchParams = useSearchParams();

  const customerId = searchParams.get("customerId");
  const initialValues = {
    code: "",
    startDate: "",
    endDate: "",
    invoiceDate: "",
    customerId: customerId
      ? customers.find((c) => c.id === parseInt(customerId))?.id.toString() ??
        ""
      : "",
    services: [
      {
        serviceDate: "",
        note: "",
      },
    ],
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(ValidationSchema)}
      onSubmit={async (values) => {
        try {
          const customer = customers.find(
            (customer) => customer.id === parseInt(values.customerId)
          );
          if (customer)
            await amcCreate.mutateAsync({
              ...values,
              customerId: customer.id,
              customerCode: customer.code,
            });
          router.push("/dashboard/customers/with-amc");
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => {
        console.log(values, "values");

        return (
          <Form>
            <div className="p-6.5 grid grid-cols-1 gap-x-8   md:grid-cols-3">
              <FormInput
                label="AMC Code"
                name="code"
                required
                placeholder="Enter AMC Code"
              />
              <FormSelect
                name="customerId"
                label="Customer"
                required
                placeholder="Select Customer"
                options={customers.map((customer) => ({
                  value: customer.id,
                  label: customer.name,
                }))}
              />
              <FormDate
                label="Invoice Date"
                name="invoiceDate"
                required
                placeholder="Select Invoice Date"
                setFieldValue={setFieldValue}
              />
              <FormikDateRange
                label="Start Date"
                startName="startDate"
                endName="endDate"
                placeholder="Select Start Date"
                value={{
                  startDate: values.startDate,
                  endDate: values.endDate,
                }}
                handleChange={({ startDate, endDate }) => {
                  setFieldValue("startDate", startDate);
                  setFieldValue("endDate", endDate);
                }}
                divClassName="col-span-2"
                required
              />
            </div>
            <FieldArray
              name="services"
              render={(arrayHelpers) => (
                <div className="px-6.5">
                  <div className="flex justify-between mb-4">
                    <p className="text-xl text-white font-semibold">Services</p>
                    <Button
                      label="Add Service"
                      type="button"
                      onClick={() => arrayHelpers.push("")}
                    />
                    {/* <button
                      className=""
                      type="button"
                      onClick={() => arrayHelpers.push("")}
                    >
                      +
                    </button> */}
                  </div>
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="bg-meta-4 text-white">
                        <th
                          align="center"
                          className="min-w-[100px] py-3 px-2 font-medium"
                        >
                          Service Date
                        </th>
                        <th
                          align="center"
                          className="min-w-[100px] py-3 px-2 font-medium"
                        >
                          Note
                        </th>
                        <th
                          align="center"
                          className="min-w-[100px] py-3 px-2 font-medium"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {values.services && values.services.length > 0 ? (
                        values.services.map((service, index) => (
                          <tr key={index}>
                            <td
                              align="center"
                              className="border-b p-3 border-strokedark"
                            >
                              {/* <Field name={`services.${index}`} /> */}
                              <FormDate
                                name={`services.${index}.serviceDate`}
                                required
                                placeholder="Select Invoice Date"
                                setFieldValue={setFieldValue}
                              />
                            </td>
                            <td
                              align="center"
                              className="border-b p-3 border-strokedark"
                            >
                              <FormInput
                                name={`services.${index}.note`}
                                required
                                placeholder="Enter Note"
                              />
                            </td>
                            <td
                              align="center"
                              className="border-b p-3 border-strokedark"
                            >
                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="red"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3} className=" py-3 px-2">
                            No services available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            />
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

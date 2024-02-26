"use client";

import { Formik, Form } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import FormInput from "@/components/FormikComponents/Input";
import { Button } from "@/components/ui/Button";
import { trpc } from "@/app/_trpc/client";
import UserIcon from "@/components/ui/Icons/UserIcon";
import EmailIcon from "@/components/ui/Icons/Emaillcon";
import LockIcon from "@/components/ui/Icons/LockIcon";
import { useRouter } from "next/navigation";

const ValidationSchema = z
  .object({
    name: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });

export default function SignUpForm() {
  const register = trpc.register.create.useMutation();
  const router = useRouter();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(ValidationSchema)}
      onSubmit={async (values, { setFieldError }) => {
        const user = await register.mutateAsync({
          name: values.name,
          email: values.email,
          password: values.password,
        });

        if (user?.usernameError) {
          setFieldError("name", user?.usernameError);
        } else {
          router.push("/auth/signin");
        }
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <div>
              <FormInput
                label="Name"
                name="name"
                required
                placeholder="Enter your name"
                icon={<UserIcon />}
              />
              <FormInput
                label="Email"
                name="email"
                required
                placeholder="Enter your email"
                icon={<EmailIcon />}
              />
              <FormInput
                label="Password"
                name="password"
                required
                placeholder="Enter your password"
                icon={<LockIcon />}
              />
              <FormInput
                label="Confirm Password"
                name="confirmPassword"
                required
                placeholder="Confirm your password"
                icon={<LockIcon />}
              />
            </div>
            <Button
              label="Submit"
              className="p-4 w-full rounded-md mt-2"
              loading={isSubmitting}
              type="submit"
            />
          </Form>
        );
      }}
    </Formik>
  );
}

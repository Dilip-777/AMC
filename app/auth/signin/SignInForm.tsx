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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const ValidationSchema = z.object({
  name: z.string().min(3).max(20),
  password: z.string(),
});

export default function SignInForm() {
  const router = useRouter();
  const initialValues = {
    name: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(ValidationSchema)}
      onSubmit={async (values, { setFieldError }) => {
        try {
          const res = await signIn("credentials", {
            name: values.name,
            password: values.password,
            redirect: false,
            callbackUrl: "/",
          });

          // console.log(res);

          if (res?.error) {
            throw new Error("Invalid name or password");
          }
          router.push("/");
          router.refresh();
        } catch (error) {
          // console.log(error);
          setFieldError("name", "Invalid name or password");
          setFieldError("password", "Invalid name or password");
        }
        // const user = await register.mutateAsync({
        //   name: values.name,
        //   password: values.password,
        // });
        // if (user.usernameError) {
        //   setFieldError("name", user.usernameError);
        // }
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
                label="Password"
                name="password"
                required
                placeholder="Enter your password"
                icon={<LockIcon />}
              />
            </div>
            <Button
              label="Submit"
              className="p-4 w-full rounded-md mt-2"
              loading={isSubmitting}
            />
          </Form>
        );
      }}
    </Formik>
  );
}

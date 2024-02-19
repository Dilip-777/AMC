"use client";
import { useField } from "formik";
import { cn } from "../utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  className?: string;
  divClassName?: string;
  required?: boolean;
}

export default function TextArea({
  label,
  name,
  className,
  divClassName,
  required,
  ...props
}: InputProps) {
  const [field, meta] = useField(name);
  const isError = Boolean(meta.touched && meta.error);

  return (
    <div className={cn("mb-4.5 flex flex-col", divClassName)}>
      <label className="mb-1.5 block text-white">
        {label} {required && <span className="text-meta-1">*</span>}
      </label>
      <textarea
        className={cn(
          "w-full rounded border-2 h-full  !bg-transparent py-3 px-5 font-medium outline-none transition   disabled:cursor-default disabled:bg-whiter  bg-form-input ",
          isError
            ? "border-danger"
            : "border-form-strokedark focus:border-primary active:border-primary",
          className
        )}
        {...field}
        {...props}
      ></textarea>
      {isError && <div className="text-danger text-xs mt-1">{meta.error}</div>}
    </div>
  );
}

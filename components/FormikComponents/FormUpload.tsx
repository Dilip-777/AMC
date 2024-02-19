"use client";
import { useField } from "formik";
import { cn } from "../utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  className?: string;
  divClassName?: string;
  required?: boolean;
}

export default function FormUpload({
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
    <div className={cn("mb-4.5", divClassName)}>
      <label className="mb-1.5 block text-white">
        {label} {required && <span className="text-meta-1">*</span>}
      </label>
      <input
        className={cn(
          "w-full rounded border-2  !bg-transparent py-2.5 px-5 font-medium outline-none transition   disabled:cursor-default disabled:bg-whiter  bg-form-input      file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white",
          isError
            ? "border-danger"
            : "border-form-strokedark focus:border-primary active:border-primary",
          className
        )}
        type="file"
        {...field}
        {...props}
      />
      {isError && <div className="text-danger text-xs mt-1">{meta.error}</div>}
    </div>
  );
}

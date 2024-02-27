"use client";
import { useField } from "formik";
import { cn } from "../utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  className?: string;
  divClassName?: string;
  required?: boolean;
  icon?: React.ReactNode;
}

export default function FormInput({
  label,
  name,
  className,
  divClassName,
  required,
  icon,
  ...props
}: InputProps) {
  const [field, meta] = useField(name);
  const isError = Boolean(meta.touched && meta.error);

  return (
    <div className={cn("mb-4.5", divClassName)}>
      {label && (
        <label className="mb-1.5 block text-white">
          {label} {required && <span className="text-meta-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          className={cn(
            "w-full rounded border-2  text-white py-3 px-4 font-medium outline-none transition   disabled:cursor-default disabled:bg-whiter  bg-form-input ",
            isError
              ? "border-danger"
              : "border-form-strokedark focus:border-primary active:border-primary",
            className
          )}
          {...field}
          {...props}
        />
        {icon && <span className="absolute right-4 top-4">{icon}</span>}
      </div>
      {isError && <div className="text-danger text-xs mt-1">{meta.error}</div>}
    </div>
  );
}

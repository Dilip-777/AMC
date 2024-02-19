"use client";
import { cn } from "../utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  className?: string;
  divClassName?: string;
  required?: boolean;
  isError?: boolean;
  err?: string;
}

export default function Input({
  label,
  name,
  className,
  divClassName,
  required,
  isError,
  err,
  ...props
}: InputProps) {
  return (
    <div className={cn("", divClassName)}>
      <label className="mb-1.5 block text-white">
        {label} {required && <span className="text-meta-1">*</span>}
      </label>
      <input
        placeholder="Enter your email address"
        className={cn(
          "w-full rounded border-2  !bg-transparent py-3 px-5 font-medium outline-none transition   disabled:cursor-default disabled:bg-whiter  bg-form-input ",
          isError
            ? "border-danger"
            : "border-form-strokedark focus:border-primary active:border-primary",
          className
        )}
        {...props}
      />
      {isError && <div className="text-danger text-xs mt-1">{err}</div>}
    </div>
  );
}

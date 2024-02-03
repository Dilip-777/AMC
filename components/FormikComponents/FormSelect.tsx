"use client";
import { useField } from "formik";
import { cn } from "../utils/cn";
import React, { Fragment, useState } from "react";
import { Listbox, ListboxProps } from "@headlessui/react";
import Select from "../ui/Select";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

interface SelectProps<T> extends ListboxProps<"div", T, T> {
  label: string;
  name: string;
  className?: string;
  divClassName?: string;
  options: { value: string; label: string }[];
  required?: boolean;
}

export default function FormSelect({
  label,
  name,
  className,
  divClassName,
  options,
  required,
}: SelectProps<any>) {
  const [field, meta] = useField(name);
  const isError = Boolean(meta.touched && meta.error);

  return (
    <div className={cn("mb-4.5", divClassName)}>
      <label className="mb-2.5 block text-black dark:text-white">{label}</label>
      <div className="relative z-20 bg-transparent dark:bg-form-input">
        <select
          className={cn(
            "w-full rounded appearance-none border-[1.5px]  !bg-transparent py-3 px-5 font-medium outline-none transition   disabled:cursor-default disabled:bg-whiter  bg-form-input ",
            isError
              ? "border-danger"
              : "border-form-strokedark focus:border-primary active:border-primary",
            className
          )}
          {...field}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill=""
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
}

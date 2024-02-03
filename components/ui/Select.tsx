import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { useField } from "formik";
import { cn } from "../utils/cn";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

interface SelectProps {
  label: string;
  className?: string;
  options: { value: string; label: string }[];
  required?: boolean;
  isError?: boolean;
}

export default function Select({
  label,
  className,
  options,
  required,
  isError,
}: SelectProps) {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  try {
    return (
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Label className="mb-1.5 block text-white">
          {label}
        </Listbox.Label>
        <Listbox.Button
          className={cn(
            "w-full rounded border-[1.5px]  !bg-transparent py-3 px-5 font-medium outline-none transition   disabled:cursor-default disabled:bg-whiter  bg-form-input ",
            isError
              ? "border-danger"
              : "border-form-strokedark focus:border-primary active:border-primary",
            className
          )}
        >
          {selectedPerson.name}
        </Listbox.Button>
        <Listbox.Options>
          {people.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    );
  } catch (error) {
    console.log(error);
    return <div></div>;
  }
}

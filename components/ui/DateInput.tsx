"use client";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import "./styles/datepicker.css";

const App = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <Datepicker
      primaryColor="blue"
      useRange={false}
      asSingle={true}
      value={value}
      //   showFooter={true}
      onChange={handleValueChange}
      toggleClassName="absolute right-4 top-[30%] text-primary"
      inputClassName="relative  w-full  rounded border-2  bg-transparent py-3 px-5 outline-none transition  border-form-strokedark focus:border-primary bg-form-input text-white"
      containerClassName="relative z-20 bg-form-input text-black"
    />
  );
};
export default App;

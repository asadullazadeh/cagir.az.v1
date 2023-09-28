import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import CalendarContainer from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import az from "date-fns/locale/az";
registerLocale("az", az);
import "react-datepicker/dist/react-datepicker.css";
import InputCustomized from "@/src/components/input/input";
import SifarishBtn from "@/src/components/buttons/sifarish_btn";
import PrimarySmBtn from "@/src/components/buttons/primary_sm_btn";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const [inputId, setInputId] = useState("");
  const inputRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setIsFocused(false); // Ensure focus state is false when clicked
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    // You can perform other logic here if needed
  };

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsClicked(false);
      setIsFocused(false);
    }
  };

  useEffect(() => {
    // Add an event listener to handle clicks outside the input
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      // Cleanup the event listener when the component unmounts
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`px-[15px] py-[15px] lg:px-[15px] lg:py-[12.5px] border ${
        isClicked || isFocused ? "border-[#3598EA]" : "border-gray-300"
      } rounded-[10px] lg:rounded-full`}
      ref={inputRef}
      onClick={handleClick}
    >
      <DatePicker
        locale="az"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        placeholderText="Tarixi seç"
        // readOnly
        customInput={
          <input
            type="text"
            className="xs:w-[280px] sm:w-[600px] lg:w-[300px] xl:w-[400px]  font-semibold text-[10px] leading-[15px] text-black500 focus:outline-none focus:ring focus:ring-white border-none"
            value={inputValue}
            onChange={handleChange}
            readonly="readOnly"
          />
        }
      />
    </div>
  );
};

export default Calendar;

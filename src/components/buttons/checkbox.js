import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CheckBox = ({ name,criteriaId,sendDataToParent}) => {
  // Checkbox click
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event, checkboxName) => {
    const isChecked = event.target.checked;
    // Update state based on checkbox name
    if (checkboxName === "element") {
      setIsChecked(isChecked);
    }
  };


  // 
  const handleClick = () => {
    // Some action in the child component
    const criteriaIdCheckbox = criteriaId;
    const checkboxIsChecked = !isChecked;
    sendDataToParent(criteriaIdCheckbox, checkboxIsChecked); // Call the callback function with two different data

  };
  return (
      <div className="grid">
        <input
          name="meyar"
          type="checkbox"
          id={name}
          value={name}
          className="hidden peer"
          required=""
          checked={isChecked}
          onChange={(event) => handleCheckboxChange(event, "element")}
          onClick={handleClick}
        />
        <label
          htmlFor={name}
          className={`inline-flex items-center font-medium lg:font-semibold 
                text-[12px] lg:text-[10px] leading-[18px] lg:leading-[15px] 
                justify-between py-[7px] px-[10px] lg:py-[12px] lg:px-[15px]
                 text-black500 border-[1px] border-gray900 rounded-[10px]
                  lg:rounded-full cursor-pointer ${
                    isChecked ? "bg-blue-500 border-none text-white" : ""
                  }`}
        >
          <div className="w-full">{name}</div>
        </label>
      </div>
  );
};

export default CheckBox;

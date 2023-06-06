import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Checkbox = ({ name }) => {
  // Checkbox click
  const [isCheckedReact, setIsCheckedReact] = useState(false);
  const handleCheckboxChange = (event, checkboxName) => {
    const isChecked = event.target.checked;

    // Update state based on checkbox name
    if (checkboxName === "element") {
      setIsCheckedReact(isChecked);
    }
  };

  return (
    <>
      <div>
        {/* Checkmark button-Flowbite */}
        <div>
          <div className="grid">
            <div>
              <input
                type="checkbox"
                id={name}
                value=""
                className="hidden peer"
                required=""
                checked={isCheckedReact}
                onChange={(event) => handleCheckboxChange(event, "element")}
              />
              <label
                htmlFor={name}
                className={`inline-flex items-center font-medium lg:font-semibold text-[12px] lg:text-[10px] leading-[18px] lg:leading-[15px] justify-between py-[7px] px-[10px] lg:py-[12px] lg:px-[15px] text-black500 border-[1px] border-gray900 rounded-[10px] lg:rounded-full cursor-pointer  ${
                  isCheckedReact ? "bg-blue-500 text-white" : ""
                }`}
              >
                <div className="block">
                  <div className="w-full">{name}</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkbox;

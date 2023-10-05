import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import minus from "@/icons/form/minus.svg";
import plus from "@/icons/form/plus.svg";

// criteriaId-from the main page
const InputPlusMinus = ({criteriaId,updateCriteriaValue,updateCriteriaId}) => {
  // value takes Service Criteria ID each time a new input is clicked
  const [value, setValue] = useState(0);
  // newId takes Service Criteria name each time a new input is clicked
  const [newId, setnewId] = useState(criteriaId)
  
  const handleIncrease = () => {
    setValue(value + 1);
    updateCriteriaValue(value + 1);
    updateCriteriaId(newId)
  };

  const handleDecrease = () => {
    if(value>0){
      setValue(value - 1);
      updateCriteriaValue(value - 1);
      updateCriteriaId(newId)

        }
  };
  
  return (
    <div
      className="inline-flex items-center justify-between border-none lg:border lg:border-solid lg:border-gray900 rounded-full 
    w-full lg:w-auto
    lg:px-[5px] lg:h-[40px]"
    >

      <div className="flex flex-row">
        <button
          className="bg-cagiraz rounded-[5px] lg:rounded-full w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] flex justify-center focus:outline-none"
          onClick={handleDecrease}
        >
          <Image src={minus} alt="minus_logo" className="self-center" />
        </button>
        <input
          className="min-w-[8px] max-w-[30px] text-center mx-[5px] lg:mx-[8px] focus:outline-none bg-white"
          type=""
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="bg-cagiraz rounded-[5px] lg:rounded-full w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] flex justify-center focus:outline-none"
          onClick={handleIncrease}
        >
          <Image src={plus} alt="plus_logo" className="self-center" />
        </button>
      </div>
    </div>
  );
};

export default InputPlusMinus;


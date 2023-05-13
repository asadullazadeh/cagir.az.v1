import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import minus from "@/icons/form/minus.svg";
import plus from "@/icons/form/plus.svg";

const CustomInput = () => {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue(value + 1);
  };

  const handleDecrease = () => {
    setValue(value - 1);
  };

  return (
    <div className="inline-flex items-center border border-black rounded-full pl-[15px] pr-[5px] h-[40px]">
      <label className="text-gray-600 pr-[8px]">Label</label>
      <button
        className="bg-cagiraz rounded-full w-[30px] h-[30px] flex justify-center focus:outline-none"
        onClick={handleDecrease}
      >
        <Image src={minus} alt="minus_logo" className="self-center" />
      </button>
      <input
        className="min-w-[8px] max-w-[30px] text-center mx-[8px] focus:outline-none	"
        type=""
        value={value}
      />
      <button
        className="bg-cagiraz rounded-full w-[30px] h-[30px] flex justify-center focus:outline-none"
        onClick={handleIncrease}
      >
        <Image src={plus} alt="plus_logo" className="self-center" />
      </button>
    </div>
  );
};

export default CustomInput;

{
  /* <div className="flex">
      <div className="inline flex items-center border border-black rounded-full pl-[15px] h-[40px]">
        <div div className="w-auto pr-[8px]">
          <p>Divan təmizliyi (1 oturacaq)</p>
        </div>
        <button
          className="bg-cagiraz text-white w-[30px] h-[30px] rounded-full flex justify-center"
          type="button"
          onClick={handleDecrease}
        >
          <Image src={minus} alt="minus_logo" className="self-center" />
        </button>

          <input type="number" value={value} className="text-center inline-block mx-[8px]" />

        <button
          className="bg-cagiraz text-white w-[30px] h-[30px] rounded-full flex justify-center"
          type="button"
          onClick={handleIncrease}
        >
          <Image src={plus} alt="plus" className="self-center" />
        </button>
      </div>
    </div> */
}

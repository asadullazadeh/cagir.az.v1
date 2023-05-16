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
    <div
      className="inline-flex items-center justify-between border-none lg:border lg:border-solid lg:border-gray900 rounded-full 
    w-full lg:w-auto
    lg:pl-[15px] pr-[5px] lg:h-[40px]"
    >
      <label className="text-gray-600 pr-[8px] font-semibold text-[10px] leading-[15px] ">
        <p>Custom input</p>
      </label>
      <div className="flex flex-row">
        <button
          className="bg-cagiraz rounded-[5px] lg:rounded-full w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] flex justify-center focus:outline-none"
          onClick={handleDecrease}
        >
          <Image src={minus} alt="minus_logo" className="self-center" />
        </button>
        <input
          className="min-w-[8px] max-w-[30px] text-center mx-[5px] lg:mx-[8px] focus:outline-none"
          type=""
          value={value}
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

export default CustomInput;

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import minus from "@/icons/form/minus.svg";
// import plus from "@/icons/form/plus.svg";

// const CustomInput = () => {
//   const [value, setValue] = useState(0);

//   const handleIncrease = () => {
//     setValue(value + 1);
//   };

//   const handleDecrease = () => {
//     setValue(value - 1);
//   };

//   return (
//     <div className="inline-flex items-center border-none lg:border lg:border-solid lg:border-gray900 rounded-full
//     pl-[15px] pr-[5px] h-[40px]">
//       <label className="text-gray-600 pr-[8px] font-semibold text-[10px] leading-[15px] ">
//         <p>Custom input</p>
//       </label>
//       <button
//         className="bg-cagiraz rounded-[5px] lg:rounded-full w-[30px] h-[30px] flex justify-center focus:outline-none"
//         onClick={handleDecrease}
//       >
//         <Image src={minus} alt="minus_logo" className="self-center" />
//       </button>
//       <input
//         className="min-w-[8px] max-w-[30px] text-center mx-[8px] focus:outline-none	"
//         type=""
//         value={value}
//       />
//       <button
//         className="bg-cagiraz rounded-[5px] lg:rounded-full w-[30px] h-[30px] flex justify-center focus:outline-none"
//         onClick={handleIncrease}
//       >
//         <Image src={plus} alt="plus_logo" className="self-center" />
//       </button>
//     </div>
//   );
// };

// export default CustomInput;

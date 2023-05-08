import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Checkbox = ({ text, initialState }) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div >
        {/* Checkbox button-Flowbite */}
              <input
                type="checkbox"
                id={text}
                value=""
                className="hidden peer"
                required=""
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor={text}
                className={`inline-flex items-center justify-between py-[12.5px] px-[15px] text-black500 bg-white border-2 border-gray-200 rounded-full cursor-pointer ${
                  isChecked ? "bg-[#3598EA] text-white" : ""
                }`}
              >
                <div className="block">
                  <div className="w-full text-lg font-semibold">{text}</div>
                </div>
              </label>
      </div>
    </>
  );
};

export default Checkbox;

























// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Checkbox = () => {
//   // Checkbox click
//   const [isCheckedReact, setIsCheckedReact] = useState(false);
//   const [isCheckedVue, setIsCheckedVue] = useState(false);
//   const [isCheckedAngular, setIsCheckedAngular] = useState(false);

//   const handleCheckboxChange = (event, checkboxName) => {
//     const isChecked = event.target.checked;

//     // Update state based on checkbox name
//     if (checkboxName === "react") {
//       setIsCheckedReact(isChecked);
//     } else if (checkboxName === "vue") {
//       setIsCheckedVue(isChecked);
//     } else if (checkboxName === "angular") {
//       setIsCheckedAngular(isChecked);
//     }
//   };

//   return (
//     <>
//       <div>
//         {/* Checkbox button-Flowbite */}
//         <div>
//           <h3 className="mb-5 text-lg font-medium text-gray-900">
//             Customized checkbox:
//           </h3>
//           <ul className="grid md:grid-cols-3">
            
//             <li>
//               <input
//                 type="checkbox"
//                 id="react-option"
//                 value=""
//                 className="hidden peer"
//                 required=""
//                 checked={isCheckedReact}
//                 onChange={(event) => handleCheckboxChange(event, "react")}
//               />
//               <label
//                 htmlFor="react-option"
//                 className={`inline-flex items-center justify-between py-[12.5px] px-[15px] text-black500 bg-white border-2 border-gray-200 rounded-full cursor-pointer  ${
//                   isCheckedReact ? "bg-blue-500 text-white" : ""
//                 }`}
//               >
//                 <div className="block">
//                   <div className="w-full text-lg font-semibold">React Js</div>
//                 </div>
//               </label>
//             </li>

//             <li>
//               <input
//                 type="checkbox"
//                 id="vue-option"
//                 value=""
//                 className="hidden peer"
//                 checked={isCheckedVue}
//                 onChange={(event) => handleCheckboxChange(event, "vue")}
//               />
//               <label
//                 htmlFor="vue-option"
//                 className={`inline-flex items-center justify-between py-[12.5px] px-[15px] text-black500 bg-white border-2 border-gray-200 rounded-full cursor-pointer  ${
//                   isCheckedVue ? "bg-blue-500 text-white" : ""
//                 }`}
//               >
//                 <div className="block">
//                   <div className="w-full text-full font-semibold">Vue Js</div>
//                 </div>
//               </label>
//             </li>
//             <li>
//               <input
//                 type="checkbox"
//                 id="angular-option"
//                 value=""
//                 className="hidden peer"
//                 checked={isCheckedAngular}
//                 onChange={(event) => handleCheckboxChange(event, "angular")}
//               />
//               <label
//                 htmlFor="angular-option"
//                 className={`inline-flex items-center justify-between py-[12.5px] px-[15px] text-black500 bg-white border-2 border-gray-200 rounded-full cursor-pointer  ${
//                   isCheckedAngular ? "bg-blue-500 text-white" : ""
//                 }`}
//               >
//                 <div className="block">
//                   <div className="w-full text-lg font-semibold">Angular</div>
//                 </div>
//               </label>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Checkbox;

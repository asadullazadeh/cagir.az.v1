import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";



const Qiymet = () => {
  // this it for
  const [isHidden, setIsHidden] = useState(true);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <div>
        {/* qiymet part */}
        <div>
          <div className="flex justify-between items-center w-[300px] space-y-[5px]">
            <p className="font-poppins font-semibold text-[16px] leading-[24px] text-gray900 ">
              Məbləğ
            </p>
            <p className="font-poppins font-semibold text-[18px] leading-[27px] text-black500">
              100 AZN
            </p>
          </div>

          <div className="flex justify-between items-center w-[300px] ">
            <p className="font-poppins font-semibold text-[16px] leading-[24px] text-gray900 ">
              Endirim
            </p>
            <p className="font-poppins font-semibold text-[18px] leading-[27px] text-black500">
              20 AZN
            </p>
          </div>

          <div className="flex justify-between items-center w-[300px] ">
            <p className="font-poppins font-semibold text-[16px] leading-[24px] text-gray900 ">
              Yekun
            </p>
            <p className="font-poppins font-bold text-[26px] leading-[39px] text-cagiraz">
              80 AZN
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qiymet;













// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";



// const Qiymet = () => {
//   // this it for
//   const [isHidden, setIsHidden] = useState(true);
//   const toggleHidden = () => {
//     setIsHidden(!isHidden);
//   };

//   return (
//     <>
//       <div>
//         {/* qiymet part */}
//         <div>
//           <div className="flex justify-between items-center w-[300px] space-y-[5px]">
//             <p className="font-poppins font-semibold text-[16px] leading-[24px] text-gray900 ">
//               Məbləğ
//             </p>
//             <p className="font-poppins font-semibold text-[18px] leading-[27px] text-black500">
//               100 AZN
//             </p>
//           </div>

//           <div className="flex justify-between items-center w-[300px] ">
//             <p className="font-poppins font-semibold text-[16px] leading-[24px] text-gray900 ">
//               Endirim
//             </p>
//             <p className="font-poppins font-semibold text-[18px] leading-[27px] text-black500">
//               20 AZN
//             </p>
//           </div>

//           <div className="flex justify-between items-center w-[300px] ">
//             <p className="font-poppins font-semibold text-[16px] leading-[24px] text-gray900 ">
//               Yekun
//             </p>
//             <p className="font-poppins font-bold text-[26px] leading-[39px] text-cagiraz">
//               80 AZN
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Qiymet;

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import info_btn from "@/icons/form/info_btn.svg";
import InputBtnTransition from "@/src/components/input/input_btn_nb_transition";
const phonePrefixes = ["+50", "+51", "+55", "+70", "+77", "+90"];
const inputNumber = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedOption, setSelectedOption] = useState(
    `${phonePrefixes}`.split(",")[0]
  );
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="flex flex-row justify-center gap-x-[10px]">
      <div className="">
        <button
          className="flex items-center justify-between h-full px-[20px] py-[5px] text-[14px] leading-[21px] font-extrabold
         text-black bg-white rounded-full focus:outline-none 
         border"
          type="button"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <svg
            className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 16a1 1 0 01-.7-.3l-5-5a1 1 0 011.4-1.4L10 13.6l4.3-4.3a1 1 0 011.4 1.4l-5 5a1 1 0 01-.7.3z" />
          </svg>
        </button>
        {phonePrefixes && (
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } absolute z-10  mt-[10px] mx-[10px] rounded-[10px] font-extrabold border bg-white`}
          >
            {phonePrefixes.map((phonePrefix, index) => (
              <div key={index}>
                <li
                  className="px-[15px] py-[5px] hover:bg-gray-100
                  text-black focus:outline-none text-[14px] 
                  leading-[21px]"
                  onClick={() => handleOptionClick(phonePrefix)}
                >
                  {phonePrefix}
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
      <InputBtnTransition />
    </div>
  );
};

export default inputNumber;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import arrow from "@/icons/arrow.svg";
// import arrow_mobile from "@/icons/arrow_mobile.svg";
// // import OrderCardPrimary from "@/src/components/cards/order_card_primary"
// import OrderCard from "@/src/components/cards/order_card_primary";
// import Carousel1 from "@/src/components/main/carousel1";
// import Reyler from "@/src/components/main/reyler";
// import Icracilar from "@/src/components/main/icraci";
// import Musteriler from "@/src/components/main/musteriler";

// function Example() {
//   const [responseData, setResponseData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://api.cagir.az/api/service/getAllForFront", {
//         headers: {
//           "Accept-Language": "az",
//         },
//       })
//       .then((response) => {
//         // Handle the response data
//         setResponseData(response.data.result);
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div className="">
//       {/* <Carousel1 {...{ carouselPhotos1 }} /> */}
//       <OrderCard responseData={responseData} />
//       <Reyler parentId={1} />
//       <Icracilar parentId={1} />
//       <Musteriler />
//     </div>
//   );
// }

// export default Example;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ModalStandart from "@/src/components/modal/modal_stand"
// function Example() {
//   const config = {
//     headers: {
//       "Accept-Language": "az",
//     },
//   };

//   // bas xidmetler. Burada her bir bas xidmet ucun melumatlar var: description....
//   axios
//     .get("https://api.cagir.az/api/service/getAllForFront", config)
//     .then((response) => {
//       // console.log(response);
//     });

//   // bura sub xidmetlerdir. linkin sonundaki id ile diger api den gelen,
//   // yeni hansi xidmet sehvesine gediremse, bu linkdeki olan alt xidmetler gorsenmelidir
//   axios
//     .get("https://api.cagir.az/api/serviceCriteria/getAllWithParent", config)
//     .then((response) => {
//       // console.log(response);
//     });

//   axios
//     .get(
//       "https://api.cagir.az/api/service/getAllForFront",config
//     )
//     .then((response) => {
//       console.log(response);
//     });

//   // axios.post('https://api.cagir.az/api/service/service-name',{"titleUrl":"temizlik-xidmeti"},config).then(response => {

//   //   console.log(response);
//   // });

//   return <div>
//       {/* You can open the modal using ID.showModal() method */}
//       <p>qezqz</p>
//         </div>;
// }

// export default Example;

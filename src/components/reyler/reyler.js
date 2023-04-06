// import Image from "next/image";
// import Link from "next/link";
// import logo from "@/public/logo_cagiraz.png";
// import { useState } from "react";

// import icon_az from "@/icons/icon_az.png";
// import icon_en from "@/icons/icon_en.png";
// import icon_ru from "@/icons/icon_ru.png";

// export const Navbar = () => {

//   const options = [
//     { value: "1", label: <Image src={icon_az} alt="Azerbaijan flag" width="16" height="16" /> },
//     { value: "2", label: <Image src={icon_en} alt="United Kingdom flag" width="16" height="16" /> },
//     { value: "3", label: <Image src={icon_ru} alt="Russia flag" width="16" height="16" /> },
//   ];
  
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setIsDropdownOpen(false);
//   };


//   return (
//     <header>
//       <nav className="px-[60px]">
//         <div className="relative z-50 flex flex-wrap justify-between w-[1392px] h-[51px]">
//           {/* Logo */}
//           <Link href="/" className="py-[12px] w-[105px] h-[26px]">
//             <Image src={logo}  alt="Cagir.az logo" />
//           </Link>
//           {/* Icons on the right side */}
//           <ul className="flex flex-row items-center space-x-[30px]">
//             {/* search icon */}

//             <li>
//               <Link class="group flex relative" href="/">
//                 <span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-search text-gray900 hover:text-black500"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//                   </svg>
//                 </span>
//                 <span
//                   className="w-[47px] h-[23px] mt-[9px] rounded-[5px] py-[4px] px-[6px] font-poppins font-medium 
//                   text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2 
//                   -translate-x-1/2 translate-y-full opacity-0"
//                 >
//                   Axtarış
//                 </span>
//               </Link>
//             </li>

//             {/* wallet icon */}
//             <li>
//               <Link class="group flex relative" href="/">
//                 <span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-wallet2 text-gray900 hover:text-black500"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
//                   </svg>
//                 </span>
//                 <span
//                   className="w-[47px] h-[23px] mt-[9px] rounded-[5px] py-[4px] px-[6px] font-poppins font-medium 
//                   text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2 
//                   -translate-x-1/2 translate-y-full opacity-0"
//                 >
//                   Ödəniş
//                 </span>
//               </Link>
//             </li>
//             {/* Profile icon */}
//             <li>
//               <Link class="group flex relative" href="/">
//                 <span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-person text-gray900 hover:text-black500"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
//                   </svg>
//                 </span>
//                 <span
//                   className="w-[47px] h-[23px] mt-[9px] rounded-[5px] py-[4px] px-[6px] font-poppins font-medium 
//                   text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2 
//                   -translate-x-1/2 translate-y-full opacity-0"
//                 >
//                   Giriş et
//                 </span>
//               </Link>
//             </li>




//             {/* Language choice section */}
//             <li> 










//             <div className="">
//               <div className="dropdown inline-block relative">
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   className="bg-gray-300 w-[19px] h-[19px] font-semibold py-1 px-1 rounded-full inline-flex items-center focus:outline-none"
//                 >
//                   <span className="mr-1">{selectedOption.label}</span>
                  
//                 </button>
//                 <ul
//                   className={`dropdown-menu absolute ${
//                     isDropdownOpen ? "block" : "hidden"
//                   } text-gray-700 pt-1`}
//                 >
//                   {options
//                     .filter((option) => option.value !== selectedOption.value)
//                     .map((option) => (
//                       <li key={option.value}>
//                         <button
//                           onClick={() => handleOptionClick(option)}
//                           className="rounded-full bg-gray-200 hover:bg-gray-400 py-1 px-1 block whitespace-no-wrap w-full"
//                         >
//                           {option.label}
//                         </button>
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//             </div>
















//             </li>
//           </ul>
//         </div>

//         <div className="relative z-40 w-[1392px] h-[57px] border-b-[1px] border-solid border-white200">
//           <div className="flex justify-between">
//             <ul className="flex flex-row font-poppins not-italic font-semibold text-sm leading-[21px] text-gray500 space-x-[40px]">
//               <li className="w-[117px] h-[21px] pt-[13px] pb-[22px]">
//                 <Link href="/usta/kombi-ustasi">
//                   <p className="transition duration-300 hover:text-black">
//                     Təmizlik xidməti
//                   </p>
//                 </Link>
//               </li>
//               <li className="w-[94px] h-[21px] pt-[13px] pb-[22px]">
//                 <Link href="/usta/kombi-ustasi">
//                   <p className="transition duration-300 hover:text-black">
//                     Kombi ustası
//                   </p>
//                 </Link>
//               </li>
//               <li className="w-[118px] h-[21px] pt-[13px] pb-[22px]">
//                 <Link href="/usta/kombi-ustasi">
//                   <p className="transition duration-300 hover:text-black">
//                     Santexnik ustasi
//                   </p>
//                 </Link>
//               </li>
//               <li className="w-[132px] h-[21px] pt-[13px] pb-[22px]">
//                 <Link href="/usta/kombi-ustasi">
//                   <p className="transition duration-300 hover:text-black">
//                     Kondisioner ustası
//                   </p>
//                 </Link>
//               </li>
//               <li className="w-[135px] h-[21px] pt-[13px] pb-[22px]">
//                 <Link href="/usta/kombi-ustasi">
//                   <p className="transition duration-300 hover:text-black">
//                     Paltaryuyan ustası
//                   </p>
//                 </Link>
//               </li>
//               <li className="w-[99px] h-[21px] pt-[13px] pb-[22px]">
//                 <Link href="/usta/kombi-ustasi">
//                   <p className="transition duration-300 hover:text-black">
//                     Elektrik ustası
//                   </p>
//                 </Link>
//               </li>
//               <li className="w-[109px] h-[21px] pt-[13px] pb-[22px]">
//                 <Link href="/usta/kombi-ustasi">
//                   <p className="transition duration-300 hover:text-black">
//                     Digər xidmətlər
//                   </p>
//                 </Link>
//               </li>
//             </ul>

//             <div className="pt-[7px] pb-[9px]">
//               <Link href="/profil">
//                 <button className="bg-blue-500 text-white hover:text-white font-bold py-2 px-6 rounded transition duration-400 rounded-full transform hover:-translate-y-1 shadow-md hover:shadow-lg focus:shadow-lg">
//                   Qeydiyyat
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

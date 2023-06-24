import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";
import arrow_right from "@/icons/arrow_right.svg";
const Ustalar = ({ ustalar }) => (
  <>
    <div className="">
      <h2 className="my-h2 mb-0 lg:mb-[15px] text-center">Usta xidməti</h2>
      <h5
        className="relative text-center font-semibold lg:font-bold text-[12px] sm:text-[15px] md:text-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 
      leading-[18px] sm:leading-[22px] md:leading-[27px] lg:leading-[32px] xl:leading-[37px] 2xl:leading-[42px] mb-[15px] lg:mb-[30px] text-gray900"
      >
        Ən çox axtarılan xidmətlər
      </h5>

      <ul
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[15px] sm:gap-[20px] md:gap-[25px] lg:gap-[35px]
       xl:gap-y-[51px] 2xl:gap-[60px]"
      >
        {ustalar?.map((usta) => (
          <li
            key={usta.title}
            className="rounded-[10px] lg:rounded-[25px] drop-shadow-cardAlt lg:drop-shadow-none lg:hover:drop-shadow-cardAlt transition duration-300 bg-white"
          >
            <Link
              href="#"
              className="flex flex-row sm:flex-col
              rounded-[10px] sm:rounded-[25px]
              p-[10px] sm:p-[15px]
              space-x-[15px] sm:space-x-0
              "
            >
              <Image
                width={272}
                height={205}
                src={usta.photo}
                alt="Image description"
                className="w-[70px] sm:w-full rounded-[5px] sm:rounded-[20px]
                  object-cover object-center"
              />

              <div className="flex items-center justify-between w-full pt-[5px] sm:pt-[10px] lg:pt-[15px]">
                <h5 className="font-bold text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px]  text-black500">
                  {usta.title}
                </h5>
                {/* <p className="font-medium lg:font-semibold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-gray900 mt-0 lg:mt-[4px]">
                    {usta.price}
                  </p> */}

                <div className="transition duration-300 group-hover:block">
                  <Image src={arrow_right} alt="arrow_right_icon" className="w-[28px]" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Ustalar;

// import Image from "next/image";
// import Link from "next/link";
// import arrow from "@/icons/arrow.svg";

// const Ustalar = ({ ustalar }) => (
//   <>
//     <div className="">
//       <h2 className="my-h2 mb-0 lg:mb-[15px] text-center">Usta xidməti</h2>
//       <h5
//         className="relative text-center font-semibold lg:font-bold text-[12px] sm:text-[15px] md:text-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px]
//       leading-[18px] sm:leading-[22px] md:leading-[27px] lg:leading-[32px] xl:leading-[37px] 2xl:leading-[42px] mb-[15px] lg:mb-[30px] text-gray900"
//       >
//         Ən çox axtarılan xidmətlər
//       </h5>

//       <ul
//         className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[15px] sm:gap-y-[24px] md:gap-y-[33px] lg:gap-y-[42px]
//        xl:gap-y-[51px] 2xl:gap-[60px]"
//       >
//         {ustalar?.map((usta) => (
//           <li
//             key={usta.title}
//             className="rounded-[10px] lg:rounded-[25px] drop-shadow-cardAlt lg:drop-shadow-none lg:hover:drop-shadow-cardAlt transition duration-300 bg-white"
//           >
//             <Link
//               href="#"
//               className="flex flex-row sm:flex-col
//               rounded-[10px] sm:rounded-[25px]
//               p-[10px] sm:p-[15px]
//               space-x-[15px] sm:space-x-0
//               "
//             >
//               <Image
//                 width={272}
//                 height={205}
//                 src={usta.photo}
//                 alt="Image description"
//                 className="w-[70px] sm:w-full rounded-[5px] sm:rounded-[20px]
//                   object-cover object-center"
//               />

//               <div className="flex items-center justify-between w-full">
//                 <div className="flex flex-col justify-center">
//                   <h5 className="font-bold text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] text-black500">
//                     {usta.title}
//                   </h5>
//                   <p className="font-medium lg:font-semibold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-gray900 mt-0 lg:mt-[4px]">
//                     {usta.price}
//                   </p>
//                 </div>

//                 <div className="transition duration-300 group-hover:block">
//                   <Image src={arrow} alt="arrow_icon" />
//                 </div>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </>
// );

// export default Ustalar;

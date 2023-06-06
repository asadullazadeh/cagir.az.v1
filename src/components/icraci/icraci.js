import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";

const Icracilar = ({ icracilar }) => (
  <>
    <div className="">
      <h2 className="my-h2 mb-0 lg:mb-[15px] text-center">İcraçı profilləri</h2>
      <div className="grid place-items-end">
        <Image
          className="w-[22px] lg:w-[28px] h-[14px] lg:h-[24px]"
          src={arrow}
          alt="arrow_icon"
        />
      </div>

      <div className="overflow-x-scroll overflow-y-hidden ">
        <div
          className="flex gap-x-[15px] sm:gap-x-[24px] md:gap-x-[31px] lg:gap-x-[40px] xl:gap-x-[50px] 2xl:gap-x-[60px] 
        lg:w-[302px] lg:h-[277px] "
        >
          {icracilar?.map((icraci) => (
            <div key={icraci.id}>
              <div
                className="w-full h-full 
              rounded-[10px] lg:rounded-[20px] flex flex-col"
              >
                <div className="p-[10px] lg:p-[30px] space-y-[10px] lg:space-y-[15px]">
                  {/* photo, name */}
                  <div className="flex gap-x-[10px] lg:gap-x-[15px] items-center">
                    <Image
                      width={200}
                      height={200}
                      src={icraci.photo}
                      alt="Profile picture"
                      className="rounded-full w-[65px] lg:w-[112px] h-[65px] lg:h-[112px] object-cover object-center"
                    />
                    <div className="flex flex-col">
                      <h6
                        className="
                        font-semibold lg:font-bold text-[12px] lg:text-[14px] leading-[18px] 
                        lg:leading-[21px] text-black500"
                      >
                        {icraci.name}
                      </h6>

                      <p
                        className="lg:font-semibold italic text-[8px] lg:text-[12px]  
                        lg:leading-[18px] text-black100"
                      >
                        {icraci.job}
                      </p>
                    </div>
                  </div>

                  {/* icraci */}
                  <div className="w-[175px] lg:w-[265px] h-full">
                    <p
                      className="lg:font-semibold italic lg:text-[12px] 
                    text-[12px] lg:leading-[18px] text-black100 w-full aspect-[175/60]"
                    >
                      {icraci.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Icracilar;

// import Image from "next/image";
// import Link from "next/link";
// import arrow from "@/icons/arrow.svg";

// export default function Icracilar({ icracilar }) {
//   return (
//     <>
//       <div className="px-[10px] lg:px-[60px]">
//         {/* right arrow sign */}
//         <h2 className="text-center font-semibold text-[24px] leading-[36px] lg:font-semibold
//         lg:text-[36px] lg:leading-[54px] mb-[15px] lg:mb-[90px] text-black500">İcraçı profilləri
//         </h2>
//         <div className="grid place-items-end">
//         <Image
//           className="w-[22px] lg:w-[28px] h-[14px] h-[24px]"
//           src={arrow}
//           alt="arrow_icon"
//         />
//       </div>

//         <div className="overflow-x-scroll overflow-hidden">
//           <div className="flex gap-x-[60px]">
//             {icracilar?.map((icraci) => (
//               <div key={icraci.id}>
//                 <div className="relative rounded-[10px] lg:rounded-[20px] flex flex-col ">

//                   <div className="flex gap-x-[10px] lg:gap-x-[15px]">
//                     <Image
//                       width={200}
//                       height={200}
//                       src={icraci.photo}
//                       alt="Profile picture"
//                       className="rounded-full w-[65px] lg:w-[112px] h-[65px] lg:h-[112px] object-cover object-center"
//                     />
//                     <div className="flex-row mt-[27px]">
//                     <h6
//                       className="w-[80px]
//                     font-semibold lg:font-bold text-[12px] lg:text-[14px] leading-[18px]
//                     lg:leading-[21px] text-black500"
//                     >
//                       <span>{icraci.name}</span>
//                     </h6>

//                     <p
//                       className="lg:font-semibold italic text-[8px] lg:text-[12px]
//                     text-[12px] lg:leading-[18px] text-black100"
//                     >
//                       {icraci.job}
//                     </p>
//                     </div>
//                   </div>

//                   {/* rey */}

//                   <p
//                       className="lg:font-semibold italic text-[8px] lg:text-[12px]
//                     text-[12px] lg:leading-[18px] text-black100 max-w-[175px] lg:max-w-[265px]"
//                     >
//                       {icraci.title}
//                     </p>

//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

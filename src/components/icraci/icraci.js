import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";

const Icracilar = ({ icracilar }) => (
  <>
    <div className="px-[10px] desktop:px-[60px]">
      <h2
        className="text-center font-semibold text-[24px] leading-[36px] 
      desktop:font-semibold desktop:text-[36px] desktop:leading-[54px] mb-[15px] desktop:mb-[90px] text-black500"
      >
        İcraçı profilləri
      </h2>
      <div className="grid place-items-end">
        <Image
          className="w-[22px] desktop:w-[28px] h-[14px] h-[24px]"
          src={arrow}
          alt="arrow_icon"
        />
      </div>

      <div className="overflow-x-scroll overflow-hidden">
        <div className="flex gap-x-[15px] desktop:gap-x-[60px]">
          {icracilar?.map((icraci) => (
            <div key={icraci.id}>
              <div className="relative rounded-[10px] desktop:rounded-[20px] flex flex-col ">
                <div className="p-[10px] desktop:p-[30px] space-y-[10px] desktop:space-y-[15px]">
                  {/* photo, name */}
                  <div className="flex gap-x-[10px] desktop:gap-x-[15px]">
                    <Image
                      width={200}
                      height={200}
                      src={icraci.photo}
                      alt="Profile picture"
                      className="rounded-full w-[65px] desktop:w-[112px] h-[65px] desktop:h-[112px] object-cover object-center"
                    />
                    <div className="flex-row justify-content">
                      <div class="grid grid-rows-2 grid-cols-1
                        font-semibold desktop:font-bold text-[12px] desktop:text-[14px] leading-[18px] 
                        desktop:leading-[21px] text-black500 mt-[2px] desktop:mt-[18px]">
                        <h6>{icraci.name}</h6>
                        </div>
                    

                      {/* <h6
                        className="w-[80px]
                    font-semibold desktop:font-bold text-[12px] desktop:text-[14px] leading-[18px] 
                    desktop:leading-[21px] text-black500 mt-[2px] desktop:mt-[18px]"
                      >
                        <span>{icraci.name}</span>
                      </h6> */}
                        <div class="grid grid-rows-2 grid-cols-1 desktop:font-semibold italic desktop:text-[12px] 
                        text-[12px] desktop:leading-[18px] text-black100">
                        <p>{icraci.job}</p>
                        </div>
                      {/* <p
                        className="desktop:font-semibold italic text-[8px] desktop:text-[12px] 
                    text-[12px] desktop:leading-[18px] text-black100"
                      >
                        {icraci.job}
                      </p> */}
                    </div>
                  </div>

                  {/* icraci */}
                  <div className="w-[140px] desktop:w-[222px] h-[36px] desktop:h-[54px] ">
                    <p
                      className="desktop:font-semibold italic text-[8px] desktop:text-[12px] 
                    text-[12px] desktop:leading-[18px] text-black100"
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
//       <div className="px-[10px] desktop:px-[60px]">
//         {/* right arrow sign */}
//         <h2 className="text-center font-semibold text-[24px] leading-[36px] desktop:font-semibold
//         desktop:text-[36px] desktop:leading-[54px] mb-[15px] desktop:mb-[90px] text-black500">İcraçı profilləri
//         </h2>
//         <div className="grid place-items-end">
//         <Image
//           className="w-[22px] desktop:w-[28px] h-[14px] h-[24px]"
//           src={arrow}
//           alt="arrow_icon"
//         />
//       </div>

//         <div className="overflow-x-scroll overflow-hidden">
//           <div className="flex gap-x-[60px]">
//             {icracilar?.map((icraci) => (
//               <div key={icraci.id}>
//                 <div className="relative rounded-[10px] desktop:rounded-[20px] flex flex-col ">

//                   <div className="flex gap-x-[10px] desktop:gap-x-[15px]">
//                     <Image
//                       width={200}
//                       height={200}
//                       src={icraci.photo}
//                       alt="Profile picture"
//                       className="rounded-full w-[65px] desktop:w-[112px] h-[65px] desktop:h-[112px] object-cover object-center"
//                     />
//                     <div className="flex-row mt-[27px]">
//                     <h6
//                       className="w-[80px]
//                     font-semibold desktop:font-bold text-[12px] desktop:text-[14px] leading-[18px]
//                     desktop:leading-[21px] text-black500"
//                     >
//                       <span>{icraci.name}</span>
//                     </h6>

//                     <p
//                       className="desktop:font-semibold italic text-[8px] desktop:text-[12px]
//                     text-[12px] desktop:leading-[18px] text-black100"
//                     >
//                       {icraci.job}
//                     </p>
//                     </div>
//                   </div>

//                   {/* rey */}

//                   <p
//                       className="desktop:font-semibold italic text-[8px] desktop:text-[12px]
//                     text-[12px] desktop:leading-[18px] text-black100 max-w-[175px] desktop:max-w-[265px]"
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

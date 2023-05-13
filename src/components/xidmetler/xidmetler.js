import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";

const Xidmetler = ({ xidmetler }) => (
  <>
    <div className="">
      <h2 className="my-h2 mb-[15px] lg:mb-[30px] text-center">Xidmətlər</h2>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[60px] px-[10px] lg:px-[60px]">
        {xidmetler?.slice(0, 6).map((xidmet) => (
          <li key={xidmet.id}>
            <Link
              href="#"
              className="block rounded-[10px] lg:rounded-[25px] bg-white p-[11px] lg:px-[26px] lg:pt-[26px] group
              hover:drop-shadow-card transition duration-300 "
            >
              <div className="relative mb-[5px] lg:mb-[15px]">
                <Image
                  width={367}
                  height={283}
                  src={xidmet.photo}
                  alt="Image description"
                  className="rounded-[5px] sm:rounded-[20px] w-full aspect-[123/96] object-cover object-center"
                />
              </div>

              <div className=" grid grid-rows-2 grid-cols-8 grid-flow-col">
                <div className="row-span-1 col-span-7">
                  <h5 className="font-bold text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] text-black500">
                    {xidmet.title}
                  </h5>
                </div>
                <div className="row-span-1 col-span-7">
                  <p className="font-poppins font-semibold text-[10px] lg:text-[14px] leading-[15px] lg:leading-[21px] text-gray900">
                    {xidmet.price}
                  </p>
                </div>
                <div className="row-span-2 col-span-1 flex justify-end items-center">
                  <div className="hidden absolute group-hover:block transition duration-300">
                    <Image src={arrow} alt="arrow_icon" />
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Xidmetler;

// import Image from "next/image";
// import Link from "next/link";
// import arrow from "@/icons/arrow.svg";

// const Xidmetler = ({ xidmetler }) => (
//   <>
//     <div className="grid place-items-center">
//       <h2
//         className="font-semibold lg:font-bold text-[16px] lg:text-[36px]
//         leading-[24px] lg:leading-[54px] text-black500 mb-0 lg:mb-[15px] text-center"
//       >
//         Xidmətlər
//       </h2>
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-[15px] lg:gap-[60px] px-[10px] lg:px-[60px]">
//         {xidmetler?.slice(0, 6).map((xidmet) => (
//           <div key={xidmet.id}>
//             <Link
//               href="#"
//               className="block rounded-[10px] lg:rounded-[25px] bg-white px-[11px] lg:pl-[26px] pt-[10px] lg:pt-[28px] lg:pr-[28px] group
//               hover:drop-shadow-card transition duration-300 "
//             >
//               <div className="relative mb-[5px] lg:mb-[15px]">
//                 <Image
//                   width={367}
//                   height={283}
//                   src={xidmet.photo}
//                   alt="Image description"
//                   className="rounded-[20px] w-full aspect-[123/96] object-cover object-center"
//                 />
//               </div>

//               <div className=" grid grid-rows-2 grid-cols-8 grid-flow-col">
//                 <div className="row-span-1 col-span-7">
//                   <h5 className="font-semibold text-[12px] leading-[18px] lg:font-bold lg:text-[20px] lg:leading-[30px]">
//                     {xidmet.title}
//                   </h5>
//                 </div>
//                 <div className="row-span-1 col-span-7">
//                   <p className="font-poppins font-semibold text-[10px] lg:text-[14px] leading-[15px] lg:leading-[21px] text-gray900">
//                     {xidmet.price}
//                   </p>
//                 </div>
//                 <div className="row-span-2 col-span-1 flex justify-end items-center">
//                   <div className="hidden absolute group-hover:block transition duration-300">
//                     <Image src={arrow} alt="arrow_icon" />
//                   </div>
//                 </div>
//               </div>

//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   </>
// );

// export default Xidmetler;

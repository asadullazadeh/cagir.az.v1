import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 4 },
};

function Reyler() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.cagir.az/api/providerFeed/getAllByServiceId?serviceId=1');
        const resultArrays = response.data.result; // Assuming the response structure has a "data" object containing a "result" object with arrays
        
        const formattedData = resultArrays.map((result) => ({
          name: result.providerName,
          star: result.star,
          description: result.description      
        }));
  
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  


  const childDataArray = Object.values(data).map((child) => ({
    jsxElement: (
      <div>
        <div key={child.name[0]}>
        <div
                  className="flex flex-col w-full aspect-[1/1] lg:aspect-[302/274] relative
              rounded-[10px] lg:rounded-[20px]"
                >
                  <div className="p-[10px] lg:p-[30px] space-y-[10px] lg:space-y-[15px]">
                    {/* photo, name */}
                    <div className="flex gap-x-[10px] lg:gap-x-[15px]">
                      <Image
                        width={65}
                        height={65}
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="Profile picture"
                        className="z-8 rounded-full w-[33px] lg:w-[65px] h-[33px] lg:h-[65px] ml-[3.5px] lg:ml-[7px] mt-[3.5px] lg:mt-[7px] object-cover object-center"
                      />
                      <div className="absolute z-[-5]">
                        <div className="absolute rounded-full bg-bluebckg opacity-[15%] w-[33px] lg:w-[65px] h-[33px] lg:h-[65px] mt-0 ml-0"></div>
                        <div className="absolute rounded-full bg-bluebckg opacity-[15%] w-[33px] lg:w-[65px] h-[33px] lg:h-[65px] mt-[3.5px] lg:mt-[7px] ml-[7px] lg:ml-[14px]"></div>
                        <div className="absolute rounded-full bg-bluebckg opacity-[15%] w-[33px] lg:w-[65px] h-[33px] lg:h-[65px] ml-[1px] lg:ml-[2px] mt-[7px] lg:lg:mt-[14px]"></div>
                      </div>

                      <h6
                        className="w-[80px]
                    font-semibold text-[12px] leading-[18px] 
                    text-black500 mt-[2px] lg:mt-[18px]"
                      >
                        <span>{child.name}</span>
                      </h6>
                    </div>

                    {/* rey */}
                    <div className="overflow-hidden ">
                      <p
                        className="italic font-semibold lg:font-bold text-[8px] lg:text-[14px] leading-[12px]
                      lg:leading-[21px] text-black100"
                      >
                        {child.description}
                      </p>
                    </div>

                    {/* review stars */}
                    <div class="rating rating-sm">
                      {Array.from({ length: child.star }, (_, index) => (
                        <input
                          key={index}
                          type=""
                          name={`rating-${index}`}
                          className="mask mask-star-2 bg-[#F9C00B]"
                        />
                      ))}
                    </div>

                    {/* scroll section for services  */}
                    {/* <div className="overflow-x-scroll overflow-hidden w-[140px] lg:w-[270px]">
                      <div className="flex gap-x-[4px]">
                        {rey.jobs?.map((job) => (
                        <div key={job.name}>
                          <div className="border rounded-lg border-cagiraz">
                            <p className="font-semibold text-[10px] leading-[15px] px-[10px] py-[4px] text-cagiraz whitespace-nowrap">
                              {job}
                            </p>
                          </div>
                        </div>
                      ))}
                      </div>
                    </div> */}
                  </div>
                </div>
        </div>
      </div>
    ),
  }));

  return (
    <div>
      <h2 className="my-h2 mb-0 lg:mb-[15px] text-center">İcraçı profilləri</h2>
      <div className="grid place-items-end">
        <Image className="w-[22px] lg:w-[28px] h-[14px] lg:h-[24px]" src={arrow} alt="arrow_icon" />
        </div>
      <AliceCarousel
        // activeIndex = {1}
        animationDuration={1300}
        animationType="fadeout"
        // autoHeight={true}
        //autoWidth={true}
        // autoPlayControls
        autoPlayInterval={1300}
        autoPlay
        autoPlayStrategy="action"
        controlsStrategy="alternate"
        infinite
        mouseTracking
        items={childDataArray.map((child) => child.jsxElement)}
        responsive={responsive}
        // disableSlideInfo={false}
        animationEasingFunction="ease"
        disableButtonsControls
        paddingLeft={0}
        paddingRight={0}
        keyboardNavigation
        touchTracking={false}
        touchMoveDefaultEvents={false}
      />
    </div>
  );
}

export default Reyler;

// import Image from "next/image";
// import Link from "next/link";
// import arrow from "@/icons/arrow.svg";

// const Reyler = ({ reyler }) => (
//   <>
//     <div className="">
//       <h2
//         className="my-h2 mb-0 lg:mb-[15px] text-center"
//       >
//         Müştəri rəyləri
//       </h2>
//       <div className="grid place-items-end">
//         <Image
//           className="w-[22px] lg:w-[28px] h-[14px] lg:h-[24px]"
//           src={arrow}
//           alt="arrow_icon"
//         />
//       </div>

//       <div className="overflow-x-scroll overflow-hidden">
//         <div className="flex gap-x-[15px] lg:gap-x-[60px]">
//           {reyler?.map((rey) => (
//             <div key={rey.id}>
//               <div className="flex flex-col w-full aspect-[1/1] lg:aspect-[302/274] relative
//               rounded-[10px] lg:rounded-[20px]">
//                 <div className="p-[10px] lg:p-[30px] space-y-[10px] lg:space-y-[15px]">
//                   {/* photo, name */}
//                   <div className="flex gap-x-[10px] lg:gap-x-[15px]">
//                     <Image
//                       width={65}
//                       height={65}
//                       src={rey.photo}
//                       alt="Profile picture"
//                       className="z-8 rounded-full w-[33px] lg:w-[65px] h-[33px] lg:h-[65px] ml-[3.5px] lg:ml-[7px] mt-[3.5px] lg:mt-[7px] object-cover object-center"
//                     />
//                     <div className="absolute z-[-5]">
//                       <div className="absolute rounded-full bg-bluebckg opacity-[15%] w-[33px] lg:w-[65px] h-[33px] lg:h-[65px] mt-0 ml-0"></div>
//                       <div className="absolute rounded-full bg-bluebckg opacity-[15%] w-[33px] lg:w-[65px] h-[33px] lg:h-[65px] mt-[3.5px] lg:mt-[7px] ml-[7px] lg:ml-[14px]"></div>
//                       <div className="absolute rounded-full bg-bluebckg opacity-[15%] w-[33px] lg:w-[65px] h-[33px] lg:h-[65px] ml-[1px] lg:ml-[2px] mt-[7px] lg:lg:mt-[14px]"></div>
//                     </div>

//                     <h6
//                       className="w-[80px]
//                     font-semibold text-[12px] leading-[18px]
//                     text-black500 mt-[2px] lg:mt-[18px]"
//                     >
//                       <span>{rey.name}</span>
//                     </h6>
//                   </div>

//                   {/* rey */}
//                   <div className="overflow-hidden w-full aspect-[140/36]">
//                     <p
//                       className="italic font-semibold lg:font-bold text-[8px] lg:text-[14px] leading-[12px]
//                       lg:leading-[21px] text-black100"
//                     >
//                       {rey.rey}
//                     </p>
//                   </div>

//                   {/* review stars */}
//                   <div className="flex items-center mt-[15px]">
//                     <svg
//                       aria-hidden="true"
//                       className="w-[14px] h-[13px] text-yellow-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>First star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-[14px] h-[13px] text-yellow-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Second star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-[14px] h-[13px] text-yellow-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Third star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-[14px] h-[13px] text-yellow-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Fourth star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <svg
//                       aria-hidden="true"
//                       className="w-[14px] h-[13px] text-yellow-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <title>Fiveth star</title>
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                   </div>

//                   {/* scroll section for services  */}
//                   <div className="overflow-x-scroll overflow-hidden w-[140px] lg:w-[270px]">
//                     <div className="flex gap-x-[4px]">
//                       {rey.jobs?.map((job) => (
//                         <div key={job.name}>
//                           <div className="border rounded-lg border-cagiraz">
//                             <p className="font-semibold text-[10px] leading-[15px] px-[10px] py-[4px] text-cagiraz whitespace-nowrap">
//                               {job}
//                             </p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </>
// );

// export default Reyler;

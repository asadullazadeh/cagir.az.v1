// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import arrow_right from "@/icons/arrow_right.svg";
// import Head from "next/head";
// import Badge from "@/src/components/others/badge";
// import Butun_xidmetler from "@/src/components/main/butun_xidmetler";
// import Reels from "@/src/components/main/reels";
// import Banner from "@/src/components/main/banner";
// import Reyler from "@/src/components/main/reyler";
// import Icracilar from "@/src/components/main/icraci";

// function Tesvir({parentId}) {
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const config = {
//     headers: {
//       "Accept-Language": "az",
//     },
//   };
//   const router = useRouter();
//   const mainService = "temizlik-xidmeti"

//   const [mainServiceData, setMainServiceData] = useState({});
//   const [subServices, setSubServices] = useState([]);
//   const [parentId, setParentId] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post(
//           "https://api.cagir.az/api/service/service-name",
//           { titleUrl: mainService },
//           config
//         );
//         setMainServiceData(response.data.result);
       

//         const newParentId = response.data.result.id;
//         setParentId(newParentId);
//         console.log(newParentId);
        

//         const cavab = await axios.get(
//           `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${parentId}`,
//           config
//         );
//         setSubServices(cavab.data.result);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     if (mainService && !parentId) {
//       fetchData();
//     }
//   }, [config, mainService, parentId]);

 
//   const { id, someProperty, serviceNames } = mainServiceData;
//   const serviceName = serviceNames && serviceNames.length > 0 ? serviceNames[0].name : "";
//   const textService = serviceNames && serviceNames.length > 0 ? serviceNames[0].text : "";

//   return (
//     <div>
//      <div dangerouslySetInnerHTML={{ __html: textService }} className="" />
//       <h2 className="my-h2 mt-[20px] lg:mt-[60px] mb-0 lg:mb-[15px] text-center">{serviceName}</h2>
//       {/* Ən çox axtarılan xidmətlər */}
      
//       {mainServiceData && (
//       <div className="flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px]
//         lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px]
//          pt-[30px] sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] 
//          pb-[60px] sm:pb-[75px] md:pb-[90px] lg:pb-[105px] xl:pb-[120px] 2xl:pb-[135px]"
//       >
        
//           <div>
//             <ul
//               className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[15px] sm:gap-[20px] md:gap-[25px] lg:gap-[35px]
//           xl:gap-y-[51px] 2xl:gap-[60px]"
//             >
//               {subServices.map(
//                 ({ id, imageUrl, nameUrl, price, serviceNames }) => (
//                   <li key={id}>
//                     <Link
//                       href="#"
//                       className="flex flex-row sm:flex-col
//                 rounded-[10px] sm:rounded-[25px]
//                 p-[10px] sm:p-[15px]
//                 space-x-[15px] sm:space-x-0"
//                     >
//                       <Image
//                         width={272}
//                         height={205}
//                         src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
//                         alt="Image description"
//                         className="w-[70px] sm:w-full rounded-[5px] sm:rounded-[20px]
//                           object-cover object-center"
//                       />

//                       {serviceNames.map(({ id, name, text }) => (
//                         <div className="w-full" key={id}>
//                           <div className="flex items-center justify-between w-full pt-[5px] sm:pt-[10px] lg:pt-[15px]">
//                             <h5 className="font-bold text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] text-black500">
//                               {name}
//                             </h5>
                    

//                             <div className="transition duration-300 group-hover:block">
//                               <Image
//                                 src={arrow_right}
//                                 alt="arrow_right_icon"
//                                 className="w-[28px]"
//                               />
//                             </div>
//                           </div>
                          
//                         </div>
//                       ))}
//                     </Link>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>
        
        
       
      
//         <div dangerouslySetInnerHTML={{ __html: textService }} className="" />

//       </div>
//       )}
//     </div>
//   );
// }

// export default Tesvir;

// import Image from "next/image";
// import Link from "next/link";
// import arrow from "@/icons/arrow.svg";
// import arrow_mobile from "@/icons/arrow_mobile.svg";

// const Xidmetler = ({ xidmetler }) => (
//   <>
//     <div className="">
//       <h2 className="my-h2 mb-[15px] lg:mb-[30px] text-center">Xidmətlər</h2>
//       <ul className="grid grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[60px] px-[10px] justify-between">
//         {xidmetler?.slice(0, 6).map((xidmet) => (
//           <li key={xidmet.id}>
//             <Link
//               href="#"
//               className="block rounded-[10px] lg:rounded-[25px] bg-white p-[11px] lg:p-[26px]  group
//               hover:drop-shadow-card transition duration-300 "
//             >
//               <div className="relative mb-[5px] lg:mb-[15px]">
//                 <Image
//                   width={367}
//                   height={283}
//                   src={xidmet.photo}
//                   alt="Image description"
//                   className="rounded-[5px] sm:rounded-[20px] w-full aspect-[123/96] object-cover object-center"
//                 />
//               </div>

//               <div className=" flex flex-row items-center justify-between">
//                 <div className="">
//                   <h5 className="font-bold text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] text-black500">
//                     {xidmet.title}
//                   </h5>
//                 </div>

//                 <div className="">
//                   <div className=" hidden group-hover:block transition duration-300">
//                     <Image src={arrow} alt="arrow_icon" className="hidden lg:block" />
//                     <Image src={arrow_mobile} alt="arrow_mobile_icon" className="block lg:hidden" />
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </>
// );

// export default Xidmetler;




// const Tesvir = () => (
//   <>
//     <div className="">
      // <h2
      //   className="my-h2 mb-[15px] text-center"
      // >
      //   Təsvir
      // </h2>
//       <div>
//         <p className="font-normal lg:font-medium text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] leading-[18px] sm:leading-[19px] md:leading-[20px] xl:leading-[22px] 2xl:leading-[24px] lg:leading-[34px] text-gray900 mt-[15px]">
//           Əgər siz də temizlik sirketi axtarirsinizsa bize muraciet ederek uygun
//           qiymete xidmeti elde ede bilersiniz. Ev temizliyi ve diger temizlik
//           xidmetleri üçün cagir.az-ın temizlik xidmeti bas xidmetinden yararlana
//           bilersiniz. Seçdiyiniz Temizlik xidmeti növüne daxil olan bütün alt
//           xidmetler ustalarımız terefinden peşakarlıqla heyata keçirilir. Ev
//           temizliyi ile bağli her şey temizlik sirketi olaraq bizimle daha
//           serfelidir. Temizlik xidmeti ile biz minlerle eve qonaq olmaqla
//           yanaşi, hem de müşteri memnuniyyetini qoruyub saxlamişiq.Temizlik
//           xidmeti sifarişi üçünse sade prosesleri ederek elde etmek mümkündür.
//           Sayta nezer yetirerek temizlik xidmeti paketini sifariş ede ve ya
//           etrafli melumat ede bilersiniz. Elave olaraq siz hemin paketden öz
//           mekaniniza uyğun ofis temizleme, obyekt temizleme ve ev temizleme kimi
//           xidmetlerini seçerek cagir.az-dan Temizlik sirketi sifariş vere
//           bilersiniz. Bundan elave temizlik xidmeti daxilinde olan bütün alt
//           xidmetleri nezerinize çatdiririq.
//         </p>
//       </div>
//     </div>
//   </>
// );

// export default Tesvir;

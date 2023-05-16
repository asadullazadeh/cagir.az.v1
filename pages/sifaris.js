import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Toggle from "@/src/components/form/toggle";
import Qiymet from "@/src/components/form/qiymet";
import Dropdown from "@/src/components/form/dropdown";
import Checkbox from "@/src/components/form/checkbox";
import CustomInput from "@/src/components/form/custom_input";
import Textarea from "@/src/components/form/textarea";
import Download_image from "@/src/components/form/download_image";
import Promocode from "@/src/components/form/promocode";
import PaymentMethod from "@/src/components/form/payment_method";
import info_btn from "@/icons/form/info_btn.svg";
import Map_Image from "@/public/Map_Image.png"

 

function Sifaris() {
  const [showSecondChild, setShowSecondChild] = useState(false);

  const toggleSecondChild = () => {
    setShowSecondChild(!showSecondChild);
  };

  const [showTextarea, setshowTextarea] = useState(true);

  const toggleTextarea = () => {
    setshowTextarea(!showTextarea);
  };

  return (
   
    <div className="flex lg:gap-x-[60px]">
      {/* Left side of first part in Sifaris */}
      <div className="hidden lg:flex flex-col lg:gap-y-[25px] relative w-[305px] ">
        <Qiymet />
        <Toggle />
      </div>
       {/* Right side of first part in Sifaris */}
      <div className="w-full">
        <h4
          className="font-medium lg:font-semibold text-[16px] lg:text-[20px] leading-[14px] lg:leading-[30px] 
      text-black500 text-center pb-[15px] lg:pb-[15px]"
        >
          Sifarişi yarat
        </h4>

        <div className="grid lg:grid-cols-3 justify-items-stretch lg:gap-x-[40px] gap-y-[15px]">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <p className="font-medium text-[12px] leading-[18px] text-black500">
                Xidməti seç
              </p>
              <button>
                <Image src={info_btn} alt="info_btn" />
              </button>
            </div>
            <Dropdown />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <p className="font-medium text-[12px] leading-[18px] text-black500">
                Xidməti seç
              </p>
              <button>
                <Image src={info_btn} alt="info_btn" />
              </button>
            </div>
            <Dropdown />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <p className="font-medium text-[12px] leading-[18px] text-black500">
                Xidməti seç
              </p>
              <button>
                <Image src={info_btn} alt="info_btn" />
              </button>
            </div>
            <Dropdown />
          </div>
        </div>
        {/* Checmark */}
        {/* ex:Neçə kv.m sahə təmizlənəcək? */}
        <div className="flex flex-col pt-[50px] lg:pt-[30px]">
          <h5 className="font-semibold text-[12px] leading-[18px] lg:pb-[5px] text-black500">
            Neçə kv.m sahə təmizlənəcək?
          </h5>
          <div className="flex flex-row gap-x-[5px] pb-[15px] lg:pt-[5px] lg:pb-[5px] lg:order-2">
            <button>
              <Image src={info_btn} alt="info_btn" />
            </button>
            <p className="font-medium text-[10px] leading-[15px] text-gray900">
              50-101kv seçdiyinizə görə + 20AZN əlavə olundu
            </p>
          </div>
          <div className="flex flex-wrap gap-[15px] lg:order-1">
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
          </div>
        </div>
        {/* Checkmark and custom input */}
        {/* ex:Əlavə istəklərinizi seçin*/}
        <div className="flex flex-col pt-[50px] lg:pt-[30px]">
          <h5 className="font-semibold text-[12px] leading-[18px] lg:pb-[5px] text-black500">
            Əlavə istəklərinizi seçin
          </h5>
          <div className="flex flex-row py-[15px] lg:pt-[10px] lg:pb-0 lg:order-2">
            <button>
              <Image src={info_btn} alt="info_btn" />
            </button>
            <p className="font-medium text-[10px] leading-[15px]  text-gray900">
              Ütüləmə punktunu seçdiyinizə görə + 10AZN əlavə olundu
            </p>
          </div>
          <div className="flex flex-wrap pb-[15px] gap-y-[15px] lg:order-1">
            <div className="flex flex-wrap gap-x-[15px] gap-y-[15px]">
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <button
              className=" font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-cagiraz "
              onClick={toggleSecondChild}
            >
              {showSecondChild ? "" : "Daha çox gör"}
            </button>
            </div>
            
            
            <div className={`${showSecondChild ? "block" : "hidden"} flex flex-wrap w-full lg:gap-x-[15px] gap-y-[15px] lg:pr-[15px]`}>
              <CustomInput />
              <CustomInput />
              <CustomInput />
              <CustomInput />
              <button
              className="mx-auto lg:m-0  font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-cagiraz "
              onClick={toggleSecondChild}
            >
              {showSecondChild ? "Bağla" : ""}
            </button>
            </div>  
          </div>
        </div>
        {/* ex:Bilməli olduğumuz detallar */}
        <div className="flex flex-col pt-[50px] lg:pt-[30px]">
          <h5 className="font-semibold text-[12px] leading-[18px] pb-[15px] lg:pb-[5px] text-black500">
            Əlavə istəklərinizi seçin
          </h5>
          <div className="flex flex-wrap pb-[15px] gap-y-[15px] lg:order-1">
            <div className="flex flex-wrap gap-x-[15px] gap-y-[15px]">
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
              {/* for textarea/Diger button */}
              <button
              className="font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-cagiraz "
              onClick={toggleTextarea}
            >
              {showTextarea ? "" : "Digər"}
            </button>
            </div>
            </div>
          </div>
          {/* more info section */}
          <div>
            <div className= {`${showTextarea ? "block" : "hidden"} flex flex-col pt-[50px] lg:pt-[30px]`}>
              <Textarea />
              {/* for textarea/bagla button */}
            <button
                className="mx-auto font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-cagiraz "
                onClick={toggleTextarea}
              >
                {showTextarea ? "Bagla" : ""}
              </button>
            </div>
          </div>
          {/* second part of sifaris section-Sifarisi tamamla */}
          <div className="">
            <h4
            className="font-medium lg:font-semibold text-[16px] lg:text-[20px] leading-[14px] lg:leading-[30px] 
        text-black500 pb-[20px] lg:pb-[30px] pt-[30px]"
          >
            Sifarişi tamamla
          </h4>
            <div className="flex flex-col lg:flex-row lg:gap-x-[45px]">
              <div className="w-[1/3]">
              <Download_image />
              <Promocode />
              <PaymentMethod />
   
              <div className="flex flex-row justify-between">
                <p>Geri</p>
                <p>Sifirla</p>
                <p>Tesdiqle</p>
              </div>
              </div>
              <div className="w-[2/3]">
                <p>Input place for xerite</p>
                <Image src={Map_Image} alt="map_image" />
              </div>
            </div>
          
          </div>
          
      </div>
    </div>
    
  
  );
}

export default Sifaris;


































// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Toggle from "@/src/components/form/toggle";
// import Qiymet from "@/src/components/form/qiymet";
// import Dropdown from "@/src/components/form/dropdown";
// import Checkbox from "@/src/components/form/checkbox";
// import CustomInput from "@/src/components/form/custom_input";
// import Textarea from "@/src/components/form/textarea";
// import info_btn from "@/icons/form/info_btn.svg";


// function Sifaris() {
//   const [showSecondChild, setShowSecondChild] = useState(false);

//   const toggleSecondChild = () => {
//     setShowSecondChild(!showSecondChild);
//   };

//   return (
//     <div className="flex lg:gap-x-[60px]">
//       <div className="hidden lg:flex flex-col lg:gap-y-[25px] relative w-[305px] ">
//         <Qiymet />
//         <Toggle />
//       </div>
//       <div className="w-full">
//         <h4
//           className="font-medium lg:font-semibold text-[16px] lg:text-[20px] leading-[14px] lg:leading-[30px] 
//       text-black500 text-center pb-[15px] lg:pb-[15px]"
//         >
//           Sifarişi yarat
//         </h4>

//         <div className="grid lg:grid-cols-3 justify-items-stretch lg:gap-x-[40px] gap-y-[15px]">
//           <div className="flex flex-col">
//             <div className="flex flex-row justify-between">
//               <p className="font-medium text-[12px] leading-[18px] text-black500">
//                 Xidməti seç
//               </p>
//               <button>
//                 <Image src={info_btn} alt="info_btn" />
//               </button>
//             </div>
//             <Dropdown />
//           </div>

//           <div className="flex flex-col">
//             <div className="flex flex-row justify-between">
//               <p className="font-medium text-[12px] leading-[18px] text-black500">
//                 Xidməti seç
//               </p>
//               <button>
//                 <Image src={info_btn} alt="info_btn" />
//               </button>
//             </div>
//             <Dropdown />
//           </div>
//           <div className="flex flex-col">
//             <div className="flex flex-row justify-between">
//               <p className="font-medium text-[12px] leading-[18px] text-black500">
//                 Xidməti seç
//               </p>
//               <button>
//                 <Image src={info_btn} alt="info_btn" />
//               </button>
//             </div>
//             <Dropdown />
//           </div>
//         </div>
//         {/* Checmark */}
//         {/* ex:Neçə kv.m sahə təmizlənəcək? */}
//         <div className="flex flex-col pt-[50px] lg:pt-[30px]">
//           <h5 className="font-semibold text-[12px] leading-[18px] lg:pb-[5px] text-black500">
//             Neçə kv.m sahə təmizlənəcək?
//           </h5>
//           <div className="flex flex-row gap-x-[5px] pb-[15px] lg:pt-[5px] lg:pb-[5px] lg:order-2">
//             <button>
//               <Image src={info_btn} alt="info_btn" />
//             </button>
//             <p className="font-medium text-[10px] leading-[15px] text-gray900">
//               50-101kv seçdiyinizə görə + 20AZN əlavə olundu
//             </p>
//           </div>
//           <div className="flex flex-wrap gap-[15px] lg:order-1">
//             <Checkbox />
//             <Checkbox />
//             <Checkbox />
//             <Checkbox />
//             <Checkbox />
//             <Checkbox />
//             <Checkbox />
//             <Checkbox />
//             <Checkbox />
//           </div>
//         </div>
//         {/* Checkmark and custom input */}
//         {/* ex:Əlavə istəklərinizi seçin*/}
//         <div className="flex flex-col pt-[50px] lg:pt-[30px]">
//           <h5 className="font-semibold text-[12px] leading-[18px] lg:pb-[5px] text-black500">
//             Əlavə istəklərinizi seçin
//           </h5>
//           <div className="flex flex-row py-[15px] lg:pt-[10px] lg:pb-0 lg:order-2">
//             <button>
//               <Image src={info_btn} alt="info_btn" />
//             </button>
//             <p className="font-medium text-[10px] leading-[15px]  text-gray900">
//               Ütüləmə punktunu seçdiyinizə görə + 10AZN əlavə olundu
//             </p>
//           </div>
//           <div className="flex flex-wrap pb-[15px] gap-y-[15px] lg:order-1">
//             <div className="flex flex-wrap gap-x-[15px] gap-y-[15px]">
//               <Checkbox />
//               <Checkbox />
//               <Checkbox />
//               <Checkbox />
//               <Checkbox />
//               <button
//               className=" font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-cagiraz "
//               onClick={toggleSecondChild}
//             >
//               {showSecondChild ? "" : "Daha çox gör"}
//             </button>
//             </div>
            
            
//             <div className={`${showSecondChild ? "block" : "hidden"} flex flex-wrap w-full lg:gap-x-[15px] gap-y-[15px] lg:pr-[15px]`}>
//               <CustomInput />
//               <CustomInput />
//               <CustomInput />
//               <CustomInput />
//               <button
//               className="mx-auto lg:m-0  font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-cagiraz "
//               onClick={toggleSecondChild}
//             >
//               {showSecondChild ? "Bağla" : ""}
//             </button>
//             </div>
            
//             {/* <button
//               className="font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-cagiraz "
//               onClick={toggleSecondChild}
//             >
//               {showSecondChild ? "Bağla" : "Daha çox gör"}
//             </button> */}
            
            
//           </div>




//         </div>
//         {/* ex:Bilməli olduğumuz detallar */}
//         <div className="flex flex-col pt-[50px] lg:pt-[30px]">
//           <h5 className="font-semibold text-[12px] leading-[18px] pb-[15px] lg:pb-[5px] text-black500">
//             Əlavə istəklərinizi seçin
//           </h5>
//           <div className="flex flex-wrap pb-[15px] gap-y-[15px] lg:order-1">
//             <div className="flex flex-wrap gap-x-[15px] gap-y-[15px]">
//               <Checkbox />
//               <Checkbox />
//               <Checkbox />
//               <Checkbox />
//               <Checkbox />
//             </div>
//             </div>
//           </div>
//           {/* more info section */}
//           <div className="flex flex-col pt-[50px] lg:pt-[30px]">
//           <Textarea />
//           </div>
//       </div>
//     </div>
//   );
// }

// export default Sifaris;

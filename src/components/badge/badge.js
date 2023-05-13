import Image from "next/image";
import Link from "next/link";
import Badge_desktop1 from "@/public/badge/Badge_desktop1.png";
import Badge_desktop2 from "@/public/badge/Badge_desktop2.png";
import Badge_desktop3 from "@/public/badge/Badge_desktop3.png";
import Badge_mobile1 from "@/public/badge/Badge_mobile1.png";
import Badge_mobile2 from "@/public/badge/Badge_mobile2.png";
import Badge_mobile3 from "@/public/badge/Badge_mobile3.png";



const Badge = () => (
    <div>
  <div className="hidden lg:flex gap-x-[190px] justify-center">
    <div className="flex flex-col items-center">
        <Image className="block w-[50px] h-[68px]" src={Badge_desktop1} alt="Badge_desktop1" />
    <p className="font-extrabold text-[14px] leading-[21px]">İlin startapı</p> 
    </div>
    <div className="flex flex-col items-center">
        <Image className="block w-[50px] h-[68px]" src={Badge_desktop2} alt="Badge_desktop2" />
    <p className="font-extrabold text-[14px] leading-[21px]">5000+ sifariş</p> 
    </div> 
    <div className="flex flex-col items-center">
        <Image className="block w-[50px] h-[68px]" src={Badge_desktop3} alt="Badge_desktop3" />
    <p className="font-extrabold text-[14px] leading-[21px]">Zəmanət</p> 
    </div>  
  </div> 



<div className="flex lg:hidden gap-x-[55px] justify-center">
    <div className="flex flex-col items-center">
        <Image className="block w-[42px] h-[45px]" src={Badge_mobile1} alt="Badge_mobile1" />
        <p className="font-extrabold text-[9px] leading-[13px]">İlin startapı</p> 
    </div>
    <div className="flex flex-col items-center">
        <Image className="block w-[42px] h-[45px]" src={Badge_mobile2} alt="Badge_mobile2" />
    <p className="font-extrabold text-[9px] leading-[13px]">5000+ sifariş</p> 
    </div> 
    <div className="flex flex-col items-center">
        <Image className="block w-[42px] h-[45px]" src={Badge_mobile3} alt="Badge_mobile3" />
    <p className="font-extrabold text-[9px] leading-[13px]">Zəmanət</p> 
    </div>  
  </div> 
  </div>





);

export default Badge;

import Image from "next/image";
import Link from "next/link";
import ilin_startapi_desktop from "@/icons/badges/ilin_startapi_desktop.svg";
import ilin_startapi_mob from "@/icons/badges/ilin_startapi_mob.svg";
import sifaris_desktop from "@/icons/badges/sifaris_desktop.svg";
import sifaris_mob from "@/icons/badges/sifaris_mob.svg";
import zemanet_desktop from "@/icons/badges/zemanet_desktop.svg";
import zemanet_mob from "@/icons/badges/zemanet_mob.svg";

const Badge = () => (
  <div>
    {/* desktop */}
    <div className="hidden lg:flex lg:gap-x-[137px] xl:gap-x-[164px] 2xl:gap-x-[190px] justify-center pt-[20px]">
      <div className="flex flex-col items-center">
        <Image
          className="block w-[50px] h-[68px]"
          src={ilin_startapi_desktop}
          alt="Badge_desktop1"
        />
        <p className="font-extrabold text-[14px] leading-[21px]">
          İlin startapı
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          className="block w-[50px] h-[68px]"
          src={sifaris_desktop}
          alt="Badge_desktop2"
        />
        <p className="font-extrabold text-[14px] leading-[21px]">
          5000+ sifariş
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          className="block w-[50px] h-[68px]"
          src={zemanet_desktop}
          alt="Badge_desktop3"
        />
        <p className="font-extrabold text-[14px] leading-[21px]">Zəmanət</p>
      </div>
    </div>
    {/* mobile */}
    <div className="flex lg:hidden gap-x-[55px] sm:gap-x-[83px] md:gap-x-[110px] justify-center pt-[20px]">
      <div className="flex flex-col items-center">
        <Image
          className="block w-[42px] h-[45px]"
          src={ilin_startapi_mob}
          alt="Badge_mobile1"
        />
        <p className="font-extrabold text-[9px] leading-[13px]">
          İlin startapı
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          className="block w-[42px] h-[45px]"
          src={sifaris_mob}
          alt="Badge_mobile2"
        />
        <p className="font-extrabold text-[9px] leading-[13px]">
          5000+ sifariş
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          className="block w-[42px] h-[45px]"
          src={zemanet_mob}
          alt="Badge_mobile3"
        />
        <p className="font-extrabold text-[9px] leading-[13px]">Zəmanət</p>
      </div>
    </div>
  </div>
);

export default Badge;

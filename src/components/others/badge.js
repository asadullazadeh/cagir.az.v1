import Image from "next/image";
import Link from "next/link";
import ilin_startapi_desktop from "@/icons/badges/ilin_startapi_desktop.svg";
import ilin_startapi_mob from "@/icons/badges/ilin_startapi_mob.svg";
import sifaris_desktop from "@/icons/badges/sifaris_desktop.svg";
import sifaris_mob from "@/icons/badges/sifaris_mob.svg";
import zemanet_desktop from "@/icons/badges/zemanet_desktop.svg";
import zemanet_mob from "@/icons/badges/zemanet_mob.svg";

const desktopBadges = [
  {
    href: "media/media-detail/7",
    src: ilin_startapi_desktop,
    alt: "Badge_desktop1",
    text: "İlin startapı",
  },
  {
    href: "blog/ugurlu-sifarisin-sirri-xidmetimizdeki-keyfiyyetdir/292",
    src: sifaris_desktop,
    alt: "Badge_desktop2",
    text: "5000+ sifariş",
  },
  {
    href: "blog/ugurlu-sifarisin-sirri-xidmetimizdeki-keyfiyyetdir/292",
    src: zemanet_desktop,
    alt: "Badge_desktop3",
    text: "Zəmanət",
  },
];

const mobileBadges = [
  {
    href: "media/media-detail/7",
    src: ilin_startapi_mob,
    alt: "Badge_mobile1",
    text: "İlin startapı",
  },
  {
    href: "blog/ugurlu-sifarisin-sirri-xidmetimizdeki-keyfiyyetdir/292",
    src: sifaris_mob,
    alt: "Badge_mobile2",
    text: "5000+ sifariş",
  },
  {
    href: "blog/ugurlu-sifarisin-sirri-xidmetimizdeki-keyfiyyetdir/292",
    src: zemanet_mob,
    alt: "Badge_mobile3",
    text: "Zəmanət",
  },
];

const Badge = () => (
  <div className="pt-[20px]">
    <div className="hidden lg:flex justify-center gap-x-[137px] xl:gap-x-[164px] 2xl:gap-x-[190px]">
      {desktopBadges.map((badge) => (
        <div key={badge.alt}>
          <Link href={badge.href} className="flex flex-col items-center">
            <Image
            width={50}
            height={68}
              className="block w-[50px] h-[68px]"
              {...badge}
              alt={badge.text}
            />
            <p className="font-extrabold text-[14px] leading-[21px]">
              {badge.text}
            </p>
          </Link>
        </div>
      ))}
    </div>
    <div className="flex lg:hidden justify-center gap-x-[55px] sm:gap-x-[83px] md:gap-x-[110px]">
      {mobileBadges.map((badge) => (
        <div key={badge.alt}>
          <Link 
          
           href={badge.href} className="flex flex-col items-center">
            
            <Image
            width={42}
            height={45}
              className="block w-[42px] h-[45px]"
              {...badge}
              alt={badge.text}
            />
            <p className="font-extrabold text-[9px] leading-[13px]">
              {badge.text}
            </p>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Badge;

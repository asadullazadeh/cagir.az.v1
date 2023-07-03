import Image from "next/image";
import Link from "next/link";
import banner_mobile from "@/public/banner_mobile.jpg";
import banner_desktop from "@/public/banner_desktop.jpg";

const Banner = () => (
  <div className="">
    <Image
      className="block sm:hidden w-full"
      src={banner_mobile}
      alt="banner_mobile"
    />
    <Image
      className="hidden sm:block w-full"
      src={banner_desktop}
      alt="banner_desktop"
    />
  </div>
);

export default Banner;

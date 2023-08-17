import Image from "next/image";
import Link from "next/link";
import fb from "@/icons/social_ntwrk/fb.svg";
import fb1 from "@/icons/social_ntwrk/fb1.svg";
import insta from "@/icons/social_ntwrk/insta.svg";
import insta1 from "@/icons/social_ntwrk/insta1.svg";
import linkedin from "@/icons/social_ntwrk/linkedin.svg";
import linkedin1 from "@/icons/social_ntwrk/linkedin1.svg";

export default function SocialNetworks({ classNames }) {
  return (
    <div className={classNames}>
      {/* Insta icon */}
          <Link className="relative w-[22px] h-[22px]" href="https://www.instagram.com/cagir.az/ " target="_blank">
            <Image className="transition-opacity duration-300 hover:opacity-0" src={insta} alt="insta_icon" />
            <Image className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300" src={insta1} alt="insta_icon" />
          </Link>

      {/* Facebook icon */}
      <Link className="relative w-[22px] h-[22px]" href="https://www.instagram.com/cagir.az/ " target="_blank">
            <Image className="transition-opacity duration-300 hover:opacity-0"  src={fb} alt="insta_icon" />
            <Image className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300" src={fb1} alt="insta_icon" />
          </Link>

      {/* Linkedin icon */}
      <Link className="relative w-[22px] h-[22px]" href="https://www.instagram.com/cagir.az/ " target="_blank">
            <Image className="transition-opacity duration-300 hover:opacity-0"  src={linkedin} alt="insta_icon" />
            <Image className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300" src={linkedin1} alt="insta_icon" />
          </Link>
    </div>
  );
}

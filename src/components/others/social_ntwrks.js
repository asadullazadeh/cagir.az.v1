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
      <div className="relative w-[22px] h-[22px]">
        {/* before hover */}
        <div className="transition-opacity duration-300 hover:opacity-0">
          <Link href="https://www.instagram.com/cagir.az/ " target="_blank">
            <Image src={insta} alt="insta_icon" />
          </Link>
        </div>
        {/* after hover */}
        <div className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Link href="https://www.instagram.com/cagir.az/ " target="_blank">
            <Image src={insta1} alt="insta_icon" />
          </Link>
        </div>
      </div>

      {/* Facebook icon */}
      <div className="relative w-[22px] h-[22px]">
        {/* before hover */}
        <div className="transition-opacity duration-300 hover:opacity-0">
          <Link href="https://www.facebook.com/cagir.az" target="_blank">
            <Image src={fb} alt="fb_icon" />
          </Link>
        </div>
        {/* after hover */}
        <div className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Link href="https://www.facebook.com/cagir.az" target="_blank">
            <Image src={fb1} alt="fb_icon" />
          </Link>
        </div>
      </div>

      {/* Linkedin icon */}
      <div className="relative w-[22px] h-[22px]">
        {/* before hover */}
        <div className="transition-opacity duration-300 hover:opacity-0">
          <Link href="https://www.linkedin.com/company/cagir-az/" target="_blank">
            <Image src={linkedin} alt="fb_icon" />
          </Link>
        </div>
        {/* after hover */}
        <div className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Link href="https://www.linkedin.com/company/cagir-az/" target="_blank">
            <Image src={linkedin1} alt="linkedin_icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

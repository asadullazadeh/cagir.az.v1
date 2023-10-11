import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import fb from "@/icons/social_ntwrk/fb.svg";
import fb1 from "@/icons/social_ntwrk/fb1.svg";
import insta from "@/icons/social_ntwrk/insta.svg";
import insta1 from "@/icons/social_ntwrk/insta1.svg";
import linkedin from "@/icons/social_ntwrk/linkedin.svg";
import linkedin1 from "@/icons/social_ntwrk/linkedin1.svg";

export default function SocialNetworks({ classNames }) {
  const socialElements = [
    {
      id: 1,
      imageUnhovered: insta,
      imageHovered: insta1,
      link: "https://www.instagram.com/cagir.az",
      alt: "insta_icon",
    },
    {
      id: 2,
      imageUnhovered: fb,
      imageHovered: fb1,
      link: "https://www.facebook.com/cagir.az",
      alt: "fb_icon",
    },
    {
      id: 3,
      imageUnhovered: linkedin,
      imageHovered: linkedin1,
      link: "https://www.linkedin.com/company/cagir-az/",
      alt: "linkedin_icon",
    },
  ];

  const [hoveredElements, setHoveredElements] = useState({});

  const handleMouseEnter = (id) => {
    setHoveredElements({ ...hoveredElements, [id]: true });
  };

  const handleMouseLeave = (id) => {
    setHoveredElements({ ...hoveredElements, [id]: false });
  };

  const imageDimension = { width: 22, height: 22 };
  const transitionClass = "transition-opacity duration-300";

  return (
    <div className={classNames}>
      {socialElements.map((element) => (
        <Link
          key={element.id}
          href={element.link}
          target="_blank"
          onMouseEnter={() => handleMouseEnter(element.id)}
          onMouseLeave={() => handleMouseLeave(element.id)}
          className={transitionClass}
        >
          <Image
            {...imageDimension}
            src={
              hoveredElements[element.id]
                ? element.imageHovered
                : element.imageUnhovered
            }
            alt={element.alt}
          />
        </Link>
      ))}
    </div>
  );
}

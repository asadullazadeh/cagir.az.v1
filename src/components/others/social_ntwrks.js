import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import fb from "@/icons/social_ntwrk/fb.svg";
import fb1 from "@/icons/social_ntwrk/fb1.svg";
import insta from "@/icons/social_ntwrk/insta.svg";
import insta1 from "@/icons/social_ntwrk/insta1.svg";
import linkedin from "@/icons/social_ntwrk/linkedin.svg";
import linkedin1 from "@/icons/social_ntwrk/linkedin1.svg";

export default function SocialNetworks({ classNames }) {
  const elements = [
    {
      id: 1,
      imageUnhovered: insta,
      imageHovered: insta1,
      link: "https://www.instagram.com/cagir.az/",
      alt: "insta_icon",
    },
    {
      id: 2,
      imageUnhovered: fb,
      imageHovered: fb1,
      link: "https://www.instagram.com/cagir.az/",
      alt: "fb_icon",
    },
    {
      id: 3,
      imageUnhovered: linkedin,
      imageHovered: linkedin1,
      link: "https://www.instagram.com/cagir.az/",
      alt: "linkedin_icon",
    },
  ];

  const [hoveredElements, setHoveredElements] = useState({});

  const handleMouseEnter = (id) => {
    setHoveredElements((prevHovered) => ({
      ...prevHovered,
      [id]: true,
    }));
  };

  const handleMouseLeave = (id) => {
    setHoveredElements((prevHovered) => ({
      ...prevHovered,
      [id]: false,
    }));
  };

  return (
    <div className={classNames}>
      {elements.map((element) => (
        <Link
          href={element.link}
          key={element.id}
          target="_blank"
          onMouseEnter={() => handleMouseEnter(element.id)}
          onMouseLeave={() => handleMouseLeave(element.id)}
          className="transition-opacity duration-300"
        >
          <Image
            width={22}
            height={22}
            src={
              hoveredElements[element.id]
                ? element.imageHovered
                : element.imageUnhovered
            }
            alt={element.alt}
            // className={`transition-opacity duration-900 ${hoveredElements[element.id] ? "opacity-70" : "opacity-100"}`}
          />
        </Link>
      ))}
    </div>
  );
}

{
  /* Insta icon */
}
{
  /* <Link className="relative w-[22px] h-[22px]" href="https://www.instagram.com/cagir.az/ " target="_blank">
            <Image className="transition-opacity duration-300 hover:opacity-0" src={insta} alt="insta_icon" />
            <Image className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300" src={insta1} alt="insta_icon" />
          </Link> */
}
// className

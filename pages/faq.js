import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Suallar from "@/src/components/suallar/suallar";
import icraciSvg from "@/icons/faq/icraci.svg";
import musteriSvg from "@/icons/faq/musteri.svg";
import sifarisSvg from "@/icons/faq/sifaris.svg";

export async function getServerSideProps() {
  const data = await import("/data/data.json");
  const { suallar } = data;
  return {
    //will be passed to the page component as props
    props: {
      suallar,
    },
  };
}

export default function Faq(props) {
  const { suallar } = props;

  return (
    <div className="flex flex-col gap-y-[30px] lg:gap-y-[60px] xl:gap-y-[75px] 2xl:gap-y-[90px] w-full ">
      <div className="flex flex-col lg:flex-row justify-center ">
        <Image src={icraciSvg} alt={icraciSvg} className="w-full sm:aspect-[300/82] lg:w-1/3" />
        <Image src={musteriSvg} alt={musteriSvg} className="w-full sm:aspect-[300/82] lg:w-1/3" />
        <Image src={sifarisSvg} alt={sifarisSvg} className="w-full sm:aspect-[300/82] lg:w-1/3" />
      </div>
      <Suallar {...{ suallar }} />
    </div>
  );
}

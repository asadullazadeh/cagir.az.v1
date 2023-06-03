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
    <div className="w-full">
      <div className="flex flex-col lg:flex-row pb-[30px] lg:pb-[90px]">
        <Image src={icraciSvg} alt={icraciSvg} className="w-full" />
        <Image src={musteriSvg} alt={musteriSvg} className="w-full" />
        <Image src={sifarisSvg} alt={sifarisSvg} className="w-full" />
      </div>
      <Suallar {...{ suallar }} />
    </div>
  );
}

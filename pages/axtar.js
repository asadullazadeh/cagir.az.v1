// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import phone from "@/icons/phone.svg";
// import envelope from "@/icons/envelope.svg";
// import SocialNetworks from "@/src/components/others/social_ntwrks";
// import SifarishBtn from "@/src/components/buttons/sifarish_btn";
// import SearchInput from "@/src/components/input/input_search";
// import Butun_xidmetler from "@/src/components/main/butun_xidmetler";

// function Axtar() {
//   return (
//     <div className="flex flex-col justify-center w-full">
//       <div className="flex flex-col justify-center w-full items-center">
//         <h4 className="my-h4">Hansı xidməti axtarırsınız?</h4>
//         <div className="w-full sm:w-7/10 md:w-6/10 lg:w-1/2 lx:w-2/5 2xl:w-1/3"><SearchInput /></div>
//       </div>
//       <Butun_xidmetler />
//     </div>
//   );
// }

// export default Axtar;

import Head from "next/head";
import { Inter } from "next/font/google";
import Carousel1 from "@/src/components/main/carousel1";
import Ustalar from "@/src/components/main/subServices";
import Reyler from "@/src/components/main/reyler";
import Icracilar from "@/src/components/main/icraci";
import SearchInput from "@/src/components/input/input_search";
import Suallar from "@/src/components/main/suallar";
import Deyerler from "@/src/components/main/deyerler";
// import Bloq from "@/src/components/bloq/bloq";
import Musteriler from "@/src/components/main/musteriler";
import Butun_xidmetler from "@/src/components/main/butun_xidmetler";
import Tesvir from "@/src/components/main/tesvir";
import Banner from "@/src/components/main/banner";
import Badge from "@/src/components/others/badge";
import Reels from "@/src/components/main/reels";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const data = await import("/data/data.json");
  const { xidmetler, ustalar, reyler, icracilar } = data;
  return {
    props: {
      ustalar,
      reyler,
      icracilar,
      xidmetler,
    },
  };
}

export default function Axtar(props) {
  const { xidmetler, ustalar, reyler, icracilar } = props;

  return (
    <div
      className="flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px]
    lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px]
     pt-[30px] sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] 
     pb-[60px] sm:pb-[75px] md:pb-[90px] lg:pb-[105px] xl:pb-[120px] 2xl:pb-[135px]"
    >
      <div className="flex flex-col justify-center w-full">
        <div className="flex flex-col justify-center w-full items-center">
          <h4 className="my-h4">Hansı xidməti axtarırsınız?</h4>
          <div className="w-full sm:w-7/10 md:w-6/10 lg:w-1/2 lx:w-2/5 2xl:w-1/3">
            <SearchInput />
          </div>
        </div>
      </div>
      {/* <Ustalar  /> */}

      <Banner />
      {/* <Reyler {...{ reyler }} />

      <Icracilar {...{ icracilar }} /> */}

      {/* <Tesvir /> */}
    </div>
  );
}

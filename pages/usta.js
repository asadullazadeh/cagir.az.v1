import Head from "next/head";
import { Inter } from "next/font/google";
import Carousel1 from "@/src/components/carousel/carousel1";
import Ustalar from "@/src/components/alt_xidmetler/alt_xidmetler";
import Reyler from "@/src/components/reyler/reyler";
import Icracilar from "@/src/components/icraci/icraci";
import Suallar from "@/src/components/suallar/suallar";
import Deyerler from "@/src/components/deyerler/deyerler";
import Bloq from "@/src/components/bloq/bloq";
import Musteriler from "@/src/components/musteriler/musteriler";
import Butun_xidmetler from "@/src/components/butun_xidmetler/butun_xidmetler";
import Tesvir from "@/src/components/tesvir/tesvir";
import Banner from "@/src/components/banner/banner";
import Badge from "@/src/components/badge/badge";
import Reels from "@/src/components/reels/reels";

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

export default function Usta(props) {
  const { xidmetler, ustalar, reyler, icracilar } = props;

  return (
    <div
      className="flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px]
    lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px]
     pt-[30px] sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] 2xl:pt-[60px] 
     pb-[60px] sm:pb-[75px] md:pb-[90px] lg:pb-[105px] xl:pb-[120px] 2xl:pb-[135px]"
    >
      <div className="mt-[-30px] lg:mt-[-60px]">
        <Badge />
      </div>
      <Ustalar {...{ ustalar }} />
      <Butun_xidmetler {...{ xidmetler }} />
      <Reels />
      <Banner />

      <Reyler {...{ reyler }} />

      <Icracilar {...{ icracilar }} />

      <Tesvir />
    </div>
  );
}

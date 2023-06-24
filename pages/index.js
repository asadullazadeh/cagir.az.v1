import Head from "next/head";
import { Inter } from "next/font/google";
import Carousel1 from "@/src/components/main/carousel1";
import Xidmetler from "@/src/components/main/xidmetler";
import Reyler from "@/src/components/main/reyler";
import Icracilar from "@/src/components/main/icraci";
import Suallar from "@/src/components/main/suallar";
import Deyerler from "@/src/components/main/deyerler";
import Bloq from "@/src/components/main/bloqlar";
import Musteriler from "@/src/components/main/musteriler";
import Kampaniyalar from "@/src/components/kampaniya/kampaniya";
import TabBar from "@/src/components/mobile/tab_bar";
import SifarishBtn from "@/src/components/buttons/sifarish_btn";
import Reels from "@/src/components/main/reels";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const data = await import("/data/data.json");
  const {
    xidmetler,
    icracilar,
    suallar,
    reyler,
    bloqlar,
    carouselPhotos1,
    musteriler,
  } = data;
  return {
    //will be passed to the page component as props
    props: {
      xidmetler,
      icracilar,
      suallar,
      reyler,
      bloqlar,
      carouselPhotos1,
      musteriler,
    },
  };
}

export default function Home(props) {
  const {
    icracilar,
    xidmetler,
    suallar,
    reyler,
    bloqlar,
    carouselPhotos1,
    musteriler,
  } = props;

  return (
    <>
      {/* <Head>
        <title>Cagir.az</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}
      <div
        className="flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px]
      lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px]
      sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] 
      pb-[60px] sm:pb-[75px] md:pb-[90px] lg:pb-[105px] xl:pb-[120px] 2xl:pb-[135px]"
      >
        <Carousel1 {...{ carouselPhotos1 }} />
        <Xidmetler {...{ xidmetler }} />
        <Reyler {...{ reyler }} />
        <Icracilar {...{icracilar}} />
        <Musteriler {...{ musteriler }} />
        <Suallar {...{ suallar }} />
        <Reels />
        <Deyerler />
        <Bloq bloqlar={bloqlar} />
        
      </div>
    </>
  );
}

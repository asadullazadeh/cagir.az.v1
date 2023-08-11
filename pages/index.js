import Head from "next/head";
import { Inter } from "next/font/google";
import Carousel1 from "@/src/components/main/carousel1";
import MainServices from "@/src/components/service/mainServices";
import Reyler from "@/src/components/main/reyler";
import Icracilar from "@/src/components/main/icraci";
import Suallar from "@/src/components/main/suallar";
import Deyerler from "@/src/components/main/deyerler";
import LastPostedBlogs from "@/src/components/blog/LastPostedBlogs";
import Musteriler from "@/src/components/main/musteriler";
import Reels from "@/src/components/main/reels";

const inter = Inter({ subsets: ["latin"] });
export async function getServerSideProps() {
  const data = await import("/data/data.json");
  const { carouselPhotos1 } = data;
  return {
    //will be passed to the page component as props
    props: {
      carouselPhotos1,
    },
  };
}

export default function Home(props) {
  const { carouselPhotos1 } = props;

  return (
    <>
      <div
        className="flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px]
      lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px]
      sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] 
      pb-[60px] sm:pb-[75px] md:pb-[90px] lg:pb-[105px] xl:pb-[120px] 2xl:pb-[135px]"
      >
        <Carousel1 {...{ carouselPhotos1 }} />
        <MainServices />
        <Reyler parentId={1} />
        <Icracilar parentId={1} />
        <Musteriler />
        <Suallar />
        {/* <Reels /> */}
        <Deyerler />
        <LastPostedBlogs />
      </div>
    </>
  );
}

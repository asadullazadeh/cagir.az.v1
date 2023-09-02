import Head from "next/head";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from "react";
import Carousel1 from "@/src/components/main/carousel1";
import MainServices from "@/src/components/service/mainServices";
import Reyler from "@/src/components/main/reyler";
import Icracilar from "@/src/components/main/icraci";
import Suallar from "@/src/components/main/suallar";
import Deyerler from "@/src/components/main/deyerler";
import LastPostedBlogs from "@/src/components/blog/LastPostedBlogs";
import Musteriler from "@/src/components/main/musteriler";
import Reels from "@/src/components/main/reels";
import SearchServices from "@/src/components/main/search_services";

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

  // passing data from carousel to the main page
  const [searchInptClicked, setSearchInptClicked] = useState(false);

  // Callback function to receive data from the child component
  const handleDataFromCarousel = (data) => {
    setSearchInptClicked(data);
  };
  console.log(searchInptClicked);

  return (
    <>
      <div>
        <div
          className={`flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px]
      lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px]
      sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] 
      pb-[40px] sm:pb-[55px] md:pb-[70px] lg:pb-[85px] xl:pb-[100px] 2xl:pb-[115px] ${
        searchInptClicked ? "hidden" : ""
      }`}
        >
          <Carousel1
            {...{ carouselPhotos1 }}
            onDataReceived={handleDataFromCarousel}
          />
          <MainServices />
          <Reyler parentId={1} />
          <Icracilar parentId={1} />
          <Musteriler />
          <div className="hidden lg:block">
            <Suallar />
          </div>
          <div className="hidden lg:block">
            <Deyerler />
          </div>

          {/* <Reels /> */}

          <LastPostedBlogs />
        </div>
        <div className={`${searchInptClicked ? "" : "hidden"}`}>
          <SearchServices />
        </div>
      </div>
    </>
  );
}

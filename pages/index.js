import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Carousel1 from "@/src/components/main/carousel1";
import MainServices from "@/src/components/service/mainServices";
import Reyler from "@/src/components/main/reyler";
import Icracilar from "@/src/components/main/icraci";
import Suallar from "@/src/components/main/suallar";
import Deyerler from "@/src/components/main/deyerler";
import LastPostedBlogs from "@/src/components/blog/LastPostedBlogs";
import Musteriler from "@/src/components/main/musteriler";
import SearchServices from "@/src/components/main/search_services";
import Reels from "@/src/components/main/reels"
export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Home(props) {
  const { locales } = useRouter();
  const intl = useIntl();
  const chosenLang = intl.locale;
  const messages = intl.messages;

  // passing data from carousel to the main page
  const [searchInptClicked, setSearchInptClicked] = useState(false);

  // Callback function to receive data from the child component
  const handleDataFromCarousel = (data) => {
    setSearchInptClicked(data);
  };

  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Cagir.az-temizlik xidmeti,paltaryuyan ustasi,kondisioner ustasi,kombi ustasi,soyuducu ustasi, temizlik sirketi,komputer ustasi,masaj,xalca yuma,elektrik"
        />
        <title>Cagir.az</title>
      </Head>

      <div className="mt-[30px] lg:mt-[0px]">
        <div
          className={`flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px]
      lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px]
      sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] 
      pb-[40px] sm:pb-[55px] md:pb-[70px] lg:pb-[85px] xl:pb-[100px] 2xl:pb-[115px] ${
        searchInptClicked ? "hidden" : ""
      }`}
        >
          <Carousel1
            {...{ messages }}
            onDataReceived={handleDataFromCarousel}
          />
          <MainServices {...{ chosenLang, messages }} />
          <Reyler {...{ chosenLang, messages }} parentId={1} />
          <Icracilar {...{ messages }} parentId={1} />
          <Reels />
          <Musteriler {...{ messages }} />
          <div className="hidden lg:block">
            <Suallar {...{ chosenLang, messages }} />
          </div>
          <div className="hidden lg:block">
            <Deyerler {...{ chosenLang, messages }} />
          </div>
          <LastPostedBlogs {...{ messages }} />
        </div>
        <div className={`${searchInptClicked ? "" : "hidden"}`}>
          <SearchServices {...{ messages, chosenLang }} />
        </div>
      </div>
    </div>
  );
}

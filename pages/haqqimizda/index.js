import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import video from "@/public/video_about.jpg";
import Banner from "@/src/components/main/banner";
import Deyerler from "@/src/components/main/deyerler";
import Musteriler from "@/src/components/main/musteriler";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn";
import TeamCard from "@/src/components/cards/team_card";
import Contact_Part from "@/src/components/others/contact_part";

export async function getServerSideProps() {
  // const data = await import("/data/data.json");
  // const { musteriler } = data;
  return {
    //will be passed to the page component as props
    props: {
      // musteriler,
    },
  };
}

export default function Haqqimizda(props) {
  const { musteriler } = props;
  const { locales } = useRouter();
  const intl = useIntl();
  const chosenLang = intl.locale;
  const messages = intl.messages;

  return (
    <div>
      <Head>
        <title>Cagir.az - Haqqımızda</title>
      </Head>
      <div className="flex flex-col items-center pb-[50px] pt-[30px] md:pb-[60px] lg:pb-[70px] xl:pb-[80px] 2xl:pb-[90px]">
        <div className="flex flex-col items-center font-semibold  gap-y-[15px] pb-[30px] lg:pb-[90px] text-gray900">
          <p className="text-[12px] lg:text-[18px] leading-[22px] lg:leading-[34px] w-full lg:w-2/3 text-center">
            Cagir.az 2020-ci ildən fəaliyyətə başlamış və illik artan
            tendensiyada olan uğurlu sifarişləri icra etmişdir. Əsas
            fəaliyyətimiz hüquqi və fiziki şəxsləri əhatələndirərək bütün məişət
            xidmətlərinin istənilən ünvana təyini və alış-verişini həyata
            keçirtməkdən ibarətdir. Xidmətlərimizin əlçatan olması üçün hər
            büdcəyə uyğun qiymətlər təklif edirik. Göstərdiyimiz xidmətin
            müştəri məmnuniyyətini artırılması üçün xidmət sahələrimizi
            genişləndirməyə davam edirik.
            {/* Hər il artan müştəri bazamız və komandamızla daim yenilənir, sizə daha yaxşı xidmət göstərmək üçün çalışırıq!
Cagir.az - Peşəkar xidmət, sərfəli qiymət!  */}
          </p>
        </div>
        <Image
          src={video}
          alt="video_img"
          className="w-full aspect-[300/164] lg:aspect-[1392/669] pb-[20px] lg:pb-[30px]"
        />
        {/* Movcud esas xidmetler */}
        <Contact_Part />
        <div className="flex items-center justify-center font-semibold gap-y-[15px] py-[30px] lg:py-[90px] text-gray900 w-full lg:w-2/3 text-center">
          <p className="text-[12px] lg:text-[18px] leading-[22px] lg:leading-[34px] text-center">
            <span className="block">
              Hər il artan müştəri bazamız və komandamızla daim yenilənir, sizə
              daha yaxşı xidmət göstərmək üçün çalışırıq!
            </span>
            <span className="block">
              Cagir.az - Peşəkar xidmət, sərfəli qiymət!{" "}
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-y-[60px] ">
          {/* <Deyerler {...{ messages, chosenLang }} /> */}
          {/* lg:gap-x-[10px] 2xl:gap-x-[60px] */}
          <div className="">{/* <Musteriler {...{ messages }} /> */}</div>

          <div className="grid gap-x-[20px] gap-y-[20px] screen360:gap-x-[30px] screen428:gap-x-[40px] sm:gap-x-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
        {/* <div className="hidden lg:flex justify-center pt-[65px]">
          <Link href="/temizlik-xidmeti/ev-temizleme">
            <PrimaryMdBtn btnName="İndi sifariş yarat" />
          </Link>
        </div> */}
      </div>
    </div>
  );
}

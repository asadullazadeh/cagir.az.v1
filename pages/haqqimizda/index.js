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
import Statistika from "@/src/components/main/statistika";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn";
export async function getServerSideProps() {
  const data = await import("/data/data.json");
  const { musteriler } = data;
  return {
    //will be passed to the page component as props
    props: {
      musteriler,
    },
  };
}

export default function Haqqimizda(props) {
  const { musteriler } = props;
  const { locales } = useRouter();
  const intl = useIntl();
  const chosenLang = intl.locale
  const messages = intl.messages

  return (
    <div>
      <Head><title>Cagir.az - Haqqımızda</title></Head>
    <div className="flex flex-col pb-[50px] pt-[30px] md:pb-[60px] lg:pb-[70px] xl:pb-[80px] 2xl:pb-[90px]">
      <Image
        src={video}
        alt="video_img"
        className="w-full aspect-[300/164] lg:aspect-[1392/669] pb-[20px] lg:pb-[30px]"
      />
      <div className="flex flex-col font-semibold  gap-y-[15px] pb-[30px] lg:pb-[90px] text-gray900">
        <p className="text-[12px] lg:text-[18px] leading-[22px] lg:leading-[34px]">
          Cagir.az - standart və sabit qiymətə saniyələr ərzində müxtəlif növ
          məişət xidmətlərini tapıb olduğunuz məkana çağırmağa imkan yaradan bir
          platformadır. Cagir.az vasitəsilə biz qeyri müəyyənliyi aradan
          qaldırır və tam ixtisaslaşmış kadrlarla sizə xidmət etməkdən böyük
          məmnuniyyət hissi duyuruq. Məqsədimiz aşağıdakı sualları
          cavablandırmaqdır:
        </p>
        <ol className="list-decimal text-[12px] lg:text-[18px] leading-[22px] lg:leading-[34px] px-[20px] lg:px-[60px]">
          <li>
            Niyə səyahətə övladlarımızın yaşı müəyyən həddə çatdıqdan sonra
            davam edirik?
          </li>

          <li>
            Niyə ahıl və ya fiziki məhdudiyyətli insanımız bərbər, tibbi xidmət
            və ya digər mövzularda əziyyət çəkir?
          </li>
          <li>
            Niyə evimizdə məişət ustasına ehtiyac duyarkən daha öncədən qiyməti
            bilə bilmir və hər zaman özümüzü narahat hiss edirik?
          </li>
          <li>
            Niyə rəfiqəmizin toyunda iştirak etmək üçün gözəllik salonuna yol
            alıb və toyun sadəcə “Aş Gəldi” hissəsinə çatırıq?
          </li>
        </ol>
        <p className="text-[12px] lg:text-[18px] leading-[22px] lg:leading-[27px]">
          Cagir.az – Dostluğun adı, Komfortun dadı. Artıq narahat olmayın və
          təki bizi siz çağırın!
        </p>
      </div>
      <Banner />
      <div className="flex flex-col gap-y-[60px] pt-[60px] lg:pt-[90px]">
        <Deyerler
        {...{messages}}
        {...{chosenLang}}
         />
        <Statistika
        {...{messages}}
        {...{chosenLang}} />
        <Musteriler {...{ musteriler }} />
      </div>
      <div className="hidden lg:flex justify-center pt-[65px]">
        <Link href="">
          <PrimaryMdBtn btnName="İndi sifariş yarat" />
        </Link>
      </div>
    </div>
    </div>
  );
}

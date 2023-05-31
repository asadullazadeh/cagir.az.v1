import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "@/icons/phone.svg";
import envelope from "@/icons/envelope.svg";
import SocialNetworks from "@/src/components/social_ntwrks";
import SifarishBtn from "@/src/components/buttons/sifarish_btn";
import video from "@/public/video_about.jpg"
import Banner from "@/src/components/banner/banner";
import Deyerler from "@/src/components/deyerler/deyerler";
import Partnyorlar from "@/src/components/partnyorlar/partnyorlar";
import Statistika from "@/src/components/statistika/statistika"
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn"
export async function getServerSideProps() {
  const data = await import("/data/data.json");
  const {
    partnyorlar,
  } = data;
  return {
    //will be passed to the page component as props
    props: {
      partnyorlar,
    },
  };
}

export default function Haqqimizda(props) {
  const {
    
    partnyorlar,
  } = props;

  return (
    <div className="flex flex-col pt-[30px] pb-[50px] lg:pb-[90px]">

        <Image src={video} alt="video_img" className="w-full aspect-[300/164] lg:aspect-[1392/669] pb-[20px] lg:pb-[30px]" />
        <div className="flex flex-col font-semibold  gap-y-[15px] pb-[30px] lg:pb-[90px] text-gray900">
            <p className="text-[12px] lg:text-[18px] leading-[22px] lg:leading-[34px]">Cagir.az - standart və sabit qiymətə saniyələr ərzində müxtəlif növ məişət xidmətlərini tapıb olduğunuz məkana çağırmağa imkan yaradan bir platformadır. 
            Cagir.az vasitəsilə biz qeyri müəyyənliyi aradan qaldırır və tam ixtisaslaşmış kadrlarla sizə xidmət etməkdən böyük məmnuniyyət hissi duyuruq.
Məqsədimiz aşağıdakı sualları cavablandırmaqdır:</p>
            <ol className="list-decimal text-[12px] lg:text-[18px] leading-[22px] lg:leading-[34px] px-[20px] lg:px-[60px]">
                <li>Niyə səyahətə övladlarımızın yaşı müəyyən həddə çatdıqdan sonra davam edirik?</li>
                
                <li>Niyə ahıl və ya fiziki məhdudiyyətli insanımız bərbər, tibbi xidmət və ya digər mövzularda əziyyət çəkir?</li>
                <li>Niyə evimizdə məişət ustasına ehtiyac duyarkən daha öncədən qiyməti bilə bilmir və hər zaman özümüzü narahat hiss edirik?</li>
                <li>Niyə rəfiqəmizin toyunda iştirak etmək üçün gözəllik salonuna yol alıb və toyun sadəcə “Aş Gəldi” hissəsinə çatırıq?</li>
            </ol>
            <p className="text-[12px] lg:text-[18px] leading-[22px] lg:leading-[27px]">Cagir.az – Dostluğun adı, Komfortun dadı. Artıq narahat olmayın və təki bizi siz çağırın!</p>
        </div>
        <Banner />
        <div className="flex flex-col gap-y-[60px] pt-[60px] lg:pt-[90px]">
            <Deyerler />
            < Statistika />
            <Partnyorlar {...{ partnyorlar }} />
        </div>
        <div className="hidden lg:flex justify-center pt-[65px]">
        <PrimaryMdBtn btnName="İndi sifariş yarat" />
        </div>
    </div>
  );
}

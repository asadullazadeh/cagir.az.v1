import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import video from "@/public/video_about.jpg";
import Musteriler from "@/src/components/main/musteriler";
import TeamCard from "@/src/components/cards/team_card";
import Contact_Part from "@/src/components/others/contact_part";
import arrow from "@/icons/arrow.svg";

const containerClasses =
  "flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px] lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px] pt-[30px] sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] pb-[60px] sm:pb-[75px] md:pb-[90px] lg:pb-[105px] xl:pb-[120px] 2xl:pb-[135px]";
const listClasses =
  "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[15px] sm:gap-[20px] md:gap-[25px] lg:gap-[35px] xl:gap-y-[51px] 2xl:gap-[60px]";
const linkClasses =
  "flex items-center justify-between w-full aspect-[15/3] sm:aspect-[302/91] rounded-[20px] drop-shadow-cardAlt lg:drop-shadow-none lg:hover:drop-shadow-cardAlt transition duration-300 bg-white px-[15px] sm:px-[30px] py-[9.5px] sm:py-[15px] group";

export async function getServerSideProps() {
  let responseData = [];

  try {
    const response = await axios.get(
      "https://api.cagir.az/api/service/getSubServicesByParentId?parentId=2",
      {
        headers: {
          "Accept-Language": "az",
        },
      }
    );

    responseData = response.data.result;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      responseData,
    },
  };
}

export default function Haqqimizda(props) {
  const { musteriler } = props;
  const { locales } = useRouter();
  const intl = useIntl();
  const chosenLang = intl.locale;
  const messages = intl.messages;

  const { responseData } = props;
  console.log(responseData);
  return (
    <div>
      <Head>
        <title>Cagir.az - Haqqımızda</title>
      </Head>
      <div className="flex flex-col  pb-[50px] pt-[30px] md:pb-[60px] lg:pb-[70px] xl:pb-[80px] 2xl:pb-[90px]">
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

        {/*  */}
        <div>
          <h4 className="my-h4 py-[30px] lg:py-[60px] text-center">
            Mövcud əsas xidmət sahələrimiz
          </h4>
          <div className="flex flex-row gap-x-[15px] items justify-between">
            <Link
              href="/temizlik-xidmeti"
              className="py-[15px] w-full bg-green-400 rounded-[15px] text-center font-semibold lg:font-bold text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-white"
            >
              Təmizlik xidmətləri
            </Link>
            <Link
              href="/usta"
              className="py-[15px] w-full bg-cagiraz rounded-[15px] text-center font-semibold lg:font-bold text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-white"
            >
              Usta xidmətləri
            </Link>
          </div>
          <div className={containerClasses}>
            <ul className={listClasses}>
              {responseData.map(({ serviceNames, price }, index) => (
                <div key={index}>
                  <Link
                    className={linkClasses}
                    href={`${serviceNames[0].titleUrl}`}
                  >
                    <div>
                      <h5 className="relative font-semibold lg:font-bold text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-black500">
                        {serviceNames[0].name}
                      </h5>
                      <p className="font-medium sm:font-semibold text-[12px] leading-[18px] text-gray900 mt-0 sm:mt-[2px]">
                        {price}
                      </p>
                    </div>
                    <div className="hidden group-hover:block transition duration-300">
                      <Image
                        src={arrow}
                        alt="arrow_icon"
                        className="hidden lg:block"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        </div>

        {/*  */}

        <Contact_Part />
        <div class="flex justify-center">
          <div className="flex items-center justify-center font-semibold gap-y-[15px] py-[30px] lg:py-[90px] text-gray900 w-full lg:w-2/3 text-center">
            <p className="text-[12px] lg:text-[18px] leading-[22px] lg:leading-[34px] text-center">
              <span className="block">
                Hər il artan müştəri bazamız və komandamızla daim yenilənir,
                sizə daha yaxşı xidmət göstərmək üçün çalışırıq!
              </span>
              <span className="block">
                Cagir.az - Peşəkar xidmət, sərfəli qiymət!{" "}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-[60px] ">
          {/* <Deyerler {...{ messages, chosenLang }} /> */}
          {/* lg:gap-x-[10px] 2xl:gap-x-[60px] */}
          <div className="max-w-[300px] screen360:max-w-[340px] screen375:max-w-[355px] screen390:max-w-[370px] screen412:max-w-[392px] screen428:max-w-[408px] sm:max-w-[620px] md:max-w-[748px] lg:max-w-[964px] xl:max-w-[1220px] ">
            <Musteriler {...{ messages }} />
          </div>

          <div>
            <h4 className="my-h4  text-center pb-[30px] lg:pb-[60px]">
              Komandamız
            </h4>
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
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import WorkWithUsDesktop from "@/public/workwithus_desktop.jpg";
import WorkWithUsMobile from "@/public/workwithus_mobile.jpg";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn";

function IsAxtariram() {
  const { locales } = useRouter();
  const intl = useIntl();
  return (
    <div>
      <Head>
        <title>Cagir.az - iş axtarıram, ish elanlari</title>
        {/* <meta
          name="description"
          content="Siz də &quot; iş axtarıram&quot; , &quot; iş elanları&quot; axtarmaqdan yorulmusunuzsa. Bizimlə işləməyə başlayın."
        /> */}
      </Head>

      <div className="flex flex-col pt-[30px] pb-[50px]  md:pb-[60px] lg:pb-[70px] xl:pb-[80px] 2xl:pb-[90px]">
        <div className="">
          <Image
            src={WorkWithUsDesktop}
            alt="WorkWithUsDesktop"
            className="hidden lg:block w-full aspect-[1392/450]"
          />
          <Image
            src={WorkWithUsMobile}
            alt="WorkWithUsMobile"
            className="block lg:hidden w-full aspect-[292/164]"
          />
        </div>

        <h2 className="my-h2 text-center pt-[15px] lg:pt-[30px]">
          Sən iş axtarırsan, biz isə səni!
        </h2>
        {/* desktop version */}
        <p
          className="hidden lg:flex flex-col font-normal lg:font-medium text-[12px] lg:text-[16px] leading-[22px] lg:leading-[34px]
        pt-[5px] lg:pb-[15px] "
        >
          <span className="mx-auto">
            Cagir.az müxtəlif sahələr üzrə vakansiya elan edir. Sən də iş
            axtarıram, maaş{" "}
          </span>
          <span className="mx-auto">
            qane eləmir deyirsənsə bizə qoşul, daha çox müştəriyə çat! Aşağıdakı
            anketi{" "}
          </span>
          <span className="mx-auto">doldur, elə sabahdan işə başla! </span>
          <span className="mx-auto"> İşə müraciət anketi: </span>
        </p>
        {/* mobile version */}
        <p
          className=" lg:hidden flex flex-col font-normal lg:font-medium text-[12px] lg:text-[16px] leading-[22px] lg:leading-[34px]
        pt-[5px] lg:pb-[15px] text-gray900"
        >
          <span className="mx-auto">
            Cagir.az müxtəlif sahələr üzrə vakansiya elan edir.{" "}
          </span>
          <span className="mx-auto">
            Sən də iş axtarıram, maaş qane eləmir{" "}
          </span>
          <span className="mx-auto">
            deyirsənsə bizə qoşul, daha çox müştəriyə çat!{" "}
          </span>
          <span className="mx-auto">
            Aşağıdakı anketi doldur, elə sabahdan işə başla!{" "}
          </span>
          <span className="mx-auto pt-[40px]">İşə müraciət anketi:</span>
        </p>
        <div className="flex justify-center pt-[10px] lg:pt-[20px]">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSctA5o8rgT8juQdBROPT7QAHX8J84bo5ViG8d3hidBqzr5ahg/viewform"
            target="_blank"
          >
            <PrimaryMdBtn
              btnName="İşə müraciət anketini doldur"
              classNames="w-full lg:w-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IsAxtariram;

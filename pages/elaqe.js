import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Head from "next/head";
import phone from "@/icons/phone.svg";
import envelope from "@/icons/envelope.svg";
import SocialNetworks from "@/src/components/others/social_ntwrks";

function Elaqe() {
  const { locales } = useRouter();
  const intl = useIntl();
  const messages = intl.messages;
  return (
    <div>
      <Head>
        <title>Cagir.az - Əlaqə</title>
      </Head>

      <div className="flex flex-col items-center min-h-screen pt-[50px] md:pt-0 md:justify-center">
        <div className="flex flex-col items-center w-4/5">
          <h4 className="my-h4 pb-[30px] lg:pb-[60px]">{messages.contact}</h4>
          <div className="flex flex-col font-medium lg:font-semibold text-[12px] lg:text-[18px] leading-[18px] lg:leading-[34px] pb-[60px] lg:first-letter:w-[500px]">
            <span className="mx-auto">{messages.anyproblem}</span>
            <Link className="mx-auto text-cagiraz" href="/faq">
              {messages["faq"]}
            </Link>
            <span className="mx-auto">{messages["anyproblem-part"]}</span>
          </div>

          <div className="flex flex-col gap-y-[30px] mx-auto">
            {/* email section */}
            <div className="flex flex-row gap-x-[15px]">
              <div className="inline-flex row-span-2 w-[42px] h-[42px] items-center justify-center rounded-full bg-cagiraz">
                <Image src={envelope} alt="envelope_icon" />
              </div>
              <div className="flex flex-col">
                <div className="col-span-1">
                  <Link href="mailto:info@cagir.az" className="font-semibold text-[14px] leading-[21px]">
                    info@cagir.az
                  </Link>
                </div>
                <div className="row-span-1 col-span-1">
                  <Link href="mailto:hr@cagir.az" className="font-semibold text-[14px] leading-[21px]">
                    
                    hr@cagir.az
                  </Link>
                </div>
              </div>
            </div>

            {/* phone section */}
            <div className="grid grid-rows-2 grid-flow-col items-center gap-x-[15px]">
              <div className="flex row-span-2 w-[42px] h-[42px] items-center justify-center rounded-full bg-cagiraz">
                <Image src={phone} alt="phone_icon" />
              </div>
              <div className="row-span-2 col-span-1">
                <Link href="tel:+994703482606">
                  <p className="font-semibold text-[14px] leading-[21px]">
                    
                    +994 70 348 26 06
                  </p>
                </Link>
              </div>
            </div>
            {/* Sosial sebekeler insta, fb, linkedin */}
            <div className="flex flex-col space-y-[18px] items-center lg:items-start">
              <h6 className="font-semibold lg:font-bold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-black500">
                {/* Sosial mediada bizi izləyin */}
                {messages["follow-us"]}
              </h6>
              <SocialNetworks classNames="flex flex-row gap-x-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elaqe;

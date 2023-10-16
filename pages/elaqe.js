import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Head from "next/head";
import Contact_Part from "@/src/components/others/contact_part";
import ContactTeamCard from "@/src/components/cards/contact_team_card";
import phone from "@/icons/phone.svg";
import phone_black from "@/icons/phone_black.svg";

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
      {/* flex flex-col items-center min-h-screen lg:justify-center pt-[50px] lg:pt-0 */}
      <div className="flex flex-col  pb-[50px] pt-[30px] md:pb-[60px] lg:pb-[70px] xl:pb-[80px] 2xl:pb-[90px]">
        <div className="flex flex-col items-center w-full ">
          <h4 className="my-h4 pb-[30px] lg:pb-[60px]">{messages.contact}</h4>
          <div className="flex flex-col font-medium lg:font-semibold text-[12px] lg:text-[18px] leading-[18px] lg:leading-[34px] pb-[60px] lg:first-letter:w-[500px] text-[#959595]">
            <span className="mx-auto">{messages.anyproblem}</span>
            <Link className="mx-auto text-cagiraz" href="/faq">
              {messages["faq"]}
            </Link>
            <span className="mx-auto text-[#959595]">
              {messages["anyproblem-part"]}
            </span>
          </div>

          <Contact_Part />
          <p className="font-medium lg:font-semibold text-[12px] lg:text-[18px] leading-[18px] lg:leading-[34px] text-[#959595] py-[40px]">
            Hər hansı şikayət və təklifiniz olarsa, bizimlə əlaqə saxlaya
            bilərsiniz.
          </p>
          {/* team part */}
          <div className="flex flex-row gap-x-[10px] lg:gap-x-[40px] ">
            <ContactTeamCard />
            <ContactTeamCard />
            <ContactTeamCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elaqe;
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
      <div className="flex flex-col items-center min-h-screen lg:justify-center pt-[50px] lg:pt-0">
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

// <div className="flex flex-col gap-y-[30px] mx-auto">
//             <div className="flex flex-row gap-x-[15px]">
//               <div className="inline-flex row-span-2 w-[42px] h-[42px] items-center justify-center rounded-full bg-cagiraz">
//                 <Image src={envelope} alt="envelope_icon" />
//               </div>
//               <div className="flex flex-col">
//                 <div className="col-span-1">
//                   <Link
//                     href="mailto:info@cagir.az"
//                     className="font-semibold text-[14px] leading-[21px]"
//                   >
//                     info@cagir.az
//                   </Link>
//                 </div>
//                 <div className="row-span-1 col-span-1">
//                   <Link
//                     href="mailto:hr@cagir.az"
//                     className="font-semibold text-[14px] leading-[21px]"
//                   >
//                     hr@cagir.az
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-rows-2 grid-flow-col items-center gap-x-[15px]">
//               <div className="flex row-span-2 w-[42px] h-[42px] items-center justify-center rounded-full bg-cagiraz">
//                 <Image src={phone} alt="phone_icon" />
//               </div>
//               <div className="row-span-2 col-span-1">
//                 <Link href="tel:+994703482606">
//                   <p className="font-semibold text-[14px] leading-[21px]">
//                     +994 70 348 26 06
//                   </p>
//                 </Link>
//               </div>
//             </div>
//             <div className="flex flex-col space-y-[18px] items-center lg:items-start">
//               <h6 className="font-semibold lg:font-bold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-black500">
//                 {/* Sosial mediada bizi izləyin */}
//                 {messages["follow-us"]}
//               </h6>
//               <SocialNetworks classNames="flex flex-row gap-x-[20px]" />
//             </div>
//           </div>

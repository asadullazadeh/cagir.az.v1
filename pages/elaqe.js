import React from "react";
import Link from "next/link";
import { useIntl } from "react-intl";
import Head from "next/head";
import Contact_Part from "@/src/components/others/contact_part";
import TeamCard from "@/src/components/cards/team_card";

const teamContactInfos = [
  {
    name: "Turqut Zeynalov",
    position: "Həmtəsisçi,İcraçı Direktor",
    image: "",
    email: "turgut@cagir.az",
    number: "+33786923768",
  },
  {
    name: "Orxan Abdulhəsənli",
    position: "Həmtəsisçi, İcraçı Direktor Müavini",
    image: "",
    email: "orkhan@cagir.az",
    number: "+994514920220",
  },
  {
    name: "Ramin Nəbiyev",
    position: "Həmtəsisçi, Əməliyyatlar üzrə Direktor",
    image: "",
    email: "ramin@cagir.az",
    number: "+994102156343",
  },
  // {
  //   name: "Tağı Əsədullazadə",
  //   position: "Baş Texniki Direktor",
  //   image: "",
  //   email: "email@email.com",
  //   number: "+994514920220",
  // },
];

function Elaqe() {
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
          <div className="grid gap-x-[20px] gap-y-[20px] screen360:gap-x-[30px] screen428:gap-x-[40px] sm:gap-x-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {teamContactInfos.map(
              ({ index, name, position, email, number }) => {
                return (
                  <div key={index}>
                    <TeamCard {...{ name, position, email, number }} />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elaqe;

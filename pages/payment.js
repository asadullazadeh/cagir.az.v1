import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import InputCustomized from "@/src/components/input/input";
import InputNumber from "@/src/components/input/input_number";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn";

function Payment() {
  const { locales } = useRouter();
  const intl = useIntl();
  const chosenLang = intl.locale;
  const messages = intl.messages;
  return (
    <div>
      <Head>
        <title>Cagir.az - Ödəniş</title>
      </Head>
      <div className="flex flex-col items-center min-h-screen lg:justify-center pt-[50px] lg:pt-0">
        <h2 className="my-h2 text-center pb-[15px]">{messages.payment}</h2>
        <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 gap-y-[15px]">
          <InputCustomized label="Ad və soyad" type="text" />
          <InputNumber label={messages.phone} />
          <InputCustomized label={messages.amount} type="number" />
          <div>
            <label
              htmlFor="message"
              className="block lg:pb-[5px] pl-[15px] font-medium lg:font-semibold text-[12px] leading-[18px] 
            lg:leading-[15px] text-gray900 lg:text-black500"
            >
              {messages.note}
            </label>
            <textarea
              id="message"
              rows="3"
              className="resize-x block pt-[8px] lg:pt-[15px] px-[10px] lg:pr-[7px] lg:pl-[15px] pb-[20px] w-full  
            font-semibold text-[10px] leading-[15px] 
            text-gray-900 bg-white outline-none
            rounded-lg border border-gray-300"
              placeholder="Qeydlərinizi edin..."
            ></textarea>
          </div>
          <div className="w-full pt-[20px]">
            <Link
              className="flex justify-center lg:justify-end"
              href="/payment_result"
            >
              <PrimaryMdBtn
                btnName={messages["btn-paymet"]}
                classNames="w-full lg:w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

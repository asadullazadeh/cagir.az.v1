import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import InputCustomized from "@/src/components/input/input";
import InputNumber from "@/src/components/input/input_number";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn";

function Payment() {
  const intl = useIntl();
  const messages = intl.messages;
  return (
    <div>
      <Head>
        <title>Cagir.az - Ödəniş</title>
      </Head>
      <div className="flex flex-col items-center min-h-screen lg:justify-center pt-[50px] lg:pt-0">
        <h2 className="my-h2 text-center pb-[15px] lg:pb-[30px]">
          {messages.payment}
        </h2>
        <div className="flex flex-col justify-between w-full gap-y-[20px] lg:w-2/5">
          <InputCustomized
            label={messages["name-and-surname"]}
            type="text"
            typeMore="name"
          />
          <InputNumber label={messages.phone} />
          <InputCustomized
            label={messages.amount}
            type="number"
            typeMore="money"
          />
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
              // placeholder="Qeydlərinizi edin..."
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

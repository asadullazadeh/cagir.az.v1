import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import phone from "@/icons/tab_bar/phone.svg";
import whatsapp from "@/icons/tab_bar/whatsapp.svg";
import client from "@/public/client.jpg";
import jale from "@/public/jale.jpg";
import call_back from "@/icons/tab_bar/call_back.svg";
import ModalStandart from "@/src/components/modal/modal_stand";
import InputBtnNbTransition from "@/src/components/input/input_btn_nb_transition";
import LiveChat from "@/src/components/others/livechat";

//

const TabBar = ({ classNames, messages }) => {
  // useEffect(() => {
  //   window.__lc = window.__lc || {};
  //   window.__lc.license = 14444979;

  //   (function (n, t, c) {
  //     function i(n) {
  //       return e._h ? e._h.apply(null, n) : e._q.push(n);
  //     }
  //     var e = {
  //       _q: [],
  //       _h: null,
  //       _v: "2.0",
  //       on: function () {
  //         i(["on", c.call(arguments)]);
  //       },
  //       once: function () {
  //         i(["once", c.call(arguments)]);
  //       },
  //       off: function () {
  //         i(["off", c.call(arguments)]);
  //       },
  //       get: function () {
  //         if (!e._h)
  //           throw new Error(
  //             "[LiveChatWidget] You can't use getters before load."
  //           );
  //         return i(["get", c.call(arguments)]);
  //       },
  //       call: function () {
  //         i(["call", c.call(arguments)]);
  //       },
  //       init: function () {
  //         var n = t.createElement("script");
  //         n.async = true;
  //         n.type = "text/javascript";
  //         n.src = "https://cdn.livechatinc.com/tracking.js";
  //         t.head.appendChild(n);
  //       },
  //     };

  //     if (!n.__lc.asyncInit) e.init();

  //     n.LiveChatWidget = n.LiveChatWidget || e;
  //   })(window, document, [].slice);
  // }, []);

  <noscript>
    <Link
      href="https://www.livechat.com/chat-with/14444979/"
      rel="nofollow"
    ></Link>
    , powered by{" "}
    <Link
      href="https://www.livechat.com/?welcome"
      rel="noopener nofollow"
      target="_blank"
    >
      LiveChat
    </Link>
  </noscript>;
  return (
    <div>
      <div
        className={`h-[55px] w-full bg-white border-t border-gray-200 ${classNames}`}
      >
        <div className="grid h-full w-inline-block grid-cols-4 mx-auto font-medium">
          {/* Call icon */}
          <Link
            href="tel:+994703482606"
            className="inline-flex flex-col items-center justify-center"
          >
            <Image src={phone} alt="phone_icon" />
            <span className="text-[10px] leading-[15px] text-cagiraz">
              Zəng
            </span>
          </Link>
          {/* Geri zeng icons */}

          <button
            onClick={() => window.my_modal_6.showModal()}
            type="button"
            className="inline-flex flex-col items-center justify-center"
          >
            <Image src={call_back} alt="whatsapp_icon" />
            <span className="text-[10px] leading-[15px] text-danger">
              Geri Zəng
            </span>
          </button>
          <ModalStandart
            dialogId="my_modal_6"
            content={<InputBtnNbTransition name="Sürətli sifariş" />}
          />
          {/* Whatsapp */}
          <Link
            href="https://wa.me/994703482606"
            className="inline-flex flex-col items-center justify-center"
          >
            <Image src={whatsapp} alt="whatsapp_icon" />
            <span className="text-[10px] leading-[15px] text-sucess">
              Whatsapp
            </span>
          </Link>
          {/* Chat */}

          <div className="inline-flex flex-col items-center justify-center">
            <LiveChat />

            {/* <Image
              alt="livechat image"
              width={65}
              height={65}
              className="bubble z-50 rounded-full w-[22px] h-[22px] object-cover object-center"
              onclick="LiveChatWidget.call('maximize')"
              src={jale}
            /> */}

            <span className="text-[10px] leading-[15px] text-black500">
              Çat
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabBar;

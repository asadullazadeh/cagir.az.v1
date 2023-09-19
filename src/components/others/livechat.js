import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Image from "next/image"
import Head from "next/head"
import Link from "next/link";
import jale from "@/public/jale.jpg";


const LiveChat = () => {
  useEffect(() => {
    window.__lc = window.__lc || {};
    window.__lc.license = 14444979;

    (function(n, t, c) {
      function i(n) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e = { _q: [], _h: null, _v: "2.0", on: function() { i(["on", c.call(arguments)]) }, once: function() { i(["once", c.call(arguments)]) }, off: function() { i(["off", c.call(arguments)]) }, get: function() { if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load."); return i(["get", c.call(arguments)]) }, call: function() { i(["call", c.call(arguments)]) }, init: function() { var n = t.createElement("script"); n.async = true; n.type = "text/javascript"; n.src = "https://cdn.livechatinc.com/tracking.js"; t.head.appendChild(n); } };

      if (!n.__lc.asyncInit) e.init();

      n.LiveChatWidget = n.LiveChatWidget || e;
    })(window, document, [].slice);
    console.log(document)
  }, []);

  return (
    <div>
      <noscript>
        <Link href="https://www.livechat.com/chat-with/14444979/" rel="nofollow">Chat with us</Link>, powered by <Link href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</Link>
      </noscript>
      <Image alt="livechat image" width={65} height={65} className="bubble z-50 rounded-full w-[22px] h-[22px]  object-cover object-center" onclick="LiveChatWidget.call('maximize')" src={jale} />
    </div>
  );
};

export default LiveChat;
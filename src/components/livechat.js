import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
const LiveChat = () => {
  return (
    <div>
      {/* Your page content */}
      <Head>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.__lc = window.__lc || {};
              window.__lc.license = 14444979;
              (function(n,t,c){...} (window,document,[].slice));
            `,
          }}
        />
        <noscript>
          <a href="https://www.livechat.com/chat-with/14444979/" rel="nofollow">
            Chat with us
          </a>, powered by{' '}
          <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">
            LiveChat
          </a>
        </noscript>
      </Head>
    </div>
  );
};

export default LiveChat;

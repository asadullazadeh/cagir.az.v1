import { Html, Head, Main, NextScript } from "next/document";
import  Script  from 'next/script';

export default function Document() {
  return (
    <Html lang="en" className="">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />

        {/* Google Tag Manager (gtag.js) - Global site tag */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-141772948-1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'UA-141772948-1');
              gtag('config', 'AW-676425652');
            `,
          }}
        />

        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-T5QK2Z74EX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-T5QK2Z74EX');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
        id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K9TLBWQ');
            `,
          }}
        ></Script>

        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '384867609904179'); 
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
  <iframe 
    src="https://www.googletagmanager.com/ns.html?id=GTM-K9TLBWQ" 
    height="0" 
    width="0"
    // style={{ display: 'none', visibility: 'hidden' }}
  ></iframe>
</noscript>

      </Head>
      <body className="screen1700:flex screen1700:justify-center">
        <Main />
        <NextScript />
        
      </body>
    </Html>
  );
}




// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en" className="">
//       <Head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       <body className="screen1700:flex screen1700:justify-center">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

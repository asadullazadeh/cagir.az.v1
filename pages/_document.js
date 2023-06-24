import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.css"  rel="stylesheet" />




      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="@/node_modules/flowbite/dist/flowbite.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js"></Script>


      </body>
    </Html>
  );
}

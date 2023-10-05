import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <script async src="//www.instagram.com/embed.js"></script>
      </Head>
      <body className="screen1700:flex screen1700:justify-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import "@/styles/globals.css";
import "@/node_modules/react-alice-carousel/lib/alice-carousel.css";
import Layout from "@/src/components/layout/layout";
import az from "@/data/az.json";
import en from "@/data/en.json";
import ru from "@/data/ru.json";
const messages = {
  az,
  en,
  ru,
};
function getDirection(locale) {
  if (locale === "az") {
    return "rtl";
  }

  return "ltr";
}
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState("");
  const { locale } = useRouter();
  const router = useRouter();
  // console.log(router);
  console.log(locale);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  return (
    <div className="font-poppins">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </div>
  );
}

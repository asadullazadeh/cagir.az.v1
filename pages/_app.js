import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import "@/node_modules/react-alice-carousel/lib/alice-carousel.css";
import Layout from "@/src/components/layout/layout";
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  console.log(token);
  return (
    <div className="font-poppins">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

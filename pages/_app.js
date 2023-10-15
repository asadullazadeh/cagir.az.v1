// pages/_app.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { IntlProvider } from "react-intl";
import "@/styles/globals.css";
import "@/node_modules/react-alice-carousel/lib/alice-carousel.css";
import Layout from "@/src/components/layout/layout";
import AlternativeLayout from "@/src/components/layout/AlternativeLayout"; // Import your alternative layout component
import az from "@/data/az.json";
import en from "@/data/en.json";
import ru from "@/data/ru.json";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Import the CSS styles

const messages = {
  az,
  en,
  ru,
};

NProgress.configure({ showSpinner: false });

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      NProgress.start();
    };
    const handleComplete = () => {
      setLoading(false);
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  const [token, setToken] = useState("");
  const { locale } = useRouter();
  console.log(token);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Define the paths of pages where you want to exclude the layout
  const excludeLayoutForPages = [
    "en/master",
    "en/plumber",
    "en/combi",
    "en/climate",
    "en/clean",
  ]; // Add the paths of pages where you want to exclude the layout
  const useAlternativeLayoutForPages = [
    "/master",
    "/plumber",
    "/combi",
    "/climate",
    "/clean",
  ]; // Add the paths of pages where you want to use the alternative layout

  return (
    <div className="font-poppins">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <>
          {loading && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(255, 255, 255, 1)",
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Your spinner here */}
              <div className="spinner"></div>
            </div>
          )}
          {/* Conditionally apply Layout */}
          {excludeLayoutForPages.includes(router.asPath) ? (
            <Component {...pageProps} />
          ) : useAlternativeLayoutForPages.includes(router.asPath) ? (
            <AlternativeLayout>
              <Component {...pageProps} />
            </AlternativeLayout>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
          <style jsx global>{`
            /* Add your spinner styling here */
            .spinner {
              border: 4px solid rgba(0, 0, 0, 0.1);
              width: 31.86px;
              height: 31.86px;
              border-radius: 50%;
              border-left-color: #3598ea;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </>
      </IntlProvider>
    </div>
  );
}


// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Router from "next/router";
// import { IntlProvider } from "react-intl";
// import "@/styles/globals.css";
// import "@/node_modules/react-alice-carousel/lib/alice-carousel.css";
// import Layout from "@/src/components/layout/layout";
// import az from "@/data/az.json";
// import en from "@/data/en.json";
// import ru from "@/data/ru.json";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css"; // Import the CSS styles

// const messages = {
//   az,
//   en,
//   ru,
// };

// NProgress.configure({ showSpinner: false });

// export default function MyApp({ Component, pageProps }) {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = () => {
//       setLoading(true);
//       NProgress.start();
//     };
//     const handleComplete = () => {
//       setLoading(false);
//       NProgress.done();
//     };

//     Router.events.on("routeChangeStart", handleStart);
//     Router.events.on("routeChangeComplete", handleComplete);
//     Router.events.on("routeChangeError", handleComplete);

//     return () => {
//       Router.events.off("routeChangeStart", handleStart);
//       Router.events.off("routeChangeComplete", handleComplete);
//       Router.events.off("routeChangeError", handleComplete);
//     };
//   }, []);
//   //
//   const [token, setToken] = useState("");
//   const { locale } = useRouter();
//   const router = useRouter();
//   console.log(token);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);
//   return (
//     <div className="font-poppins">
//       <IntlProvider locale={locale} messages={messages[locale]}>
//         <Layout>
//           <>
//             {loading && (
//               <div
//                 style={{
//                   position: "fixed",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   background: "rgba(255, 255, 255, 1)",
//                   zIndex: 9999,
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 {/* Your spinner here */}
//                 <div className="spinner"></div>
//               </div>
//             )}
//             <Component {...pageProps} />
//             <style jsx global>{`
//               /* Add your spinner styling here */
//               .spinner {
//                 border: 4px solid rgba(0, 0, 0, 0.1);
//                 width: 31.86px;
//                 height: 31.86px;
//                 border-radius: 50%;
//                 border-left-color: #3598ea;
//                 animation: spin 1s linear infinite;
//               }
//               @keyframes spin {
//                 0% {
//                   transform: rotate(0deg);
//                 }
//                 100% {
//                   transform: rotate(360deg);
//                 }
//               }
//             `}</style>
//           </>
//         </Layout>
//       </IntlProvider>
//     </div>
//   );
// }
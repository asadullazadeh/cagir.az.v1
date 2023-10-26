import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import { useIntl } from "react-intl";
import icraciSvg from "@/icons/faq/icraci.svg";
import icraciSvg_clicked from "@/icons/faq/icraci_clicked.svg";
import musteriSvg from "@/icons/faq/musteri.svg";
import musteriSvg_clicked from "@/icons/faq/musteri_clicked.svg";
import sifarisSvg from "@/icons/faq/sifaris.svg";
import sifarisSvg_clicked from "@/icons/faq/sifaris_clicked.svg";
import up from "@/icons/form/up.svg";
import down from "@/icons/form/down.svg";

function Faq() {
  const intl = useIntl();
  const chosenLang = intl.locale
  const messages = intl.messages

  const [categoryId, setCategoryId] = useState(0); // Initial categoryId is 0
  const [responseData, setResponseData] = useState([]);
  const [clickedItems, setClickedItems] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.cagir.az/api/faq/getAllByCategory?faqCategoryId=${categoryId}`,
        {
          headers: {
            "Accept-Language": chosenLang,
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setResponseData(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [categoryId,chosenLang]);
  const firstFaqNames = Object.values(responseData).map(
    (child) => child.faqNames[0]
  );

  // Event handler for when an element is clicked
  const handleClick = (clickedCategoryId) => {
    setCategoryId(clickedCategoryId);
  };

  useEffect(() => {
    handleClick(3); // Call handleClick with 0 as the default value
  }, []); // Run only once when the component mounts

  const faqIsClicked = (id) => {
    setClickedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the clicked state
    }));
  };

  return (
    <div>
      <Head>
        <title>Cagir.az - Suallar</title>
      </Head>

      <div className="my-[30px] lg:mt-[90px]">
        <div className="flex flex-col lg:flex-row justify-center items-center mb-[15px] lg:mb-[90px] ">
          <button
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-full sm:aspect-[300/82]"
            onClick={() => handleClick(2)}
          >
            <Image
              src={categoryId === 2 ? icraciSvg_clicked : icraciSvg}
              alt={icraciSvg}
              className="w-full h-full"
            />
          </button>

          <button
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-full sm:aspect-[300/82]"
            onClick={() => handleClick(3)}
          >
            <Image
              src={categoryId === 3 ? musteriSvg_clicked : musteriSvg}
              alt={musteriSvg}
              className="w-full h-full"
            />
          </button>

          <button
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-full sm:aspect-[300/82]"
            onClick={() => handleClick(1)}
          >
            <Image
              src={categoryId === 1 ? sifarisSvg_clicked : sifarisSvg}
              alt={sifarisSvg}
              className="w-full h-full"
            />
          </button>
        </div>
        <h2 className="my-h2 mb-[15px] lg:mb-[30px] text-center">
          {messages["faq"]}
        </h2>
        <div className="space-y-[15px] lg:space-y-[17px]">
          {firstFaqNames.map(({ question, answer, isActive, faqId, id }) => (
            <div key={id}>
              {/* <details className="group [&_summary::-webkit-details-marker]:hidden"> */}
              <summary
                onClick={() => faqIsClicked(id)}
                className="flex items-center gap-x-[10px] rounded-lg cursor-pointer"
              >
                <h5 className="my-h5 ">{question}</h5>
                {clickedItems[id] === true ? (
                  <Image src={up} alt="upicon" />
                ) : (
                  <Image src={down} alt="downicon" />
                )}
              </summary>
              <Transition
                show={clickedItems[id] === true ? clickedItems[id] : false}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 translate-y-[-20px] scale-95"
                enterTo="opacity-100 translate-y-0 scale-100"
                leave="transform duration-[300ms] transition ease-in-out"
                leaveFrom="opacity-100 rotate-0 scale-100 "
                leaveTo="opacity-0 scale-95 "
              >
                <p
                  className="mt-[5px] lg:mt-[2px] mb-[15px] lg:mb-[20px] font-normal lg:font-semibold
            text-[10px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-gray900"
                >
                  {answer}
                </p>
              </Transition>
              {/* </details> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
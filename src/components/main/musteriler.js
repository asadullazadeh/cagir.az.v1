import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import Link from "next/link";

const responsive = {
  0: { items: 3 },
  568: { items: 3 },
  1024: { items: 4 },
};

function Musteriler({ messages, getAllForFront }) {

  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.cagir.az/api/adminDictionary/getAll?dictionaryType=4", {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        setResponseData(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2 className="my-h2 mb-0 lg:mb-[15px] text-center">
        {/* {messages["customers"]} */}
        Korperativ müştərilər
      </h2>
      <AliceCarousel
        animationDuration={1300}
        animationType="fadeout"
        controlsStrategy="responsive"
        infinite
        mouseTracking
        items={responseData?.map(({ id, imageUrl, title, url }) => (
          <div key={id} className="">
            {url && (
              <Link href={url} target="_blank" className="">
                <Image
                  alt={title}
                  src={`https://api.cagir.az/${imageUrl}`}
                  width={300}
                  height={150}
                  className="px-[5px] md:px-[15px]  drop-shadow-cardAlt py-[10px]"
                />
              </Link>
            )}
          </div>
        ))}
        responsive={responsive}
        animationEasingFunction="ease"
        disableButtonsControls
        paddingLeft={0}
        paddingRight={0}
        keyboardNavigation
        touchTracking={true}
        touchMoveDefaultEvents={false}
      />
    </div>
  );
}

export default Musteriler;

export async function getStaticProps(context) {
  const chosenLang = context.locale || "az"; // Default to 'az' if no locale is set

  // getAllForFront
  let getAllForFront = null;
  try {
    const response = await axios.get(
      "https://api.cagir.az/api/service/getAllForFront",
      {
        headers: {
          "Accept-Language": chosenLang,
        },
      }
    );
    getAllForFront = response.data.result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // carouselPhotos
  let carouselPhotos = null;
  try {
    const response = await axios.get(
      "https://api.cagir.az/api/adminDictionary/getAll?dictionaryType=6",
      {
        headers: {
          "Accept-Language": chosenLang,
        },
      }
    );
    carouselPhotos = response.data.result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      getAllForFront,
      carouselPhotos,
    },
    revalidate: 120, // In seconds, you can change this value according to your needs
  };
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";

const responsive = {
  0: { items: 3 },
  568: { items: 3 },
  1024: { items: 4 },
};

function Musteriler() {
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

  console.log(responseData);
  return (
    <div>
      <h2 className="my-h2 mb-0 lg:mb-[15px] text-center">Müştərilər</h2>
      <div className="grid place-items-end">
        <Image
          className="w-[22px] lg:w-[28px] h-[14px] lg:h-[24px]"
          src={arrow}
          alt="arrow_icon"
        />
      </div>
      <AliceCarousel
        // activeIndex = {1}
        animationDuration={1300}
        animationType="fadeout"
        // autoHeight={true}
        //autoWidth={true}
        // autoPlayControls
        // autoPlayInterval={1300}
        // autoPlay
        // autoPlayStrategy="action"
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
        // disableSlideInfo={false}
        animationEasingFunction="ease"
        disableButtonsControls
        // disableDotsControls
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

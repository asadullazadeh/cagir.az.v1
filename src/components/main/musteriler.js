import React, { useEffect, useState } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";

const responsive = {
  0: { items: 2 },
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
        params: {
          param1: "value1",
          param2: "value2",
        },
      })
      .then((response) => {
        // Handle the response data
        setResponseData(response.data.result);
        console.log(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return (
    <div>
      <AliceCarousel
        // activeIndex = {1}
        animationDuration={1300}
        animationType="fadeout"
        // autoHeight={true}
        //autoWidth={true}
        // autoPlayControls
        autoPlayInterval={1300}
        autoPlay
        autoPlayStrategy="action"
        controlsStrategy="alternate"
        infinite
        mouseTracking
        items={responseData?.map(({ id, imageUrl, title, url }) => (
          <div key={id}>
            {url && (
              <Link href={url} target="_blank">
                <Image
                  alt={title}
                  src={`https://api.cagir.az/${imageUrl}`}
                  width={500}
                  height={500}
                  className="place-self-center my-0 pr-[50px]"
                />
              </Link>
            )}
          </div>
        ))}
        responsive={responsive}
        // disableSlideInfo={false}
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

// import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import Image from "next/image";
// import arrow from "@/icons/arrow.svg";

// import "react-alice-carousel/lib/alice-carousel.css";

// const responsive = {
//   0: { items: 2 },
//   568: { items: 3 },
//   1024: { items: 4 },
// };

// const items = [
//   <div key="1" className="flex  items-center justify-center">
//     <Image
//       alt="img"
//       src="https://www.kapitalbank.az/assets/static/img/content/elements/svg/Logo--main.svg"
//       width={500}
//       height={500}
//       className="place-self-center my-0 pr-[50px]"
//     />
//   </div>,
//   <Image
//     key="2"
//     alt="img"
//     src="https://www.pashabank.az/templates/images/pashabank-logo-en.svg"
//     width={500}
//     height={500}
//     className="pr-[50px]"
//   />,
//   <Image
//     key="3"
//     alt="img"
//     src="https://www.agrodairy.az/assets/images/logotype.svg"
//     width={500}
//     height={500}
//     className="pr-[50px]"
//   />,
//   <Image
//     key="4"
//     alt="img"
//     src="https://www.expressbank.az/assets/img/logo.e9fd180b.svg"
//     width={500}
//     height={500}
//     className="pr-[50px]"
//   />,
//   <Image
//     key="5"
//     alt="img"
//     src="https://www.agrodairy.az/assets/images/logotype.svg"
//     width={500}
//     height={500}
//     className="pr-[50px]"
//   />,
//   <Image
//     key="6"
//     alt="img"
//     src="https://www.pashabank.az/templates/images/pashabank-logo-en.svg"
//     width={500}
//     height={500}
//     className="pr-[50px]"
//   />,
//   <Image
//     key="7"
//     alt="img"
//     src="https://www.agrodairy.az/assets/images/logotype.svg"
//     width={500}
//     height={500}
//     className="pr-[50px]"
//   />,
//   <Image
//     key="8"
//     alt="img"
//     src="https://www.pashabank.az/templates/images/pashabank-logo-en.svg"
//     width={500}
//     height={500}
//     className="pr-[50px]"
//   />,
//   <Image
//     key="9"
//     alt="img"
//     src="https://www.kapitalbank.az/assets/static/img/content/elements/svg/Logo--main.svg"
//     width={500}
//     height={500}
//     className="pr-[50px]"
//   />,
//   <Image
//     key="10"
//     alt="img"
//     src="https://www.agrodairy.az/assets/images/logotype.svg"
//     width={500}
//     height={500}
//     className="pr-[50px]"
//   />,
// ];

// const Museriler = () => (
//   <div className="">
//     <h2 className="my-h2 pb-[15px] lg:pb-[30px] text-center">Müştərilər</h2>
//     <div className="grid place-items-end">
//         <Image className="w-[22px] lg:w-[28px] h-[14px] lg:h-[24px]" src={arrow} alt="arrow_icon" />
//         </div>
//     {/* Customized Carousel */}
//     <AliceCarousel
//       // activeIndex = {1}
//       animationDuration={1300}
//       animationType="fadeout"
//       // autoHeight={true}
//       //autoWidth={true}
//       // autoPlayControls
//       autoPlayInterval={1300}
//       autoPlay
//       autoPlayStrategy="action"
//       controlsStrategy="alternate"
//       infinite
//       mouseTracking
//       items={items}
//       responsive={responsive}
//       // disableSlideInfo={false}
//       animationEasingFunction="ease"
//       disableButtonsControls
//       paddingLeft={0}
//       paddingRight={0}
//       keyboardNavigation
//       touchTracking={true}
//       touchMoveDefaultEvents={false}
//     />
//   </div>
// );

// export default Museriler;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 2 },
  580: { items: 3 },
  1300: { items: 4 },
};

const ProfileCard = ({ name, title, image, description }) => (
  <div className="flex flex-row items-center justify-center py-[10px]">
    <div
      className="w-[145px] screen360:w-[160px] screen375:w-[175px] screen412:w-[185px] sm:w-[195px] lg:w-[302px] h-full 
              rounded-[10px] lg:rounded-[20px] flex flex-col
              bg-white
              drop-shadow-cardAlt"
    >
      <div className="p-[10px] lg:p-[30px] space-y-[10px] lg:space-y-[15px]">
        {/* photo, name */}
        <div className="flex gap-x-[10px] lg:gap-x-[15px] items-center">
          <Image
            width={200}
            height={200}
            src={`https://api.cagir.az/${image}`}
            alt={name}
            className="rounded-full w-[65px] lg:w-[112px] h-[65px] lg:h-[112px] object-cover object-center border-2 border-cagiraz border-opacity-20"
          />
          <div className="flex flex-col">
            <h6
              className="
                        font-semibold lg:font-bold text-[8px] lg:text-[12px] leading-[12px] 
                        lg:leading-[18px] text-black500"
            >
              {name}
            </h6>

            <p
              className="lg:font-semibold italic text-[12px] lg:text-[14px] leading-[18px]
                    lg:leading-[21px] text-[#959595]"
            >
              {title}
            </p>
          </div>
        </div>

        {/* icraci */}
        <div className="w-full h-full">
          <p
            className=" italic font-semibold lg:font-bold text-[10px] sm:text-[12px] lg:text-[14px] leading-[18px]
                  sm:leading-[19px] lg:leading-[21px] text-black100"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

function Icraci({ parentId, messages, chosenLang }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.cagir.az/api/executer/getAll?serviceId=${parentId}`
        );
        setData(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [parentId]);

  if (data.length === 0) return null;

  const childDataArray = data.map((child) => (
    <ProfileCard
      key={child.name}
      name={child.name}
      title={child.title}
      image={child.imageUrl}
      description={child.description}
    />
  ));

  return (
    <div>
      <h2 className="my-h2 mb-0 lg:mb-[15px] text-center">İcraçı profilləri</h2>

      <div className="flex flex-row justify-center sm:gap-x-[40px]">
        {data.length < 3 ? (
          childDataArray
        ) : (
          <AliceCarousel
            controlsStrategy="alternate"
            infinite
            mouseTracking
            responsive={responsive}
            items={childDataArray}
            disableButtonsControls
            paddingLeft={0}
            paddingRight={0}
            keyboardNavigation
            touchTracking={true}
            touchMoveDefaultEvents={false}
          />
        )}
      </div>
    </div>
  );
}

export default Icraci;

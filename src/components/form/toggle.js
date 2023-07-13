import React, {useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import up from "@/icons/form/up.svg";
import down from "@/icons/form/down.svg";

const Toggle = ({serviceId,serviceDescription}) => {
  const [isHidden, setIsHidden] = useState(false);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };
  // 
  const [myData, setmyData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.cagir.az/api/service/getAllForFront", {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        setmyData(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);
  // console.log(serviceId);

//   const findNameByName = (myData, nameUrl) =>
//   myData.find((obj) => obj.nameUrl === nameUrl)?.name || null;
// const toggleInfo =  findNameByName(myData, serviceId);
// console.log(toggleInfo);

  // 
  return (
    <>
        {/* Toggle part */}
        <div className=""> 
          <button
            id="clickMe"
            onClick={toggleHidden}
            className="flex justify-between items-center w-full"
          >  
              <h6 className="font-bold text-[14px] leading-[21px] text-black">
                Ev təmizləmə haqda təsvir
              </h6>
            <div>
              <Image
                src={isHidden ? up : down}
                alt={isHidden ? "up_icon" : "down_icon"}
              />
            </div>
          </button>
          
          <div
            id="hiddenText"
            className={`relative  over bg-white py-2 rounded mt-2 ${
              isHidden ? "hidden" : ""
            }`}
          >
            {serviceDescription}
          </div>
        </div>
      
    </>
  );
};

export default Toggle;

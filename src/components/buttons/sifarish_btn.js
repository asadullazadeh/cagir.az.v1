import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

function SifarishBtn({ classNames }) {
  const router = useRouter();
  const { mainService } = router.query;
  //

  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.cagir.az/api/service/getAllForFront", {
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
  // console.log(router.query.mainService);
  // console.log(responseData);
  const mainServiceNameUrl = responseData.find(
    (obj) => obj.nameUrl === router.query.mainService
  );
  // console.log(mainServiceNameUrl?.nameUrl);

  return (
    <div className={classNames}>
      <Link
        href={`/sifaris-yarat`}
      >
        <button
          className="
              font-extraBold text-[14px] lg:text-[18px] leading-[22px] lg:leading-[27px]
              px-[26px] py-[10px] lg:px-[56px] lg:py-[16px]
               transition duration-300 rounded-[30px] transform hover:-translate-y-[5px] shadow-btnShdw bg-cagiraz text-white focus:outline-none"
        >
          Sifarişi yarat
        </button>
      </Link>
    </div>
  );
}

export default SifarishBtn;

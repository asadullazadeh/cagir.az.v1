import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

function SifarishBtn({classNames}) {
  const router = useRouter();
  const {mainService} = router.query
  // console.log(mainService);

  //
  const [getMainServices, setgetMainServices] = useState([]);
  // const handleMainSelect = (mainService) => {
  //   setSelectedMain(mainService);
  // };
  useEffect(() => {
    axios
      .post("https://api.cagir.az/api/service/service-name",{
        titleUrl:mainService
      }, {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        setgetMainServices(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [mainService]);
  // console.log(getMainServices);
  return (
    <div>
    <Link href="/sifaris-yarat" className={classNames}>
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
  )
}

export default SifarishBtn;

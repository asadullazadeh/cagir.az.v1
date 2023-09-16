import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

function SifarishBtn({ classNames }) {
  const router = useRouter();
  const [responseData, setResponseData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.cagir.az/api/service/getAllForFront", {
          headers: { "Accept-Language": "az" },
        });
        setResponseData(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const mainServicesInfo = responseData.find(
    (obj) => obj.nameUrl === router.query.mainService
  );

  const urlFromSifarisBtn = mainServicesInfo
    ? `/sifaris-yarat/${mainServicesInfo.nameUrl}`
    : "/temizlik-xidmeti/ev-temizleme";

  const btnClasses = `
    font-extraBold text-[14px] lg:text-[18px] leading-[22px] lg:leading-[27px]
    px-[26px] py-[10px] lg:px-[56px] lg:py-[16px] transition duration-300 
    rounded-[30px] transform hover:-translate-y-[5px] shadow-btnShdw 
    bg-cagiraz text-white focus:outline-none
  `;

  return (
    <div className={classNames}>
      <Link href={urlFromSifarisBtn}>
        <button className={btnClasses}>
          Sifarişi yarat
        </button>
      </Link>
    </div>
  );
}

export default SifarishBtn;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import arrow_right from "@/icons/arrow_right.svg";
import Head from "next/head";
import Badge from "@/src/components/others/badge";
import Butun_xidmetler from "@/src/components/main/butun_xidmetler";
import Reels from "@/src/components/main/reels";
import Banner from "@/src/components/main/banner";
import Reyler from "@/src/components/main/reyler";
import Icracilar from "@/src/components/main/icraci";
import Tesvir from "@/src/components/others/tesvir";
import SubService from "@/src/components/main/alt_xidmetler"
function Page() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config = {
    headers: {
      "Accept-Language": "az",
    },
  };
  const router = useRouter();
  const mainService = router.query.mainService;

  const [mainServiceData, setMainServiceData] = useState({});
  const [subServices, setSubServices] = useState([]);
  const [parentId, setParentId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.cagir.az/api/service/service-name",
          { titleUrl: mainService },
          config
        );
        setMainServiceData(response.data.result);
       

        const newParentId = response.data.result.id;
        setParentId(newParentId);
        console.log(newParentId);
        

        const cavab = await axios.get(
          `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${newParentId}`,
          config
        );
        setSubServices(cavab.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    if (mainService && !parentId) {
      fetchData();
    }
  }, [config, mainService, parentId]);

 
  const { id, someProperty, serviceNames } = mainServiceData;
  const serviceName = serviceNames && serviceNames.length > 0 ? serviceNames[0].name : "";
  const textService = serviceNames && serviceNames.length > 0 ? serviceNames[0].text : "";
  return (
    <div>
      {/* badge */}
      <div className="mt-[30px] lg:mt-[60px]">
        <Badge />
      </div>
      <SubService />
      
      
      
     
      <div className="flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px]
        lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px]
         pt-[30px] sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] 
         pb-[60px] sm:pb-[75px] md:pb-[90px] lg:pb-[105px] xl:pb-[120px] 2xl:pb-[135px]"
      >      
        <Butun_xidmetler />
        <Reels />
        <Banner />
        <Reyler parentId={parentId} />
        <Icracilar parentId={parentId} />
        
        {/* Tesvir */}
        <div>
          <h2
          className="my-h2 mb-[15px] text-center"
        >
          Təsvir
        </h2>
          <div dangerouslySetInnerHTML={{ __html: textService }} className="" />
        </div>
      </div>
     
    </div>
  );
}

export default Page;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { useRouter } from "next/router";

// function Page() {
//   const config = {
//     headers: {
//       "Accept-Language": "az",
//     },
//   };
//   const router = useRouter();
//   const mainService = router.query.mainService;

//   const [mainServiceData, setMainServiceData] = useState({});
//   const [subServices, setSubServices] = useState([]); // Add subServices state

//   useEffect(() => {
//     axios
//       .post("https://api.cagir.az/api/service/service-name", { "titleUrl": mainService }, config)
//       .then((response) => {
//         // Handle the response data
//         setMainServiceData(response.data.result);

//         // Make the axios.get request inside the `then` block
//         const parentId = response.data.result.id;
//         axios.get(`https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${parentId}`, config)
//           .then((cavab) => {
//             setSubServices(cavab.data.result); // Set the subServices state with the response data
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div className="flex flex-row gap-x-10">
//       <h1>Details about product {mainService}</h1>
//       {mainServiceData && (
//         <div>
//           <p>Main Service ID: {mainServiceData.id}</p>
//           {subServices.map((subService) => (
//             <p key={subService.id}>
//               {subService.nameUrl}
//               </p> // Use the "name" field from subService object
//           ))}
//           {/* Display other response data as needed */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Page;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { useRouter } from "next/router";

// function Page() {
//   const config = {
//     headers: {
//       "Accept-Language": "az",
//     },
//   };
//   const router = useRouter();
//   const mainService = router.query.mainService;

//   const [responseData, setResponseData] = useState({});
//   useEffect(() => {
//     axios
//       .post("https://api.cagir.az/api/service/service-name", { "titleUrl": mainService }, config)
//       .then((response) => {
//         // Handle the response data
//         setResponseData(response.data.result);
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error(error);
//       });
//   }); // Pass an empty dependency array to run the effect only once

//   return (
//     <div className="flex flex-row gap-x-10">
//       <h1>Details about product {mainService}</h1>
//       {responseData && (
//         <div>
//           <p>Main Service ID: {responseData.id}</p>
//           {/* Display other response data as needed */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Page;

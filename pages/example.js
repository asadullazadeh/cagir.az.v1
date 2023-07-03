// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import arrow from "@/icons/arrow.svg";
// import arrow_mobile from "@/icons/arrow_mobile.svg";
// // import OrderCardPrimary from "@/src/components/cards/order_card_primary"
// import OrderCard from "@/src/components/cards/order_card_primary";
// import Carousel1 from "@/src/components/main/carousel1";
// import Reyler from "@/src/components/main/reyler";
// import Icracilar from "@/src/components/main/icraci";
// import Musteriler from "@/src/components/main/musteriler";

// function Example() {
//   const [responseData, setResponseData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://api.cagir.az/api/service/getAllForFront", {
//         headers: {
//           "Accept-Language": "az",
//         },
//       })
//       .then((response) => {
//         // Handle the response data
//         setResponseData(response.data.result);
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div className="">
//       {/* <Carousel1 {...{ carouselPhotos1 }} /> */}
//       <OrderCard responseData={responseData} />
//       <Reyler parentId={1} />
//       <Icracilar parentId={1} />
//       <Musteriler />
//     </div>
//   );
// }

// export default Example;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ModalStandart from "@/src/components/modal/modal_stand"
function Example() {
  const config = {
    headers: {
      "Accept-Language": "az",
    },
  };

  // bas xidmetler. Burada her bir bas xidmet ucun melumatlar var: description....
  axios
    .get("https://api.cagir.az/api/service/getAllForFront", config)
    .then((response) => {
      // console.log(response);
    });

  // bura sub xidmetlerdir. linkin sonundaki id ile diger api den gelen,
  // yeni hansi xidmet sehvesine gediremse, bu linkdeki olan alt xidmetler gorsenmelidir
  axios
    .get("https://api.cagir.az/api/serviceCriteria/getAllWithParent", config)
    .then((response) => {
      // console.log(response);
    });

  axios
    .get(
      "https://api.cagir.az/api/service/getAllForFront",config
    )
    .then((response) => {
      console.log(response);
    });

  // axios.post('https://api.cagir.az/api/service/service-name',{"titleUrl":"temizlik-xidmeti"},config).then(response => {

  //   console.log(response);
  // });

  return <div>
      {/* You can open the modal using ID.showModal() method */}
      <p>qezqz</p>
        </div>;
}

export default Example;











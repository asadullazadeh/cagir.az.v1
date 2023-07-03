import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import icraciSvg from "@/icons/faq/icraci.svg";
import musteriSvg from "@/icons/faq/musteri.svg";
import sifarisSvg from "@/icons/faq/sifaris.svg";

function Faq() {
  const [categoryId, setCategoryId] = useState(0); // Initial categoryId is 0
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.cagir.az/api/faq/getAllByCategory?faqCategoryId=${categoryId}`,
        {
          headers: {
            "Accept-Language": "az",
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setResponseData(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [categoryId]);
  const firstFaqNames = Object.values(responseData).map(
    (child) => child.faqNames[0]
  );

  // Event handler for when an element is clicked
  const handleClick = (clickedCategoryId) => {
    setCategoryId(clickedCategoryId);
  };

  useEffect(() => {
    handleClick(3); // Call handleClick with 0 as the default value
  }, []); // Run only once when the component mounts

  console.log(firstFaqNames);

  return (
    <div className="my-[30px] lg:mt-[90px]">
      <div className="flex flex-col lg:flex-row justify-center items-center mb-[15px] lg:mb-[90px] ">
        <button
          className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-full sm:aspect-[300/82]"
          onClick={() => handleClick(2)}
        >
          <Image src={icraciSvg} alt={icraciSvg} className="w-full h-full" />
        </button>

        <button
          className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-full sm:aspect-[300/82]"
          onClick={() => handleClick(3)}
        >
          <Image src={musteriSvg} alt={musteriSvg} className="w-full h-full" />
        </button>

        <button
          className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-full sm:aspect-[300/82]"
          onClick={() => handleClick(1)}
        >
          <Image src={sifarisSvg} alt={sifarisSvg} className="w-full h-full" />
        </button>
      </div>
      <h2 className="my-h2 mb-[15px] lg:mb-[30px] text-center">
        Tez-tez verilən suallar
      </h2>
      <div className="space-y-[15px] lg:space-y-[17px]">
        {firstFaqNames.map(({ question, answer, isActive, faqId, id }) => (
          <div key={id}>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between rounded-lg cursor-pointer">
                <h5 className="my-h5 ">{question}</h5>
              </summary>
              <p
                className="mt-[5px] lg:mt-[2px] mb-[15px] lg:mb-[20px] font-normal lg:font-semibold
            text-[10px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-gray900"
              >
                {answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Suallar from "@/src/components/main/suallar";
// import icraciSvg from "@/icons/faq/icraci.svg";
// import musteriSvg from "@/icons/faq/musteri.svg";
// import sifarisSvg from "@/icons/faq/sifaris.svg";

// export async function getServerSideProps() {
//   const data = await import("/data/data.json");
//   const { suallar } = data;
//   return {
//     //will be passed to the page component as props
//     props: {
//       suallar,
//     },
//   };
// }

// export default function Faq(props) {
//   const { suallar } = props;

//   return (
//     <div className="flex flex-col  gap-y-[30px] lg:gap-y-[60px] xl:gap-y-[75px] 2xl:gap-y-[90px] w-full ">
//       <div className="flex flex-col lg:flex-row justify-center items-center">
//         <Link className="w-3/4 sm:w-2/3 lg:w-full sm:aspect-[300/82]" href="/">
//           <Image src={icraciSvg} alt={icraciSvg} className="w-full h-full" />
//         </Link>

//         <Link className="w-3/4 sm:w-2/3 lg:w-full sm:aspect-[300/82]" href="/">
//           <Image src={musteriSvg} alt={musteriSvg} className="w-full h-full" />
//         </Link>

//         <Link className="w-3/4 sm:w-2/3 lg:w-full sm:aspect-[300/82]" href="/">
//           <Image src={sifarisSvg} alt={sifarisSvg} className="w-full h-full" />
//         </Link>
//       </div>
//       <Suallar {...{ suallar }} />
//     </div>
//   );
// }

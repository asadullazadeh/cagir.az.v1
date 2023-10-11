import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Image from "next/image";
import VideoPlayer from "@/src/components/VideoHover";
import Success_Page from "@/src/components/others/success_page";

// import video from "@/public/video";
const HomePage = () => {
  const videoSrc =
    "https://static.videezy.com/system/resources/previews/000/044/479/original/banana.mp4"; // Update with the actual video path
  const { locales } = useRouter();

  const intl = useIntl();
  console.log(intl);
  return (
    <div>
      <Success_Page />
        {/* <VideoPlayer videoSrc={videoSrc} />
        <VideoPlayer videoSrc={videoSrc} />
        <VideoPlayer videoSrc={videoSrc} />
        <VideoPlayer videoSrc={videoSrc} />
        <VideoPlayer videoSrc={videoSrc} /> */}
        {/* <div class="sk-ww-instagram-reels" data-embed-id="204293"></div>
        <script
          src="https://widgets.sociablekit.com/instagram-reels/widget.js"
          async
          defer
        ></script>{" "} */}
 
    </div>
  );
};

export default HomePage;

// import axios from 'axios';
// import Image from "next/image";

// function MyPage({ data }) {
//   console.log(data)
//     return (
//         <div>
//         {data.map((item, index) => {
//             return (
//                 <div key={index}>
//                   {`https://api.cagir.az/${item.imageUrl}`}
//                   <Image width={600} height={300} alt={index} src={`https://api.cagir.az/${item.imageUrl}`} />
//                   </div>
//             )
//         })}
//     </div>
//     );
// }

// export async function getServerSideProps() {
//     let data = {};

//     try {
//         const response = await axios.get('https://api.cagir.az/api/adminDictionary/getAllByType?dictionaryType=6');
//         data = response.data.result;
//     } catch (error) {
//         console.error("There was an error fetching data", error);
//     }

//     return {
//         props: {
//             data
//         }
//     };
// }

// export default MyPage;

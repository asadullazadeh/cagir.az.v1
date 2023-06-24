import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";

import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 4 },
};

const items = [
  <Image
    key="1"
    alt="img"
    src="https://www.kapitalbank.az/assets/static/img/content/elements/svg/Logo--main.svg"
    width={500}
    height={500}
    className="pr-[50px]"
  />,
  <Image
    key="2"
    alt="img"
    src="https://www.pashabank.az/templates/images/pashabank-logo-en.svg"
    width={500}
    height={500}
    className="pr-[50px]"
  />,
  <Image
    key="3"
    alt="img"
    src="https://www.agrodairy.az/assets/images/logotype.svg"
    width={500}
    height={500}
    className="pr-[50px]"
  />,
  <Image
    key="4"
    alt="img"
    src="https://www.expressbank.az/assets/img/logo.e9fd180b.svg"
    width={500}
    height={500}
    className="pr-[50px]"
  />,
  <Image
    key="5"
    alt="img"
    src="https://www.agrodairy.az/assets/images/logotype.svg"
    width={500}
    height={500}
    className="pr-[50px]"
  />,
  <Image
    key="6"
    alt="img"
    src="https://www.pashabank.az/templates/images/pashabank-logo-en.svg"
    width={500}
    height={500}
    className="pr-[50px]"
  />,
  <Image
    key="7"
    alt="img"
    src="https://www.agrodairy.az/assets/images/logotype.svg"
    width={500}
    height={500}
    className="pr-[50px]"
  />,
  <Image
    key="8"
    alt="img"
    src="https://www.pashabank.az/templates/images/pashabank-logo-en.svg"
    width={500}
    height={500}
    className="pr-[50px]"
  />,
  <Image
    key="9"
    alt="img"
    src="https://www.kapitalbank.az/assets/static/img/content/elements/svg/Logo--main.svg"
    width={500}
    height={500}
    className="pr-[50px]"
  />,
  <Image
    key="10"
    alt="img"
    src="https://www.agrodairy.az/assets/images/logotype.svg"
    width={500}
    height={500}
    className="pr-[50px]"
  />,
];

const Museriler = () => (
  <div className="">
    <h2 className="my-h2 pb-[15px] lg:pb-[30px] text-center">Müştərilər</h2>
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
    items={items}
    responsive={responsive}
    // disableSlideInfo={false}
    animationEasingFunction="ease"
    disableButtonsControls
    paddingLeft={0}
    paddingRight={0}
    keyboardNavigation
    touchTracking={false}
    touchMoveDefaultEvents={false}
  />
  </div>
);

export default Museriler;

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { useInView } from "react-intersection-observer";

// const useInViewWithIndex = () => {

//   const [inView, setInView] = useState(false);
//   const ref = useRef(null);

//   const handleIntersection = ([entry]) => {
//     setInView(entry.isIntersecting);
//   };

//   useEffect(() => {
//     const options = {
//       threshold: 0.1, // Adjust threshold as per your requirement
//     };

//     const observer = new IntersectionObserver(handleIntersection, options);

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   return [ref, inView];
// };

// const Musteriler = ({ musteriler }) => {
//   const [currentElementIndex, setCurrentElementIndex] = useState(0);

//   const handleIntersection = (index, inView) => {
//     if (inView) {
//       setCurrentElementIndex(index);
//     }
//   };

//   return (
//     <>
//       <div className="">
//         <h2 className="my-h2 pb-[15px] lg:pb-[30px] text-center">Müştərilər</h2>
//         <div className="overflow-x-scroll overflow-y-hidden">
//           <div className="flex gap-x-[15px] sm:gap-x-[30px] md:gap-x-[45px] lg:gap-x-[60px] xl:gap-x-[75px] 2xl:gap-x-[90px] gap-y-[10px] lg:gap-y-[40px] mt-[15px] lg:mt-[60px]">
//             {musteriler?.map((musteri, index) => {
//               const [ref, inView] = useInViewWithIndex();

//               useEffect(() => {
//                 handleIntersection(index, inView);
//               }, [inView]);

//               return (
//                 <div key={musteri.id} ref={ref}>
//                   <Image
//                     className="max-h-[120px] max-w-[120px] sm:max-h-[150px] sm:max-w-[150px] md:max-h-[200px] md:max-w-[200px] lg:max-h-[300px] lg:max-w-[300px] xl:max-h-[3500px] xl:max-w-[350px] 2xl:max-h-[400px] 2xl:max-w-[400px] object-contain"
//                     width={300}
//                     height={300}
//                     src={musteri.logo}
//                     alt={musteri.id}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div className="flex justify-center mt-4">
//           {musteriler?.map((_, index) => (
//             <div
//               key={index}
//               className={`w-3 h-3 mx-1 rounded-full ${index === currentElementIndex ? "bg-black" : "bg-gray-300"}`}
//               // onClick={() => setCurrentElementIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Musteriler;

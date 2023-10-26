import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});
const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  { index: 0, link: "https://youtube.com/shorts/Ra1YcrcYLzw?si=DK07uNlVPLVbQEHP" },
  { index: 1, link: "https://youtube.com/shorts/Ra1YcrcYLzw?si=DK07uNlVPLVbQEHP" },
  { index: 2, link: "https://youtube.com/shorts/Ra1YcrcYLzw?si=DK07uNlVPLVbQEHP" },
];

function Reels() {
  return (
    <div>
      <h2 className="my-h2 pb-[15px] lg:pb-[30px] text-center">Əl işlərimiz</h2>
      {/* Customized Carousel */}

      <AliceCarousel
        animationDuration={1300}
        animationType="fadeout"
        controlsStrategy="responsive"
        // infinite
        mouseTracking
        items={items.map(({ link, index }) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center space-x-4 overflow-x "
            >
              <ReactPlayer
                url={link}
                config={{
                  youtube: {
                    playerVars: { modestbranding: 1, showinfo: 0 },
                  },
                }}
                width={302}
                height={537}
              />
            </div>
          );
        })}
        responsive={responsive}
        animationEasingFunction="ease"
        disableButtonsControls
        paddingLeft={0}
        paddingRight={0}
        keyboardNavigation
        touchTracking={true}
        touchMoveDefaultEvents={false}
      />
    </div>
  );
}

export default Reels;

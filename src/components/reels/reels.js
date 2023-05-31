import Image from "next/image";
import Link from "next/link";
import reels1 from "@/public/reels/reels_1.png"
import reels2 from "@/public/reels/reels_2.png"
import reels3 from "@/public/reels/reels_3.png"
import reels4 from "@/public/reels/reels_4.png"




const Reels = () => (

    <div>
        <h2
        className="block lg:hidden my-h2 mb-0 lg:mb-[15px] pb-[15px] lg:pb-[30px] text-center"
      >
        Bizi Instagram-da izlə
      </h2>
      <h2
        className="hidden lg:block my-h2 mb-0 lg:mb-[15px] text-center"
      >
        Instagram-da bizi izlə!
      </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-[30px] lg:gap-x-[60px] gap-y-[30px] lg:gap-y-0">
        <Image src={reels1} alt="reels1" className="mx-auto lg:mx-0 w-full aspect-[300/536]" />
        <Image src={reels2} alt="reels2" className="mx-auto lg:mx-0 w-full aspect-[300/536]" />
        <Image src={reels3} alt="reels3" className="mx-auto lg:mx-0 w-full aspect-[300/536]" />
        <Image src={reels4} alt="reels4" className="mx-auto lg:mx-0 w-full aspect-[300/536]" />
    </div>
    </div>





);

export default Reels;

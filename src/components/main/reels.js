import Image from "next/image";
import Link from "next/link";
import reels1 from "@/public/reels/reels_1.png"
import reels2 from "@/public/reels/reels_2.png"
import reels3 from "@/public/reels/reels_3.png"
import reels4 from "@/public/reels/reels_4.png"




const Reels = () => (

    <div>
        <h2
        className="block lg:hidden my-h2 pb-[15px] sm:pb-[20px] md:pb-[25px] text-center"
      >
        Bizi Instagram-da izlə
      </h2>
      <h2
        className="hidden lg:block my-h2 mb-[30px] text-center"
      >
        Instagram-da bizi izlə!
      </h2>
    <div className="grid lg:hidden grid-cols-3 lg:grid-cols-4 gap-[10px] sm:gap-[20px] md:gap-[30px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[60px]">
        <Image src={reels1} alt="reels1" className="mx-auto lg:mx-0 w-full aspect-[300/536]" />
        <Image src={reels2} alt="reels2" className="mx-auto lg:mx-0 w-full aspect-[300/536]" />
        <Image src={reels3} alt="reels3" className="mx-auto lg:mx-0 w-full aspect-[300/536]" />
        
    </div>
    <div className="hidden lg:grid grid-cols-3 lg:grid-cols-4 gap-[10px] sm:gap-[20px] md:gap-[30px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[60px]">
        <Image src={reels1} alt="reels1" className="mx-auto lg:mx-0 w-full aspect-[300/536]" />
        <Image src={reels2} alt="reels2" className="mx-auto lg:mx-0 w-full aspect-[300/536]" />
        <Image src={reels3} alt="reels3" className="mx-auto lg:mx-0 w-full aspect-[300/536]" />
        <Image src={reels4} alt="reels4" className="mx-auto lg:mx-0 w-full aspect-[300/536]" />
        
    </div>
    </div>





);

export default Reels;

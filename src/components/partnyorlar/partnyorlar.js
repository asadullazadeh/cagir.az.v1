import Image from "next/image";
import Link from "next/link";
import { logo } from "@/public/logo_cagiraz.png";

const Partnyorlar = ({ partnyorlar }) => (
  <>
    <div className="">
      <h2
        className="my-h2 pb-[15px] lg:pb-[30px] text-center"
      >
        Partnyorlar
      </h2>

      <ul
        className="
        mx-auto grid grid-cols-4 items-center sm:grid-cols-6 lg:grid-cols-5
        gap-x-[15px] sm:gap-x-[30px] md:gap-x-[45px] lg:gap-x-[60px] xl:gap-x-[75px] 2xl:gap-x-[90px] 
        gap-y-[10px] lg:gap-y-[40px] mt-[15px] lg:mt-[60px]"
      >
        {partnyorlar?.map((partnyor) => (
          <li key={partnyor.id}>
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              width={100}
              height={100}
              src={partnyor.logo}
              alt={partnyor.id}
            />
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Partnyorlar;

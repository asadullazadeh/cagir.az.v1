import Image from "next/image";
import Link from "next/link";
import { logo } from "@/public/logo_cagiraz.png";

const Partnyorlar = ({ partnyorlar }) => (
  <>
    <div className="">
      <h2
        className="font-semibold lg:font-bold text-[16px] lg:text-[36px]
        leading-[24px] lg:leading-[54px] text-black500 mb-0 lg:mb-[15px] text-center"
      >
        Partnyorlar
      </h2>

      <ul
        className="flex flex-wrap	gap-x-[20px] lg:gap-x-[90px] gap-y-[10px] 
        lg:gap-y-[40px] mt-[15px] lg:mt-[60px]"
      >
        {partnyorlar?.map((partnyor) => (
          <li key={partnyor.id}>
            <Image
              className=" max-w-[100px] max-h-[100px]"
              width={200}
              height={200}
              src={partnyor.logo}
              alt="logos"
            />
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Partnyorlar;

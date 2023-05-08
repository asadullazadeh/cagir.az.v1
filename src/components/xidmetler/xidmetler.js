import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";

const Xidmetler = ({ xidmetler }) => (
  <>
    <div className="grid place-items-center">
      <h2 
        className="relative text-center font-semibold text-[24px] leading-[36px] text-black500
      desktop:bold desktop:text-[36px] desktop:leading-[54px]"
      >
        Xidmətlər
      </h2>
      <div className="grid grid-cols-2 desktop:grid-cols-3 mt-[5px] desktop:mt-[10px] desktop:mt-[30px] gap-[15px] desktop:gap-[60px] px-[10px] desktop:px-[60px]">
        {xidmetler?.slice(0, 6).map((xidmet) => (
          <div key={xidmet.id}>
            <Link
              href="#"
              className="block rounded-[10px] desktop:rounded-[25px] bg-white px-[11px] desktop:pl-[26px] pt-[10px] desktop:pt-[28px] desktop:pr-[28px] group
              hover:drop-shadow-card transition duration-300 "
            >
              <div className="relative mb-[5px] desktop:mb-[15px]">
                <Image
                  width={367}
                  height={283}
                  src={xidmet.photo}
                  alt="Image description"
                  className="rounded-[20px] w-full aspect-[123/96] object-cover object-center"
                />
              </div>

              <div class=" grid grid-rows-2 grid-cols-8 grid-flow-col">
                <div class="row-span-1 col-span-7">
                  <h5 class="font-semibold text-[12px] leading-[18px] desktop:font-bold desktop:text-[20px] desktop:leading-[30px]">
                    {xidmet.title}
                  </h5>
                </div>
                <div class="row-span-1 col-span-7">
                  <p class="font-poppins font-semibold text-[10px] desktop:text-[14px] leading-[15px] desktop:leading-[21px] text-gray900">
                    {xidmet.price}
                  </p>
                </div>
                <div class="row-span-2 col-span-1 flex justify-end items-center">
                  <div class="hidden absolute transition duration-300 group-hover:block transition duration-300">
                    <Image src={arrow} alt="arrow_icon" />
                  </div>
                </div>
              </div>

            </Link>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Xidmetler;

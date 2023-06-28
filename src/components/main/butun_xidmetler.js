import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";

const Butun_xidmetler = ({ xidmetler }) => (
  <>
    <div className="">
      <h2 className="my-h2 mb-0 lg:mb-[15px] text-center">Bütün xidmətlər</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[15px] sm:mt-[60px] gap-[15px] sm:gap-[40px] md:gap-[45px] lg:gap-[50px] xl:gap-[55px] 2xl:gap-[60px]">
        {xidmetler?.map((xidmet) => (
          <div key={xidmet.id}>
            <Link
              href="#"
              className="flex items-center justify-between w-full aspect-[15/3] sm:aspect-[302/91] rounded-[10px] drop-shadow-cardAlt lg:drop-shadow-none lg:hover:drop-shadow-cardAlt transition duration-300 bg-white px-[15px] sm:px-[30px] py-[9.5px] sm:py-[15px] group"
            >
              <div>
                <h5 className="relative font-semibold lg:font-bold text-[16px]	lg:text-[20px] leading-[24px] lg:leading-[30px] text-black500">
                  {xidmet.title}
                </h5>
                <p className="font-medium sm:font-semibold text-[12px] leading-[18px] text-gray900 mt-0 sm:mt-[2px]">
                  {xidmet.price}
                </p>
              </div>
              <div className="hidden transition duration-300 sm:group-hover:block">
                <Image src={arrow} alt="arrow_icon" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Butun_xidmetler;

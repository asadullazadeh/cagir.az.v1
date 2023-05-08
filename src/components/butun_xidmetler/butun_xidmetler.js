import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";

const Butun_xidmetler = ({ xidmetler }) => (
  <>
    <div className="h-[356px]">
      <h2 className="relative text-center h2-styles">Bütün xidmətlər</h2>
      <div className="grid grid-cols-4 mt-[60px] gap-x-[60px] gap-y-[60px]">
        {xidmetler?.map((xidmet) => (
          <div key={xidmet.id}>
            <Link
              href="#"
              className="block w-[302px] h-[91px] rounded-[25px] hover:drop-shadow-card transition duration-300 bg-white pl-[30px] py-[15px] group"
            >
              <div className="hidden absolute transition duration-300 mt-[26.5px] ml-[203px] group-hover:block">
                <Image src={arrow} alt="arrow_icon" />
              </div>
              <div>
                <h5 className="h-[31px] h5-styles">{xidmet.title}</h5>
                <p className="font-poppins font-semibold text-[12px] w-[140px] leading-[18px] text-gray900 mt-[2px]">
                  {xidmet.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Butun_xidmetler;

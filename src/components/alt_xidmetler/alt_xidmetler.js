import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";

const Ustalar = ({ ustalar }) => (
  <>
    <div className="h-[1212px] mt-[60px]">
      <h2 className="relative text-center h2-styles">Xidmətlər</h2>
      <h4 className="relative text-center font-poppins font-bold	text-[28px] leading-[42px] text-gray900 mt-[15px]">Ən çox axtarılan xidmətlər</h4>
      <div className="grid grid-cols-4 mt-[30px] gap-x-[60px] gap-y-[60px]">
        {ustalar?.map((usta) => (
          <div key={usta.id}>
            <Link
              href="#"
              className="block w-[302px] h-[317px] rounded-[25px] hover:drop-shadow-card transition duration-300 bg-white px-[15px] pt-[15px] group"
            >
              <div className="relative w-[272px] h-[205px] mb-[15px]">
                <Image
                  width={367}
                  height={283}
                  src={usta.photo}
                  alt="Image description"
                  className="rounded-[20px] h-full w-full object-cover object-center"
                />
              </div>

              <div className="hidden absolute transition duration-300 group-hover:block ml-[244px] mt-[33.5px]">
                <Image src={arrow} alt="arrow_icon"/>
              </div>
              <div>
                <h5 className="h-[23px] h5-styles">{usta.title}</h5>
                <p className="w-[175px] font-poppins font-semibold text-[14px] leading-[21px] text-gray900 mt-[4px]">
                  {usta.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Ustalar;

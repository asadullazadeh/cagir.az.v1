import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";

const Ustalar = ({ ustalar }) => (
  <>
    <div className="">
      <h2
        className="font-semibold lg:font-bold text-[16px] lg:text-[36px] 
    leading-[24px] lg:leading-[54px] text-black500 mb-0 lg:mb-[15px] text-center"
      >
        Usta xidmeti
      </h2>
      <h5
        className="relative text-center font-semibold lg:font-bold text-[12px]	lg:text-[28px] 
      leading-[18px] lg:leading-[42px] mb-[15px] lg:mb-[30px] text-gray900"
      >
        Ən çox axtarılan xidmətlər
      </h5>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[15px] lg:gap-[60px]">
        {ustalar?.map((usta) => (
          <li
            key={usta.title}
            className="rounded-[10px] desktop:rounded-[25px] hover:drop-shadow-card transition duration-300 bg-white"
          >
            <Link
              href="#"
              className="flex flex-row sm:flex-col
              rounded-[10px] sm:rounded-[25px]
              p-[10px] sm:p-[15px]
              space-x-[15px] sm:space-x-0
              "
            >
              <Image
                width={272}
                height={205}
                src={usta.photo}
                alt="Image description"
                className="w-[70px] sm:w-full rounded-[5px] sm:rounded-[20px]
                  object-cover object-center"
              />

              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col justify-center">
                  <h5 className="font-bold text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] text-black500">
                    {usta.title}
                  </h5>
                  <p className="font-medium lg:font-semibold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-gray900 mt-0 lg:mt-[4px]">
                    {usta.price}
                  </p>
                </div>

                <div className="transition duration-300 group-hover:block">
                  <Image src={arrow} alt="arrow_icon" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Ustalar;

{
  /* import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";

const Ustalar = ({ ustalar }) => (
  <>
    <div className="px-[10px] desktop:px-[60px]">
      <h2
        className="font-semibold desktop:font-bold text-[16px] desktop:text-[36px] 
    leading-[24px] desktop:leading-[54px] text-black500 mb-0 desktop:mb-[15px] text-center"
      >
        Usta xidmeti
      </h2>
      <h5
        className="relative text-center font-semibold desktop:font-bold text-[12px]	desktop:text-[28px] 
      leading-[18px] desktop:leading-[42px] mb-[15px] desktop:mb-[30px] text-gray900"
      >
        Ən çox axtarılan xidmətlər
      </h5>
      <div className="grid sm:grid-cols-2  desktop:grid-cols-4 desktop:gap-[60px]">
        {ustalar?.map((usta) => (
          <div key={usta.id} className="flex justify-center">
            <Link
              href="#"
              className="inline-flex desktop:block rounded-[10px] desktop:rounded-[25px] hover:drop-shadow-card 
              transition duration-300 bg-white p-[10px] desktop:p-[20px] min-w-[300px]  group"
            >
              <div className="relative desktop:mb-[15px]">
                <Image
                  width={367}
          
                  height={283}
                  src={usta.photo}
                  alt="Image description"
                  className="rounded-[5px] desktop:rounded-[20px] w-[70px]  h-[60px] desktop:w-[272px] desktop:h-[205px] mobile:mr-[15px] object-cover object-center"
                />
              </div>

            
              <div className="flex flex-col justify-center">
                <h5 className="font-bold text-[20px] leading-[30px] text-black500">
                  {usta.title}
                </h5>
                <p className="font-medium desktop:font-semibold text-[12px] desktop:text-[14px] leading-[18px] desktop:leading-[21px] text-gray900 mt-0 desktop:mt-[4px]">
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

export default Ustalar;*/
}

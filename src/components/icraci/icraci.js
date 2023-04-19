import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo_cagiraz.png";
import arrow from "@/icons/arrow.svg";

export default function Icracilar({ icracilar }) {
  return (
    <>
      <div className="h-[459px]">
        {/* right arrow sign */}
        <div className="absolute ml-[1353px] mt-[54px]">
          <Image src={arrow} />
        </div>
        <h2 className="text-center mb-[93px] h2-styles">İcraçı profilləri</h2>

        <div className="overflow-x-scroll overflow-hidden">
          <div className="flex gap-x-[60px]">
            {icracilar?.map((icraci) => (
              <div key={icraci.id}>
                <div className="relative w-[302px] h-[312px] rounded-[20px] flex flex-col p-[30px] gap-y-[15px]">
                  <div className="flex gap-x-[15px]">
                    <Image
                      width={200}
                      height={200}
                      src={icraci.photo}
                      alt="Profile picture"
                      className="rounded-full w-[112px] h-[112px]"
                    />
                    <div className="flex-row mt-[27px]">
                      <h6 className="max-w-[90px] h6-styles">{icraci.name}</h6>

                      <p className="font-poppins non-italic font-bold	text-[12px] leading-[18px] text-gray900 ">
                        {icraci.job}
                      </p>
                    </div>
                  </div>

                  {/* rey */}

                  <p className="font-poppins font-semibold italic text-[12px] leading-[18px] text-black100">
                    {icraci.title}
                  </p>

                  <Image
                    src={logo}
                    className="w-[79px] h-[20px]"
                    alt="Cagir.az logo"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

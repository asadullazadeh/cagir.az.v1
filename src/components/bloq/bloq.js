import Image from "next/image";
import Link from "next/link";

import views from "@/icons/bloq/views.svg";
import PrimaryOutlineSmBtn from "@/src/components/buttons/primary_outline_sm_btn"

const Bloq = ({ bloqlar }) => (
  <div className="">
    <h2 className="my-h2 mb-[15px] lg:mb-[30px] text-center">Bloq</h2>

    <div className="grid grid-row lg:grid-cols-3 gap-y-[15px] lg:gap-x-[60px]">
      {bloqlar?.slice(0,3).map((bloq) => (
        <div key={bloq.name}>
          <div
            className="p-[15px] sm:p-[18px] md:p-[21px] lg:p-[24px] lx:p-[27px] 2xl:p-[30px] rounded-[20px] 2xl:rounded-[25px] 
          shadow-rectangle4 lg:shadow-none lg:hover:shadow-rectangle4 transition duration-300"
          >
            <Image
              width={360}
              height={257}
              src={bloq.photo}
              alt={bloq.link}
              className="rounded-[10px] lg:rounded-[20px] w-full aspect-[360/257]"
            />

            <div className="flex justify-between mt-[10px] lg:mt-[15px] items-center">
              <p
                className="font-semibold text-[10px] lg:text-[14px] leading-[15px] 
              lg:leading-[21px] text-gray900 lg:text-gray400"
              >
                {bloq.date}
              </p>
              <div className="ml-auto border border-cagiraz rounded-lg">
                <p className="font-semibold	text-[10px] leading-[15px] text-cagiraz px-[10px] py-[4px] ">
                  Mövzu
                </p>
              </div>
            </div>

            <h5 className="my-h5 mt-[5px] lg:mt-[15px]">{bloq.title}</h5>

            <p
              className="font-semibold text-[10px] lg:text-[14px] leading-[15px] 
            lg:leading-[21px] text-gray900 mt-[5px] "
            >
              {bloq.comment}
            </p>

            <div className="flex justify-between mt-[5px] desktop:mt-[15px] text-cagiraz">
              <div className="flex flew-row justify-center items-center space-x-[5px]">
                <Image
                  className="w-[22px] h-[15px]"
                  src={views}
                  alt="views logo"
                />
                <div>
                  <p className="font-semibold text-[16px]	lg:text-[18px] leading-[24px] lg:leading-[27px]">
                    {bloq.orderNum}
                  </p>
                </div>
              </div>
              <div className="ml-auto">
                <Link
                  className="font-extrabold	text-[14px] leading-[21px]"
                  href="#"
                >
                  Ətrafli oxu
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="flex items-center justify-center max-w-[155px] mx-auto rounded-[25px] mt-[15px] lg:mt-[30px]">
      <Link href="http://localhost:3000/blog">
        < PrimaryOutlineSmBtn btnName="Hamısına bax" />
      </Link>
      
    </div>
  </div>
);

export default Bloq;

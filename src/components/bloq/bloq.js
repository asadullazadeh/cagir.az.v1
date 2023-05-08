import Image from "next/image";
import Link from "next/link";

import views from "@/icons/bloq/views.svg";

const Bloq = ({ bloqlar }) => (
  <div className="h-[700px]">
    <h2 className="mb-[30px] text-center h2-styles">Bloq</h2>

    <div className="grid grid-cols-3 gap-x-[60px]">
      {bloqlar?.map((bloq) => (
        <div key={bloq.name}>
          <div className="w-[424px] h-[544px] p-[30px] rounded-[25px]">
            <Image
              width={360}
              height={257}
              src={bloq.photo}
              alt={bloq.link}
              className="rounded-[20px] w-[360px] h-[257px]"
            />

            <div className="flex justify-between mt-[15px]">
              <div className="font-poppins non-italic text-[14px] leading-[21px] text-gray400">
                <p>{bloq.date}</p>
              </div>
              <div className="ml-auto border border-cagiraz rounded-lg ">
                <p className="font-poppins non-italic font-semibold	text-[10px] leading-[15px] text-cagiraz px-[10px] py-[4px] ">
                  Mövzu
                </p>
              </div>
            </div>

            <h5 className="h5-styles mt-[17px]">{bloq.title}</h5>

            <p className="font-poppins non-italic font-semibold text-[14px] leading-[21px] text-gray900 mt-[5px] w-[361px] h-[63px]">
              {bloq.comment}
            </p>

            <div className="flex justify-between mt-[15px]">
              <div className="flex flew-row justify-center items-center space-x-[5px] font-poppins non-italic text-[14px] leading-[21px] text-cagiraz">
                <Image
                  className="w-[22px] h-[15px]"
                  src={views}
                  alt="views logo"
                />
                <div>
                  <p className="font-poppins non-italic font-semibold	text-[18px] leading-[27px]">
                    {bloq.orderNum}
                  </p>
                </div>
              </div>
              <div className="ml-auto text-cagiraz">
                <Link
                  className="font-poppins non-italic font-extrabold	text-[14px] leading-[21px]"
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

    <div className="flex justify-center mx-auto pt-[9.5px] border border-cagiraz rounded-[25px] w-[133px] h-[41px] mt-[29.5px]">
      <Link
        href="#"
        className="font-poppins non-italic font-semibold text-[14px] leading-[21px] text-cagiraz "
      >
        Hamısına bax
      </Link>
    </div>
  </div>
);

export default Bloq;

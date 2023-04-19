import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";

const Ustalar = ({ ustalar }) => (
  <>
    <div className="h-[1212px]">
      <h2 className="relative text-center h2-styles">Xidmətlər</h2>
      <div className="grid grid-cols-4 mt-[30px] gap-x-[60px] gap-y-[60px]">
        {ustalar?.map((usta) => (
          <div key={usta.id}>
            <Link
              href="#"
              className="block w-[429px] h-[409px] rounded-[25px] hover:drop-shadow-card transition duration-300 bg-white pl-[26px] pt-[28px] pr-[28px] group"
            >
              <div className="relative w-[302px] h-[317px] mb-[14px]">
                <Image
                  width={367}
                  height={283}
                  src={usta.photo}
                  alt="Image description"
                  className="rounded-[20px] h-full w-full object-cover object-center"
                />
              </div>

              <div className="hidden absolute transition duration-300 mt-[19px] ml-[341px] group-hover:block transition duration-300">
                <Image src={arrow} alt="arrow_icon" />
              </div>
              <div>
                <h5 className="h-[31px] h5-styles">{usta.title}</h5>
                <p className="font-poppins font-semibold text-[14px] leading-[21px] text-gray900">
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

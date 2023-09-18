import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import arrow from "@/icons/arrow.svg";

const SubServiceNoTrend = ({ mainServiceData, subServices }) => {
  const router = useRouter();
  const mainService = router.query.mainService;
  console.log(subServices);
  const isServiceTrends = subServices.some((service) => service.isServiceTrend);

  const containerClasses =
    "flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px] lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px] pt-[30px] sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] pb-[60px] sm:pb-[75px] md:pb-[90px] lg:pb-[105px] xl:pb-[120px] 2xl:pb-[135px]";
  const listClasses =
    "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[15px] sm:gap-[20px] md:gap-[25px] lg:gap-[35px] xl:gap-y-[51px] 2xl:gap-[60px]";
  const linkClasses =
    "flex items-center justify-between w-full aspect-[15/3] sm:aspect-[302/91] rounded-[20px] drop-shadow-cardAlt lg:drop-shadow-none lg:hover:drop-shadow-cardAlt transition duration-300 bg-white px-[15px] sm:px-[30px] py-[9.5px] sm:py-[15px] group";

  return (
    <div>
      {isServiceTrends && (
        <h2 className="my-h2 mb-0 lg:mb-[15px] text-center">Bütün xidmətlər</h2>
      )}

      {mainServiceData && (
        <div className={containerClasses}>
          <ul className={listClasses}>
            {subServices.map(
              ({
                id,
                imageUrl,
                nameUrl,
                price,
                serviceNames,
                isServiceTrend,
              }) => {
                if (!isServiceTrend) {
                  return (
                    <li key={id}>
                      <Link
                        className={linkClasses}
                        href={`/${mainService}/${serviceNames[0].titleUrl}`}
                      >
                        <div>
                          <h5 className="relative font-semibold lg:font-bold text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-black500">
                            {serviceNames[0].name}
                          </h5>
                          <p className="font-medium sm:font-semibold text-[12px] leading-[18px] text-gray900 mt-0 sm:mt-[2px]">
                            {price}
                          </p>
                        </div>
                        <div className="hidden group-hover:block transition duration-300">
                          <Image
                            src={arrow}
                            alt="arrow_icon"
                            className="hidden lg:block"
                          />
                        </div>
                      </Link>
                    </li>
                  );
                }
                return null;
              }
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubServiceNoTrend;

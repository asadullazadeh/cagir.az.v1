import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";

const Reyler = ({ reyler }) => (
  <>
    <div className="px-[10px] desktop:px-[60px]">
      <h2
        className="text-center font-semibold text-[24px] leading-[36px] 
      desktop:font-semibold desktop:text-[36px] desktop:leading-[54px] mb-[15px] desktop:mb-[90px] text-black500"
      >
        Müştəri rəyləri
      </h2>
      <div className="grid place-items-end">
        <Image
          className="w-[22px] desktop:w-[28px] h-[14px] h-[24px]"
          src={arrow}
          alt="arrow_icon"
        />
      </div>

      <div className="overflow-x-scroll overflow-hidden">
        <div className="flex gap-x-[15px] desktop:gap-x-[60px]">
          {reyler?.map((rey) => (
            <div key={rey.id}>
              <div className="relative rounded-[10px] desktop:rounded-[20px] flex flex-col ">
                <div className="p-[10px] desktop:p-[30px] space-y-[10px] desktop:space-y-[15px]">
                  {/* photo, name */}
                  <div className="flex gap-x-[10px] desktop:gap-x-[15px]">
                    <Image
                      width={65}
                      height={65}
                      src={rey.photo}
                      alt="Profile picture"
                      className="z-50 rounded-full w-[33px] desktop:w-[65px] h-[33px] desktop:h-[65px] ml-[3.5px] desktop:ml-[7px] mt-[3.5px] desktop:mt-[7px] object-cover object-center"
                    />
                    <div className="absolute z-40">
                      <div className="absolute rounded-full bg-bluebckg opacity-[15%] w-[33px] desktop:w-[65px] h-[33px] desktop:h-[65px] mt-0 ml-0"></div>
                      <div className="absolute rounded-full bg-bluebckg opacity-[15%] w-[33px] desktop:w-[65px] h-[33px] desktop:h-[65px] mt-[3.5px] desktop:mt-[7px] ml-[7px] desktop:ml-[14px]"></div>
                      <div className="absolute rounded-full bg-bluebckg opacity-[15%] w-[33px] desktop:w-[65px] h-[33px] desktop:h-[65px] ml-[1px] desktop:ml-[2px] mt-[7px] desktop:desktop:mt-[14px]"></div>
                    </div>

                    <h6
                      className="w-[80px]
                    font-semibold desktop:font-bold text-[12px] desktop:text-[14px] leading-[18px] 
                    desktop:leading-[21px] text-black500 mt-[2px] desktop:mt-[18px]"
                    >
                      <span>{rey.name}</span>
                    </h6>
                  </div>

                  {/* rey */}
                  <div className="w-[140px] desktop:w-[222px] h-[36px] desktop:h-[54px] ">
                    <p
                      className="desktop:font-semibold italic text-[8px] desktop:text-[12px] 
                    text-[12px] desktop:leading-[18px] text-black100"
                    >
                      {rey.rey}
                    </p>
                  </div>

                  {/* review stars */}
                  <div className="flex items-center mt-[15px]">
                    <svg
                      aria-hidden="true"
                      className="w-[14px] h-[13px] text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-[14px] h-[13px] text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-[14px] h-[13px] text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-[14px] h-[13px] text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-[14px] h-[13px] text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fiveth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>

                  {/* scroll section for services  */}
                  <div className=" overflow-x-scroll overflow-hidden w-[140px] desktop:w-[270px]">
                    <div className="flex gap-x-[4px]">
                      {rey.jobs?.map((job) => (
                        <div key={job.name}>
                          <div className="border rounded-lg border-cagiraz">
                            <p class="font-semibold text-[10px] leading-[15px] px-[10px] py-[4px] text-cagiraz whitespace-nowrap">
                              {job}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Reyler;

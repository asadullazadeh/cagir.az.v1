import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/data.json";
import SocialNetworks from "@/src/components/others/social_ntwrks";
import img_banner_blog from "@/public/img_banner_blog.png";
const kateqoriyalar = [
  "Heyvan baxımı",
  "Yoqa, Meditasiya",
  "Faydalı məlumatlar",
  "Yeni xəbərlər",
  "Heyvan baxımı",
  "Heyvan baxımı",
  "Heyvan baxımı",
];

const teqler = [
  "Heyvan baxımı",
  "Dərin təmizlik",
  "Gözəllik",
  "Psixoloq",
  "Bərbər",
  "Biznes",
  "Texnologiya",
];

export default function Blog({ bloqlar }) {
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const firstBlog = bloqlar[0]; // Accessing the first element
  const allBlogs = bloqlar; // Accessing the all elements
  return (
    <div
      className="flex flex-col lg:gap-x-[40px] xl:gap-x-[50px] 2xl:gap-x-[60px] lg:flex-row
    pb-[60px] lg:pb-[90px]"
    >
      {/* a blog the most readen */}
      <div className="w-full lg:w-2/3 pb-[30px] lg:pb-0 
      drop-shadow-card lg:drop-shadow-none lg:hover:drop-shadow-card transition duration-300">
        <SocialNetworks classNames="hidden lg:flex flex-row gap-x-[20px] pb-[30px]" />
        <Image
          width={300}
          height={300}
          src={allBlogs[1].photo}
          alt={allBlogs[1].title}
          className="rounded-[20px] w-full aspect-[300/164] lg:aspect-[908/499]"
        />
        <div className="flex flex-row justify-between pt-[5px] lg:pt-[30px] pb-[15px] lg:pb-[30px]">
          <p className="font-medium lg:font-semibold text-[8px] lg:text-[14px] leading-[12px] lg:leading-[21px] text-gray900">
            4 mart, 2023
          </p>
          <p className="font-semibold text-[10px] lg:text-[18px] leading-[15px] lg:leading-[27px] text-cagiraz">
            Baxış: 456
          </p>
        </div>
        <h3 className="my-h2 pb-[5px] lg:pb-[30px]">{firstBlog.title}</h3>
        <p className="text-[12px] lg:text-[16px] leading-[22px] lg:leading-[34px] text-gray900">
          Lorem ipsum dolor sit amet consectetur. Ac sed bibendum faucibus
          ornare quam consequat. Elit vel pharetra leo ipsum in. Posuere
          ullamcorper faucibus quam felis tellus eget. Ut diam tellus enim leo
          in praesent etiam. Volutpat cursus in vitae in vestibulum consectetur
          viverra. Nisl enim et egestas dolor quam sit dui interdum. In tellus
          faucibus duis in nisi amet eleifend nisi. Viverra posuere dictum metus
          cursus diam aliquet lobortis feugiat. Eget eu ultrices nulla malesuada
          nec non ut. Mi eu at pharetra semper euismod viverra elementum. Amet
          amet urna aliquam in varius. Elementum nulla ultrices at tempus orci.
          Mauris rhoncus iaculis proin cursus eu at tellus vitae. Lobortis sit
          ut in senectus tortor ut. Posuere augue posuere.
        </p>
      </div>
      <SocialNetworks classNames="flex lg:hidden flex-row gap-x-[20px] pb-[30px]" />

      {/* on desktop/left section. All blogs, tags, categories */}
      <div classNames="flex flex-col justify-between  w-full lg:w-1/3 ">
        <h4
          className="font-semibold lg:font-bold text-[16px] lg:text-[20px] lg:leading-[30px] leading-[24px] pb-[15px] pt-[30px] lg:pt-0 text-center lg:text-start
        border-t border-[#EAEAEA] lg:border-none"
        >
          Oxşar yazılar
        </h4>

        <div className="flex flex-col gap-y-[15px] overflow-y-scroll">
          {allBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className={showAllBlogs || index < 3 ? "" : "hidden"}
            >
              <div className="flex flex-row gap-x-[10px] lg:gap-x-[20px] p-[10px] rounded-[10px]  shadow-rectangle4 lg:shadow-none">
                <Image
                  src={blog.photo}
                  alt={blog.title}
                  width={300}
                  height={300}
                  className="w-[54px] h-[54px] sm:w-[84px] sm:h-[84px] 
                  md:w-[104px] md:h-[104px] lg:w-[84px] lg:h-[84px] aspect-square rounded-[5px]"
                />

                <div className="w-full flex flex-col justify-between lg:justify-normal">
                  <h4 className="font-semibold lg:font-bold text-[12px] lg:text-[12px] leading-[18px] lg:leading-[21px]">
                    {blog.title}
                  </h4>
                  <div className="flex flex-row justify-between">
                    <p
                      className="lg:order-2 font-medium lg:font-semibold text-[8px] lg:text-[10px] leading-[12px] lg:leading-[15px]
                  border border-cagiraz rounded-[5px] py-[2px] lg:py-[4px] px-[8px] lg:px-[10px] text-cagiraz"
                    >
                      Təmizlik
                    </p>
                    <p className="lg:order-1 font-medium lg:font-semibold text-[8px] lg:text-[10px] leading-[12px] lg:leading-[15px] text-gray900">
                      {blog.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* button daha cox gor */}
        <div className="flex justify-center pt-[30px] lg:pt-[15px]">
          {/* Daha cox gor button */}
          <button
            className={`lg:py-[10px] lg:px-[26px]
          font-medium lg:font-extrabold text-cagiraz text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] ${
            showAllBlogs ? "hidden" : ""
          }`}
            onClick={() => setShowAllBlogs(true)}
          >
            Daha çox gör
          </button>

          {/* Bagla button */}
          <button
            className={`lg:py-[10px] lg:px-[26px]
          font-medium lg:font-extrabold text-cagiraz text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] ${
            showAllBlogs ? "" : "hidden"
          }`}
            onClick={() => setShowAllBlogs(false)}
          >
            Bağla
          </button>
        </div>
        {/* teqler ve kqteqoriyalar bolmesi ve banner */}
        <div className="flex flex-col pt-[60px] gap-y-[60px] lg:border-t border-[#EAEAEA]">
          {/* teqler */}
          <div className="lg:order-2">
            <h4
              className="font-semibold lg:font-bold text-[16px] lg:text-[20px] lg:leading-[30px] leading-[24px] pb-[15px] pt-[30px] lg:pt-0 text-center lg:text-start
            border-t border-[#EAEAEA] lg:border-none"
            >
              Təqlər
            </h4>
            <div className="flex flex-row flex-wrap gap-[10px] lg:gap-[15px]">
              {teqler.map((teq) => (
                <div key={teq.id}>
                  <p
                    className="font-medium lg:font-semibold text-[8px] lg:text-[10px] leading-[12px] lg:leading-[15px]
                  border border-cagiraz rounded-[5px] py-[2px] lg:py-[4px] px-[8px] lg:px-[10px] text-cagiraz"
                  >
                    {teq}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Kateqoriyalar */}
          <div className="lg:order-1">
            <h4
              className="font-semibold lg:font-bold text-[16px] lg:text-[20px] lg:leading-[30px] leading-[24px] pb-[15px] pt-[30px] lg:pt-0 text-center lg:text-start
            border-t border-[#EAEAEA] lg:border-none"
            >
              Kateqoriyalar
            </h4>

            <div className="grid grid-cols-2  gap-[10px] lg:gap-[15px]">
              {kateqoriyalar.map((kateqoriya) => (
                <div key={kateqoriya.id}>
                  <p
                    className="font-semibold text-[14px] lg:text-[18px] leading-[21px] lg:leading-[27px]
                  text-cagiraz"
                  >
                    {kateqoriya}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:block pt-[60px]">
          <Image src={img_banner_blog} alt="img_banner_blog" />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const blogData = await import("@/data/data.json");
  return {
    props: {
      bloqlar: blogData.bloqlar,
    },
  };
}

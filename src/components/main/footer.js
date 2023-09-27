import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import phone from "@/icons/footer/phone.svg";
import copyright from "@/icons/footer/copyright.svg";
import paper_plane from "@/icons/footer/paper_plane.svg";
import SocialNetworks from "@/src/components/others/social_ntwrks";
import InputBtnTransition from "@/src/components/input/input_btn_transition";

const Footer = ({ messages }) => (
  <>
    <footer>
      <div className="hidden sm:block lg:px-[60px] pt-[15px] lg:pt-[80px] pb-[115px] lg:pb-[90px] bg-white200 w-full">
        <div className="flex lg:hidden mb-[40px] lg:mb-[30px] justify-center lg:justify-start">
          <Link href="/">
            <Image
              src={logo}
              className="h-[27px] w-[106px]"
              alt="Cagir.az logo"
            />
          </Link>
        </div>
        {/* first left */}
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-y-[40px] lg:gap-y-0">
          {/* 1st column-Cagir.az */}
          <div className="justify-center col-span-2 lg:col-auto lg:justify-start order-4  lg:order-1 mx-auto lg:mx-0">
            {/* 4th column:title */}
            <div className="hidden lg:flex mb-[20px] lg:mb-[30px] justify-center lg:justify-start">
              <Link href="/">
                <Image
                  src={logo}
                  className="h-[27px] w-[106px]"
                  alt="Cagir.az logo"
                />
              </Link>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex flex-col items-center lg:items-start gap-y-[20px] lg:gap-y-[30px]">
                <div className="flex gap-x-[10px] justify-center lg:justify-start">
                  <Image
                    className="w-[20px] h-[20px]"
                    src={phone}
                    alt="phone_icon"
                  />
                  <Link
                    className="font-semibold text-[14px] leading-[21px] text-gray900 hover:text-black transition duration-300"
                    href="tel:994703482606"
                  >
                    +994 70 348 26 06
                  </Link>
                </div>
                <SocialNetworks classNames="flex flex-row justify-center lg:justify-start space-x-[25px]" />
                <div className="flex justify-center lg:hidden">
                  <Link
                    href="/haqqimizda/terms"
                    className="text-cagiraz font-extrabold lg:text-gray900 lg:font-semibold lg:hover:text-black transition duration-300 indivne-block min-w-max"
                  >
                    Razılaşma müqaviləsi
                  </Link>
                </div>
                <div className="flex justify-center lg:hidden">
                  <div className="flex gap-x-[10px]">
                    <Image
                      src={copyright}
                      alt="copyright_icon"
                      className="w-[20px] h-[20px]"
                    />
                    <div>
                      <p className="font-medium lg:font-semibold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-gray900">
                        2023 Cagir.az. Bütün hüquqlar qorunur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="hidden lg:flex justify-center lg:justify-start items-end">
                <div className="flex justify-center lg:justify-start">
                  <div className="flex gap-x-[10px] lg:pt-[72px] xl:pt-[91px]">
                    <div>
                      <Image
                        src={copyright}
                        alt="copyright_icon"
                        className="w-[20px] h-[20px]"
                      />
                    </div>
                    <div>
                      <p className="font-medium lg:font-semibold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-gray900">
                        {/* 2023 Cagir.az. Bütün hüquqlar qorunur */}
                        {messages.copyright}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>

          {/* Faydali kecidler */}
          <div className="flex flex-col mx-auto justify-start order-2">
            {/* <!-- 3rd column:title --> */}

            <ul className="space-y-[10px] lg:space-y-[15px] font-semibold text-[14px] leading-[21px]  min-w-max text-gray900">
              {/* <!-- 2nd column:1st --> */}
              <li className="hover:text-black transition duration-300 ">
                <h2 className="mb-[10px] lg:mb-[15px] font-extrabold text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-black500">
                  {/* Faydalı keçidlər */}
                  {messages["useful-links"]}
                </h2>
              </li>
              <li className="hover:text-black transition duration-300 ">
                <Link href="/haqqimizda">{messages["about"]}</Link>
              </li>
              {/* <!-- 2nd column:2nd --> */}
              <li className="hover:text-black transition duration-300 ">
                <Link href="/faq">{messages["faq-short"]}</Link>
              </li>
              {/* <!-- 2nd column:3rd --> */}
              <li className="hover:text-black transition duration-300 ">
                <Link href="/elaqe">{messages["contact"]}</Link>
              </li>
              {/* <!-- 2nd column:4th --> */}
              <li className="hover:text-black transition duration-300 ">
                <Link href="/blog">{messages["blog"]}</Link>
              </li>
              {/* <!-- 2nd column:5th --> */}
              <li className="hover:text-black transition duration-300 ">
                <Link href="/media">{messages["media"]}</Link>
              </li>
              {/* <!-- 2nd column:6th --> */}
              <li className="hover:text-black transition duration-300 ">
                <Link href="/xidmet">{messages["services"]}</Link>
              </li>
            </ul>
          </div>

          {/* 3rd column-Xidmetler */}
          <div className="flex flex-col mx-auto justify-start  order-1 lg:order-3 ">
            {/* <!-- 3rd column:title --> */}

            <ul className="space-y-[10px] lg:space-y-[15px] font-semibold text-[14px] leading-[21px]  min-w-max text-gray900">
              {/* <!-- 2nd column:1st --> */}
              <li className="hover:text-black transition duration-300 ">
                <h2 className="mb-[10px] lg:mb-[15px] font-extrabold text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-black500">
                  {messages["services"]}
                </h2>
              </li>
              <li className="hover:text-black transition duration-300 ">
                <Link href="/temizlik-xidmeti">{messages["cleaning"]}</Link>
              </li>
              {/* <!-- 2nd column:2nd --> */}
              <li className="hover:text-black transition duration-300 ">
                <Link href="/usta">{messages["master"]}</Link>
              </li>
              {/* <!-- 2nd column:3rd --> */}
              <li className="hover:text-black transition duration-300 ">
                <Link href="/masaj-xidmeti">{messages["massage"]}</Link>
              </li>
              {/* <!-- 2nd column:4th --> */}
              <li className="hover:text-black transition duration-300 ">
                <Link href="/xidmetler">{messages["all-services"]}</Link>
              </li>
              {/* <!-- 2nd column:5th --> */}
              <li className="hover:text-black transition duration-300 ">
                <Link href="/pulqazan">{messages["affilate"]}</Link>
              </li>
              {/* <!-- 2nd column:6th --> */}
              <li className="hover:text-black transition duration-300 ">
                <Link href="/is-axtariram">{messages["work-with-us"]}</Link>
              </li>
            </ul>
          </div>

          {/* 4th column-Yeniliklerden xeberdar ol */}
          <div className="flex flex-col col-span-2 lg:col-span-1 items-center lg:items-start lg:justify-start order-3 lg:order-4 lg:mx-0 justify-between">
            {/* 4th column:title */}
            <h2 className="lg:mb-[15px] font-extrabold text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-black500 text-left">
              {messages["stay-up-to-date"]}
            </h2>
            <div className="flex flex-col lg:justify-between lg:h-full">
              <InputBtnTransition
                name={messages["write-email"]}
                placeholder={messages["write-email"]}
                classNames="hidden lg:block"
              />

              {/*  */}
              <div className="hidden lg:flex justify-center lg:justify-end items-end">
                <Link
                  href="/haqqimizda/terms"
                  // className="lg:mb-[15px] font-extrabold text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-black500 text-left"
                  className="text-cagiraz font-extrabold lg:text-gray900 lg:font-semibold lg:hover:text-black transition duration-300 inline-block min-w-max"
                >
                  {messages["terms"]}
                </Link>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-[15px] pb-[115px] bg-white200 sm:hidden">
        <SocialNetworks classNames="flex flex-row justify-center space-x-[25px]" />
      </div>
    </footer>
  </>
);

export default Footer;

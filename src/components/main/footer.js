import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo_cagiraz.png";
import phone from "@/icons/footer/phone.svg";
import copyright from "@/icons/footer/copyright.svg";
import paper_plane from "@/icons/footer/paper_plane.svg";
import SocialNetworks from "@/src/components/others/social_ntwrks";
import InputBtnTransition from "@/src/components/input/input_btn_transition";

const Footer = () => (
  <>
    <footer className="lg:px-[60px] pt-[15px] lg:pt-[80px] pb-[115px] lg:pb-[90px] bg-white200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-y-[40px] lg:gap-y-0">
        {/* 1st column-Cagir.az */}
        <div className="justify-center md:col-span-1 lg:col-auto lg:justify-start order-4 sm:order-3 lg:order-1 mx-auto lg:mx-0">
          {/* 1st column:1st element */}
          <div className="flex mb-[20px] lg:mb-[30px] justify-center lg:justify-start">
            <Link href="/">
              <Image
                src={logo}
                className="h-[27px] w-[106px]"
                alt="Cagir.az logo"
              />
            </Link>
          </div>

          <ul className="text-gray900 space-y-[20px] lg:space-y-[30px]">
            {/* 1st column:2nd element */}
            <li className="flex gap-x-[10px] justify-center lg:justify-start">
              <div>
                <Image
                  className="w-[20px] h-[20px]"
                  src={phone}
                  alt="phone_icon"
                />
              </div>
              <div>
                <Link
                  className="font-semibold text-[14px] leading-[21px] text-gray900 hover:text-black transition duration-300"
                  href="#"
                >
                  +994 70 348 26 06
                </Link>
              </div>
            </li>

            {/* 1st column:3rd element */}
            {/* Sosial sebekeler insta, fb, linkedin */}
            <SocialNetworks classNames="flex flex-row justify-center lg:justify-start space-x-[25px]" />
            {/* 1st column:4th element */}
            <li className="flex justify-center lg:justify-start">
              <Link
                href="#"
                className="hover:text-black transition duration-300 inline-block min-w-max"
              >
                Razılaşma müqaviləsi
              </Link>
            </li>
            {/* 1st column:5th element */}
            <li className="flex justify-center lg:justify-start">
              <div className="flex gap-x-[10px]">
                <div>
                  <Image
                    src={copyright}
                    alt="copyright_icon"
                    className="w-[20px] h-[20px]"
                  />
                </div>
                <div>
                  <p className="font-medium lg:font-semibold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-gray900">
                    2023 Cagir.az. Bütün hüquqlar qorunur
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Faydali kecidler */}
        <div className="justify-center lg:justify-start order-2 mx-auto lg:mx-0">
          {/* <!-- 3rd column:title --> */}
          <h2 className="mb-[10px] lg:mb-[15px] font-extrabold text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-black500 text-center lg:text-left">
            Faydalı keçidlər
          </h2>
          <ul className="space-y-[10px] lg:space-y-[15px] font-semibold text-[14px] leading-[21px]  text-gray900">
            {/* <!-- 2nd column:1st --> */}
            <li className="hover:text-black transition duration-300 flex justify-center lg:justify-start">
              <Link href="#">Haqqımızda</Link>
            </li>
            {/* <!-- 2nd column:2nd --> */}
            <li className="hover:text-black transition duration-300 flex justify-center lg:justify-start">
              <Link href="#">Suallar</Link>
            </li>
            {/* <!-- 2nd column:3rd --> */}
            <li className="hover:text-black transition duration-300 flex justify-center lg:justify-start">
              <Link href="#">Əlaqə</Link>
            </li>
            {/* <!-- 2nd column:4th --> */}
            <li className="hover:text-black transition duration-300 flex justify-center lg:justify-start">
              <Link href="#">Bloq</Link>
            </li>
            {/* <!-- 2nd column:5th --> */}
            <li className="hover:text-black transition duration-300 flex justify-center lg:justify-start">
              <Link href="#">Media</Link>
            </li>
            {/* <!-- 2nd column:6th --> */}
            <li className="hover:text-black transition duration-300 flex justify-center lg:justify-start">
              <Link href="#">Xidmətlər</Link>
            </li>
          </ul>
        </div>

        {/* 3rd column-Xidmetler */}
        <div className="justify-center lg:justify-start order-1 lg:order-3 mx-auto lg:mx-0">
          {/* <!-- 3rd column:title --> */}
          <h2 className="mb-[10px] lg:mb-[15px] font-extrabold text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-black500 text-center lg:text-left">
            Xidmətlər
          </h2>
          <ul className="space-y-[10px] lg:space-y-[15px] font-semibold text-[14px] leading-[21px]  min-w-max text-gray900">
            {/* <!-- 2nd column:1st --> */}
            <li className="hover:text-black transition duration-300 flex justify-center lg:justify-start">
              <Link href="#">Təmizlik xidməti</Link>
            </li>
            {/* <!-- 2nd column:2nd --> */}
            <li className="hover:text-black transition duration-300 flex justify-center lg:justify-start">
              <Link href="#">Usta</Link>
            </li>
            {/* <!-- 2nd column:3rd --> */}
            <li className="hover:text-black transition duration-300 flex justify-center lg:justify-start">
              <Link href="#">Masaj xidməti</Link>
            </li>
            {/* <!-- 2nd column:4th --> */}
            <li className="hover:text-black transition duration-300 flex justify-center lg:justify-start">
              <Link href="#">Hamısı</Link>
            </li>
            {/* <!-- 2nd column:5th --> */}
            <li className="hover:text-black transition duration-300 flex justify-center lg:justify-start">
              <Link href="#">PulQazan</Link>
            </li>
            {/* <!-- 2nd column:6th --> */}
            <li className="hover:text-black transition duration-300 flex justify-center lg:justify-start">
              <Link href="#">Bizimlə işlə</Link>
            </li>
          </ul>
        </div>

        {/* 4th column-Yeniliklerden xeberdar ol */}
        <div className="justify-center lg:justify-start order-3 lg:order-4 mx-auto lg:mx-0">
          {/* 4th column:title */}
          <h2 className="mb-[10px] lg:mb-[15px] font-extrabold text-[16px] lg:text-[18px] leading-[24px] lg:leading-[27px] text-black500 text-left">
            Yeniliklərdən xəbərdar ol
          </h2>
          <InputBtnTransition name="Emaili yaz" />
        </div>
      </div>
    </footer>
  </>
);

export default Footer;

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo_cagiraz.png";

import fb from "@/icons/social_ntwrk/fb.svg";
import fb1 from "@/icons/social_ntwrk/fb1.svg";
import insta from "@/icons/social_ntwrk/insta.svg";
import insta1 from "@/icons/social_ntwrk/insta1.svg";
import linkedin from "@/icons/social_ntwrk/linkedin.svg";
import linkedin1 from "@/icons/social_ntwrk/linkedin1.svg";
import phone from "@/icons/footer/phone.svg";
import copyright from "@/icons/footer/copyright.svg";
import paper_plane from "@/icons/footer/paper_plane.svg";


const Footer = () => (
  <>
    <footer className="px-[60px] pt-[80px] h-[408px] font-poppins non-italic bg-white200 mt-[135px]">
      <div className="grid grid-cols-4">

        {/* 1st column */}
        <div>
          {/* 1st column:1st element */}
          <div className="mb-[30px]">
            <Link href="/">
              <Image
                src={logo}
                className="h-[27px] w-[106px]"
                alt="Cagir.az logo"
              />
            </Link>
          </div>

          <ul className="text-gray900 space-y-[30px]">
            {/* 1st column:2nd element */}
            <li className="">
              <div class="flex gap-x-[10px]">
                <div>
                  < Image src={phone} alt="phone_icon"/>
                </div>
                <div>
                  <Link className="font-semibold text-[14px] leading-[21px] text-gray900 hover:text-black transition duration-300" href="#">+994 70 348 26 06</Link>
                </div>
              </div>
            </li>

            {/* 1st column:3rd element */}
            <li className="">
              {/* Sosial sebekeler insta, fb, linkedin */}
              <div className="flex justify-start space-x-[25px]">

                {/* Insta icon */}
                <div class="relative w-[22px] h-[22px]">
                  {/* before hover */}
                  <div class="transition-opacity duration-300 hover:opacity-0">
                    <Link href="#"><Image src={insta} alt="insta_icon"/></Link>
                  </div>
                  {/* after hover */}
                  <div class="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Link href="#"><Image src={insta1} alt="insta_icon"/></Link>
                  </div>
                </div>


                {/* Facebook icon */}
                <div class="relative w-[23px] h-[23px]" >
                  {/* before hover */}
                  <div class="transition-opacity duration-300 hover:opacity-0">
                    <Link href="#"><Image src={fb} alt="fb_icon"/></Link>
                  </div>
                  {/* after hover */}
                  <div class="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Link href="#"><Image src={fb1} alt="fb_icon"/></Link>
                  </div>
                </div>


                {/* Linkedin icon */}
                <div class="relative w-[21px] h-[21px]">
                  {/* before hover */}
                  <div class="transition-opacity duration-300 hover:opacity-0">
                    <Link href="#"><Image src={linkedin} alt="fb_icon"/></Link>
                  </div>
                  {/* after hover */}
                  <div class="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Link href=""><Image src={linkedin1} alt="linkedin_icon"/></Link>
                  </div>
                </div>

              </div>
            </li>

            {/* 1st column:4th element */}
            <li className="">
              <div className="hover:text-black transition duration-300  inline-block min-w-max">
                Razılaşma müqaviləsi
              </div>
            </li>
            {/* 1st column:5th element */}
            <li className="">
              <div class="flex gap-x-[10px]">
                <div>
                  < Image src={copyright} alt="copyright_icon" className="w-[20px] h-[20px]"/>
                </div>
                <div>
                  <p className="font-semibold text-[14px] leading-[21px] text-gray900">2023 Cagir.az. Bütün hüquqlar qorunur</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* 2nd column */}
        <div>
          {/* 2nd column:title */}
          <h2 className="mb-[15px] font-extrabold text-[18px] text-black500 leading-[27px]">
            Faydalı keçidlər
          </h2>
          <ul className="font-poppins text-gray900 space-y-[15px] font-semibold text-[14px] leading-[21px] inline-block min-w-max">
            {/* 2nd column:1st */}
            <li className="hover:text-black transition duration-300 ">
              <Link
                href="#"
              >
                Haqqımızda
              </Link>
            </li>
            {/* 2nd column:2nd */}
            <li className="hover:text-black transition duration-300">
              <Link
                href="#"               
              >
                Suallar
              </Link>
            </li>
            {/* 2nd column:3rd */}
            <li className="hover:text-black transition duration-300">
              <Link
                href="#"
              >
                Əlaqə
              </Link>
            </li>
            {/* 2nd column:4th */}
            <li className="hover:text-black transition duration-300">
              <Link
                href="#"
              >
                Bloq
              </Link>
            </li>
            {/* 2nd column:5th */}
            <li className="hover:text-black transition duration-300">
              <Link
                href="#"
              >
                Media
              </Link>
            </li>
            {/* 2nd column:6th */}
            <li className="hover:text-black transition duration-300">
              <Link
                href="#"
              >
                Xidmətlər
              </Link>
            </li>
          </ul>
        </div>

        {/* 3rd column */}
        <div>
          {/* 3rd column:title */}
          <h2 className="mb-[15px] font-extrabold text-[18px] text-black500 leading-[27px]">
          Xidmətlər
          </h2>
          <ul className="font-poppins text-gray900 space-y-[15px] font-semibold text-[14px] leading-[21px] inline-block min-w-max">
            {/* 2nd column:1st */}
            <li className="hover:text-black transition duration-300">
              <Link
                href="#"
              >
                Təmizlik xidməti
              </Link>
            </li>
            {/* 2nd column:2nd */}
            <li className="hover:text-black transition duration-300">
              <Link
                href="#"               
              >
                Usta
              </Link>
            </li>
            {/* 2nd column:3rd */}
            <li className="hover:text-black transition duration-300">
              <Link
                href="#"
              >
                Masaj xidməti
              </Link>
            </li>
            {/* 2nd column:4th */}
            <li className="hover:text-black transition duration-300">
              <Link
                href="#"
              >
                Hamısı
              </Link>
            </li>
            {/* 2nd column:5th */}
            <li className="hover:text-black transition duration-300">
              <Link
                href="#"
              >
                PulQazan
              </Link>
            </li>
            {/* 2nd column:6th */}
            <li className="hover:text-black transition duration-300">
              <Link
                href="#"
              >
                Bizimlə işlə
              </Link>
            </li>
          </ul>
        </div>

        {/* 4th column */}
        <div>
          {/* 4th column:title */}
          <h2 className="mb-[15px] font-extrabold text-[18px] leading-[27px]">
            Yeniliklərdən xəbərdar ol
          </h2>
          <ul className="text-black500 font-semibold text-[14px] leading-[21px]">
            {/* 4th column:1st */}
            <li className="mb-[5px]">
              <div href="#" className="">
                Email yaz
              </div>
            </li>
            {/* 4th column:2nd */}
            <li className="w-[235px] h-[58px] bg-white rounded-full  flex items-center">
              <form className="">
                <div className="flex items-center h-[46px] gap-x-[6px]">
                  <input
                    className="appearance-none bg-transparent border-none text-black focus:outline-none text-[14px] 
                    leading-[21px] w-[181px]"
                    type="text"
                    placeholder=""
                    aria-label="Full name"
                  />
                  <button
                    id="myButton"
                    className="flex rounded-full w-[46px] h-[46px] rounded-full bg-cagiraz"
                    type="button"
                  >
                    <Image
                      id="myImage"
                      className="mt-[14px] ml-[13px] w-[20px] h-[17.44] "
                      src={paper_plane}
                      alt="paper plane icon"
                    />
                  </button>
                </div>
              </form>
            </li>
          </ul>
        </div>
        
      </div>
    </footer>
  </>
);



export default Footer;

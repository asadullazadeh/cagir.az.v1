import Image from "next/image";
import Link from "next/link";

const SifarishBtn = () => (
    <>
    <Link href="/profil" className="mobile:flex mobile:justify-center mobile:sticky">
              <button className="h-[59px] w-[233px]  mt-[35px] font-extrabold text-lg leading-[27px] font-bold py-[16px] px-[56px]
              mobile:h-[40px] mobile:w-[146px] mobile:py-[10px] mobile:px-[26px] mobile:text-[14px] mobile:leading-[21px]
               transition duration-300 rounded-[30px] transform hover:-translate-y-1 shadow-btnShdw bg-cagiraz text-white focus:outline-none">
                Sifarişi yarat
              </button>
            </Link>
            </>
)
export default SifarishBtn;

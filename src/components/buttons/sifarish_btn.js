import Image from "next/image";
import Link from "next/link";

const SifarishBtn = ({classNames}) => (
  <>
    <Link
      href="/profil"
      className={classNames}
    >
      <button
        className="
              font-extraBold text-[14px] lg:text-[18px] leading-[22px] lg:leading-[27px]
              px-[26px] py-[10px] lg:px-[56px] lg:py-[16px]
               transition duration-300 rounded-[30px] transform hover:-translate-y-[5px] shadow-btnShdw bg-cagiraz text-white focus:outline-none"
      >
        Sifarişi yarat
      </button>
    </Link>
  </>
);
export default SifarishBtn;

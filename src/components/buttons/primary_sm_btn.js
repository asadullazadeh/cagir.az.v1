import Image from "next/image";
import Link from "next/link";

const PrimarySmBtn = ({ btnName, classNames }) => (
  <>
    <button
      className={`w-full lg:w-auto bg-cagiraz rounded-[30px] py-[10px] px-[26px]
                      font-extrabold text-white text-[14px] leading-[21px] transition duration-400 transform hover:-translate-y-[5px]
                      shadow-btnShdw ${classNames}`}
    >
      {btnName}
    </button>
  </>
);
export default PrimarySmBtn;

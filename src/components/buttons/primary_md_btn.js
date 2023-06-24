import Image from "next/image";
import Link from "next/link";

const PrimaryMdBtn = ({ btnName, classNames, onclick }) => (
  <>
    <button onClick={onclick}
        className={`w-full bg-cagiraz rounded-[50px] py-[12px] px-[50px]
                        font-extrabold text-white text-[16px] leading-[24px] transition duration-400 transform hover:-translate-y-[5px]
                        shadow-btnShdw ${classNames} `}
      >
        {btnName}
      </button>
  </>
);
export default PrimaryMdBtn;

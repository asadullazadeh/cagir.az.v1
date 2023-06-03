import Image from "next/image";
import Link from "next/link";

const LinkSmBtn = ({ btnName, classNames }) => (
    <>
    <button
                className= {` py-[10px] px-[26px]
                      font-extrabold text-cagiraz text-[14px] leading-[21px]
                      ${classNames} `}
              >
                { btnName }
              </button>
            </>
)
export default LinkSmBtn;

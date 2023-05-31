import Image from "next/image";
import Link from "next/link";

const LinkSmBtn = ({ btnName, classNames }) => (
    <>
    <button
                className= {` ${classNames} py-[10px] px-[26px]
                    
                      font-extrabold text-cagiraz text-[14px] leading-[21px] transition duration-400
                      `}
              >
                { btnName }
              </button>
            </>
)
export default LinkSmBtn;

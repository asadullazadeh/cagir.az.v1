import Image from "next/image";
import Link from "next/link";

const PrimaryOutlineSmBtn = ({ btnName, classNames }) => (
    <>
    <button
                className={`${classNames} bg-white rounded-[30px] py-[10px] px-[26px]
                    border-[2px] border-cagiraz
                      font-extrabold text-cagiraz text-[14px] leading-[21px] transition duration-400 transform hover:-translate-y-[5px]`}
                      
              >
                {btnName}
              </button>
            </>
)
export default PrimaryOutlineSmBtn;

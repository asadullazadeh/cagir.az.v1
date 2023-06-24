import Image from "next/image";
import Link from "next/link";
import ModalStandart from "@/src/components/modal/modal_stand";
import SifarisLegv from "@/src/components/others/tracking/sifaris_legv";

const Tracking = () => (
  <div
    className="flex flex-row justify-between items-center sticky top-[40px] lg:top-[110px] z-40 mt-[40px] bg-cagiraz 
  lg:bg-opacity-[0.15] px-[10px] lg:px-[25px] py-[11.5px] lg:py-[20px] lg:rounded-[25px] lg:mx-[60px] lg:mt-[10px]"
  >
    {/* Tracking */}
    <p className="font-semibold text-[10px] lg:text-[16px] leading-[15px] lg:leading-[24px] text-[#FFFFFF] lg:text-cagiraz">
      Sifariş icra olunacaq: 59:59
    </p>
    {/* Duzelis et button */}
    <div>
      <button
        className="font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-[#FFFFFF] lg:text-cagiraz"
        onClick={() => window.my_modal_2.showModal()}
      >
        Düzəliş et
      </button>
      <ModalStandart dialogId="my_modal_2" content={<SifarisLegv />} />
    </div>
  </div>
);

export default Tracking;

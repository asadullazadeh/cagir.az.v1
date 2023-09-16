import Image from "next/image";
import Link from "next/link";
import ModalStandart from "@/src/components/modal/modal_stand";
import InputBtnNbTransition from "@/src/components/input/input_btn_nb_transition";
import call from "@/icons/call_incmng_wp/call.svg";
import incoming from "@/icons/call_incmng_wp/incoming.svg";
import whatsapp from "@/icons/call_incmng_wp/whatsapp.svg";


const commonClasses = "group flex items-center justify-center w-[58px] h-[58px] bg-[#202020] bg-opacity-5 hover:bg-opacity-30 rounded-full";
const tooltipClasses = "bottom-[85px] rounded-[5px] py-[4px] px-[6px] font-medium text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0";

const IconButton = ({ imageSrc, altText, href, tooltipText, onClick }) => (
  <div className={commonClasses} onClick={onClick}>
    <span>
      <Image src={imageSrc} alt={altText} className="transition duration-300 ease-in-out" />
    </span>
    <span className={tooltipClasses}>{tooltipText}</span>
  </div>
);

const CallIncmngWp = ({ classNames }) => (
  <div className={`${classNames}`}>
    <div className="flex flex-row rounded-[30px] bg-[#202020] bg-opacity-30 p-[2px] gap-x-[2px]">
      <Link href="tel:994703482606">
        <IconButton
          imageSrc={call}
          altText="call_icon"
          tooltipText="Zəng"
        />
      </Link>
      
      <button onClick={() => window.my_modal_2.showModal()}>
        <IconButton
          imageSrc={incoming}
          altText="incoming_icon"
          tooltipText="Geri Zəng"
        />
      </button>
      <ModalStandart
        dialogId="my_modal_2"
        content={<InputBtnNbTransition name="Sürətli sifariş" />}
      />

      <Link href="https://wa.me/994703482606">
        <IconButton
          imageSrc={whatsapp}
          altText="whatsapp_icon"
          tooltipText="WhatsApp"
        />
      </Link>
    </div>
  </div>
);

export default CallIncmngWp;

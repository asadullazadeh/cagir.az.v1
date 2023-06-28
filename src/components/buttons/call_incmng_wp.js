import Image from "next/image";
import Link from "next/link";
import call from "@/icons/call_incmng_wp/call.svg";
import incoming from "@/icons/call_incmng_wp/incoming.svg";
import whatsapp from "@/icons/call_incmng_wp/whatsapp.svg";
import ModalStandart from "@/src/components/modal/modal_stand";
import SifarisLegv from "@/src/components/others/tracking/sifaris_legv";
import InputBtnTransition from "@/src/components/input/input_btn_transition";

const CallIncmngWp = () => (
  <div className="flex flex-row rounded-[30px] bg-[#202020] bg-opacity-30 p-[2px] gap-x-[2px]">
    <Link
      className="group flex relative items-center justify-center w-[58px] h-[58px] bg-[#202020] bg-opacity-5 hover:bg-opacity-30 rounded-full"
      href="tel:994703482606"
    >
      <span>
        <div className="relative group">
          <Image
            src={call}
            alt="call_icon"
            className="transition duration-300 ease-in-out"
          />
        </div>
      </span>
      <span
        className="bottom-[85px] rounded-[5px] py-[4px] px-[6px] font-medium
                    text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2
                    -translate-x-1/2 translate-y-full opacity-0"
      >
        Zəng
      </span>
    </Link>

    <Link
      className="group flex  items-center justify-center w-[58px] h-[58px] bg-[#202020] bg-opacity-5 hover:bg-opacity-30 rounded-full"
      href="/"  onClick={() => window.my_modal_2.showModal()}
    >
      <span>
        <Image
          src={incoming}
          alt="incoming_icon"
          className="transition duration-300 ease-in-out "
        />
      </span>
      <span
        className="bottom-[87px] rounded-[5px] py-[4px] px-[6px] font-medium
                    text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2
                    -translate-x-1/2 translate-y-full opacity-0"
      >
        Geri Zəng
      </span>
    </Link>
      <ModalStandart dialogId="my_modal_2" content={<InputBtnTransition name="Nömrə" />} />

    <Link
      className="group flex relative items-center justify-center w-[58px] h-[58px] bg-[#202020] bg-opacity-5 hover:bg-opacity-30 rounded-full"
      href="https://wa.me/994703482606"
    >
      <span>
        <div className="relative group">
          <Image
            src={whatsapp}
            alt="whatsapp_icon"
            className="transition duration-300 ease-in-out "
          />
        </div>
      </span>
      <span
        className="bottom-[85px] rounded-[5px] py-[4px] px-[6px] font-medium
                  text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2
                  -translate-x-1/2 translate-y-full opacity-0"
      >
        WhatsApp
      </span>
    </Link>
  </div>
);
export default CallIncmngWp;

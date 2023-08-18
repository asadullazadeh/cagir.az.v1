import Image from "next/image";
import Link from "next/link";
import phone from "@/icons/tab_bar/phone.svg";
import whatsapp from "@/icons/tab_bar/whatsapp.svg";
import client from "@/public/client.jpg";
import call_back from "@/icons/tab_bar/call_back.svg";
import ModalStandart from "@/src/components/modal/modal_stand";
import InputBtnNbTransition from "@/src/components/input/input_btn_nb_transition";
const TabBar = () => (
  <>
    <div className="h-[55px] block lg:hidden fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200">
      <div className="grid h-full w-inline-block grid-cols-4 mx-auto font-medium">
        {/* Call icon */}
        <Link
          href="tel:+994703482606"
          className="inline-flex flex-col items-center justify-center"
        >
          <Image src={phone} alt="phone_icon" />
          <span className="text-[10px] leading-[15px] text-cagiraz">Zəng</span>
        </Link>
        {/* Geri zeng icons */}

        <button
          onClick={() => window.my_modal_6.showModal()}
          type="button"
          className="inline-flex flex-col items-center justify-center"
        >
          <Image src={call_back} alt="whatsapp_icon" />
          <span className="text-[10px] leading-[15px] text-danger">
            Geri Zəng
          </span>
        </button>
        <ModalStandart
          dialogId="my_modal_6"
          content={<InputBtnNbTransition name="Sürətli sifariş" />}
        />
        {/* Whatsapp */}
        <Link
          href="https://wa.me/994703482606"
          className="inline-flex flex-col items-center justify-center"
        >
          <Image src={whatsapp} alt="whatsapp_icon" />
          <span className="text-[10px] leading-[15px] text-sucess">
            Whatsapp
          </span>
        </Link>
        {/* Chat */}

        <div
          className="inline-flex flex-col items-center justify-center"
        >
          <Image       
           width={65}
            height={65}
            src={client}
            alt="Profile picture"
            className="z-50 rounded-full w-[22px] h-[22px]  object-cover object-center"
          />
          <span className="text-[10px] leading-[15px] text-black500">Çat</span>
        </div>
      </div>
    </div>
  </>
);

export default TabBar;

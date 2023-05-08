import Image from "next/image";
import Link from "next/link";

import phone from "@/icons/tab_bar/phone.svg";
import whatsapp from "@/icons/tab_bar/whatsapp.svg";
import client from "@/public/client.jpg";

const TabBar = () => (
  <>
    <div class="h-[55px] desktop:hidden fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200">
      <div class="grid h-full w-inline-block grid-cols-4 mx-auto font-medium">
        <button
          type="button"
          class="inline-flex flex-col items-center justify-center"
        >
          <Image src={phone} alt="phone_icon" />
          <span class="text-[10px] leading-[15px] text-cagiraz">Zəng</span>
        </button>
        <button
          type="button"
          class="inline-flex flex-col items-center justify-center"
        >
          <Image src={whatsapp} alt="whatsapp_icon" />
          <span class="text-[10px] leading-[15px] text-danger">Geri Zəng</span>
        </button>
        <button
          type="button"
          class="inline-flex flex-col items-center justify-center"
        >
          <Image src={whatsapp} alt="whatsapp_icon" />
          <span class="text-[10px] leading-[15px] text-sucess">Whatsapp</span>
        </button>
        <button
          type="button"
          class="inline-flex flex-col items-center justify-center"
        >
          <Image
            width={65}
            height={65}
            src={client}
            alt="Profile picture"
            className="z-50 rounded-full w-[22px] h-[22px]  object-cover object-center"
          />
          <span class="text-[10px] leading-[15px] text-black500">Çat</span>
        </button>
      </div>
    </div>
  </>
);

export default TabBar;

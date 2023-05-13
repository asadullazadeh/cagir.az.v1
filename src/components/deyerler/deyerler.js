import Image from "next/image";
import Link from "next/link";
import star from "@/icons/deyerler/Star.svg";
import memnuniyyet from "@/icons/deyerler/memnuniyyet.svg";
import kefiyyet from "@/icons/deyerler/kefiyyet.svg";
import pesekar from "@/icons/deyerler/pesekar.svg";
import qenaet from "@/icons/deyerler/qenaet.svg";

const Deyerler = () => (
  <div className="">
    <h2 className="mb-[15px] lg:mb-[60px] my-h2 text-center">Dəyərlər</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[10px] sm:gap-x-[45px] md:gap-x-[80px] lg:gap-x-[100px] gap-y-[15px]">
      <div className="flex flex-col">
        <div className="flex justify-center items-center w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] mb-[15px] lg:mb-[30px]">
          <Image
            src={star}
            alt="Image 1"
            className=" w-[27px] lg:w-[54px] h-[27px] lg:h-[54px]"
          />
          <Image
            src={pesekar}
            alt="Image 2"
            className="absolute  z-10 w-[12px] lg:w-[24px] h-[12px] lg:h-[24px]"
          />
        </div>

        <h5 className="mb-[5px] my-h5">Peşəkar icraçı</h5>

        <p className="font-medium lg:font-semibold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-[12px] sm:leading-[15px] md:leading-[18px] lg:leading-[21px] text-gray900">
          Usta, təmizlik, bərbər, masaj və digər xidmətlərimiz üzrə olan
          icraçılar platformamıza daxil olmazdan əvvəl təcrübələrinə əsasən
          yoxlanır və təsdiqlənir
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-center items-center w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] mb-[15px] lg:mb-[30px]">
          <Image
            src={star}
            alt="Image 1"
            className=" w-[27px] lg:w-[54px] h-[27px] lg:h-[54px]"
          />
          <Image
            src={qenaet}
            alt="Image 2"
            className="absolute  z-10 w-[12px] lg:w-[24px] h-[12px] lg:h-[24px]"
          />
        </div>

        <h5 className="mb-[5px] my-h5">Zamana qənaət</h5>

        <p className="font-medium lg:font-semibold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-[12px] sm:leading-[15px] md:leading-[18px] lg:leading-[21px] text-gray900">
        Cagir.az-dan istifadə edərək vaxtınıza 100% qənaət edin Bizim xidmətlərimizlə 24 saat artıq sizə az gəlməyəcək.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-center items-center w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] mb-[15px] lg:mb-[30px]">
          <Image
            src={star}
            alt="Image 1"
            className=" w-[27px] lg:w-[54px] h-[27px] lg:h-[54px]"
          />
          <Image
            src={memnuniyyet}
            alt="Image 2"
            className="absolute  z-10 w-[12px] lg:w-[24px] h-[12px] lg:h-[24px]"
          />
        </div>

        <h5 className="mb-[5px] my-h5">Məmnuniyyət
</h5>

        <p className="font-medium lg:font-semibold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-[12px] sm:leading-[15px] md:leading-[18px] lg:leading-[21px] text-gray900">
        Sırada üçüncü olsa da, bizim üçün hər zaman birincidir. Xidmətdən razı qalmağınız üçün ən yaxşısını etməyə daim hazırıq.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-center items-center w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] mb-[15px] lg:mb-[30px]">
          <Image
            src={star}
            alt="Image 1"
            className=" w-[27px] lg:w-[54px] h-[27px] lg:h-[54px]"
          />
          <Image
            src={kefiyyet}
            alt="Image 2"
            className="absolute  z-10 w-[12px] lg:w-[24px] h-[12px] lg:h-[24px]"
          />
        </div>

        <h5 className="mb-[5px] my-h5">Keyfiyyət</h5>

        <p className="font-medium lg:font-semibold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-[12px] sm:leading-[15px] md:leading-[18px] lg:leading-[21px] text-gray900">
        Yüz dəfə eşitməkdənsə, bir dəfə görmək yaxşıdır. Göstərdiyimiz xidmətlərin keyfiyyətini bir kliklə görə bilərsiniz.
        </p>
      </div>
    </div>
  </div>
);

export default Deyerler;

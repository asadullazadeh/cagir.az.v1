import Image from "next/image";
import Link from "next/link";
import star from "@/icons/deyerler/Star.svg";
import memnuniyyet from "@/icons/deyerler/memnuniyyet.svg";
import kefiyyet from "@/icons/deyerler/kefiyyet.svg";
import pesekar from "@/icons/deyerler/pesekar.svg";
import qenaet from "@/icons/deyerler/qenaet.svg";

const Deyerler = () => (
  <div className="h-[348px]">
    <h2 className="mb-[60px] text-center h2-styles">Dəyərlər</h2>
    <div class="grid grid-cols-4 gap-x-[156px]">
      <div className="w-[230] h-[220px]">
        <div className="relative w-[60px] h-[60px] mb-[30px] flex justify-center items-center">
          <Image src={star} alt="star" className="absolute" />
          <Image src={pesekar} alt="pesekar_icon" className="z-10 mt-[0.5px]"/>
        </div>
        
        <h5 className="mb-[5px] h5-styles">
          Peşəkar icraçı
        </h5>

        <p className="font-poppins non-italic font-semibold text-[14px] leading-[21px] w-[231px] text-darkGray">
          Usta, təmizlik, bərbər, masaj və digər xidmətlərimiz üzrə olan
          icraçılar platformamıza daxil olmazdan əvvəl təcrübələrinə əsasən
          yoxlanır və təsdiqlənir
        </p>
      </div>

      <div className="w-[230] h-[220px]">
        <div className="relative w-[60px] h-[60px] mb-[30px] flex justify-center items-center">
          <Image src={star} alt="star" className="absolute" />
          <Image src={qenaet} alt="pesekar_icon" className="z-10 mt-[0.5px]"/>
        </div>
        
        <h5 className="mb-[5px] h5-styles">
        Zamana qənaət
        </h5>

        <p className="font-poppins non-italic font-semibold text-[14px] leading-[21px] w-[231px] text-darkGray">
        Cagir.az-dan istifadə edərək vaxtınıza 100% qənaət edin Bizim xidmətlərimizlə 24 saat artıq sizə az gəlməyəcək.
        </p>
      </div>


      <div className="w-[230] h-[220px]">
        <div className="relative w-[60px] h-[60px] mb-[30px] flex justify-center items-center">
          <Image src={star} alt="star" className="absolute" />
          <Image src={memnuniyyet} alt="pesekar_icon" className="z-10 mt-[0.5px]"/>
        </div>
        
        <h5 className="mb-[5px] h5-styles">
        Məmnuniyyət
        </h5>

        <p className="font-poppins non-italic font-semibold text-[14px] leading-[21px] w-[231px] text-darkGray">
        Sırada üçüncü olsa da, bizim üçün hər zaman birincidir. Xidmətlərimizdən razı qalmağınız üçün ən yaxşısını etməyə daim hazırıq.
        </p>
      </div>


      <div className="w-[230] h-[220px]">
        <div className="relative w-[60px] h-[60px] mb-[30px] flex justify-center items-center">
          <Image src={star} alt="star" className="absolute" />
          <Image src={kefiyyet} alt="pesekar_icon" className="z-10 mt-[0.5px]"/>
        </div>
        
        <h5 className="mb-[5px] h5-styles">
        Keyfiyyət
        </h5>

        <p className="font-poppins non-italic font-semibold text-[14px] leading-[21px] w-[231px] text-darkGray">
        Yüz dəfə eşitməkdənsə, bir dəfə görmək yaxşıdır. Göstərdiyimiz xidmətlərin keyfiyyətini bir kliklə görə bilərsiniz.
        </p>
      </div>
    </div>
  </div>
);

export default Deyerler;

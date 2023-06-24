import Link from "next/link"
import { useState } from "react";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn";

const SifarisLegv = () => {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const toggleDivs = () => {
    if (showDiv2) {
      setShowDiv1(true);
      setShowDiv2(false);
    } else {
      setShowDiv1(false);
      setShowDiv2(true);
    }
  };


  const handleButtonClick = () => {
    window.location.href = "http://localhost:3000/sifaris";
  };

  return (
    <div>
      {/* first step */}
      {showDiv1 && (
        <div className="flex flex-col items-center">
          <h4 className="font-semibold text-[16px] leading-[24px] pb-[15px]">
            Sifarişdə dəyişiklik edin
          </h4>
          <p className="flex flex-col items-center font-medium text-[12px] leading-[18px] text-gray900 pb-[20px]">
            <span> Sifarişdə düzəliş etdiyiniz zaman sizə </span>
            <span> verilmiş saat sıfırlanacaq </span>
          </p>
          <div className="flex flex-col gap-y-[20px]">
            <Link href="http://localhost:3000/sifaris"><PrimaryMdBtn onclick={handleButtonClick} btnName="Dəyişiklik et"/></Link>
            
            <PrimaryMdBtn
              onclick={toggleDivs}
              btnName="Sifarişi ləğv et"
              classNames="bg-danger"
            />
          </div>
        </div>
      )}

      {/* second step */}
      {showDiv2 && (
        <div className="flex flex-col items-center">
          <h4 className="font-semibold text-[16px] leading-[24px] pb-[15px]">
            Diqqət!
          </h4>
          <div className="flex flex-col items-center font-medium text-[12px] leading-[18px] text-gray900 pb-[20px]">
            <p>Sifarişi ləğv etmək istədiyinizə</p>
            <p>əminsinizmi?</p>
          </div>
          <div className="flex flex-col gap-y-[20px]">
            <PrimaryMdBtn
              btnName="Bəli, sifarişi ləğv et"
              classNames="bg-danger"
            />
            <PrimaryMdBtn btnName="Xeyr" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SifarisLegv;

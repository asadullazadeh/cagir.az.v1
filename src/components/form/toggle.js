import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import up from "@/icons/form/up.svg";
import down from "@/icons/form/down.svg";

const Form = () => {
  const [isHidden, setIsHidden] = useState(true);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <div>
        {/* Toggle part */}
        <div className="">
          
          <button
            id="clickMe"
            onClick={toggleHidden}
            className="flex justify-between items-center w-full border-b-2 border-cagiraz"
          >
            <div>
              <h6 className="font-bold text-[14px] leading-[21px] text-cagiraz">
                Ev təmizləmə haqda təsvir
              </h6>
            </div>
            <div>
              <Image
                src={isHidden ? up : down}
                alt={isHidden ? "up_icon" : "down_icon"}
              />
            </div>
          </button>

          <div
            id="hiddenText"
            className={`relative absolute over bg-white py-2 rounded mt-2 ${
              isHidden ? "hidden" : ""
            }`}
          >
            <div className="">
              Ev təmizləmə xidmətinə 3 əsas xidmət növü daxildir:
              <ul className="list-disc ml-[30px]">
                <li>Sadə təmizlik</li>
                <li>Dərin təmizlik</li>
                <li>Təmirdən sonra təmizlik</li>
              </ul>
              <p className="mt-[20px] text-[12px] ">
                Sadə təmizlik xidməti - evi gündəlik tozdan təmizləmək,
                əşyaların tozlarının təmizlənməsi, evin səliqəyə salınması,
                sanitar qovşaqların təmizlənməsi nəzərdə tutulur. Dərin təmizlik
                xidməti - evin tozlardan təmizlənməsi, mətbəx, sanitar
                qovşaqların təmizliyi, çilçıraq, kafel, metlax təmizliyi, güzgü
                və şüşələrin, 2 metr-ə qədər pəncərələrin tozdan təmizlənməsi
                nəzərdə tutulur. Təmirdən sonra təmizlik - yeni təmirdən çıxmış
                evin mətbəx,sanitar qovşaqların təmizlənməsi, pəncərə və
                qapılarda qalan ləkələrin çıxarılması, kafel metlaxda qalan
                çətin gedən ləkələrin təmizlənməsi, tozların dərindən alınması
                və s. aiddir. Evdə əşya varsa bu əşyaların da təmizliyi eləcə də
                zibillərin daşınması və dezinfeksiya xidməti kimi xidmətlər də
                istəyə görə əlavə edilə bilər. Ev temizleme xidmətinə yuyucu
                vasitələr və avadanlıq icraçı tərəfindən təmin olunur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

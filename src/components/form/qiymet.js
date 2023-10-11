import React, { useState } from "react";


const Qiymet = ({ priceBeforePromo, priceAfterPromo, messages }) => {
  const [isHidden, setIsHidden] = useState(true);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      {/* qiymet part */}
      <div className="rounded-[10px]">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[16px] leading-[24px] text-gray900">
            {messages.amount}
          </p>
          <p className="font-semibold text-[18px] leading-[27px] text-black500">
            {priceBeforePromo} AZN
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-[16px] leading-[24px] text-gray900">
            {messages["amount-discount"]}
          </p>
          <p className="font-semibold text-[18px] leading-[27px] text-black500">
            {priceBeforePromo - priceAfterPromo > 0
              ? (priceBeforePromo - priceAfterPromo).toFixed(2)
              : 0}{" "}
            AZN
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-[16px] leading-[24px] text-gray900">
            {messages.conclusion}
          </p>
          <p className="font-bold text-[26px] leading-[39px] text-cagiraz">
            {priceAfterPromo ? priceAfterPromo : priceBeforePromo} AZN
          </p>
        </div>
      </div>
    </>
  );
};

export default Qiymet;

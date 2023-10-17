import React, { useState } from "react";

const Qiymet = ({ priceBeforePromo, messages }) => {
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
          <p className="font-bold text-[26px] leading-[39px] text-cagiraz">
          {priceBeforePromo} AZN
          </p>
        </div>
      </div>
    </>
  );
};

export default Qiymet;

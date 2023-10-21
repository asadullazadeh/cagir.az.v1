import React from "react";

const PaymentMethod = ({ messages }) => {
  return (
    <div className="flex flex-col gap-y-[5px] px-[15px] lg:px-0 py-[15px] lg:py-0 border-[1px] border-gray900 rounded-[10px] lg:border-none">
      <p className="font-semibold text-[12px] leading-[18px] text-gray900 lg:text-black500">
        Ödəniş üsulunu seçin
      </p>
      <div className="inline-flex flex-col w-full border-none lg:border-solid lg:border-[1px] lg:border-gray900 lg:rounded-full">
        <div className="flex flex-row justify-between px-[15px] py-[10px] border-none lg:border lg:border-gray-300 rounded-full">
          <div className="flex gap-x-[10px] items-center">
            <div className="flex items-center justify-center w-[20px] h-[20px] border-2 border-cagiraz rounded-full">
              <div className="w-[12px] h-[12px] bg-cagiraz rounded-full"></div>
            </div>
            <p className="font-semibold text-[12px] leading-[18px]">
              Nağd ödəniş
            </p>
          </div>
          <div className="flex gap-x-[10px] items-center">
            <input
              disabled
              id="default-radio-2"
              type="radio"
              // value=""
              name="default-radio-2"
              className="w-[20px] h-[20px] text-cagiraz  border-cagiraz bg-white"
            />
            <label
              htmlFor="default-radio-2"
              className="font-semibold text-[12px] leading-[18px] text-[#959595]"
            >
              <p>Kart ilə ödəniş</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
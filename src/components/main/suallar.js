const Suallar = ({ suallar }) => (
  <div className="">
    <h2 className="my-h2 mb-[15px] lg:mb-[30px] text-center">
      Tez-tez verilən suallar
    </h2>
    <div className="space-y-[15px] lg:space-y-[17px]">
      {suallar?.slice(0, 3).map((sual) => (
        <div key={sual.id}>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between rounded-lg cursor-pointer">
              <h5 className="my-h5 ">{sual.question}</h5>
            </summary>
            <p className="mt-[5px] lg:mt-[2px] mb-[15px] lg:mb-[20px] font-normal lg:font-semibold 
            text-[10px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-gray900">
              {sual.answer}
            </p>
          </details>
        </div>
      ))}
    </div>
  </div>
);

export default Suallar;

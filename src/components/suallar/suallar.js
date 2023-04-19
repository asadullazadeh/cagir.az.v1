const Suallar = ({ suallar }) => (
  <div className="h-[258px]">
    <h2 className="mb-[15px] text-center h2-styles">Tez-tez verilən suallar</h2>

    <div className="absolute space-y-[17px]">
      {suallar?.slice(0, 3).map((sual) => (
        <div key={sual.id}>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between rounded-lg cursor-pointer">
              <h5 className="font-poppins h5-styles">{sual.question}</h5>
            </summary>
            <p className="mt-[2px] mb-[20px] font-poppins non-italic font-semibold text-[14px] leading-[21px] text-gray900 w-[1392px]">
              {sual.answer}
            </p>
          </details>
        </div>
      ))}
    </div>
  </div>
);

export default Suallar;

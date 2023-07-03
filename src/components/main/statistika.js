const Statistika = () => (
  <div>
    <h2 className="my-h2 pb-[30px] lg:pb-[60px] text-center">Statistika</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[15px] ">
      {/* 1st */}
      <div className="flex flex-col gap-y-0 lg:gap-y-[15px]">
        <h5 className="my-h5 text-gray900">Partnyor</h5>
        <h1 className="font-medium text-[40px] lg:text-[82px] leading-[80px] leading-[123px]">
          50+
        </h1>
      </div>
      {/* 2nd */}
      <div className="flex flex-col gap-y-0 lg:gap-y-[15px]">
        <h5 className="my-h5 text-gray900">İcraçı</h5>
        <h1 className="font-medium text-[40px] lg:text-[82px] leading-[80px] lg:leading-[123px]">
          100+
        </h1>
      </div>
      {/* 3rd */}
      <div className="flex flex-col gap-y-0 lg:gap-y-[15px]">
        <h5 className="my-h5 text-gray900">Xidmət</h5>
        <h1 className="font-medium text-[40px] lg:text-[82px] leading-[80px] lg:leading-[123px]">
          200+
        </h1>
      </div>
      {/* 4th */}
      <div className="flex flex-col gap-y-0 lg:gap-y-[15px]">
        <h5 className="my-h5 text-gray900">İstifadəçi</h5>
        <h1 className="font-medium text-[40px] lg:text-[82px] leading-[80px] lg:leading-[123px]">
          1000+
        </h1>
      </div>
    </div>
  </div>
);

export default Statistika;

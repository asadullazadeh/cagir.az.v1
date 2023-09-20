const StatsCard = ({ title, value }) => {
  const commonH1Classes = "font-medium text-[40px] lg:text-[82px] leading-[80px] lg:leading-[123px]";
  const commonH5Classes = "my-h5 text-gray900";
  const commonDivClasses = "flex flex-col gap-y-0 lg:gap-y-[15px] items-center lg:items-start";

  return (
    <div className={commonDivClasses}>
      <h5 className={commonH5Classes}>{title}</h5>
      <h1 className={commonH1Classes}>{value}</h1>
    </div>
  );
};

const Statistika = ({ messages }) => (
  <div>
    <h2 className="my-h2 pb-[30px] lg:pb-[60px] text-center">Statistika</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[15px]">
      <StatsCard title="Partnyor" value="50+" />
      <StatsCard title={messages.provider} value="100+" />
      <StatsCard title={messages.service} value="200+" />
      <StatsCard title="İstifadəçi" value="1000+" />
    </div>
  </div>
);

export default Statistika;

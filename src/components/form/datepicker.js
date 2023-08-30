import React, { useState } from "react";
import DatePicker from "react-datepicker";
import CalendarContainer from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import az from "date-fns/locale/az";
registerLocale("az", az);
import "react-datepicker/dist/react-datepicker.css";
import InputCustomized from "@/src/components/input/input";
import SifarishBtn from "@/src/components/buttons/sifarish_btn";
import PrimarySmBtn from "@/src/components/buttons/primary_sm_btn";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const MyContainer = ({ className, children }) => {
    return (
      <div class="rounded-full bg-[#3598EA]" style={{ padding: "16px", background: "#3598EA", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ background: "#3598EA" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };
  console.log(startDate);
  
  return (
    <DatePicker
      locale="az"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="dd/MM/yyyy"
      minDate={new Date()}
      // customInput={<input type="text" className="rounded-[20px]"  />}
      onCalendarClose={() => console.log("closed")}
      shouldCloseOnSelect={true}
      // eslint-disable-next-line react/no-children-prop
      // children={
      //   <div className=" ">
      //     <PrimarySmBtn btnName="Sıfırlamaq" classNames="bg-white text-[#3598EA] border-2 border-[#3598EA]"  />
      //     <PrimarySmBtn btnName="Təsdiqlə"  />
      //   </div>
      // }
      
      // clearButtonTitle
      // isClearable
      // excludeScrollbar={true}
      // clearButtonClassName="bg-black"
    />
  );
};

export default Calendar;

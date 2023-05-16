import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Textarea = () => {
    const [message, setMessage] = useState('');
    const maxLength = 140;
    
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setMessage(inputValue.slice(0, maxLength));
  };

  // Bagla button function
  const [showSecondChild, setShowSecondChild] = useState(true);

  const toggleSecondChild = () => {
    setShowSecondChild(!showSecondChild);
  };



  return (
      <div className={`${showSecondChild ? "block" : "hidden"}`}>
        <label htmlFor="message" className="block lg:pb-[5px] font-medium lg:font-semibold text-[8px] leading-[12px] 
        lg:leading-[15px] text-gray-900 lg:text-black500">
          {`${message.length}/${maxLength}`}
        </label>
        <textarea
          id="message"
          rows="3"
          className="resize-x block pt-[8px] lg:pt-[15px] px-[10px] lg:pr-[7px] lg:pl-[15px] pb-[20px] w-full lg:w-[300px] 
          font-semibold text-[10px] leading-[15px] 
          text-gray-900 bg-gray-50 outline-none
          rounded-lg border border-gray-300"
          placeholder="Write your thoughts here..."
          value={message}
          onChange={handleInputChange}
        ></textarea>
      </div>
  );
};

export default Textarea;





















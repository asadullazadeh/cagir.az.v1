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
  return (
    <div>
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
        {`${message.length}/${maxLength}`}
      </label>
      <textarea
        id="message"
        rows="3"
        className="block p-2.5 w-[300px] text-[10px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your thoughts here..."
        value={message}
        onChange={handleInputChange}
      ></textarea>
    </div>

  );
};

export default Textarea;





















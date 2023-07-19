// components/CustomDropdown.js

import { useState } from 'react';

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(option, "clicked");
  };

  return (
    <div className="custom-dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : 'Xidməti seç'}
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          <li onClick={() => handleOptionClick('Option 1')}>Option 1</li>
          <li onClick={() => handleOptionClick('Option 2')}>Option 2</li>
          <li onClick={() => handleOptionClick('Option 3')}>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;

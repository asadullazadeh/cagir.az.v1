import { useState } from 'react';

function RadioButton({ name,checked,handleChange, criteriaId }) {
  // console.log(updateObject());
  

  return (
    <div className="flex justify-between text-center item-center">
      <div>
        <input
          name="rating"
          type="radio"
          id={name}
          value={name}
          className="hidden peer"
          checked={checked}
          onChange={() => handleChange(name, criteriaId)}
        />
        <label
          htmlFor={name}
          className="inline-flex items-center font-medium lg:font-semibold 
                  text-[12px] lg:text-[10px] leading-[18px] lg:leading-[15px] 
                  justify-between py-[7px] px-[10px] lg:py-[12px] lg:px-[15px]
                   text-black500 border-[1px] border-gray900 rounded-[10px]
                    lg:rounded-full cursor-pointer peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-none"
        >
          {name}
        </label>
      </div>
    </div>
  );
}
export default RadioButton;
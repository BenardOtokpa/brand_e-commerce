import React from "react";

const DropDown = ({ value, onChange, options }) => {
    
  return (
    <select
      value={value}
      onChange={onChange}
      
    >
      {options.map((option) => (
        <option key={option} value={option} className="text-gray-500">
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropDown;

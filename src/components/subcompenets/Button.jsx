import React from 'react'


const Button = ({ text, onClick, isBlue, className }) => {
  return (
    <button
      className={`px-[15px] py-1 rounded-[5px] text-white ${className} ${isBlue ? 'bg-[#007bff] hover:bg-[#0058B3]' : 'bg-orangeCol hover:bg-[#e04800]'}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

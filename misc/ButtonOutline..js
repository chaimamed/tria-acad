import React from "react";

const ButtonOutline = ({ children, onClick }) => {
  return (
    <button 
    onClick={onClick} 
    className="relative font-semibold tracking-wide py-2 px-6 sm:px-8 rounded-full border-2 border-[#ecdcc0] text-[#6fb799] bg-white transition-all duration-300 ease-in-out overflow-hidden group shadow-sm hover:shadow-lg"
    >
      
      {/* خلفية متحركة عند hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#f4f6be] via-[#bafab7] to-[#efe991] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>

      {/* نص الزر فوق الخلفية */}
      <span className="relative z-10 group-hover:text-white">{children}</span>
    </button>
  );
};

export default ButtonOutline;

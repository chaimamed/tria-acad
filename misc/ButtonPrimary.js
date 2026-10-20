import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
  className={
    "relative inline-block px-6 lg:px-16 py-3 lg:py-4 font-bold text-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:scale-105 " +
    addClass
  }
  onClick={(e) => {
    e.preventDefault();
    // أي منطق آخر هنا
  }}
>
  {/* الخلفية المتحركة */}
  <span className="absolute inset-0 bg-gradient-to-r from-[#709980] via-[#6ebba5] to-[#a3c1b6] animate-gradientMove bg-[length:200%_200%]"></span>

  {/* طبقة داكنة خفيفة لزيادة التباين */}
  <span className="absolute inset-0 bg-black bg-opacity-10 mix-blend-overlay"></span>

  {/* النص فوق كلشي */}
  <span className="relative z-10 text-xl flex items-center gap-2">
  {children}
</span>

</button>

  );
};

export default ButtonPrimary;

"use strict";
exports.__esModule = true;
function WorkButton() {
    return (React.createElement("button", { className: "group relative overflow-hidden rounded-full px-10 py-4 text-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-[#f3914c] to-[#c2b3d1] shadow-xl hover:scale-105 hover:shadow-2xl" },
        React.createElement("span", { className: "absolute inset-0 z-0 rounded-full bg-gradient-to-r from-white/20 to-purple-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-pulse" }),
        React.createElement("span", { className: "absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform bg-white/20 transition-all duration-500 ease-out group-hover:translate-y-12 rounded-full" }),
        React.createElement("span", { className: "relative z-10 font-bold text-[#000] bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-400 drop-shadow-md text-2xl" }, "Explore Courses \u2192")));
}
exports["default"] = WorkButton;

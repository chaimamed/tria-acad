import React from "react";
import { Link as LinkScroll } from "react-scroll";

const BrandMark = ({ light = false }) => {
  return (
    <LinkScroll
      to="about"
      spy={true}
      smooth={true}
      duration={800}
      offset={-90}
      className="flex cursor-pointer items-center gap-2"
      aria-label="أكاديمية TRIA"
    >
      <span className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        <span className={light ? "text-white" : "tria-brand-name"}>TRIA</span>
        <span className={`mx-1 ${light ? "text-white/30" : "text-[#E3EAF8]"}`}>|</span>
        <span className={light ? "text-[#9DB4FF]" : "text-[#315CF5]"}>
          Academy
        </span>
      </span>
    </LinkScroll>
  );
};

export default BrandMark;

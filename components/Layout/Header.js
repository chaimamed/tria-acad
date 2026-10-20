import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import BrandMark from "../BrandMark";

const desktopLinks = [
  { id: "about", label: "الرئيسية" },
  { id: "services", label: "الدورات" },
  { id: "digital", label: "المهارات الرقمية" },
  { id: "about-academy", label: "عن الأكاديمية" },
  { id: "enroll", label: "التسجيل" },
 
];

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkFromStorage = localStorage.getItem("theme") === "dark";
    setIsDark(darkFromStorage);
    document.documentElement.classList.toggle("dark", darkFromStorage);
  }, []);
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const toggleTheme = () => {
    const nextDark = !isDark;
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    setIsDark(nextDark);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "tria-header fixed top-0 w-full z-50 transition-all" +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 border-b px-6 py-3 sm:px-8 lg:px-16">
          <BrandMark />

          <ul className="hidden items-center lg:flex">
            {desktopLinks.map((link) => (
              <li key={link.id}>
                <LinkScroll
                  activeClass="active"
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-88}
                  duration={800}
                  onSetActive={() => {
                    setActiveLink(link.id);
                  }}
                  className={
                    "tria-nav-link mx-1 inline-block cursor-pointer px-3 py-2 text-base font-semibold transition-colors" +
                    (activeLink === link.id ? " is-active" : "")
                  }
                >
                  {link.label}
                </LinkScroll>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-3">
            <button
              onClick={toggleTheme}
              className="tria-theme-btn"
              aria-label={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
            >
              {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
            </button>

            <LinkScroll
              to="enroll"
              smooth
              duration={800}
              offset={-88}
              className="tria-btn tria-btn-primary cursor-pointer px-5 py-2 text-sm sm:px-6"
            >
              سجّل في دورة
            </LinkScroll>
          </div>
        </nav>
      </header>
                
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
             
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center  text-xs border-t-2 transition-all cursor-pointer " +
                (activeLink === "about"
                  ? "  border-[#e76e3e] text-[#e76e3e]"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all cursor-pointer " +
                (activeLink === "feature"
                  ? "  border-[#e76e3e] text-[#e76e3e]"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Features
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all cursor-pointer " +
                (activeLink === "services"
                  ? "  border-[#e76e3e] text-[#e76e3e]"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Services
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("events");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all cursor-pointer " +
                (activeLink === "events"
                  ? "  border-[#e76e3e] text-[#e76e3e]"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
               Events
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("contact");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all cursor-pointer " +
                (activeLink === "contact"
                  ? "  border-[#e76e3e] text-[#e76e3e]"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            Contact
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;


import React, { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineHome,
  HiOutlineBookOpen,
  HiOutlineDesktopComputer,
  HiOutlineAcademicCap,
  HiOutlineUserAdd,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import BrandMark from "../BrandMark";

const desktopLinks = [
  { id: "about", label: "الرئيسية", icon: HiOutlineHome },
  { id: "services", label: "الدورات", icon: HiOutlineBookOpen },
  {
    id: "digital",
    label: "المهارات الرقمية",
    icon: HiOutlineDesktopComputer,
  },
  {
    id: "about-Online",
    label: "عن الأكاديمية",
    icon: HiOutlineAcademicCap,
  },
];

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  const [activeLink, setActiveLink] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize theme from localStorage.
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const dark = savedTheme ? savedTheme === "dark" : prefersDark;

      setIsDark(dark);
      document.documentElement.classList.toggle("dark", dark);
    } catch {
      setIsDark(false);
    }
  }, []);

  // Apply theme and save preference.
  const toggleTheme = () => {
    const nextDark = !isDark;

    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);

    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {
      // Theme still works if storage is unavailable.
    }
  };

  // Track scrolling and compact the header when needed.
  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile navigation when pressing Escape.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
  };

  const scrollProps = {
    smooth: true,
    duration: 650,
    offset: -90,
  };

  return (
    <>
      {/* Main Header */}
      <header
        dir="rtl"
        className={[
          "tria-header fixed inset-x-0 top-0 z-50",
          "transition-all duration-300 ease-out",
          scrollActive ? "is-scrolled" : "",
        ].join(" ")}
      >
        <div className="tria-header-shell mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10">
          <nav
            aria-label="التنقل الرئيسي"
            className={[
              "tria-navbar relative flex items-center justify-between gap-4",
              "transition-all duration-300",
              scrollActive ? "py-2" : "py-4",
            ].join(" ")}
          >
            {/* Brand */}
            <div
              className="tria-brand shrink-0"
              onClick={() => handleLinkClick("about")}
            >
              <BrandMark />
            </div>

            {/* Desktop Navigation */}
            <ul className="tria-desktop-nav hidden items-center gap-1 lg:flex">
              {desktopLinks.map((link) => {
                const isActive = activeLink === link.id;

                return (
                  <li key={link.id} className="relative">
                    <LinkScroll
                      {...scrollProps}
                      to={link.id}
                      spy
                      activeClass="active"
                      onSetActive={() => setActiveLink(link.id)}
                      className={[
                        "tria-nav-link relative flex cursor-pointer",
                        "items-center justify-center gap-2",
                        "whitespace-nowrap rounded-2xl px-4 py-2.5",
                        "text-sm font-semibold",
                        isActive ? "is-active" : "",
                      ].join(" ")}
                    >
                      {link.label}

                      {isActive && (
                        <motion.span
                          layoutId="tria-active-indicator"
                          className="tria-active-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </LinkScroll>
                  </li>
                );
              })}
            </ul>

            {/* Header Actions */}
            <div className="tria-header-actions flex shrink-0 items-center gap-2 sm:gap-3">
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="tria-icon-btn"
                aria-label={
                  isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"
                }
                title={isDark ? "الوضع الفاتح" : "الوضع الداكن"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isDark ? "sun" : "moon"}
                    initial={{ opacity: 0, rotate: -35, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 35, scale: 0.7 }}
                    transition={{ duration: 0.18 }}
                    className="flex items-center justify-center"
                  >
                    {isDark ? (
                      <HiOutlineSun size={21} />
                    ) : (
                      <HiOutlineMoon size={21} />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>

              {/* Desktop Registration CTA */}
              <LinkScroll
                {...scrollProps}
                to="enroll"
                onClick={() => handleLinkClick("enroll")}
                className="tria-register-btn hidden cursor-pointer items-center justify-center gap-2 sm:inline-flex"
              >
                <HiOutlineUserAdd size={19} />
                <span>سجّل الآن</span>
              </LinkScroll>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                className="tria-icon-btn tria-mobile-toggle lg:hidden"
                onClick={() => setMobileMenuOpen((previous) => !previous)}
                aria-label={
                  mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"
                }
                aria-expanded={mobileMenuOpen}
                aria-controls="tria-mobile-menu"
              >
                {mobileMenuOpen ? (
                  <HiOutlineX size={23} />
                ) : (
                  <HiOutlineMenuAlt3 size={23} />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                id="tria-mobile-menu"
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="tria-mobile-menu lg:hidden"
              >
                <div className="flex flex-col gap-1 p-3">
                  {desktopLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = activeLink === link.id;

                    return (
                      <LinkScroll
                        key={link.id}
                        {...scrollProps}
                        to={link.id}
                        spy
                        onSetActive={() => setActiveLink(link.id)}
                        onClick={() => handleLinkClick(link.id)}
                        className={[
                          "tria-mobile-link flex cursor-pointer",
                          "items-center gap-3 rounded-xl px-4 py-3.5",
                          "text-sm font-semibold transition-all",
                          isActive ? "is-active" : "",
                        ].join(" ")}
                      >
                        <Icon size={21} />
                        <span>{link.label}</span>
                      </LinkScroll>
                    );
                  })}

                  <LinkScroll
                    {...scrollProps}
                    to="enroll"
                    onClick={() => handleLinkClick("enroll")}
                    className="tria-register-btn mt-2 flex w-full cursor-pointer items-center justify-center gap-2"
                  >
                    <HiOutlineUserAdd size={20} />
                    <span>سجّل في دورة الآن</span>
                  </LinkScroll>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav
        dir="rtl"
        aria-label="التنقل السريع"
        className="tria-bottom-nav fixed inset-x-0 bottom-0 z-40 lg:hidden"
      >
        <div className="mx-auto flex max-w-lg items-stretch justify-around px-2">
          {[
            {
              id: "about",
              label: "الرئيسية",
              icon: HiOutlineHome,
            },
            {
              id: "services",
              label: "الدورات",
              icon: HiOutlineBookOpen,
            },
            {
              id: "digital",
              label: "المهارات",
              icon: HiOutlineDesktopComputer,
            },
            {
              id: "about-Online",
              label: "الأكاديمية",
              icon: HiOutlineAcademicCap,
            },
            {
              id: "enroll",
              label: "التسجيل",
              icon: HiOutlineUserAdd,
            },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeLink === item.id;

            return (
              <LinkScroll
                key={item.id}
                {...scrollProps}
                to={item.id}
                spy
                onSetActive={() => setActiveLink(item.id)}
                onClick={() => handleLinkClick(item.id)}
                className={[
                  "tria-bottom-link relative flex min-w-0 flex-1",
                  "cursor-pointer flex-col items-center justify-center",
                  "gap-1 px-1 py-2.5 text-center",
                  isActive ? "is-active" : "",
                ].join(" ")}
              >
                <Icon size={21} strokeWidth={1.8} />
                <span className="text-[10px] font-semibold sm:text-xs">
                  {item.label}
                </span>
              </LinkScroll>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Header;

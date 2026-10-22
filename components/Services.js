"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  FlaskConical,
  Atom,
  BookOpen,
  GraduationCap,
  Languages,
  Code2,
  Palette,
  Clapperboard,
  Users,
  Check,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { Link as LinkScroll } from "react-scroll";
import { categories, courses } from "./courses";

const icons = {
  calculator: Calculator,
  flask: FlaskConical,
  atom: Atom,
  book: BookOpen,
  graduation: GraduationCap,
  languages: Languages,
  code: Code2,
  palette: Palette,
  video: Clapperboard,
};

// Displayed price = original price x PRICE_FACTOR (0.5 = half price).
// Set to 1 to show the original prices from courses.js.
const PRICE_FACTOR = 0.5;

const formatPrice = (n) =>
  `${Math.round(n * PRICE_FACTOR).toLocaleString("en-US")} دج`;

// One color tone per category (light + dark friendly)
const tones = {
  primary: {
    tile: "bg-[#EAF0FF] text-[#315CF5] dark:bg-[#315CF5]/20 dark:text-[#8ea6ff]",
    badge: "bg-[#EAF0FF] text-[#315CF5] dark:bg-[#315CF5]/20 dark:text-[#8ea6ff]",
    bar: "from-[#315CF5] to-[#6d8cff]",
    glow: "bg-[#315CF5]",
  },
  middle: {
    tile: "bg-[#F3EEFF] text-[#8050F6] dark:bg-[#8050F6]/20 dark:text-[#b69bff]",
    badge: "bg-[#F3EEFF] text-[#8050F6] dark:bg-[#8050F6]/20 dark:text-[#b69bff]",
    bar: "from-[#8050F6] to-[#b69bff]",
    glow: "bg-[#8050F6]",
  },
  secondary: {
    tile: "bg-[#E8F7F3] text-[#0D9488] dark:bg-[#14B8A6]/20 dark:text-[#5eead4]",
    badge: "bg-[#E8F7F3] text-[#0D9488] dark:bg-[#14B8A6]/20 dark:text-[#5eead4]",
    bar: "from-[#0D9488] to-[#5eead4]",
    glow: "bg-[#14B8A6]",
  },
  languages: {
    tile: "bg-[#FFF3E6] text-[#EA7A12] dark:bg-[#F59E0B]/20 dark:text-[#fbbf6b]",
    badge: "bg-[#FFF3E6] text-[#EA7A12] dark:bg-[#F59E0B]/20 dark:text-[#fbbf6b]",
    bar: "from-[#EA7A12] to-[#fbbf6b]",
    glow: "bg-[#F59E0B]",
  },
  digital: {
    tile: "bg-[#FDECF4] text-[#DB2777] dark:bg-[#EC4899]/20 dark:text-[#f9a8d4]",
    badge: "bg-[#FDECF4] text-[#DB2777] dark:bg-[#EC4899]/20 dark:text-[#f9a8d4]",
    bar: "from-[#DB2777] to-[#f9a8d4]",
    glow: "bg-[#EC4899]",
  },
};

const CourseCard = ({ course, onSelectCourse }) => {
  const Icon = icons[course.icon] || BookOpen;
  const tone = tones[course.category] || tones.primary;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="tria-card group relative flex flex-col overflow-hidden text-start"
    >
      {/* top color bar */}
      <div className={`h-1.5 bg-gradient-to-l ${tone.bar}`} />

      {/* soft corner glow */}
      <div
        className={`pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25 ${tone.glow}`}
      />

      <div className="relative flex flex-1 flex-col p-6">
        {/* icon + level badge */}
        <div className="mb-5 flex items-start justify-between gap-3">
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${tone.tile}`}
          >
            <Icon size={26} aria-hidden="true" />
          </span>
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${tone.badge}`}>
            {course.meta}
          </span>
        </div>

        {/* titles */}
        <h4 className="text-xl font-extrabold leading-snug text-[#14285C]">{course.ar}</h4>
        <p className="mt-1 text-sm font-semibold text-[#64748B] dark:text-[#9aa6c5]">
          {course.title}
        </p>
        <p className="mt-3 text-sm leading-relaxed">{course.description}</p>

        {/* points */}
        <ul className="mt-5 space-y-2.5 text-sm text-[#172554] dark:text-[#d7e0f7]">
          {course.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10B981]/15 text-[#10B981]">
                <Check size={13} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        {/* format chip */}
        <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-[#F2F6FF] px-3 py-2 text-xs font-semibold text-[#475569] dark:bg-[#1c2748] dark:text-[#c3cff0]">
          <Users size={14} aria-hidden="true" />
          {course.format}
        </div>

        {/* price + CTA */}
        <div className="mt-auto pt-6">
          <div className="rounded-2xl border border-[#E3EAF8] bg-[#FAFBFF] p-4 dark:border-[#2a365c] dark:bg-[#0f1730]">
            <div className="mb-4 flex items-end justify-between gap-2">
              <div>
                <span className="block text-xs font-semibold text-[#64748B] dark:text-[#9aa6c5]">
                  الاشتراك الشهري
                </span>
                <span className="mt-1 block text-3xl font-extrabold leading-none text-[#14285C]">
                  {formatPrice(course.price)}
                </span>
              </div>
              <span className="mb-1 text-sm font-semibold text-[#64748B] dark:text-[#9aa6c5]">
                / شهر
              </span>
            </div>

            <LinkScroll
              to="enroll"
              smooth
              duration={800}
              offset={-88}
              onClick={() => onSelectCourse && onSelectCourse(course.id)}
              className="tria-btn tria-btn-primary w-full cursor-pointer text-sm"
            >
              سجّل في الدورة
              <ArrowLeft
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </LinkScroll>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Services = ({ activeCategory, onSelectCourse }) => {
  const [active, setActive] = useState(categories[0].id);

  useEffect(() => {
    if (activeCategory && categories.some((c) => c.id === activeCategory)) {
      setActive(activeCategory);
    }
  }, [activeCategory]);

  const current = categories.find((c) => c.id === active) || categories[0];
  const list = courses.filter((c) => c.category === active);

  return (
    <section id="services" className="tria-section tria-surface relative overflow-hidden">
      <div className="tria-orb pointer-events-none -right-10 top-10 h-48 w-48 bg-[#315CF5] opacity-20" />

      <div className="relative mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-16">
        {/* heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="tria-kicker justify-center">
            <Sparkles size={16} aria-hidden="true" />
            الدورات
          </p>
          <h3 className="tria-title">دورات مختارة من أجلك</h3>
          <p>اكتشف الدورات المتاحة وابدأ بتطوير مستواك ومهاراتك.</p>
        </div>

        {/* tabs */}
        <div
          role="tablist"
          aria-label="تصنيفات الدورات"
          className="no-scrollbar mb-4 flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible"
        >
          {categories.map((c) => {
            const selected = c.id === active;
            const count = courses.filter((x) => x.category === c.id).length;
            return (
              <button
                key={c.id}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={selected}
                aria-controls="courses-panel"
                onClick={() => setActive(c.id)}
                className={`relative shrink-0 rounded-full border px-5 py-2.5 text-start transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315CF5] ${
                  selected
                    ? "border-transparent text-white"
                    : "tria-btn-secondary hover:border-[#315CF5]"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="services-tab-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-l from-[#315CF5] to-[#8050F6] shadow-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>
                    <span className="block text-sm font-bold leading-tight">{c.ar}</span>
                    <span className="block text-xs leading-tight opacity-80">{c.label}</span>
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                      selected
                        ? "bg-white/25 text-white"
                        : "bg-[#EAF0FF] text-[#315CF5] dark:bg-[#315CF5]/20 dark:text-[#8ea6ff]"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <p className="mb-10 text-center text-sm font-semibold text-[#64748B] dark:text-[#9aa6c5]">
          {current.hint}
        </p>

        {/* cards */}
        <div
          id="courses-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {list.length > 0 ? (
              list.map((course) => (
                <CourseCard key={course.id} course={course} onSelectCourse={onSelectCourse} />
              ))
            ) : (
              <div className="tria-card col-span-full p-10 text-center">
                <p className="text-lg font-semibold text-[#14285C]">
                  نعمل على توفير محتوى تعليمي مميز لك.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
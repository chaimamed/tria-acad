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

const formatPrice = (n) => `${n.toLocaleString("en-US")} دج`;

const CourseCard = ({ course, onSelectCourse }) => {
  const Icon = icons[course.icon] || BookOpen;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="tria-card flex flex-col overflow-hidden text-start"
    >
      <div className="h-1.5 bg-gradient-to-l from-[#315CF5] to-[#8050F6]" />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2F6FF] text-[#315CF5]">
            <Icon size={24} aria-hidden="true" />
          </span>
          <span className="rounded-full bg-[#F6F1FF] px-3 py-1 text-xs font-semibold text-[#8050F6]">
            {course.meta}
          </span>
        </div>

        <h4 className="text-xl font-bold text-[#14285C]">{course.ar}</h4>
        <p className="mt-1 text-sm font-semibold text-[#64748B]">{course.title}</p>
        <p className="mt-3 text-sm leading-relaxed">{course.description}</p>

        <ul className="mt-4 space-y-2 text-sm text-[#172554]">
          {course.points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <Check size={16} className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>

        <p className="mt-4 flex items-center gap-2 text-xs text-[#64748B]">
          <Users size={14} aria-hidden="true" /> {course.format}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[#E3EAF8] pt-5">
          <p className="text-[#14285C]">
            <span className="text-2xl font-bold">{formatPrice(course.price)}</span>
            <span className="text-sm text-[#64748B]"> / شهر</span>
          </p>
          <LinkScroll
            to="enroll"
            smooth
            duration={800}
            offset={-88}
            onClick={() => onSelectCourse && onSelectCourse(course.id)}
            className="tria-btn tria-btn-primary cursor-pointer px-5 py-2 text-sm"
          >
            سجّل في الدورة
          </LinkScroll>
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
    <section id="services" className="tria-section tria-surface">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h3 className="tria-title">دورات مختارة من أجلك</h3>
          <p>
            اكتشف الدورات المتاحة وابدأ بتطوير مستواك ومهاراتك.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="تصنيفات الدورات"
          className="mb-3 flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center"
        >
          {categories.map((c) => {
            const selected = c.id === active;
            return (
              <button
                key={c.id}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={selected}
                aria-controls="courses-panel"
                onClick={() => setActive(c.id)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-start transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315CF5] ${
                  selected
                    ? "border-[#315CF5] bg-[#315CF5] text-white shadow-md"
                    : "tria-btn-secondary hover:border-[#315CF5]"
                }`}
              >
                <span className="block text-sm font-semibold leading-tight">{c.ar}</span>
                <span className="block text-xs leading-tight opacity-90">{c.label}</span>
              </button>
            );
          })}
        </div>

        <p className="mb-8 text-center text-sm text-[#64748B]">{current.hint}</p>

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

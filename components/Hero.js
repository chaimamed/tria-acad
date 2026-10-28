import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Video, BookOpen, Code2, ArrowLeft, PlayCircle } from "lucide-react";
import { categories, courses } from "./courses";

// "left"  -> image on the left  (text on the right, RTL default)
// "right" -> image on the right
const IMAGE_SIDE = "left";

const chips = ["دعم مدرسي", "برمجة", "لغات", "مهارات رقمية"];

const stats = [
  { value: `${courses.length}+`, label: "دورة متاحة" },
  { value: `${categories.length}`, label: "مجالات تعلّم" },
  { value: "100%", label: "أونلاين" },
];

const Hero = () => {
  const imageFirst = IMAGE_SIDE === "right";

  return (
    <section id="about" className="tria-section relative overflow-hidden pt-28 sm:pt-32">
      {/* Background decoration */}
      <div className="tria-orb pointer-events-none -top-16 right-0 h-56 w-56 bg-[#8050F6]" />
      <div
        className="tria-orb pointer-events-none bottom-0 left-0 h-64 w-64 bg-[#315CF5]"
        style={{ animationDelay: "1.4s" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(#c9d6f5 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(to bottom, black 30%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 90%)",
        }}
      />

      <div className="relative mx-auto grid max-w-screen-xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-16">
        {/* ---------- Text ---------- */}
        <motion.div
          className={imageFirst ? "lg:order-2" : "lg:order-1"}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="tria-kicker r bg-white  p backdrop-blur dark:border-[#2a365c] dark:bg-[#141c34]/80">
           
          </p>

          <h1 className="mb-5 text-4xl font-extrabold leading-[1.35] sm:text-5xl lg:text-[3.4rem]">
            دروس دعم مدرسي أونلاين،
            <br />
            وتعلّم <span className="tria-gradient-text">المهارات الرقمية</span>
          </h1>

          <p className="mb-6 max-w-xl text-base sm:text-lg">
            دروس دعم مدرسي ومهارات رقمية، تُقدَّم مباشرةً أونلاين في مجموعات صغيرة
            ومحتوى منظّم يساعدك على التقدّم بثقة وفق مستواك وأهدافك.
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="tria-btn-secondary rounded-full px-3.5 py-1 text-xs font-semibold"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            <a
              href="#enroll"
              className="tria-btn tria-btn-primary cursor-pointer px-7"
            >
              سجّل في دورة
              <ArrowLeft size={18} aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="tria-btn tria-btn-secondary cursor-pointer px-7"
            >
              <PlayCircle size={18} aria-hidden="true" />
              اكتشف الدورات
            </a>
          </div>

          <dl className="grid max-w-md grid-cols-3 gap-4 border-t border-[#E3EAF8] pt-6 dark:border-[#2a365c]">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-[#14285C] sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-[#64748B] sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* ---------- Image ---------- */}
      
      {/* ---------- Image ---------- */}
      <motion.div
        className={`relative m-0 w-full max-w-xl ${
          imageFirst ? "lg:order-1" : "lg:order-2"
        }`}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {/* Soft background glow — no border */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 scale-90 rounded-full bg-gradient-to-br from-[#8050F6]/20 via-[#315CF5]/15 to-transparent blur-3xl"
          aria-hidden="true"
        />

        {/* Borderless image container */}
      
<div className="relative isolate w-full border-0 bg-transparent shadow-none outline-none">
  <img
    src="/assets/tria-hero.png"
    alt="طالب يتعلّم أونلاين مع أكاديمية TRIA"
    width={720}
    height={640}
    className="block h-auto w-full rounded-none border-0 bg-transparent object-contain shadow-none outline-none ring-0"
    style={{
      background: "transparent",
      boxShadow: "none",
      border: "none",
      outline: "none",
    }}
  />
</div>


        {/* Floating badge: live classes */}
        <div className="tria-float tria-card absolute -top-5 right-4 flex items-center gap-2 px-4 py-2.5 sm:-right-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F2F6FF] text-[#315CF5]">
            <Video size={18} aria-hidden="true" />
          </span>
          <div>
            <p className="!leading-tight text-sm font-bold !text-[#14285C]">
              حصص مباشرة
            </p>
            <p className="!leading-tight text-xs">مجموعات صغيرة</p>
          </div>
        </div>

        {/* Floating badge: programming */}
        <div
          className="tria-float tria-card absolute -bottom-5 left-4 flex items-center gap-2 px-4 py-2.5 sm:-left-6"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F6F1FF] text-[#8050F6]">
            <Code2 size={18} aria-hidden="true" />
          </span>
          <div>
            <p className="!leading-tight text-sm font-bold !text-[#14285C]">
              برمجة وويب
            </p>
            <p className="!leading-tight text-xs">مشاريع حقيقية</p>
          </div>
        </div>

        {/* Floating badge: school support */}
        <div
          className="tria-float tria-card absolute -left-2 top-1/3 hidden items-center gap-2 px-3 py-2 sm:flex lg:-left-8"
          style={{ animationDelay: "1.6s" }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F2F6FF] text-[#315CF5]">
            <BookOpen size={16} aria-hidden="true" />
          </span>
          <p className="text-sm font-bold !text-[#14285C]">
            دعم مدرسي
          </p>
        </div>
      </motion.div>

      </div>
    </section>
  );
};

export default Hero;
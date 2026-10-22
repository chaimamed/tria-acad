import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarClock,
  ListChecks,
  Briefcase,
  MousePointerClick,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { Link as LinkScroll } from "react-scroll";

const ROTATE_MS = 5000;

const items = [
  {
    icon: CalendarClock,
    title: "تعلّم بمرونة",
    text: "دروس أونلاين تساعدك على التقدّم وفق وقتك.",
    details: [
      "حصص مباشرة من البيت بدون تنقّل",
      "من حصة إلى 3 حصص في الأسبوع حسب الدورة",
      "تسجيلات للمراجعة في دورات الثانوي",
    ],
    accent: "from-[#315CF5] to-[#6d8cff]",
  },
  {
    icon: ListChecks,
    title: "محتوى واضح ومنظّم",
    text: "مسارات تعليمية مرتّبة حسب المستوى والهدف.",
    details: [
      "الابتدائي، المتوسط، الثانوي",
      "لغات للصغار ومهارات رقمية",
      "اختبارات وتصحيح مع الأستاذ",
    ],
    accent: "from-[#8050F6] to-[#b69bff]",
  },
  {
    icon: Briefcase,
    title: "مهارات عملية",
    text: "معارف يمكن توظيفها في الدراسة والمهام اليومية.",
    details: [
      "بناء تطبيق أو موقع حقيقي",
      "تصميم 5 أعمال كاملة بكانفا",
      "مونتاج فيديو قصير من البداية للنهاية",
    ],
    accent: "from-[#0D9488] to-[#5eead4]",
  },
  {
    icon: MousePointerClick,
    title: "تجربة استخدام سهلة",
    text: "واجهة بسيطة تساعدك على اكتشاف المحتوى بسرعة.",
    details: [
      "اختر الدورة من القائمة",
      "املأ بياناتك في دقيقة واحدة",
      "نتواصل معك لاستكمال التسجيل",
    ],
    accent: "from-[#EA7A12] to-[#fbbf6b]",
  },
];

const WhyChoose = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setTimeout(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, ROTATE_MS);
    return () => clearTimeout(id);
  }, [active, paused]);

  const current = items[active];
  const CurrentIcon = current.icon;

  return (
    <section className="tria-section relative overflow-hidden">
      <div className="tria-orb pointer-events-none -left-10 top-20 h-52 w-52 bg-[#8050F6] opacity-20" />

      <div className="relative mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-16">
        {/* heading */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="tria-kicker justify-center">
            <ShieldCheck size={16} aria-hidden="true" />
            أسباب تدفعك للثقة بنا
          </p>
          <h2 className="tria-title">لماذا تختار أكاديمية TRIA؟</h2>
          <p>أربعة أسباب بسيطة تجعل رحلة التعلّم أوضح وأسهل.</p>
        </motion.div>

        <div
          className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* ---------- list ---------- */}
          <div className="flex flex-col gap-3" role="tablist" aria-label="أسباب اختيار الأكاديمية">
            {items.map((item, index) => {
              const Icon = item.icon;
              const selected = index === active;
              return (
                <motion.button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(index)}
                  onFocus={() => setPaused(true)}
                  onBlur={() => setPaused(false)}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-5 text-start transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315CF5] ${
                    selected
                      ? "border-[#315CF5] bg-white shadow-[0_18px_40px_-24px_rgba(49,92,245,0.6)] dark:bg-[#141c34]"
                      : "border-[#E3EAF8] bg-white/60 hover:border-[#c9d6f5] dark:border-[#2a365c] dark:bg-[#141c34]/60"
                  }`}
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition ${
                      selected
                        ? `bg-gradient-to-br ${item.accent} text-white shadow-lg`
                        : "bg-[#F2F6FF] text-[#315CF5] dark:bg-[#1c2748] dark:text-[#8ea6ff]"
                    }`}
                  >
                    <Icon size={24} aria-hidden="true" />
                  </span>

                  <span className="flex-1">
                    <span className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-extrabold text-[#315CF5] dark:text-[#8ea6ff]">
                        0{index + 1}
                      </span>
                      <span className="text-lg font-bold text-[#14285C]">{item.title}</span>
                    </span>
                    <span className="block text-sm leading-relaxed text-[#64748B] dark:text-[#9aa6c5]">
                      {item.text}
                    </span>
                  </span>

                  {/* progress bar for the active item */}
                  {selected && (
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-[#E3EAF8] dark:bg-[#2a365c]">
                      <motion.span
                        key={`${active}-${paused}`}
                        className={`block h-full bg-gradient-to-l ${item.accent}`}
                        initial={{ width: paused ? "100%" : "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: paused ? 0 : ROTATE_MS / 1000,
                          ease: "linear",
                        }}
                      />
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* ---------- showcase panel ---------- */}
          <div
            role="tabpanel"
            aria-live="polite"
            className="relative overflow-hidden rounded-[2rem] bg-[#101D49] p-7 text-white sm:p-10"
          >
            <div
              className={`pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${current.accent} opacity-40 blur-3xl transition-all duration-700`}
            />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-[#8050F6] opacity-20 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="relative flex h-full flex-col"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <span
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${current.accent} text-white shadow-xl`}
                >
                  <CurrentIcon size={30} aria-hidden="true" />
                </span>

                <h3 className="mb-2 text-2xl font-extrabold !text-white sm:text-3xl">
                  {current.title}
                </h3>
                <p className="mb-6 !text-white/75">{current.text}</p>

                <ul className="mb-8 space-y-3">
                  {current.details.map((d, i) => (
                    <motion.li
                      key={d}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + i * 0.1 }}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#34d399]"
                        aria-hidden="true"
                      />
                      {d}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                  <LinkScroll
                    to="services"
                    smooth
                    duration={800}
                    offset={-88}
                    className="tria-btn cursor-pointer bg-white px-6 text-[#14285C] hover:bg-[#F2F6FF]"
                  >
                    تصفّح الدورات
                    <ArrowLeft size={18} aria-hidden="true" />
                  </LinkScroll>

                  {/* dots */}
                  <div className="flex items-center gap-2" aria-hidden="true">
                    {items.map((_, i) => (
                      <span
                        key={i}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === active ? "w-8 bg-white" : "w-2 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
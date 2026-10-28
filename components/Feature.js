import React from "react";
import { motion } from "framer-motion";
import {
  Clock3,
  Layers,
  Sparkles,
  LifeBuoy,
  CheckCircle2,
  Video,
  FileText,
  Repeat,
  MessageCircleHeart,
  ArrowLeft,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "تعلّم بمرونة",
    description: "اختر الوقت والمكان المناسبين لك، وتعلّم من البيت بكل راحة.",
    proof: "حصص مباشرة أونلاين",
    tone: "blue",
  },
  {
    icon: Layers,
    title: "محتوى منظّم",
    description: "تدرّج في التعلّم خطوة بخطوة وفق مستواك وأهدافك.",
    proof: "مسارات حسب المستوى",
    tone: "purple",
  },
  {
    icon: Sparkles,
    title: "تطوير المهارات",
    description: "اكتسب معارف ومهارات عملية تفيدك في الدراسة وفي حياتك اليومية.",
    proof: "مشاريع وتمارين تطبيقية",
    tone: "blue",
  },
  {
    icon: LifeBuoy,
    title: "دعم تعليمي",
    description: "لست وحدك، فهناك من يتابعك ويجيب عن أسئلتك أثناء رحلتك.",
    proof: "متابعة وتصحيح مستمر",
    tone: "purple",
  },
];

const reassurance = [
  { icon: Video, text: "حصص مباشرة في مجموعات صغيرة" },
  { icon: Repeat, text: "تسجيلات لإعادة المراجعة (الثانوي)" },
  { icon: FileText, text: "اختبارات تجريبية وتصحيح مع الأستاذ" },
  { icon: MessageCircleHeart, text: "تقرير تقدّم شهري للأولياء (الابتدائي)" },
];

const tones = {
  blue: "bg-[#F2F6FF] text-[#315CF5]",
  purple: "bg-[#F6F1FF] text-[#8050F6]",
};

export default function Feature() {
  return (
    <section id="feature" className="tria-section tria-surface relative overflow-hidden">
      {/* soft background glow */}
      <div className="tria-orb pointer-events-none -top-10 left-1/2 h-48 w-48 -translate-x-1/2 bg-[#8050F6] opacity-20" />

      <div className="relative mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-16">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="tria-kicker justify-center">
            <Sparkles size={16} aria-hidden="true" />
            لماذا يرتاح المتعلّمون معنا
          </p>
          <h2 className="tria-title">تعلّم بطريقة تناسب طموحك</h2>
          <p>
            بيئة تعليمية هادئة وواضحة، تجمع بين الدروس المباشرة والمتابعة المنتظمة،
            لتتعلّم بثقة وبدون ضغط.
          </p>
        </motion.div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="tria-card group relative flex flex-col overflow-hidden p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.09 }}
                whileHover={{ y: -6 }}
              >
                {/* top accent bar that grows on hover */}
                <span className="absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-gradient-to-l from-[#315CF5] to-[#8050F6] transition-transform duration-500 group-hover:scale-x-100" />

                {/* big faded number */}
                <span className="absolute left-5 top-4 text-4xl font-extrabold text-[#E3EAF8] transition-colors group-hover:text-[#c9d6f5]">
                  0{index + 1}
                </span>

                <span
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${tones[item.tone]}`}
                >
                  <Icon size={24} aria-hidden="true" />
                </span>

                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="flex-1 text-sm">{item.description}</p>

                <p className="mt-5 flex items-center gap-2 border-t border-[#E3EAF8] pt-4 text-xs font-bold text-[#315CF5] dark:border-[#2a365c]">
                  <CheckCircle2 size={16} className="text-[#10B981]" aria-hidden="true" />
                  {item.proof}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Reassurance strip */}
        <motion.div
          className="mt-12 rounded-[1.75rem] bg-[#101D49] px-6 py-8 text-white sm:px-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="mb-4 text-xl font-extrabold !text-white sm:text-2xl">
                ما تحصل عليه عند التسجيل
              </h3>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {reassurance.map((r) => {
                  const Icon = r.icon;
                  return (
                    <li key={r.text} className="flex items-start gap-3 text-sm text-white/90">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span className="pt-1">{r.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="text-center lg:text-start">
              <p className="mb-4 !text-white/80">
                لا تعرف أي دورة تناسبك؟ اكتب لنا مستواك وسنرشدك إلى الاختيار الأنسب.
              </p>
              <a
                href="#enroll"
                className="tria-btn cursor-pointer bg-white px-7 text-[#14285C] hover:bg-[#F2F6FF]"
              >
                تواصل معنا وسجّل الآن
                <ArrowLeft size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
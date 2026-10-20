import React from "react";
import { Compass, Search, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "اختر المجال",
    text: "حدّد المادة أو المهارة التي ترغب في تعلّمها من التصنيفات المتاحة.",
  },
  {
    icon: Search,
    title: "اكتشف المحتوى",
    text: "تصفّح الدورات والموارد التعليمية المعروضة في المنصة.",
  },
  {
    icon: PlayCircle,
    title: "ابدأ التعلّم",
    text: "تواصل معنا للتسجيل ومتابعة رحلتك وتطوير معارفك ومهاراتك.",
  },
];

const Events = () => {
  return (
    <section id="events" className="tria-section tria-surface-alt">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-16">
        <h2 className="tria-title text-center">رحلتك التعليمية تبدأ من هنا</h2>
        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="tria-card relative p-7">
                <span className="absolute top-5 left-5 text-4xl font-extrabold text-[#E3EAF8]">
                  0{index + 1}
                </span>
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#315CF5] text-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-2 text-xl font-bold text-[#14285C]">{step.title}</h3>
                <p className="text-sm">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Events;

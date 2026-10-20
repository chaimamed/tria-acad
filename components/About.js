import React from "react";
import { GraduationCap, Laptop, Clock3 } from "lucide-react";

const values = [
  { icon: GraduationCap, label: "دعم أكاديمي" },
  { icon: Laptop, label: "مهارات رقمية" },
  { icon: Clock3, label: "تعلّم مرن" },
];

const About = () => {
  return (
    <section id="about-academy" className="tria-section tria-surface">
      <div className="mx-auto grid max-w-screen-xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:px-16">
        <div>
          <img
            src="/assets/tria-about.svg"
            alt="متعلم في بيئة أكاديمية TRIA مع مساحة دراسية هادئة"
            width="640"
            height="480"
            loading="lazy"
            className="h-auto w-full"
          />
        </div>
        <div>
          <h2 className="tria-title">أكاديمية TRIA، معك في رحلة التعلّم</h2>
          <p className="mb-8">
            نهدف في أكاديمية TRIA إلى تسهيل التعلّم وتطوير المهارات الرقمية
            من خلال محتوى تعليمي متاح عبر الإنترنت، يساعد المتعلّمين على
            اكتساب المعرفة والتقدّم نحو أهدافهم.
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="rounded-2xl bg-white p-4 text-center shadow-sm">
                  <Icon className="mx-auto mb-2 text-[#315CF5]" size={22} aria-hidden="true" />
                  <span className="text-sm font-bold text-[#14285C]">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

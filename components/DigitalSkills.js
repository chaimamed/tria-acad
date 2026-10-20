import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { Code2, Globe, FileSpreadsheet, Cpu, Monitor } from "lucide-react";

const skills = [
  { icon: Code2, label: "البرمجة" },
  { icon: Globe, label: "تطوير الويب" },
  { icon: FileSpreadsheet, label: "برامج المكتب" },
  { icon: Monitor, label: "الإنتاجية الرقمية" },
  { icon: Cpu, label: "أساسيات الحاسوب" },
];

const DigitalSkills = () => {
  return (
    <section id="digital" className="tria-section">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-16">
        <div className="overflow-hidden rounded-[2rem] bg-[#101D49] px-6 py-12 text-white sm:px-10 lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-extrabold leading-snug">
                مهارات رقمية تفتح لك آفاقاً جديدة
              </h2>
              <p className="mb-8 text-white/80">
                اكتسب مهارات عملية في البرمجة وتطوير الويب والأدوات الرقمية،
                وابنِ معارفك خطوة بخطوة.
              </p>
              <LinkScroll
                to="services"
                smooth
                duration={800}
                offset={-88}
                className="tria-btn tria-btn-primary cursor-pointer bg-[#315CF5]"
              >
                اكتشف المهارات الرقمية
              </LinkScroll>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li
                    key={skill.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <Icon size={20} aria-hidden="true" />
                    <span className="font-semibold">{skill.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalSkills;

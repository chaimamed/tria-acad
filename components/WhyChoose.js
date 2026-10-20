import React from "react";
import { motion } from "framer-motion";
import { CalendarClock, ListChecks, Briefcase, MousePointerClick } from "lucide-react";

const items = [
  { icon: CalendarClock, title: "تعلّم بمرونة", text: "دروس أونلاين تساعدك على التقدّم وفق وقتك." },
  { icon: ListChecks, title: "محتوى واضح ومنظّم", text: "مسارات تعليمية مرتّبة حسب المستوى والهدف." },
  { icon: Briefcase, title: "مهارات عملية", text: "معارف يمكن توظيفها في الدراسة والمهام اليومية." },
  { icon: MousePointerClick, title: "تجربة استخدام سهلة", text: "واجهة بسيطة تساعدك على اكتشاف المحتوى بسرعة." },
];

const WhyChoose = () => {
  return (
    <section className="tria-section">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-16">
        <h2 className="tria-title text-center">لماذا تختار أكاديمية TRIA؟</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="tria-card flex gap-4 p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#14285C] text-white">
                  <span className="text-sm font-bold">{index + 1}</span>
                </span>
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[#315CF5]">
                    <Icon size={18} aria-hidden="true" />
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm">{item.text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

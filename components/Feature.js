import React from "react";
import { motion } from "framer-motion";
import { Clock3, Layers, Sparkles, LifeBuoy } from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "تعلّم بمرونة",
    description: "اختر الوقت والمكان المناسبين لك.",
  },
  {
    icon: Layers,
    title: "محتوى منظّم",
    description: "تدرّج في التعلّم وفق مستواك وأهدافك.",
  },
  {
    icon: Sparkles,
    title: "تطوير المهارات",
    description: "اكتسب معارف تساعدك في الدراسة والعمل.",
  },
  {
    icon: LifeBuoy,
    title: "دعم تعليمي",
    description: "استفد من الخدمات التعليمية المتاحة عبر الأكاديمية.",
  },
];

export default function Feature() {
  return (
    <section id="feature" className="tria-section tria-surface">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-16">
        <div className="mb-10 text-center">
          <h2 className="tria-title">تعلّم بطريقة تناسب طموحك</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="tria-card p-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F6F1FF] text-[#315CF5]">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

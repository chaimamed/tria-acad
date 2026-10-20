import React from "react";
import { HeartHandshake, BookMarked, Target, Handshake } from "lucide-react";

const principles = [
  {
    icon: HeartHandshake,
    title: "تيسير التعلّم",
    text: "نقدّم محتوى واضحاً يساعد المتعلّم على الفهم خطوة بخطوة.",
  },
  {
    icon: BookMarked,
    title: "جودة المحتوى",
    text: "نحرص على تنظيم الدروس وفق احتياجات الدراسة والمهارات الرقمية.",
  },
  {
    icon: Target,
    title: "التقدّم بثقة",
    text: "نشجّع المتعلّم على بناء مهاراته وفق أهدافه الخاصة.",
  },
  {
    icon: Handshake,
    title: "إتاحة المعرفة",
    text: "نسعى لأن تكون التجربة التعليمية بسيطة ومتاحة عبر الإنترنت.",
  },
];

const Values = () => {
  return (
    <section className="tria-section">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-16">
        <div className="mb-10 text-center">
          <h2 className="tria-title">قيمنا في التعلّم</h2>
          <p className="tria-lead">
            نلتزم بمبادئ تعليمية واضحة، دون وعود غير مدعومة، لنبقى قريبين من حاجة المتعلّم الفعلية.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-3xl bg-[#F2F6FF] p-6">
                <Icon className="mb-3 text-[#8050F6]" size={24} aria-hidden="true" />
                <h3 className="mb-2 text-lg font-bold text-[#14285C]">{item.title}</h3>
                <p className="text-sm">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;

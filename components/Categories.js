import React from "react";
import { Link as LinkScroll } from "react-scroll";
import {
  BookOpen,
  Atom,
  Languages,
  Code2,
  Globe,
  MonitorSmartphone,
  FileSpreadsheet,
} from "lucide-react";
import { courses } from "./courses";

const schoolIds = ["primary", "middle", "secondary"];
const mathPhysics = courses.filter((c) =>
  /math|physics|atom|calculator|sciences/i.test(`${c.id} ${c.icon}`)
).length;
const languageCount = courses.filter((c) =>
  /language|letters|arabic|english|french/i.test(`${c.id} ${c.category} ${c.title}`)
).length;
const programmingCount = courses.filter((c) =>
  /code|app-dev|web/i.test(`${c.id} ${c.icon}`)
).length;
const digitalCount = courses.filter((c) => c.category === "digital").length;
const schoolCount = courses.filter((c) => schoolIds.includes(c.category)).length;

const areas = [
  {
    title: "دروس الدعم المدرسي",
    description: "مرافقة دراسية للمستويات المدرسية المتاحة عبر الأكاديمية.",
    icon: BookOpen,
    count: schoolCount,
    target: "primary",
  },
  {
    title: "الرياضيات والفيزياء",
    description: "تعزيز الفهم وحل التمارين وفق البرامج الدراسية.",
    icon: Atom,
    count: mathPhysics,
    target: "middle",
  },
  {
    title: "اللغات",
    description: "تعلّم العربية والفرنسية والإنجليزية بمحتوى واضح ومتدرّج.",
    icon: Languages,
    count: languageCount,
    target: "languages",
  },
  {
    title: "البرمجة وعلوم الحاسوب",
    description: "مدخل عملي إلى التفكير المنطقي وبناء المشاريع الرقمية.",
    icon: Code2,
    count: programmingCount,
    target: "digital",
  },
  {
    title: "تطوير الويب",
    description: "اكتشف مسارات تطوير المواقع والتطبيقات المتاحة.",
    icon: Globe,
    count: programmingCount,
    target: "digital",
  },
  {
    title: "المهارات الرقمية",
    description: "أدوات ومهارات تساعدك في الدراسة والعمل اليومي.",
    icon: MonitorSmartphone,
    count: digitalCount,
    target: "digital",
  },
  {
    title: "برامج المكتب",
    description: "مجال مرتبط بالمهارات الرقمية والإنتاجية المكتبية.",
    icon: FileSpreadsheet,
    count: null,
    target: "digital",
  },
];

const Categories = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="tria-section">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-16">
        <div className="mb-10 text-center">
          <h2 className="tria-title">اكتشف مجالات التعلّم</h2>
          <p className="tria-lead">
            اختر المجال الذي يناسب احتياجاتك، وابدأ رحلتك التعليمية.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <article key={area.title} className="tria-card flex flex-col p-6">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F6FF] text-[#315CF5]">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-[#14285C]">{area.title}</h3>
                <p className="mt-2 flex-1 text-sm">{area.description}</p>
                {typeof area.count === "number" ? (
                  <p className="mt-3 text-xs font-semibold text-[#315CF5]">
                    {area.count} مسار متاح
                  </p>
                ) : null}
                <LinkScroll
                  to="services"
                  smooth
                  duration={800}
                  offset={-88}
                  onClick={() => onSelectCategory && onSelectCategory(area.target)}
                  className="mt-5 cursor-pointer text-sm font-bold text-[#14285C]"
                >
                  اكتشف المجال
                </LinkScroll>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;

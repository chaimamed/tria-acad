import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";
import { BookOpen, Code2, Laptop, Sparkles } from "lucide-react";

const chips = ["دعم مدرسي", "برمجة", "لغات", "مهارات رقمية"];

const Hero = () => {
  return (
    <section id="about" className="tria-section relative overflow-hidden pt-28 sm:pt-32">
      <div className="tria-orb pointer-events-none -top-10 right-10 h-40 w-40 bg-[#8050F6]" />
      <div className="tria-orb pointer-events-none bottom-8 left-8 h-48 w-48 bg-[#315CF5]" style={{ animationDelay: "1.4s" }} />
      <div className="relative mx-auto grid max-w-screen-xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="tria-kicker">
            <Sparkles size={16} aria-hidden="true" />
            أكاديمية TRIA للتعلّم أونلاين
          </p>
          <h1 className="mb-5 text-3xl font-extrabold leading-snug sm:text-4xl lg:text-5xl">
            تعلّم اليوم، واصنع{" "}
            <span className="tria-gradient-text">مستقبلك</span> غداً
          </h1>
          <p className="mb-4 max-w-xl text-base sm:text-lg">
            مع أكاديمية TRIA، طوّر مستواك الدراسي واكتسب المهارات الرقمية
            التي تحتاجها، من خلال دروس أونلاين مرنة ومحتوى تعليمي يساعدك
            على التقدّم بثقة.
          </p>
          <p className="mb-6 text-sm font-semibold">
            تعلّم بمرونة، وطوّر مهاراتك، وحقّق أهدافك.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span key={chip} className="tria-btn-secondary rounded-full px-3 py-1 text-xs">
                {chip}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <LinkScroll
              to="enroll"
              smooth
              duration={800}
              offset={-88}
              className="tria-btn tria-btn-primary cursor-pointer"
            >
              سجّل في دورة
            </LinkScroll>
            <LinkScroll
              to="services"
              smooth
              duration={800}
              offset={-88}
              className="tria-btn tria-btn-secondary cursor-pointer"
            >
              اكتشف الدورات
            </LinkScroll>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="tria-card relative overflow-hidden p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <strong>TRIA Studio</strong>
              <span className="rounded-full bg-[#F2F6FF] px-3 py-1 text-xs font-bold text-[#315CF5]">Live</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="tria-float rounded-2xl bg-[#F2F6FF] p-4">
                <Laptop className="mb-2 text-[#315CF5]" />
                <p className="text-sm font-bold text-[#14285C]">تعلّم أونلاين</p>
              </div>
              <div className="tria-float rounded-2xl bg-[#F6F1FF] p-4" style={{ animationDelay: "0.6s" }}>
                <BookOpen className="mb-2 text-[#8050F6]" />
                <p className="text-sm font-bold text-[#14285C]">دعم مدرسي</p>
              </div>
              <div className="tria-float rounded-2xl bg-[#F6F1FF] p-4" style={{ animationDelay: "1s" }}>
                <Code2 className="mb-2 text-[#315CF5]" />
                <p className="text-sm font-bold text-[#14285C]">برمجة وويب</p>
              </div>
              <div className="rounded-2xl bg-[#14285C] p-4 text-white">
                <p className="text-sm opacity-80">الخطوة التالية</p>
                <p className="font-bold">سجّل في دورة اليوم</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

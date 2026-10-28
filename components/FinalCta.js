import React from "react";

const FinalCta = () => {
  return (
    <section className="tria-section pt-0">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-16">
        <div className="rounded-[2rem] bg-gradient-to-l from-[#14285C] via-[#315CF5] to-[#8050F6] px-6 py-14 text-center text-white sm:px-12">
          <h2 className="mb-4 text-3xl font-extrabold leading-snug sm:text-4xl">
            خطوتك الأولى نحو مستقبل أفضل تبدأ هنا
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            ابدأ رحلتك مع أكاديمية TRIA، واكتشف فرصاً جديدة للتعلّم
            وتطوير مهاراتك.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#enroll"
              className="tria-btn cursor-pointer bg-white text-[#14285C] hover:bg-[#F2F6FF]"
            >
              ابدأ الآن
            </a>
            <a
              href="#services"
              className="tria-btn cursor-pointer border border-white/40 bg-transparent text-white hover:bg-white/10"
            >
              تصفّح الدورات
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;

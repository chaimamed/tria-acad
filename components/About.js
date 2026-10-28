import React from "react";
import { GraduationCap, Laptop, Clock3 } from "lucide-react";

// Put your video in /public/assets/ and update these two paths.
const VIDEO_SRC = "/assets/tria-video.mp4";
const POSTER_SRC = "/assets/tria-video-poster.jpg";

const values = [
  { icon: GraduationCap, label: "دعم أكاديمي" },
  { icon: Laptop, label: "مهارات رقمية" },
  { icon: Clock3, label: "تعلّم مرن" },
];

const About = () => {
  return (
    <section id="about-Online" className="tria-section tria-surface">
      <div className="mx-auto grid max-w-screen-xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:px-16">
        {/* Video (9:14). In RTL this column sits on the right.
            Add "lg:order-2" to the wrapper below to move it to the left. */}
        <div className="mx-auto w-full max-w-[320px] sm:max-w-[360px]">
          <div className="rounded-[2.25rem] bg-[#14285C] p-2.5 shadow-2xl">
            <div
              className="relative w-full overflow-hidden rounded-[1.75rem] bg-black"
              style={{ aspectRatio: "9 / 14" }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={VIDEO_SRC}
                poster={POSTER_SRC}
                controls
                playsInline
                preload="metadata"
              >
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </div>
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
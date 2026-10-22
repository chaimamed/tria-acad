import React from "react";
import { Link as LinkScroll } from "react-scroll";
import {
  ArrowLeft,
  ArrowUp,
  ChevronLeft,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Video,
  Users,
  Laptop,
} from "lucide-react";
import BrandMark from "../BrandMark";
import { categories } from "../courses";

// Fill these in. Empty values are hidden automatically.
const CONTACT = {
  email: "", // e.g. "contact@tria.dz"
  phone: "", // e.g. "+213 5xx xx xx xx"
  location: "الجزائر", // e.g. "الجزائر"
  facebook: "", // full URL
  instagram: "", // full URL
  youtube: "", // full URL
};

const navLinks = [
  { to: "about", label: "الرئيسية" },
  { to: "services", label: "الدورات" },
  { to: "digital", label: "المهارات الرقمية" },
  { to: "about-academy", label: "من نحن" },
  { to: "enroll", label: "التسجيل في دورة" },
];

const promises = [
  { icon: Video, text: "حصص مباشرة" },
  { icon: Users, text: "مجموعات صغيرة" },
  { icon: Laptop, text: "تعلّم من البيت" },
];

const socials = [
  { key: "facebook", icon: Facebook, label: "Facebook" },
  { key: "instagram", icon: Instagram, label: "Instagram" },
  { key: "youtube", icon: Youtube, label: "YouTube" },
].filter((s) => CONTACT[s.key]);

const linkClass =
  "group inline-flex cursor-pointer items-center gap-1.5 text-white/75 transition hover:text-white";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#101D49] pb-28 pt-16 text-white lg:pb-10">
      {/* decorative glows */}
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#315CF5] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#8050F6] opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-16">
        {/* ---------- CTA band ---------- */}
        <div className="mb-14 flex flex-col items-center justify-between gap-5 rounded-[1.75rem] border border-white/10 bg-gradient-to-l from-[#315CF5]/30 via-[#8050F6]/20 to-white/5 px-6 py-8 text-center sm:px-10 md:flex-row md:text-start">
          <div>
            <h3 className="mb-1 text-xl font-extrabold sm:text-2xl">
              ابدأ رحلتك التعليمية اليوم
            </h3>
            <p className="text-sm text-white/75">
              اختر الدورة المناسبة وسجّل في دقيقة واحدة.
            </p>
          </div>
          <LinkScroll
            to="enroll"
            smooth
            duration={800}
            offset={-88}
            className="tria-btn shrink-0 cursor-pointer bg-white px-7 text-[#14285C] hover:bg-[#F2F6FF]"
          >
            سجّل في دورة
            <ArrowLeft size={18} aria-hidden="true" />
          </LinkScroll>
        </div>

        {/* ---------- columns ---------- */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <BrandMark light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              TRIA منصة تعليمية أونلاين للدعم المدرسي واللغات والمهارات الرقمية،
              بدروس مباشرة ومتابعة واضحة.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {promises.map((p) => {
                const Icon = p.icon;
                return (
                  <li
                    key={p.text}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/85"
                  >
                    <Icon size={14} aria-hidden="true" />
                    {p.text}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* navigation */}
          <nav aria-label="التنقّل">
            <p className="mb-5 text-lg font-bold">التنقّل</p>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <LinkScroll to={l.to} smooth duration={800} offset={-88} className={linkClass}>
                    <ChevronLeft
                      size={14}
                      aria-hidden="true"
                      className="text-[#8ea6ff] transition-transform group-hover:-translate-x-1"
                    />
                    {l.label}
                  </LinkScroll>
                </li>
              ))}
            </ul>
          </nav>

          {/* categories */}
          <div>
            <p className="mb-5 text-lg font-bold">مجالات الدورات</p>
            <ul className="space-y-3 text-sm">
              {categories.map((c) => (
                <li key={c.id}>
                  <LinkScroll to="services" smooth duration={800} offset={-88} className={linkClass}>
                    <ChevronLeft
                      size={14}
                      aria-hidden="true"
                      className="text-[#8ea6ff] transition-transform group-hover:-translate-x-1"
                    />
                    {c.ar}
                  </LinkScroll>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="mb-5 text-lg font-bold">تواصل معنا</p>
            <ul className="space-y-3 text-sm text-white/80">
              {CONTACT.email ? (
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center gap-3 transition hover:text-white"
                  >
                    <Mail size={18} className="text-[#8ea6ff]" aria-hidden="true" />
                    <span dir="ltr">{CONTACT.email}</span>
                  </a>
                </li>
              ) : null}
              {CONTACT.phone ? (
                <li>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-3 transition hover:text-white"
                  >
                    <Phone size={18} className="text-[#8ea6ff]" aria-hidden="true" />
                    <span dir="ltr">{CONTACT.phone}</span>
                  </a>
                </li>
              ) : null}
              {CONTACT.location ? (
                <li className="inline-flex items-center gap-3">
                  <MapPin size={18} className="text-[#8ea6ff]" aria-hidden="true" />
                  {CONTACT.location} · دروس أونلاين
                </li>
              ) : null}
              <li className="pt-1 text-white/65">
                أو راسلنا عبر نموذج التسجيل في الصفحة وسنردّ عليك.
              </li>
            </ul>

            {socials.length > 0 ? (
              <ul className="mt-5 flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.key}>
                      <a
                        href={CONTACT[s.key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:-translate-y-0.5 hover:bg-[#315CF5] hover:text-white"
                      >
                        <Icon size={18} aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>

        {/* ---------- bottom bar ---------- */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row">
          <p>©{new Date().getFullYear()} TRIA. جميع الحقوق محفوظة.</p>
          <LinkScroll
            to="about"
            smooth
            duration={800}
            offset={-90}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <ArrowUp size={16} aria-hidden="true" />
            العودة للأعلى
          </LinkScroll>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
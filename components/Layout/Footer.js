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
  facebook: "https://www.facebook.com/share/19eMis3ebS/",
  instagram: "https://www.instagram.com/tria.academy_online?exln=MWM2aXl4M3hlNG1ibQ==",
  youtube: "https://www.youtube.com/@Tria-dev",
};

const navLinks = [
  { to: "about", label: "الرئيسية" },
  { to: "services", label: "الدورات" },
  { to: "digital", label: "المهارات الرقمية" },
  { to: "about-Online", label: "من نحن" },
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
  "group inline-flex cursor-pointer items-center gap-1.5 text-sm text-white/75 transition duration-200 hover:text-white";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07162f] pb-12 pt-16 text-white lg:pb-8">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#315CF5]/20 blur-3xl" />
        <div className="absolute -right-16 top-20 h-72 w-72 rounded-full bg-[#8050F6]/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#081326] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-5 sm:px-8 lg:px-14">
        <div className="mb-14 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(49,92,245,0.2),rgba(128,80,246,0.16),rgba(255,255,255,0.04))] p-5 shadow-[0_24px_80px_rgba(15,23,42,0.45)] sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                ابدأ رحلتك التعليمية اليوم
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                اختَر المسار المناسب لك وابدأ بتعلّم عملي، واضح، ومصمم ليناسب
                أهدافك في التعليم والمهارات الرقمية.
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href="#services"
                className="tria-footer-browse tria-btn inline-flex items-center justify-center rounded-full px-6 text-sm font-bold"
              >
                تصفح الدورات
              </a>
              <a
                href="#enroll"
                className="tria-btn inline-flex items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-[#14285C] shadow-[0_12px_30px_rgba(255,255,255,0.25)] transition hover:bg-[#f4f7ff]"
              >
                سجّل في دورة
                <ArrowLeft size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <div className="mb-5">
              <BrandMark light />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              TRIA منصة تعليمية أونلاين للدعم المدرسي واللغات والمهارات الرقمية،
              بدروس مباشرة ومتابعة واضحة.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {promises.map((p) => {
                const Icon = p.icon;
                return (
                  <li
                    key={p.text}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white/85"
                  >
                    <Icon size={13} aria-hidden="true" className="text-[#a7bbff]" />
                    {p.text}
                  </li>
                );
              })}
            </ul>
          </div>

          <nav aria-label="التنقّل">
            <p className="mb-5 text-lg font-bold text-white">التنقّل</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <LinkScroll
                    to={l.to}
                    smooth
                    duration={800}
                    offset={-88}
                    className={linkClass}
                  >
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

          <div>
            <p className="mb-5 text-lg font-bold text-white">مجالات الدورات</p>
            <ul className="space-y-3">
              {categories.map((c) => (
                <li key={c.id}>
                  <LinkScroll
                    to="services"
                    smooth
                    duration={800}
                    offset={-88}
                    className={linkClass}
                  >
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

          <div>
            <p className="mb-5 text-lg font-bold text-white">تواصل معنا</p>
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
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition duration-200 hover:-translate-y-0.5 hover:bg-[#315CF5] hover:text-white"
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row">
          <p>©{new Date().getFullYear()} TRIA. جميع الحقوق محفوظة.</p>
          <LinkScroll
            to="about"
            smooth
            duration={800}
            offset={-90}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
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
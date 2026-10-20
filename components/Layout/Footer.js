import React from "react";
import { Link as LinkScroll } from "react-scroll";
import BrandMark from "../BrandMark";
import { categories } from "../courses";

const Footer = () => {
  return (
    <footer className="border-t border-[#E3EAF8] bg-[#101D49] pb-28 pt-16 text-white lg:pb-16">
      <div className="mx-auto grid max-w-screen-xl gap-10 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-16">
        <div>
          <BrandMark light />
          <p className="mt-4 text-sm text-white/70">
            أكاديمية TRIA منصة تعليمية أونلاين للدعم المدرسي والمهارات الرقمية.
          </p>
        </div>

        <div>
          <p className="mb-4 text-lg font-bold">التنقّل</p>
          <ul className="space-y-2 text-white/80">
            <li>
              <LinkScroll to="about" smooth duration={800} offset={-88} className="cursor-pointer hover:text-white">
                الرئيسية
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="services" smooth duration={800} offset={-88} className="cursor-pointer hover:text-white">
                الدورات
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="digital" smooth duration={800} offset={-88} className="cursor-pointer hover:text-white">
                المهارات الرقمية
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="about-academy" smooth duration={800} offset={-88} className="cursor-pointer hover:text-white">
                عن الأكاديمية
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="enroll" smooth duration={800} offset={-88} className="cursor-pointer hover:text-white">
                التسجيل في دورة
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="contact" smooth duration={800} offset={-88} className="cursor-pointer hover:text-white">
                تواصل معنا
              </LinkScroll>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-lg font-bold">مجالات الدورات</p>
          <ul className="space-y-2 text-white/80">
            {categories.map((c) => (
              <li key={c.id}>
                <LinkScroll to="services" smooth duration={800} offset={-88} className="cursor-pointer hover:text-white">
                  {c.ar}
                </LinkScroll>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-lg font-bold">تواصل</p>
          <p className="text-sm text-white/70">
            يمكنك مراسلتنا عبر نموذج التواصل في الصفحة.
          </p>
        </div>
      </div>
      <p className="mt-12 text-center text-sm text-white/50">
        ©{new Date().getFullYear()} TRIA Academy. جميع الحقوق محفوظة.
      </p>
    </footer>
  );
};

export default Footer;

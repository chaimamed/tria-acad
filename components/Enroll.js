import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap } from "lucide-react";
import { courses } from "./courses";

const Enroll = ({ selectedCourseId = "" }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    courseId: selectedCourseId || "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedCourseId) {
      setForm((prev) => ({ ...prev, courseId: selectedCourseId }));
    }
  }, [selectedCourseId]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus({ type: "error", text: data.message || "تعذّر إرسال الطلب." });
        return;
      }
      setStatus({ type: "success", text: data.message });
      setForm({
        fullName: "",
        email: "",
        phone: "",
        courseId: "",
        message: "",
      });
    } catch (error) {
      setStatus({ type: "error", text: "حدث خطأ في الاتصال. يرجى المحاولة لاحقاً." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enroll" className="tria-section">
      <div className="mx-auto grid max-w-screen-xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="tria-kicker">
            <GraduationCap size={16} aria-hidden="true" />
            سجّل في دورة
          </p>
          <h2 className="tria-title">ابدأ رحلتك التعليمية بخطوة واحدة</h2>
          <p className="mb-6">
            اختر الدورة المناسبة واملأ بياناتك. سنحفظ طلبك في قاعدة البيانات ونتواصل معك
            لاستكمال التسجيل.
          </p>
          <ul className="space-y-3 text-sm font-semibold">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-[#10B981]" size={18} /> اختيار الدورة من القائمة الفعلية
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-[#10B981]" size={18} /> بيانات واضحة وبسيطة
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-[#10B981]" size={18} /> تأكيد فوري بعد نجاح الإرسال
            </li>
          </ul>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="tria-card tria-enroll-form p-6 sm:p-8"
          dir="rtl"
        >
          <div className="mb-5">
            <label className="tria-label" htmlFor="fullName">الاسم الكامل</label>
            <input
              id="fullName"
              name="fullName"
              className="tria-input"
              value={form.fullName}
              onChange={onChange}
              placeholder="الاسم واللقب"
              required
            />
          </div>
          <div className="mb-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="tria-label" htmlFor="email">البريد الإلكتروني</label>
              <input
                id="email"
                name="email"
                type="email"
                className="tria-input"
                value={form.email}
                onChange={onChange}
                placeholder="you@email.com"
                dir="ltr"
                required
              />
            </div>
            <div>
              <label className="tria-label" htmlFor="phone">رقم الهاتف</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="tria-input"
                value={form.phone}
                onChange={onChange}
                placeholder="+213..."
                dir="ltr"
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="tria-label" htmlFor="courseId">الدورة</label>
            <select
              id="courseId"
              name="courseId"
              className="tria-select"
              value={form.courseId}
              onChange={onChange}
              required
            >
              <option value="">اختر الدورة</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.ar} — {course.meta}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="tria-label" htmlFor="message">ملاحظة اختيارية</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="tria-textarea"
              value={form.message}
              onChange={onChange}
              placeholder="أخبرنا بالمستوى أو الوقت المناسب لك"
            />
          </div>
          <button type="submit" className="tria-btn tria-btn-primary w-full" disabled={loading}>
            {loading ? "جاري الإرسال..." : "تأكيد التسجيل"}
          </button>
          {status.text ? (
            <p
              role="status"
              className={`mt-4 text-center text-sm font-semibold ${
                status.type === "success" ? "text-[#10B981]" : "text-[#DC2626]"
              }`}
            >
              {status.text}
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
};

export default Enroll;

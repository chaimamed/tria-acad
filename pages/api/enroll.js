import { getSupabaseAdmin, isSupabaseConfigured } from "../../lib/supabaseClient";
import { courses } from "../../components/courses";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  if (!isSupabaseConfigured) {
    return res.status(503).json({
      ok: false,
      message: "خدمة التسجيل غير مهيأة بعد. أضف بيانات Supabase ثم أعد المحاولة.",
    });
  }

  const { fullName, email, phone, courseId, message } = req.body || {};
  const name = String(fullName || "").trim();
  const mail = String(email || "").trim().toLowerCase();
  const tel = String(phone || "").trim();
  const selectedId = String(courseId || "").trim();
  const note = String(message || "").trim();

  if (name.length < 2) {
    return res.status(400).json({ ok: false, message: "يرجى إدخال الاسم الكامل." });
  }
  if (!emailPattern.test(mail)) {
    return res.status(400).json({ ok: false, message: "يرجى إدخال بريد إلكتروني صحيح." });
  }

  const course = courses.find((item) => item.id === selectedId);
  if (!course) {
    return res.status(400).json({ ok: false, message: "يرجى اختيار دورة متاحة." });
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("course_registrations").insert({
    full_name: name,
    email: mail,
    phone: tel || null,
    course_id: course.id,
    course_title: course.ar,
    message: note || null,
  });

  if (error) {
    console.error("Supabase enroll error:", error.message);
    return res.status(500).json({
      ok: false,
      message: "تعذّر حفظ طلب التسجيل. تحقق من جدول Supabase ثم أعد المحاولة.",
    });
  }

  return res.status(200).json({ ok: true, message: "تم إرسال طلب التسجيل بنجاح." });
}

import SignUp from "../components/Auth/SignUp";
import SeoHead from "../components/SeoHead";

export default function SignupPage() {
  return (
    <>
      <SeoHead
        title="إنشاء حساب | أكاديمية TRIA"
        description="أنشئ حسابك في أكاديمية TRIA وسجّل في دروس الدعم المدرسي واللغات والمهارات الرقمية."
        robots="noindex, follow"
      />
      <SignUp />
    </>
  );
}

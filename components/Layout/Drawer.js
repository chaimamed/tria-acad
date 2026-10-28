'use client'

import SocialSignIn from "../Auth/SocialSignIn";
import Link from "next/link";
import { useState,useEffect } from "react";
import { useRouter } from "next/router"; // Next.js 13+ (App Router)

const Drawer = ({ isOpen, onClose, contentType }) => {
const [activeType, setActiveType] = useState(contentType);
const router = useRouter(); // 👈 باش نستعمل التوجيه

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email, password: form.password }),
    });

    const data = await res.json();

    if (res.ok) {
      // احفظ التوكن في localStorage أو cookies
      localStorage.setItem("token", data.token);

      // توجيه المستخدم إلى صفحة dashboard
      router.push("/Dash");
    } else {
      alert(data.message || "Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong");
  }
};

useEffect(() => {
  setActiveType(contentType);
}, [contentType]);
const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ zIndex: 999 }}
      />

      {/* Modal Container */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-white/10 backdrop-blur-xl shadow-xl rounded-2xl px-8 py-10 w-[90%] max-w-md
          border border-white/20 ring-1 ring-white/10
          transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        style={{ zIndex: 1000 }}
      >
        

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close drawer"
          className="absolute top-4 right-4 text-white hover:text-purple-300 text-3xl font-bold"
        >
          &times;
        </button>

        {/* Header */}
        <h2 className="text-center text-2xl font-bold text-white mb-6">
          Welcome Back
        </h2>

        {/* Social Login */}
        <SocialSignIn />

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/30" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white/10 px-3 text-white/80">OR</span>
          </div>
        </div>

       {/* Content Switch */}
      {activeType === "signin" ? (
       <form onSubmit={handleLogin} className="space-y-5">
  <input
    type="email"
    placeholder="Email"
    value={form.email}
    onChange={(e) => setForm({ ...form, email: e.target.value })}
    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/30 text-white placeholder-white/50 focus:ring-2 focus:ring-[#5B86E5] transition"
  />
  <input
    type="password"
    placeholder="Password"
    value={form.password}
    onChange={(e) => setForm({ ...form, password: e.target.value })}
    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/30 text-white placeholder-white/50 focus:ring-2 focus:ring-[#8E44AD] transition"
  />
  <button
    type="submit"
    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#5B86E5] to-[#8E44AD] text-white font-semibold hover:from-[#6A93E6] hover:to-[#9C56C5] transition shadow-lg"
  >
    Sign In
  </button>
</form>

      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" >
          <input
  type="text"
  placeholder="Full Name"
  value={form.name}
  onChange={(e) => setForm({ ...form, name: e.target.value })}
  
            className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/30 text-white placeholder-white/50 focus:ring-2 focus:ring-[#8E44AD] transition"
          />


<input
  type="email"
  placeholder="Email"
  value={form.email}
  onChange={(e) => setForm({ ...form, email: e.target.value })}

            className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/30 text-white placeholder-white/50 focus:ring-2 focus:ring-[#8E44AD] transition"
          />

<input
  type="password"
  placeholder="Password"
  value={form.password}
  onChange={(e) => setForm({ ...form, password: e.target.value })}
  

            className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/30 text-white placeholder-white/50 focus:ring-2 focus:ring-[#8E44AD] transition"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })
            }

            className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/30 text-white placeholder-white/50 focus:ring-2 focus:ring-[#8E44AD] transition"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#5B86E5] to-[#8E44AD] text-white font-semibold hover:from-[#6A93E6] hover:to-[#9C56C5] transition shadow-lg"
          >
            Register
          </button>
        </form>
      )}

      {/* Footer Links */}
      <div className="mt-6 text-center text-sm text-white/80">
        {activeType === "signin" ? (
          <Link href="#" legacyBehavior>
  <a
    onClick={() => setActiveType("register")}
    className="text-[#A084E8] hover:underline font-medium"
  >
    Not a member yet? Sign Up
  </a>
</Link>

        ) : (
          <Link legacyBehavior
            href="#">
              <a
            onClick={() => setActiveType("signin")}
            className="text-[#A084E8] hover:underline font-medium"
          >
            Already have an account? Sign In
            </a>
          </Link>
        )}
      </div>
      </div>
    </>
  );
};


export default Drawer;
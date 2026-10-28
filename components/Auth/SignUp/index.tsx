"use client";

import Link from "next/link";
import SocialSignUp from "../SocialSignUp";

const SignUp = () => {
  return (
    <main className="tria-auth">
      <section className="tria-auth__card" aria-labelledby="signup-title">
        <aside className="tria-auth__aside">
          <a className="tria-auth__brand" href="/" aria-label="TRIA Online home">
            <img src="/assets/Logo.svg" alt="" />
            <span>TRIA Online</span>
          </a>
          <div className="tria-auth__aside-copy">
            <span className="tria-auth__eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
            <h1>Make room for what you can become.</h1>
            <p>
              Build new skills, learn at your own pace, and take your next step
              with TRIA Online.
            </p>
          </div>
          <div className="tria-auth__aside-note">
            <span className="tria-auth__note-mark" aria-hidden="true">
              +
            </span>
            <span>Learn something new. Move forward with confidence.</span>
          </div>
        </aside>

        <div className="tria-auth__content">
          <div className="tria-auth__heading">
            <span className="tria-auth__eyebrow">GET STARTED FOR FREE</span>
            <h2 id="signup-title">Create your account</h2>
            <p>Join our learning community in just a few steps.</p>
          </div>

          <SocialSignUp />

          <div className="tria-auth__divider" aria-hidden="true">
            <span>or sign up with email</span>
          </div>

          <form className="tria-auth__form" method="post">
            <div className="tria-auth__field">
              <label htmlFor="signup-name">Full name</label>
              <input
                autoComplete="name"
                id="signup-name"
                name="name"
                placeholder="Your name"
                required
                type="text"
              />
            </div>
            <div className="tria-auth__field">
              <label htmlFor="signup-email">Email address</label>
              <input
                autoComplete="email"
                id="signup-email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </div>
            <div className="tria-auth__field">
              <label htmlFor="signup-password">Password</label>
              <input
                autoComplete="new-password"
                id="signup-password"
                name="password"
                minLength={8}
                placeholder="At least 8 characters"
                required
                type="password"
              />
              <span className="tria-auth__hint">
                Use at least 8 characters for a stronger password.
              </span>
            </div>

            <button className="tria-auth__submit" type="submit">
              Create account
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <p className="tria-auth__legal">
            By creating an account, you agree to our{" "}
            <Link href="/">Privacy</Link> and <Link href="/">Policy</Link>.
          </p>

          <p className="tria-auth__signin">
            Already have an account? <Link href="/">Sign in</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignUp;

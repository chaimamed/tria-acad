import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "../Hero";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="tria-page">
        <Hero />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

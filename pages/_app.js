import { useEffect } from "react";
import "../styles/tailwind.css";
import "../styles/slick.css";
import "../styles/tria.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

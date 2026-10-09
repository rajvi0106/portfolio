import { useEffect, useState } from "react";
import Stars from "./components/Stars";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Craft from "./components/Craft";
import Work from "./components/Work";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";
function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () =>
      setT(new Date().toLocaleTimeString("en-IN", { hour12: false }) + " IST");
    f();
    const id = setInterval(f, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{t}</span>;
}
export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".rv").forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <Stars />
      <Nav />
      <main>
        <Hero />
        <Craft />
        <Work />
        <Terminal />
        <Contact />
      </main>
      <footer>
        <div
          className="wrap"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>[ SYSTEM: OPERATIONAL ] © 2026 RAJVI SINGH RATHORE</span>
          <Clock />
        </div>
      </footer>
    </>
  );
}

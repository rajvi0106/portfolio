import { useEffect, useState } from "react";
const ITEMS = [
  ["about", "About"],
  ["craft", "Craft"],
  ["work", "Works"],
  ["lab", "Lab"],
  ["contact", "Connect"],
];
export default function Nav() {
  const [on, setOn] = useState("about");
  useEffect(() => {
    const f = () => {
      let id = "about";
      ITEMS.forEach(([k]) => {
        if (document.getElementById(k).getBoundingClientRect().top < 200)
          id = k;
      });
      setOn(id);
    };
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <nav>
      <div className="wrap">
        <div className="logo">
          RAJVI S. RATHORE<small>● ONLINE</small>
        </div>
        <ul>
          {ITEMS.map(([k, l]) => (
            <li key={k}>
              <a className={"l" + (on === k ? " on" : "")} href={"#" + k}>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn p" href="#contact">
          Get in touch
        </a>
      </div>
    </nav>
  );
}

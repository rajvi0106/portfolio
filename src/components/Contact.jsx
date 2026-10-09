import { useState } from "react";
import { EMAIL, LINKS } from "../data";
export default function Contact() {
  const [t, setT] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {}
    setT(true);
    setTimeout(() => setT(false), 1600);
  };
  return (
    <section id="contact">
      <div className="wrap">
        <div className="card pad grid2" style={{ padding: 28 }}>
          <div>
            <h2
              style={{
                font: "600 clamp(24px,4vw,32px)/1.2 var(--d)",
                letterSpacing: "-.02em",
                marginBottom: 12,
              }}
            >
              Let's build something useful.
            </h2>
            <p className="lead">
              Looking for internships, open source work and team projects. Email
              is the fastest way to reach me.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn" href={"mailto:" + EMAIL}>
                ✉ {EMAIL}
              </a>
              <button className="btn p" onClick={copy}>
                Copy email
              </button>
            </div>
          </div>
          <div className="links">
            {LINKS.map(([a, b, h]) => (
              <a key={a} href={h} target="_blank" rel="noopener">
                {a} <small>{b}</small>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div id="toast" className={t ? "s" : ""}>
        COPIED TO CLIPBOARD
      </div>
    </section>
  );
}

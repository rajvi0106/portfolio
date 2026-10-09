import { useEffect, useRef, useState } from "react";
import { PROJECTS, SKILLS, EMAIL, GH } from "../data";
const CMDS = {
  help: () =>
    "Commands: about, projects, skills, education, contact, github, open <project>, theme, clear",
  about: () =>
    "Rajvi Singh Rathore. 3rd year B.Tech at IIIT Jabalpur. Dev Wing core member at Bitbyte TPC. I like solving real problems and I am a sports fan.",
  projects: () =>
    PROJECTS.map((p, i) => `[${i + 1}] ${p.n} - ${p.t}`).join("\n"),
  skills: () => SKILLS,
  education: () => "B.Tech, IIIT Jabalpur (3rd year)",
  contact: () => EMAIL,
  github: () => {
    window.open(GH, "_blank");
    return "opening github ...";
  },
  theme: () =>
    "Theme: Nocturnal Cyber Artisan. Light mode is not supported, on purpose.",
  sudo: () => "Nice try. Permission denied.",
};
export default function Terminal() {
  const [lines, setLines] = useState([
    { t: "Welcome. Type 'help' to see commands.", c: "o" },
  ]);
  const [v, setV] = useState(""),
    hist = useRef([]),
    hi = useRef(0),
    box = useRef(),
    inp = useRef();
  useEffect(() => {
    box.current.scrollTop = box.current.scrollHeight;
  }, [lines]);
  const run = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;
    hist.current.push(cmd);
    hi.current = hist.current.length;
    const [a, ...r] = cmd.split(/\s+/),
      k = a.toLowerCase(),
      add = [{ t: "$ " + cmd, c: "c" }];
    if (k === "clear") {
      setLines([]);
      return;
    }
    if (k === "open") {
      const p = PROJECTS.find((x) =>
        x.n.toLowerCase().includes((r[0] || "#").toLowerCase()),
      );
      if (p) {
        window.open(p.live || `${GH}/${p.g}`, "_blank");
        add.push({ t: "opening " + p.n + " ...", c: "o" });
      } else add.push({ t: "project not found. try: projects", c: "e" });
    } else if (CMDS[k]) add.push({ t: CMDS[k](), c: "o" });
    else add.push({ t: `command not found: ${a}. type help`, c: "e" });
    setLines((l) => [...l, ...add]);
  };
  const key = (e) => {
    if (e.key === "Enter") {
      run(v);
      setV("");
    } else if (e.key === "ArrowUp" && hist.current.length) {
      hi.current = Math.max(0, hi.current - 1);
      setV(hist.current[hi.current]);
    } else if (e.key === "ArrowDown") {
      hi.current = Math.min(hist.current.length, hi.current + 1);
      setV(hist.current[hi.current] || "");
    }
  };
  return (
    <section id="lab">
      <div className="wrap">
        <h2 className="s">
          <div>
            <i>03//</i>Terminal Lab
          </div>
          <span>[ TRY IT. TYPE "help" ]</span>
        </h2>
        <div className="card">
          <div className="bar">
            <b style={{ background: "var(--red)" }} />
            <b style={{ background: "var(--amber)" }} />
            <b style={{ background: "var(--mint)" }} />
            <span style={{ marginLeft: 8 }}>rajvi@portfolio:~</span>
          </div>
          <div
            className="term"
            ref={box}
            onClick={() => inp.current.focus({ preventScroll: true })}
          >
            {lines.map((l, i) => (
              <div key={i} className={l.c}>
                {l.t}
              </div>
            ))}
            <div className="inl">
              <span className="pr">rajvi@portfolio:~$</span>
              <input
                ref={inp}
                value={v}
                onChange={(e) => setV(e.target.value)}
                onKeyDown={key}
                autoComplete="off"
                spellCheck="false"
                aria-label="terminal input"
              />
            </div>
          </div>
        </div>
        <div className="hint">
          {["help", "about", "projects", "skills", "contact"].map((c) => (
            <button key={c} className="chip" onClick={() => run(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

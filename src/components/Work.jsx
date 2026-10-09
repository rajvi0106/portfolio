import { useState } from "react";
import { PROJECTS, FILTERS, GH } from "../data";
import { glow } from "../glow";
export default function Work() {
  const [f, setF] = useState("all"),
    [open, setOpen] = useState(null);
  return (
    <section id="work">
      <div className="wrap">
        <h2 className="s">
          <div>
            <i>02//</i>Featured Works
          </div>
          <span>[ FROM GITHUB ]</span>
        </h2>
        <div className="filters">
          {FILTERS.map((k) => (
            <button
              key={k}
              className={"chip" + (f === k ? " on" : "")}
              onClick={() => setF(k)}
            >
              {k[0].toUpperCase() + k.slice(1)}
            </button>
          ))}
        </div>
        <div className="proj">
          {PROJECTS.map((p, i) => (
            <div
              key={p.n}
              className={
                "card rv in" +
                (open === p.n ? " open" : "") +
                (f !== "all" && !p.tags.includes(f) ? " hide" : "")
              }
              onMouseMove={glow}
              onClick={() => setOpen(open === p.n ? null : p.n)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className={"chip " + p.s}>[ {p.st} ]</span>
                <span className="tag" style={{ color: "var(--ghost)" }}>
                  0{i + 1}
                </span>
              </div>
              <h3>{p.n}</h3>
              <div className="tag" style={{ color: "var(--amber)" }}>
                {p.t}
              </div>
              <p>{p.d}</p>
              <div className="more">{p.x}</div>
              <div className="row">
                {p.c.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
              <div className="push">
                {p.live && (
                  <a
                    className="btn p"
                    href={p.live}
                    target="_blank"
                    rel="noopener"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live demo ↗
                  </a>
                )}
                <a
                  className="btn"
                  href={`${GH}/${p.g}`}
                  target="_blank"
                  rel="noopener"
                  onClick={(e) => e.stopPropagation()}
                >
                  Source ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

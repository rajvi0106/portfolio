import { glow } from "../glow";
const ITEMS = [
  [
    "01",
    "Solve a real problem",
    "Every project starts from a real pain point: campus talent that is hard to find, interview prep with no feedback, bills that must be exact.",
  ],
  [
    "02",
    "Correctness first",
    "Idempotent writes, safe concurrency and clean transactions. Fast is good, wrong is expensive.",
  ],
  [
    "03",
    "Ship it live",
    "Demos you can click beat screenshots. I deploy what I build and keep the code open.",
  ],
];
const STATS = [
  ["REPOS", "25"],
  ["STUDYING", "B.TECH 3RD YEAR"],
  ["MODE", "OPEN SOURCE"],
];
export default function Craft() {
  return (
    <section id="craft">
      <div className="wrap">
        <h2 className="s">
          <div>
            <i>01//</i>Philosophy &amp; Craft
          </div>
          <span>[ HOW I BUILD ]</span>
        </h2>
        <div className="ph rv">
          {ITEMS.map(([n, h, p]) => (
            <div className="card" key={n} onMouseMove={glow}>
              <span className="n">{n}</span>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
        <div className="kv rv">
          {STATS.map(([k, v]) => (
            <div key={k}>
              <small>{k}</small>
              <strong>{v}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

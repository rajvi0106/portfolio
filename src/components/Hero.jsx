import { useEffect, useRef, useState } from "react";
const WORDS = ["interactive UIs", "full-stack apps", "reliable backends"];
const MOODS = [
  "PURRING // 100%",
  "COMPILING // ZZZ",
  "HUNTING BUGS",
  "READY // AWAKE",
  "NAP MODE // 3AM",
];
const GRID = [
  "##......##",
  "###....###",
  "##########",
  "#ee####ee#",
  "##########",
  "####nn####",
  ".########.",
  "..######..",
];
function Typed() {
  const [t, setT] = useState("");
  useEffect(() => {
    let wi = 0,
      ci = 0,
      del = false,
      id;
    const tick = () => {
      const w = WORDS[wi];
      setT(w.slice(0, ci));
      if (!del && ci === w.length) {
        del = true;
        id = setTimeout(tick, 1400);
        return;
      }
      if (del && ci === 0) {
        del = false;
        wi = (wi + 1) % WORDS.length;
      }
      ci += del ? -1 : 1;
      id = setTimeout(tick, del ? 40 : 80);
    };
    tick();
    return () => clearTimeout(id);
  }, []);
  return (
    <>
      {t}
      <span style={{ color: "var(--amber)" }}>_</span>
    </>
  );
}
function Cat() {
  const ref = useRef(),
    [blink, setBlink] = useState(false),
    [m, setM] = useState(3);
  useEffect(() => {
    const x = ref.current.getContext("2d");
    x.clearRect(0, 0, 10, 8);
    GRID.forEach((r, y) =>
      [...r].forEach((k, i) => {
        if (k === ".") return;
        x.fillStyle =
          k === "#"
            ? "#ff7733"
            : k === "n"
              ? "#ff2a5f"
              : blink
                ? "#ff7733"
                : "#00f0a8";
        x.fillRect(i, y, 1, 1);
      }),
    );
  }, [blink]);
  useEffect(() => {
    let t;
    const id = setInterval(() => {
      setBlink(true);
      t = setTimeout(() => setBlink(false), 150);
    }, 3000);
    return () => {
      clearInterval(id);
      clearTimeout(t);
    };
  }, []);
  const click = (e) => {
    setM((m + 1) % MOODS.length);
    e.currentTarget.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-14px)" },
        { transform: "translateY(0)" },
      ],
      { duration: 300 },
    );
  };
  return (
    <>
      <canvas
        id="cat"
        ref={ref}
        width="10"
        height="8"
        onClick={click}
        title="click me"
      />
      <span className="chip m">{MOODS[m]}</span>
      <small style={{ color: "var(--ghost)", font: "10px var(--m)" }}>
        CLICK THE CAT
      </small>
    </>
  );
}
export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="wrap grid2">
        <div>
          <span className="chip a">
            ● Open to internships &amp; open source
          </span>
          <p className="tag" style={{ marginTop: 20 }}>
            // SYS.ROOT.RAJVI_SINGH_RATHORE
          </p>
          <h1>Rajvi Singh Rathore</h1>
          <div className="sub">
            Building Practical Web Products, <Typed />
          </div>
          <p className="lead">
            3rd year B.Tech student at IIIT Jabalpur and Dev Wing core member at
            Bitbyte TPC. I build full-stack apps that solve real problems, from
            AI interview practice to billing systems that stay correct under
            load.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn p" href="#work">
              Explore works ↓
            </a>
            <a className="btn" href="#lab">
              Initialize terminal ›
            </a>
          </div>
        </div>
        <div className="card">
          <div className="bar">
            <b style={{ background: "var(--red)" }} />
            <b style={{ background: "var(--amber)" }} />
            <b style={{ background: "var(--mint)" }} />
            <span style={{ marginLeft: "auto" }}>[ PURR_KERNEL.BIN ]</span>
          </div>
          <div
            className="pad"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Cat />
          </div>
        </div>
      </div>
    </section>
  );
}

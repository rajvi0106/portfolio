import { useEffect, useRef } from "react";
export default function Stars() {
  const ref = useRef();
  useEffect(() => {
    const c = ref.current,
      x = c.getContext("2d");
    let W,
      H,
      S,
      mx = 0,
      sy = 0,
      raf;
    const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const init = () => {
      W = c.width = innerWidth;
      H = c.height = innerHeight;
      S = Array.from({ length: Math.min(160, W / 6) }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        z: Math.random() * 0.9 + 0.1,
        a: Math.random(),
      }));
    };
    const mm = (e) => (mx = e.clientX / W - 0.5),
      sc = () => (sy = scrollY);
    init();
    addEventListener("resize", init);
    addEventListener("mousemove", mm);
    addEventListener("scroll", sc, { passive: true });
    const f = (t) => {
      x.clearRect(0, 0, W, H);
      S.forEach((s) => {
        const y =
          (((s.y - sy * s.z * 0.4 + (still ? 0 : t * 0.01 * s.z)) % H) + H) % H;
        x.globalAlpha = 0.3 + 0.5 * Math.abs(Math.sin(t / 1500 + s.a * 6));
        x.fillStyle = s.z > 0.8 ? "#ff7733" : "#f4f4f6";
        x.fillRect(s.x - mx * 30 * s.z, y, s.z * 2, s.z * 2);
      });
      raf = requestAnimationFrame(f);
    };
    raf = requestAnimationFrame(f);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", init);
      removeEventListener("mousemove", mm);
      removeEventListener("scroll", sc);
    };
  }, []);
  return <canvas id="stars" ref={ref} />;
}

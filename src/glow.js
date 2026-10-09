// moves the orange glow with the cursor on any card
export const glow = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", e.clientX - r.left + "px");
  e.currentTarget.style.setProperty("--y", e.clientY - r.top + "px");
};

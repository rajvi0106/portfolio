export const EMAIL = "rajvisinghrathore001@gmail.com";
export const GH = "https://github.com/rajvi0106";
export const LINKS = [
  ["GITHUB / rajvi0106", "FOLLOW ↗", GH],
  [
    "LINKEDIN / rajvi-singhrathore",
    "CONNECT ↗",
    "https://linkedin.com/in/rajvi-singhrathore",
  ],
  ["LEETCODE / rajvi0106", "VIEW ↗", "https://www.leetcode.com/rajvi0106"],
];
export const SKILLS =
  "JavaScript, React, Next.js, Node.js, Python, C++, MongoDB, MySQL, PostgreSQL, Tailwind, Postman, Figma, Linux, Arduino";
export const PROJECTS = [
  {
    n: "PrepRoom",
    t: "AI interview practice platform",
    d: "Practice technical and behavioral questions, get instant AI feedback on written answers, and track accuracy by topic with a spaced repetition review queue.",
    x: "Built with JWT auth in httpOnly cookies, topic and difficulty selection, and a review queue that brings weak topics back.",
    g: "PrepRoom",
    live:"https://prep-room-six.vercel.app/",
    tags: ["ai", "backend"],
    c: ["AI", "JWT", "JS"],
    s: "m",
    st: "LIVE",
  },
  {
    n: "Billing-system",
    t: "Usage metering & invoicing",
    d: "Backend that meters usage events and creates period-based invoices. Built to show correct billing: idempotency, concurrency safety and transactional consistency.",
    x: "Live demo runs on a free tier, so the first request after idle can take about a minute to wake up.",
    g: "Billing-system",
    live: "https://billing-system-s195.onrender.com",
    tags: ["backend"],
    c: ["BACKEND", "POSTGRES", "IDEMPOTENT"],
    s: "m",
    st: "LIVE",
  },
  {
    n: "The-Invisible",
    t: "Campus networking for IIITDMJ",
    d: "Shows the unseen links between students and faculty, so you can find peers with specific skills for projects, collaboration or mentorship.",
    x: "Built to break the silos between branches and batches on a large campus.",
    g: "The-Invisible",
    live:"https://the-invisible.vercel.app/",
    tags: ["community"],
    c: ["COMMUNITY", "JS"],
    s: "a",
    st: "LIVE",
  },
  {
    n: "Vibe-Nearby",
    t: "Find places around you",
    d: "React app that uses your location and Google Maps to explore nearby places in a simple, responsive interface.",
    x: "Uses the browser Geolocation API with Google Maps. Built with React and Vite.",
    g: "Vibe-Nearby",
    tags: ["react"],
    c: ["REACT", "VITE", "MAPS"],
    s: "a",
    st: "APP",
  },
];
export const FILTERS = ["all", "backend", "ai", "react", "community"];

/* ==========================================================
   CONFIG: edit these values, then push to GitHub.
   Leave a value as "" to hide it on the site.
   ========================================================== */
const CONFIG = {
  // Your GitHub username, e.g. "prashanthc". Empty string hides every GitHub link.
  githubUsername: "prashanth-gitgram",
  // Path to the resume PDF (put the file in the assets/ folder).
  resumePath: "assets/Prashanth_C_Resume.pdf",
};

/* ==========================================================
   PROJECT DATA (from the resume)
   ========================================================== */
const PROJECTS = [
  {
    id: "phishing",
    featured: true,
    title: "Phishing Simulation Platform",
    company: "Succeed Technologies",
    companyKey: "succeed",
    duration: "", // e.g. "Jul 2025 – Present" (empty = hidden)
    icon: "hook",
    environment: ["Linux", "Git/GitHub", "Postman", "Cursor"],
    skills: ["PHP", "Laravel", "MySQL", "REST APIs", "Queues and Background Jobs"],
    description:
      "A security awareness platform that lets organizations run simulated phishing campaigns against their employees to test and train how they respond to real phishing attacks.",
    responsibilities: [
      "Co-built the application in a two-person team.",
      "Planned the application's architecture, database design, and module structure from scratch.",
      "Developed the core features in PHP and Laravel and took ownership of the product from planning through production.",
      "Tested, deployed, and maintained the application with no dedicated QA team.",
    ],
  },
  {
    id: "grc",
    title: "GRC Platform for SOC 2 Compliance",
    company: "Succeed Technologies",
    companyKey: "succeed",
    duration: "", // e.g. "Jul 2025 – Present" (empty = hidden)
    icon: "shield",
    environment: ["Windows", "Linux", "Git/GitHub", "Cursor"],
    skills: ["PHP", "Laravel", "MySQL", "REST APIs", "SOC 2", "Windows agent (.NET, AI-assisted)"],
    description:
      "A governance, risk, and compliance platform used by clients to track their security controls and stay audit-ready for SOC 2.",
    responsibilities: [
      "Designed and built the platform's backend, dashboards, and compliance tracking features.",
      "Built Windows (.NET) and Linux endpoint agents that collect device compliance data and sync it to the central dashboard.",
      "Used AI-assisted development to ship the Windows agent on a previously unfamiliar stack.",
    ],
  },
  {
    id: "email",
    title: "Email Marketing Application and Newsletter System",
    company: "Succeed Technologies",
    companyKey: "succeed",
    duration: "", // e.g. "Jul 2025 – Present" (empty = hidden)
    icon: "mail",
    environment: ["Linux", "Git/GitHub", "Postman"],
    skills: ["PHP", "Laravel", "MySQL", "Queues and Background Jobs"],
    description:
      "An email marketing application and newsletter system for creating, sending, and managing email campaigns and newsletters to subscriber lists.",
    responsibilities: [
      "Independently designed, built, and maintain both systems from design through production.",
      "Handled testing, deployment, and production fixes end to end.",
    ],
  },
  {
    id: "property",
    title: "Property Management Platform for a Dubai Client",
    company: "Zysk Technologies",
    companyKey: "zysk",
    duration: "", // e.g. "Mar 2023 – Jun 2025" (empty = hidden)
    icon: "building",
    environment: ["Linux", "Git/GitHub", "Postman"],
    skills: ["PHP", "Laravel", "MySQL", "REST APIs", "Filament"],
    description:
      "A property management platform for a Dubai-based client, made up of 6 to 7 interconnected applications, and the company's major client project.",
    responsibilities: [
      "Built the entire backend of the platform across all 6 to 7 applications.",
      "Designed the database schemas, REST APIs, and business logic for every application.",
      "Tested and documented APIs with Postman and managed code on GitHub.",
    ],
  },
  {
    id: "wedding",
    title: "Wedding Photo Management Application",
    company: "Zysk Technologies",
    companyKey: "zysk",
    duration: "", // e.g. "Mar 2023 – Jun 2025" (empty = hidden)
    icon: "camera",
    environment: ["AWS", "Git/GitHub"],
    skills: ["Python", "AWS Rekognition", "AWS S3"],
    description:
      "A wedding photo management application where guests upload a single photo of their face and instantly find every photo they appear in.",
    responsibilities: [
      "Built the AI face recognition feature using AWS Rekognition.",
      "Set up photo storage and retrieval on AWS S3.",
    ],
  },
];

const ICONS = {
  hook: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" /><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3"/>',
  shield: '<path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z"/><path d="m9 12 2 2 4-4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
  building: '<path d="M4 21V5l8-2v18M12 8l8 2v11M2 21h20"/><path d="M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.documentElement.classList.add("js");

/* ---------- helpers ---------- */
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
const esc = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const tagsHTML = (arr) => arr.map((t) => `<li>${esc(t)}</li>`).join("");

/* ---------- config ---------- */
function applyConfig() {
  const user = (CONFIG.githubUsername || "").trim();
  if (user) {
    const url = `https://github.com/${encodeURIComponent(user)}`;
    $$(".gh-only").forEach((el) => (el.hidden = false));
    $$(".gh-link").forEach((a) => (a.href = url));
    $$(".gh-text").forEach((a) => (a.textContent = `github.com/${user}`));
  }
  const resumeBtn = $("#resume-btn");
  if (resumeBtn) {
    if (CONFIG.resumePath) resumeBtn.href = CONFIG.resumePath;
    else resumeBtn.hidden = true;
  }
  $("#year").textContent = new Date().getFullYear();
}

/* ---------- theme ---------- */
function initTheme() {
  const btn = $("#theme-toggle");
  const root = document.documentElement;
  const sync = () => {
    const isLight = root.getAttribute("data-theme") === "light";
    btn.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
    $('meta[name="theme-color"]').setAttribute("content", isLight ? "#f7f8fb" : "#0b0f17");
  };
  sync();
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  });
}

/* ---------- nav ---------- */
function initNav() {
  const nav = $("#top-nav");
  const toggle = $(".nav-toggle");
  const links = $("#nav-links");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const close = () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  $$("a", links).forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  // Active section highlight
  const sections = $$("main section[id]");
  const map = new Map($$("a", links).map((a) => [a.getAttribute("href").slice(1), a]));
  const setActive = () => {
    const y = window.scrollY + window.innerHeight * 0.35;
    let current = null;
    sections.forEach((s) => { if (s.offsetTop <= y) current = s.id; });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections[sections.length - 1].id;
    map.forEach((a, id) => {
      const on = id === current;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  };
  window.addEventListener("scroll", setActive, { passive: true });
  window.addEventListener("resize", setActive);
  setActive();
}

/* ---------- terminal typing ---------- */
function initTerminal() {
  const el = $("#terminal");
  const lines = [
    { cmd: "whoami" },
    { out: '<span class="s">Prashanth C</span> <span class="m">// Backend Developer</span>' },
    { cmd: "cat stack.json" },
    {
      out:
        '{\n  <span class="k">"core"</span>: [<span class="s">"PHP"</span>, <span class="s">"Laravel"</span>, <span class="s">"MySQL"</span>],\n' +
        '  <span class="k">"backend"</span>: [<span class="s">"REST APIs"</span>, <span class="s">"Queues"</span>,\n              <span class="s">"System Design"</span>],\n' +
        '  <span class="k">"ships"</span>: <span class="s">"architecture → production"</span>\n}',
    },
    { cmd: "ls ~/projects" },
    {
      out:
        '<span class="c">phishing-simulation/</span>  <span class="c">grc-soc2/</span>\n<span class="c">email-marketing/</span>  <span class="c">property-platform/</span>\n<span class="c">wedding-photo-ai/</span>',
    },
  ];
  const prompt = '<span class="p">➜</span> <span class="c">~</span> ';
  const cursor = '<span class="cursor"></span>';

  if (prefersReducedMotion) {
    el.innerHTML = lines.map((l) => (l.cmd ? prompt + esc(l.cmd) : l.out)).join("\n") + "\n" + prompt + cursor;
    return;
  }
  let html = "";
  let i = 0;
  const next = () => {
    if (i >= lines.length) { el.innerHTML = html + prompt + cursor; return; }
    const line = lines[i++];
    if (line.out) {
      html += line.out + "\n";
      el.innerHTML = html + cursor;
      setTimeout(next, 350);
      return;
    }
    let c = 0;
    const type = () => {
      el.innerHTML = html + prompt + esc(line.cmd.slice(0, c)) + cursor;
      if (c++ < line.cmd.length) setTimeout(type, 55 + Math.random() * 45);
      else { html += prompt + esc(line.cmd) + "\n"; setTimeout(next, 300); }
    };
    type();
  };
  setTimeout(next, 500);
}

/* ---------- projects ---------- */
function renderProjects() {
  const grid = $("#project-grid");
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <article class="project-card reveal${p.featured ? " featured" : ""}" data-company="${p.companyKey}" data-id="${p.id}">
      <div class="pc-top">
        <span class="pc-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[p.icon]}</svg></span>
        ${p.featured ? '<span class="pc-badge">main project</span>' : ""}
      </div>
      <p class="pc-company">${esc(p.company)}${p.duration ? ` · ${esc(p.duration)}` : ""}</p>
      <h3>${esc(p.title)}</h3>
      <p class="pc-desc">${esc(p.description)}</p>
      <p class="pc-env"><b>env:</b> ${esc(p.environment.join(" · "))}</p>
      <ul class="tags small" aria-label="Skills">${tagsHTML(p.skills)}</ul>
      <button class="pc-more" type="button" aria-haspopup="dialog" aria-label="View responsibilities for ${esc(p.title)}">
        view responsibilities <span class="arr" aria-hidden="true">→</span>
      </button>
    </article>`
  ).join("");

  $$(".pc-more", grid).forEach((btn) =>
    btn.addEventListener("click", () => openModal(btn.closest(".project-card").dataset.id, btn))
  );

  // Filters
  $$(".chip-btn").forEach((b) =>
    b.addEventListener("click", () => {
      $$(".chip-btn").forEach((x) => { x.classList.toggle("active", x === b); x.setAttribute("aria-pressed", String(x === b)); });
      const f = b.dataset.filter;
      $$(".project-card", grid).forEach((card) => {
        const show = f === "all" || card.dataset.company === f;
        card.classList.toggle("hide", !show);
        if (show) card.classList.add("visible");
      });
    })
  );
}

/* ---------- modal ---------- */
let lastFocus = null;
function openModal(id, trigger) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  const modal = $("#project-modal");
  $("#modal-company").textContent = p.duration ? `${p.company} · ${p.duration}` : p.company;
  $("#modal-title").textContent = p.title;
  $("#modal-desc").textContent = p.description;
  $("#modal-env").innerHTML = tagsHTML(p.environment);
  $("#modal-env").classList.add("alt");
  $("#modal-skills").innerHTML = tagsHTML(p.skills);
  $("#modal-resp").innerHTML = p.responsibilities.map((r) => `<li>${esc(r)}</li>`).join("");
  lastFocus = trigger || document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  $(".modal-dialog", modal).scrollTop = 0;
  $(".modal-close", modal).focus();
  history.replaceState(null, "", `#project-${id}`);
}
function closeModal() {
  const modal = $("#project-modal");
  if (modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  history.replaceState(null, "", "#projects");
  if (lastFocus) lastFocus.focus();
}
function initModal() {
  const modal = $("#project-modal");
  $$("[data-close]", modal).forEach((el) => el.addEventListener("click", closeModal));
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { e.preventDefault(); closeModal(); return; }
    if (e.key !== "Tab") return;
    // Focus trap
    const f = $$('button, [href], [tabindex]:not([tabindex="-1"])', $(".modal-dialog", modal)).filter((x) => !x.hidden);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  // Deep link: #project-phishing opens that modal
  const m = location.hash.match(/^#project-(\w+)$/);
  if (m) {
    const btn = $(`.project-card[data-id="${m[1]}"] .pc-more`);
    if (btn) { $("#projects").scrollIntoView(); openModal(m[1], btn); }
  }
}

/* ---------- scroll reveal ---------- */
function initReveal() {
  const items = $$(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
    }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el, idx) => {
    el.style.transitionDelay = `${(idx % 3) * 70}ms`;
    io.observe(el);
  });
}

/* ---------- copy buttons ---------- */
function initCopy() {
  const toast = $("#toast");
  let t;
  const show = (msg) => {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(t);
    t = setTimeout(() => toast.classList.remove("show"), 1800);
  };
  $$(".copy-btn").forEach((b) =>
    b.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(b.dataset.copy);
        show("Copied to clipboard ✓");
      } catch (e) {
        show(b.dataset.copy);
      }
    })
  );
}

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initTheme();
  initNav();
  renderProjects();
  initModal();
  initReveal();
  initCopy();
  initTerminal();
});

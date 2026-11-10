/* Builds the page from content.js. You normally never need to edit this file. */
(function () {
  const C = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const root = document.documentElement;

  /* ----- Look & light/dark mode ----- */
  // A ?style=dashboard (or ?theme=light) in the address previews another look without editing content.js.
  const STYLES = ["noir", "ledger", "ticker", "quant", "dashboard", "signal", "terminal", "editorial"];
  const params = new URLSearchParams(location.search);
  const wanted = params.get("style") || C.style;
  C.style = STYLES.includes(wanted) ? wanted : "editorial";
  root.dataset.style = C.style;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  const prefersDark = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultTheme = C.theme === "light" || C.theme === "dark" ? C.theme : (prefersDark ? "dark" : "light");
  root.dataset.theme = params.get("theme") || saved || defaultTheme;
  $("themeToggle").onclick = () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  };

  /* ----- Page title / description ----- */
  document.title = `${C.name} — ${C.role}`;
  document.querySelector('meta[name="description"]').content = C.tagline;
  const [first, ...rest] = C.name.toLowerCase().split(" ");
  $("logo").innerHTML = rest.length ? `${esc(first)}<span>.</span>${esc(rest.join(""))}` : esc(first);

  /* ----- Hero ----- */
  const initials = C.name.split(" ").map((w) => w[0]).join("").slice(0, 2);
  const portrait = C.photo
    ? `<img class="portrait" src="${esc(C.photo)}" alt="Portrait of ${esc(C.name)}">`
    : `<div class="portrait initials" aria-hidden="true">${esc(initials)}</div>`;
  $("top").innerHTML = `
    <div>
      ${C.status ? `<span class="status">${esc(C.status)}</span>` : ""}
      <p class="label" style="margin-top:22px">${label(0, "hello")}</p>
      <h1>${esc(C.name)}</h1>
      <p class="role">${esc(C.role)}${C.location ? ` <span class="muted">· ${esc(C.location)}</span>` : ""}</p>
      <p class="tagline">${esc(C.tagline)}</p>
      <div class="buttons">
        ${C.resumePdf ? `<a class="btn primary" href="${esc(C.resumePdf)}" target="_blank" rel="noopener">Download resume</a>` : ""}
        <a class="btn" href="#contact">Get in touch</a>
      </div>
    </div>
    ${portrait}
    ${C.stats?.length ? `<div class="stats">${C.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("")}</div>` : ""}
  `;

  /* ----- Sections (shown in this order; leave a list empty to hide a section) ----- */
  const sections = [
    { id: "about", title: "about", show: true, html: about },
    { id: "numbers", title: "by the numbers", show: !!C.metrics, html: numbers },
    { id: "experience", title: "experience", show: C.experience?.length, html: experience },
    { id: "skills", title: "skills", show: C.skills?.length, html: skills },
    { id: "education", title: "education", show: C.education?.length, html: education },
    { id: "beyond", title: "beyond work", show: C.interests?.length, html: interests },
    { id: "contact", title: "contact", show: true, html: contact },
  ].filter((s) => s.show);

  $("sections").innerHTML = sections
    .map((s, i) => `<section id="${s.id}" class="${s.id}"><p class="label">${label(i + 1, s.title)}</p>${s.html()}</section>`)
    .join("");
  const navName = { "by the numbers": "impact", "beyond work": "life" };
  $("nav").innerHTML = sections.map((s) => {
    const t = navName[s.title] || s.title;
    return `<a href="#${s.id}">${C.style === "ticker" ? esc(t.toUpperCase()) : esc(t)}</a>`;
  }).join("");

  function label(n, title) {
    const num = String(n).padStart(2, "0");
    if (C.style === "terminal") return `/* ${num} _${esc(title.replace(/ /g, "_"))} */`;
    if (C.style === "ticker") return `[${num}] ${esc(title.toUpperCase())}`;
    return `${num} — ${esc(title)}`;
  }

  /* ----- "By the numbers" charts (all plain HTML/SVG, colors follow the chosen look) ----- */
  function numbers() {
    const M = C.metrics;
    const panel = (cls, title, note, body) =>
      `<div class="panel ${cls}"><div class="panel-head"><span>${esc(title)}</span>${note ? `<span class="note">${esc(note)}</span>` : ""}</div>${body}</div>`;
    let out = `<h2>${esc(M.heading)}</h2>${M.intro ? `<p class="muted lead">${esc(M.intro)}</p>` : ""}<div class="dash">`;

    if (M.impact?.length) {
      // Log scale so $2M and $400M both stay readable.
      const max = Math.max(...M.impact.map((d) => d.value));
      const w = (v) => Math.max(4, (Math.log10(v + 1) / Math.log10(max + 1)) * 100);
      out += panel("full", "Business impact", "$ millions · log scale",
        `<div class="bars">${M.impact.map((d) => `
          <div class="bar-row">
            <div class="bar-label">${esc(d.label)}${d.when ? ` <span class="when">${esc(d.when)}</span>` : ""}</div>
            <div class="bar-track"><div class="bar grow" style="--w:${w(d.value).toFixed(1)}%"></div></div>
            <div class="bar-value">${esc(d.display)}</div>
          </div>`).join("")}</div>`);
    }

    if (M.gains?.length) {
      const R = 34, CIRC = 2 * Math.PI * R;
      out += panel("", "Efficiency gains", "",
        `<div class="rings">${M.gains.map((g) => `
          <figure class="ring">
            <svg viewBox="0 0 80 80" aria-hidden="true">
              <circle cx="40" cy="40" r="${R}" class="ring-bg"/>
              <circle cx="40" cy="40" r="${R}" class="ring-fg grow" style="--dash:${((g.value / 100) * CIRC).toFixed(1)};--circ:${CIRC.toFixed(1)}"/>
            </svg>
            <b>${g.value}%</b>
            <figcaption>${esc(g.label)}<small>${esc(g.detail || "")}</small></figcaption>
          </figure>`).join("")}</div>`);
    }

    if (M.beforeAfter?.length) {
      out += panel("", "Before → after", "",
        M.beforeAfter.map((b) => {
          const lo = Math.max(0, Math.floor((b.before - 15) / 10) * 10), hi = 100;
          const pos = (v) => ((v - lo) / (hi - lo)) * 100;
          return `<div class="dumbbell">
            <div class="db-label">${esc(b.label)}</div>
            <div class="db-track">
              <div class="db-line grow" style="--l:${pos(b.before)}%;--r:${100 - pos(b.after)}%"></div>
              <span class="db-dot before" style="left:${pos(b.before)}%"><i>${b.before}${esc(b.unit)}</i></span>
              <span class="db-dot after" style="left:${pos(b.after)}%"><i>${b.after}${esc(b.unit)}</i></span>
            </div>
            <div class="db-scale"><span>${lo}${esc(b.unit)}</span><span>${hi}${esc(b.unit)}</span></div>
            ${b.detail ? `<p class="db-detail">${esc(b.detail)}</p>` : ""}
            <div class="db-delta">+${(b.after - b.before).toFixed(0)} pts</div>
          </div>`;
        }).join(""));
    }

    if (M.timeline?.length) {
      const now = new Date().getFullYear() + new Date().getMonth() / 12;
      const rows = M.timeline.map((t) => ({ ...t, end: t.end === "now" ? now : t.end })).sort((a, b) => b.start - a.start);
      const min = Math.floor(Math.min(...rows.map((r) => r.start)));
      const max = Math.ceil(now);
      const x = (v) => ((v - min) / (max - min)) * 100;
      const ticks = [];
      for (let y = min; y <= max; y += 2) ticks.push(y);
      out += panel("full", "Career timeline", `${min} – today`,
        `<div class="gantt">
          ${rows.map((r) => `<div class="g-row">
            <div class="g-label">${esc(r.label)}</div>
            <div class="g-track">${ticks.map((t) => `<i class="g-grid" style="left:${x(t)}%"></i>`).join("")}
              <div class="g-bar ${esc(r.kind)} grow" style="left:${x(r.start)}%;--w:${Math.max(1.2, x(r.end) - x(r.start))}%"></div>
            </div></div>`).join("")}
          <div class="g-row g-axis"><div class="g-label"></div><div class="g-track">${ticks.map((t) => `<span style="left:${x(t)}%">${t}</span>`).join("")}</div></div>
          <div class="g-legend"><span class="work">Work</span><span class="edu">Education</span><span class="service">Military service</span></div>
        </div>`);
    }

    if (M.proof?.length) {
      out += panel("full", "Proof points", "",
        `<div class="proof">${M.proof.map((p) => `<div><b>${esc(p.value)}</b><span>${esc(p.label)}</span></div>`).join("")}</div>`);
    }
    return out + "</div>";
  }

  function about() {
    return `<h2>${esc(C.about.heading)}</h2>
      <div class="about-grid">
        <div>${C.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
        ${C.about.callout ? `<div class="callout"><h3>${esc(C.about.callout.title)}</h3><p style="margin:0">${esc(C.about.callout.text)}</p></div>` : ""}
      </div>`;
  }

  function experience() {
    return `<h2>Where I've worked</h2><ol class="timeline">${C.experience
      .map((j) => `<li class="job">
        <div class="when">${esc(j.dates)}</div>
        <div>
          <h3>${esc(j.title)}</h3>
          <div class="org">${j.link ? `<a href="${esc(j.link)}" target="_blank" rel="noopener">${esc(j.company)}</a>` : esc(j.company)}${j.place ? ` <span class="muted">· ${esc(j.place)}</span>` : ""}</div>
          ${j.summary ? `<p style="margin:10px 0 0">${esc(j.summary)}</p>` : ""}
          ${j.highlights?.length ? `<ul>${j.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
          ${j.tags?.length ? `<div class="tags">${j.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
        </div></li>`)
      .join("")}</ol>`;
  }

  function skills() {
    return `<h2>What I bring</h2><div class="grid2">${C.skills
      .map((g) => `<div class="card"><h3>${esc(g.group)}</h3><div class="tags">${g.items.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div></div>`)
      .join("")}</div>`;
  }

  function education() {
    return `<h2>Education & certifications</h2><div class="grid2">${C.education
      .map((e) => `<div class="card"><p class="label" style="margin:0 0 6px">${esc(e.dates)}</p><h3>${esc(e.degree)}</h3><p class="muted">${esc(e.school)}</p>${e.note ? `<p>${esc(e.note)}</p>` : ""}</div>`)
      .join("")}</div>`;
  }

  function interests() {
    return `<h2>${esc(C.interestsHeading || "Beyond work")}</h2><div class="hobbies">${C.interests
      .map((h) => `<div class="hobby">
        ${h.photo ? `<img class="pic" src="${esc(h.photo)}" alt="${esc(h.title)}" loading="lazy">` : `<div class="pic emoji" aria-hidden="true">${esc(h.emoji || "✦")}</div>`}
        <div class="body"><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p></div></div>`)
      .join("")}</div>`;
  }

  function contact() {
    return `<h2>${esc(C.contact.heading)}</h2>
      <p class="muted" style="max-width:52ch;margin:-12px 0 28px">${esc(C.contact.text)}</p>
      <div class="links">${C.contact.links
        .map((l, i) => `<a class="btn ${i === 0 ? "primary" : ""}" href="${esc(l.url)}" ${l.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${esc(l.label)}</a>`)
        .join("")}</div>`;
  }

  /* ----- Footer ----- */
  const tracking = C.statcounter?.project;
  $("footer").innerHTML = `<span>© ${new Date().getFullYear()} ${esc(C.name)}</span>
    ${tracking ? `<span>This site counts visits with Statcounter (IP address, approximate location, browser). No cookies are used for advertising.</span>` : ""}`;

  /* ----- Animate charts when they scroll into view ----- */
  const growers = document.querySelectorAll(".grow");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.2 });
    growers.forEach((g) => io.observe(g));
  } else {
    growers.forEach((g) => g.classList.add("in"));
  }

  /* ----- Look switcher: only on your own computer (localhost / opened file), never on the live site ----- */
  if (location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(location.hostname)) {
    const bar = document.createElement("div");
    bar.style.cssText = "position:fixed;right:16px;bottom:16px;z-index:20;display:flex;gap:6px;flex-wrap:wrap;padding:8px;border-radius:10px;background:var(--surface);border:1px solid var(--line);box-shadow:0 6px 24px rgba(0,0,0,.25);font:12px var(--label-font)";
    bar.innerHTML = `<span style="align-self:center;color:var(--muted);padding:0 4px">look:</span>` + STYLES.map((s) =>
      `<a href="?style=${s}" style="padding:4px 8px;border-radius:6px;text-decoration:none;${s === C.style ? "background:var(--accent);color:var(--bg)" : "color:var(--text)"}">${s}</a>`).join("");
    document.body.appendChild(bar);
  }

  /* ----- Visitor tracking (Statcounter) ----- */
  if (tracking) {
    window.sc_project = Number(C.statcounter.project);
    window.sc_security = C.statcounter.security;
    window.sc_invisible = 1;
    const s = document.createElement("script");
    s.src = "https://www.statcounter.com/counter/counter.js";
    s.async = true;
    document.body.appendChild(s);
  }
})();

/* ---------- product scenes on one clock (after Meng To's one-clock demo, prompt-motion.com) ----------
   Every frame is worked out from the time alone: seek(t) draws the exact frame for t in 0..8 s.
   Each scene is complete at frame 0; one object changes shape (a button becomes the inbox row, a result
   climbs to first place and its link becomes the citation, a comment becomes a message); the hold keeps
   something small alive; everything eases back so 0 and 8 are the same frame. */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches, L = 8;
  const EZ = { io: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2), out: (x) => 1 - Math.pow(1 - x, 3), in: (x) => x * x * x, lin: (x) => x,
    sp: (x) => (x >= 1 ? 1 : 1 - Math.exp(-6.2 * x) * (Math.cos(2.35 * Math.PI * x) + (6.2 / (2.35 * Math.PI)) * Math.sin(2.35 * Math.PI * x))),
    bn: (x) => (x >= 1 ? 1 : 1 - Math.exp(-4.6 * x) * (Math.cos(2.9 * Math.PI * x) + (4.6 / (2.9 * Math.PI)) * Math.sin(2.9 * Math.PI * x))) };
  const K = (t, kf, ez = "io") => {
    if (t <= kf[0][0]) return kf[0][1];
    for (let i = 1; i < kf.length; i++) { const b = kf[i]; if (t <= b[0]) { const a = kf[i - 1], d = b[0] - a[0]; return d <= 0 ? b[1] : a[1] + (b[1] - a[1]) * EZ[b[2] || ez]((t - a[0]) / d); } }
    return kf[kf.length - 1][1];
  };
  const on = (a, b, c = 6.6, d = 7.0, lo = 0, hi = 1) => [[0, lo], [a, lo], [b, hi], [c, hi], [d, lo], [L, lo]];
  const pop = (a) => [[0, 0], [a, 0], [a + 0.22, 1], [6.8, 1], [7.1, 0], [L, 0]];
  const clamp = (v) => Math.max(0, Math.min(1, v));

  const S = {
    web: { w: 620, h: 420, tracks: {
      cur: { x: [[0, 560], [0.25, 560], [0.75, 196], [1.45, 196], [1.9, 196], [2.15, 190], [6.6, 190], [7, 560], [L, 560]], y: [[0, 400], [0.25, 400], [0.75, 196], [1.2, 196], [1.45, 248], [1.9, 248], [2.15, 300], [6.6, 300], [7, 400], [L, 400]], o: [[0, 0], [0.25, 0], [0.5, 1], [2.45, 1], [2.7, 0], [L, 0]] },
      ty1: { "--tw": on(0.8, 1.25, 6.7, 7.2) }, ty2: { "--tw": on(1.45, 1.95, 6.7, 7.2) },
      send: { s: [[0, 1], [2.1, 1], [2.2, 0.93, "out"], [2.6, 1], [L, 1]] }, sendB: { o: on(2.22, 2.36, 6.8, 7.1) },
      tok: { x: [[0, 54], [2.4, 54], [3.2, 416], [6.9, 416], [6.95, 54], [L, 54]], y: [[0, 294], [2.4, 294], [3.2, 122, "out"], [6.9, 122], [6.95, 294], [L, 294]], w: [[0, 300], [2.4, 300], [3.2, 172], [6.9, 172], [6.95, 300], [L, 300]], h: [[0, 40], [2.4, 40], [3.2, 50], [6.9, 50], [6.95, 40], [L, 40]], r: [[0, 20], [2.4, 20], [3.2, 13], [6.9, 13], [6.95, 20], [L, 20]], o: [[0, 0], [2.34, 0], [2.38, 1], [6.6, 1], [6.9, 0], [L, 0]] },
      tokL: { o: [[0, 1], [2.4, 1], [2.65, 0], [6.95, 0], [7, 1], [L, 1]] }, tokR: { o: [[0, 0], [2.8, 0], [3.15, 1], [6.95, 1], [7, 0], [L, 0]] },
      rows: { y: [[0, 0], [2.6, 0], [3.2, 58], [6.8, 58], [7.4, 0], [L, 0]] },
      ring: { o: [[0, 0], [3.3, 0], [3.4, 0.9], [4.3, 0], [5, 0], [5.1, 0.6], [6, 0], [L, 0]], s: [[0, 1], [3.3, 1], [4.3, 1.12, "out"], [4.35, 1], [5, 1], [6, 1.1, "out"], [6.05, 1], [L, 1]] },
    } },
    search: { w: 620, h: 420, tracks: {
      qty: { "--tw": on(0.2, 0.85, 7.0, 7.4) },
      r0: { y: on(0.9, 1.7, 6.7, 7.4, 0, 68) }, r1: { y: on(0.9, 1.7, 6.7, 7.4, 0, 68) }, r2: { y: on(0.9, 1.7, 6.7, 7.4, 0, 68) },
      you: { y: on(0.9, 1.7, 6.7, 7.4, 0, -204), s: [[0, 1], [0.9, 1], [1.3, 1.03], [1.7, 1], [L, 1]] },
      p1: { o: on(1.6, 1.9, 6.6, 6.8) },
      l1: { "--tw": on(1.9, 2.3, 6.8, 7.2) }, l2: { "--tw": on(2.25, 2.65, 6.8, 7.2) }, l3: { "--tw": on(2.6, 2.8, 6.8, 7.2) },
      cite: { x: [[0, 88], [2.65, 88], [3.45, 408], [6.85, 408], [6.9, 88], [L, 88]], y: [[0, 104], [2.65, 104], [3.45, 254, "out"], [6.85, 254], [6.9, 104], [L, 104]], o: [[0, 0], [2.5, 0], [2.65, 1], [6.6, 1], [6.85, 0], [L, 0]], s: [[0, 1], [2.65, 1], [3.05, 1.08], [3.45, 1], [L, 1]] },
      e1: { "--on": on(3.6, 3.8, 6.7, 7.0) }, e2: { "--on": on(3.85, 4.05, 6.7, 7.0) }, e3: { "--on": on(4.1, 4.3, 6.7, 7.0) },
    } },
    content: { w: 620, h: 420, tracks: {
      prog: { sx: [[0, 0], [6.6, 1, "lin"], [7.3, 0], [L, 0]] },
      badge: { o: on(2.1, 2.4), y: on(2.1, 2.5, 6.6, 7.0, 10, 0) },
      ...Object.fromEntries([0, 1, 2, 3].map((i) => ["t" + i, { "--f": on(1.3 + 0.15 * i, 1.5 + 0.15 * i, 6.7, 7.2), s: [[0, 1], [1.3 + 0.15 * i, 1], [1.42 + 0.15 * i, 1.03], [1.62 + 0.15 * i, 1], [L, 1]] }])),
    }, pulses: [0, 1, 2, 3].flatMap((i) => [[i, 0.3 + 0.15 * i, 1.3 + 0.15 * i, "p" + i, 1], [i, 3.7 + 0.15 * i, 4.7 + 0.15 * i, "p" + i, 0]]),
      live: (t, q) => { if (q.recdot) q.recdot.style.opacity = (0.35 + 0.65 * Math.abs(Math.cos(t * 2.4))).toFixed(3); } },
    li: { w: 620, h: 420, tracks: {
      re1: { s: on(0.4, 0.6, 6.8, 7.1) }, re2: { s: on(0.55, 0.75, 6.8, 7.1) },
      cmt: { o: [[0, 0], [0.9, 0], [1.2, 1], [6.6, 1], [6.85, 0], [L, 0]], x: [[0, 40], [1.7, 40], [2.5, 358], [6.85, 358], [6.9, 40], [L, 40]], y: [[0, 316], [0.9, 316], [1.25, 306], [1.7, 306], [2.5, 116, "out"], [6.85, 116], [6.9, 316], [L, 316]], w: [[0, 268], [1.7, 268], [2.5, 228], [6.85, 228], [6.9, 268], [L, 268]], "--pv": [[0, 0], [1.9, 0], [2.5, 1], [6.85, 1], [6.9, 0], [L, 0]] },
      flag: { o: on(2.6, 2.85, 6.6, 6.85), s: [[0, 0.9], [2.6, 0.9], [2.9, 1, "out"], [L, 1]] }, reply: { o: on(3.0, 3.3, 6.6, 6.85) },
    }, live: (t, q) => ["d1", "d2", "d3"].forEach((k, i) => { if (q[k]) q[k].style.opacity = (0.3 + 0.7 * Math.max(0, Math.sin((t - 3.3) * 6 - i * 0.9))).toFixed(3); }) },
    paid: { w: 620, h: 420, tracks: {
      brk: { o: on(0.3, 0.6, 6.6, 6.9), s: [[0, 1.3], [0.3, 1.3], [0.75, 1], [0.8, 1], [1.3, 1.04], [6.6, 1.04], [6.9, 1.3], [L, 1.3]] },
      a0: { o: on(0.8, 1.3, 6.7, 7.2, 1, 0.42) }, a2: { o: on(0.8, 1.3, 6.7, 7.2, 1, 0.42) }, a3: { o: on(0.8, 1.3, 6.7, 7.2, 1, 0.42) },
      a1: { s: on(0.8, 1.3, 6.7, 7.2, 1, 1.04) },
      b0: { s: pop(1.35) }, b1: { s: pop(1.47) }, b2: { s: pop(1.59) }, b3: { s: pop(1.71) },
      cm: { o: on(1.8, 2.1, 6.7, 7.1, 0.35, 1) },
      link: { o: on(2.1, 2.4) }, badge: { o: on(2.7, 3.0), y: on(2.7, 3.1, 6.6, 7.0, 10, 0) },
    }, live: (t, q) => { if (q.link) q.link.style.strokeDashoffset = (-t * 18).toFixed(1); } },
    ops: { w: 620, h: 420, tracks: {
      c1: { "--on": on(0.5, 0.75, 6.7, 7.1) }, c2: { "--on": on(0.95, 1.2, 6.7, 7.1) }, c3: { "--on": on(1.4, 1.65, 6.7, 7.1) },
      lead: { y: [[0, 0], [1.75, 0], [2.3, 247], [6.85, 247], [6.9, 0], [L, 0]], o: [[0, 1], [2.2, 1], [2.45, 0], [6.9, 0], [7.2, 1], [L, 1]], s: [[0, 1], [1.75, 1], [2.3, 0.92], [6.9, 0.92], [6.95, 1], [L, 1]] },
      dest: { "--on": on(2.25, 2.5, 6.7, 7.1), s: [[0, 1], [2.25, 1], [2.4, 1.04], [2.6, 1], [L, 1]] },
      bS: { "--v": on(2.4, 2.9, 6.7, 7.3, 0.7, 0.8) },
      badge: { o: on(2.7, 3.0), y: on(2.7, 3.1, 6.6, 7.0, 10, 0) },
    } },
    sy: { w: 1120, h: 400, tracks: {
      ...Object.fromEntries([0, 1, 2].map((i) => ["n" + i, { "--g": [[0, 0], [0.15 + 0.12 * i, 0], [0.3 + 0.12 * i, 1], [0.9 + 0.12 * i, 0.3], [3.55 + 0.12 * i, 0.3], [3.7 + 0.12 * i, 1], [4.3 + 0.12 * i, 0.3], [6.6, 0.3], [7, 0], [L, 0]] }])),
      n3: { "--g": [[0, 0], [1.25, 0], [1.4, 1], [1.9, 0.45], [4.65, 0.45], [4.8, 1], [5.3, 0.45], [6.6, 0.45], [7, 0], [L, 0]] },
      n4: { "--g": [[0, 0], [1.9, 0], [2.05, 1], [2.5, 0.45], [5.3, 0.45], [5.45, 1], [5.9, 0.45], [6.6, 0.45], [7, 0], [L, 0]] },
      n5: { "--g": [[0, 0], [2.6, 0], [2.75, 1], [6.6, 1], [7, 0], [L, 0]] },
      tag: { o: on(2.8, 3.1), y: on(2.8, 3.2, 6.6, 7.0, 8, 0) },
    }, pulses: [[0, 0.3, 1.25, "p0", 1], [1, 0.42, 1.3, "p1", 1], [2, 0.54, 1.35, "p2", 1], [3, 1.4, 1.95, "p3", 1], [4, 2.1, 2.6, "p4", 1], [0, 3.6, 4.55, "p0", 0], [1, 3.72, 4.6, "p1", 0], [2, 3.84, 4.65, "p2", 0], [3, 4.75, 5.3, "p3", 0], [4, 5.4, 5.9, "p4", 0]] },
  };

  function mount(mo) {
    const name = mo.dataset.scene, sc = S[name]; if (!sc) return null;
    const inner = mo.querySelector(".mo-in");
    if (!inner.children.length) { const tp = document.getElementById("sc-" + name); if (tp) inner.append(tp.content.cloneNode(true)); }
    inner.style.width = sc.w + "px"; inner.style.height = sc.h + "px";
    const q = {}; inner.querySelectorAll("[data-k]").forEach((el) => (q[el.dataset.k] = el));
    const paths = [...inner.querySelectorAll(".paths path:not(.dash)")], lit = paths.map((p) => { const c = p.cloneNode(); c.setAttribute("class", "lit"); c.setAttribute("pathLength", "1"); p.after(c); return c; });
    const lens = paths.map((p) => p.getTotalLength());
    const floats = reduce ? [] : [...inner.querySelectorAll(".m-o, .m-tile, .m-badge")];
    const fit = () => { const s = mo.clientWidth / sc.w; inner.style.transform = `scale(${s})`; mo.style.height = sc.h * s + "px"; };
    fit(); new ResizeObserver(fit).observe(mo);
    const seek = (t) => {
      t = ((t % L) + L) % L;
      for (const k in sc.tracks) {
        const el = q[k]; if (!el) continue; const p = sc.tracks[k], st = el.style;
        if (p.x || p.y || p.s || p.sx) {
          const X = p.x ? K(t, p.x, "sp") : 0, Y = p.y ? K(t, p.y, "sp") : 0;
          /* squash and stretch: a moving object stretches along its path in proportion to its speed, and settles round */
          let sq = "";
          if (p.x && p.y) { const h = 1 / 120, vx = (K(t + h, p.x, "sp") - X) / h, vy = (K(t + h, p.y, "sp") - Y) / h, v = Math.hypot(vx, vy);
            if (v > 40) { const a = Math.atan2(vy, vx), k = Math.min(0.09, v / 9000); sq = ` rotate(${a}rad) scale(${1 + k},${1 - k * 0.7}) rotate(${-a}rad)`; } }
          st.transform = `translate(${X}px,${Y}px)${sq} scale(${p.s ? K(t, p.s, "bn") : 1}) scaleX(${p.sx ? K(t, p.sx, "sp") : 1})`;
        }
        if (p.o) st.opacity = K(t, p.o).toFixed(3);
        if (p.w) st.width = K(t, p.w, "sp") + "px"; if (p.h) st.height = K(t, p.h, "sp") + "px"; if (p.r) st.borderRadius = Math.max(0, K(t, p.r, "sp")) + "px";
        for (const v in p) if (v.startsWith("--")) st.setProperty(v, K(t, p[v]).toFixed(3));
      }
      if (sc.pulses) {
        const seen = {};
        sc.pulses.forEach(([pi, a, b, key, first]) => {
          const u = clamp((t - a) / (b - a)), el = q[key], e = Math.min(1, EZ.sp(u));
          if (first && lit[pi]) { lit[pi].style.strokeDashoffset = (1 - e).toFixed(4); lit[pi].style.opacity = K(t, [[0, 1], [6.6, 1], [7.2, 0], [L, 0]]).toFixed(3); }
          if (!el || seen[key]) return;
          if (u > 0 && u < 1) { const pt = paths[pi].getPointAtLength(e * lens[pi]); el.style.transform = `translate(${pt.x}px,${pt.y}px)`; el.style.opacity = Math.min(1, u * 6, (1 - u) * 6).toFixed(3); seen[key] = 1; }
          else el.style.opacity = 0;
        });
      }
      floats.forEach((el, i) => { const a = (t / L) * Math.PI * 2 * (i % 2 ? 2 : 1) + i * 1.7; el.style.translate = `${(Math.cos(a) * 2).toFixed(2)}px ${(Math.sin(a) * 4).toFixed(2)}px`; });
      if (sc.live) sc.live(t, q);
    };
    return { mo, seek, t0: 0, run: false };
  }

  const all = [];
  document.querySelectorAll(".mo[data-scene]").forEach((mo) => { const s = mount(mo); if (s) { all.push(s); mo._scene = s; s.seek(reduce ? 4.4 : 0); } });
  const tick = (now) => { let any = false; all.forEach((s) => { if (s.run && s.mo.offsetParent && !s.mo.closest("[hidden]")) { s.seek((now - s.t0) / 1000 * 1.3); any = true; } }); if (any) requestAnimationFrame(tick); else ticking = false; };
  let ticking = false;
  const wake = () => { if (!ticking && !reduce) { ticking = true; requestAnimationFrame(tick); } };
  const io = new IntersectionObserver((es) => es.forEach((e) => { const s = e.target._scene; if (!s) return; if (e.isIntersecting && !s.run) { s.run = true; s.t0 = performance.now(); wake(); } else if (!e.isIntersecting) s.run = false; }), { threshold: 0.3 });
  all.forEach((s) => io.observe(s.mo));
  // a tab that opens a scene restarts it from frame 0
  window.__sceneRestart = (mo) => { const s = mo && mo._scene; if (!s) return; s.t0 = performance.now(); s.seek(reduce ? 4.4 : 0); s.run = true; wake(); };
})();

const PHI = 1.618033988749895;
const GOLDEN_SECOND_MS = 1618;
const PULSE = [400, 648, 1048, 1618, 2618];
const GOLD_HIT = 0.06;
const SIGNAL_CAP = 0.55;
const SPAM = 12;
const PALETTE = {
  void: "#0A0A0B",
  black: "#101114",
  graphite: "#17181B",
  silver: "#969AA3",
  gold: "#C6A15B",
  goldMuted: "#8F6E32",
};
const SIZES = {
  "ios-1290x2796": [1290, 2796],
  "ios-1179x2556": [1179, 2556],
  "android-1080x2400": [1080, 2400],
  "android-1440x3200": [1440, 3200],
};
const KEY = "softnoire.wallpaper.taps.v1";

let motif = "void";
let layout = "lock";
let taps = [];
let start = performance.now();

function goldY() {
  return layout === "lock" ? 1 / PHI : 0.78;
}
function classify(x, y) {
  const d = Math.hypot(x - 0.5, y - goldY());
  if (d <= GOLD_HIT) return "gold";
  if (motif === "graphite" && y >= 1 / (PHI * PHI) && y <= 1 / PHI) return "silver";
  if (motif === "midnight") {
    const m = 1 / (PHI * PHI);
    if (x >= m && x <= 1 - m && y >= m && y <= 1 - m) return "silver";
  }
  return "void";
}
function nearest(iv) {
  return PULSE.reduce((a, b) => (Math.abs(iv - a) < Math.abs(iv - b) ? a : b));
}
function score(now) {
  const gold = taps.filter((t) => t.zone === "gold").length;
  const ivs = taps.map((t) => t.interval).filter((v) => v != null);
  const mean = ivs.length ? ivs.reduce((a, b) => a + b, 0) / ivs.length : 0;
  const tempo = ivs.length
    ? ivs.reduce((a, iv) => a + Math.max(0, Math.min(1, 1 - Math.abs(iv - nearest(iv)) / nearest(iv))), 0) /
      ivs.length
    : 0;
  const last = taps.length ? taps[taps.length - 1].t : 0;
  const still = Math.max(0, now - last);
  const elapsed = Math.max(1, now);
  const spam = (taps.length * 60000) / elapsed > SPAM;
  const precision = taps.length ? gold / taps.length : 0;
  const stillT = Math.max(0, Math.min(1, still / GOLDEN_SECOND_MS));
  const raw = 0.4 * tempo + 0.3 * precision + 0.3 * stillT * (spam ? 0 : 1);
  return {
    gold,
    mean,
    tempo,
    still,
    spam,
    signal: Math.max(0, Math.min(SIGNAL_CAP, raw * SIGNAL_CAP)),
  };
}

function paint(ctx, w, h) {
  ctx.fillStyle = motif === "midnight" ? PALETTE.black : PALETTE.void;
  ctx.fillRect(0, 0, w, h);
  if (motif === "graphite") {
    const y0 = Math.round((1 / (PHI * PHI)) * h);
    const y1 = Math.round((1 / PHI) * h);
    ctx.fillStyle = PALETTE.graphite;
    ctx.fillRect(0, y0, w, y1 - y0);
    ctx.fillStyle = PALETTE.silver;
    ctx.fillRect(0, y1, w, 1);
  }
  if (motif === "midnight") {
    const m = 1 / (PHI * PHI);
    ctx.strokeStyle = PALETTE.silver;
    ctx.strokeRect(Math.round(m * w) + 0.5, Math.round(m * h) + 0.5, Math.round((1 - 2 * m) * w), Math.round((1 - 2 * m) * h));
  }
  const gx = 0.5 * (w - 1);
  const gy = goldY() * (h - 1);
  if (motif === "ember") {
    const cx = 0.62 * (w - 1);
    let a = 0;
    let r = 0.012 * h;
    let tx = cx;
    let ty = gy;
    ctx.strokeStyle = PALETTE.goldMuted;
    ctx.lineWidth = 2.2;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(cx, gy);
    for (let i = 0; i < 48; i++) {
      a += 0.236 * Math.PI * 2;
      r *= PHI ** 0.08;
      tx = cx + r * Math.cos(a) * Math.sqrt(w / h);
      ty = gy + r * Math.sin(a);
      ctx.lineTo(tx, ty);
    }
    ctx.stroke();
    ctx.fillStyle = PALETTE.gold;
    ctx.beginPath();
    ctx.arc(tx, ty, 0.01 * h, 0, Math.PI * 2);
    ctx.fill();
  }
  const mark = 0.018 * h;
  ctx.fillStyle = PALETTE.goldMuted;
  ctx.beginPath();
  ctx.arc(gx, gy, mark * 1.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = PALETTE.gold;
  ctx.beginPath();
  ctx.arc(gx, gy, mark, 0, Math.PI * 2);
  ctx.fill();
  for (const t of taps) {
    ctx.fillStyle = t.zone === "gold" ? "rgba(198,161,91,0.9)" : "rgba(150,154,163,0.4)";
    ctx.beginPath();
    ctx.arc(t.x * w, t.y * h, 5, 0, Math.PI * 2);
    ctx.fill();
  }
}

const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");

function redraw() {
  paint(ctx, 390, 844);
}

function hud() {
  const r = score(performance.now() - start);
  document.getElementById("taps").textContent = String(taps.length);
  document.getElementById("gold").textContent = String(r.gold);
  document.getElementById("interval").textContent = r.mean ? `${Math.round(r.mean)} ms` : "—";
  document.getElementById("tempo").textContent = r.tempo.toFixed(2);
  document.getElementById("still").textContent = `${Math.round(r.still)} ms`;
  document.getElementById("signal").textContent = r.signal.toFixed(3);
  document.getElementById("spam").hidden = !r.spam;
}

const motifsEl = document.getElementById("motifs");
for (const m of ["void", "graphite", "midnight", "ember"]) {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = m;
  b.addEventListener("click", () => {
    motif = m;
    redraw();
  });
  motifsEl.appendChild(b);
}
document.getElementById("lock").addEventListener("click", () => {
  layout = "lock";
  redraw();
});
document.getElementById("home").addEventListener("click", () => {
  layout = "home";
  redraw();
});

canvas.addEventListener("pointerdown", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  const t = performance.now() - start;
  const prev = taps[taps.length - 1];
  const tap = { t, x, y, zone: classify(x, y), interval: prev ? t - prev.t : null };
  taps.push(tap);
  document.getElementById("zone").textContent = tap.zone;
  try {
    localStorage.setItem(KEY, JSON.stringify({ motif, layout, taps }));
  } catch (_) {}
  redraw();
  hud();
});

document.getElementById("clear").addEventListener("click", () => {
  taps = [];
  start = performance.now();
  document.getElementById("zone").textContent = "—";
  try {
    localStorage.removeItem(KEY);
  } catch (_) {}
  redraw();
  hud();
});

document.getElementById("dl").addEventListener("click", async () => {
  const id = document.getElementById("size").value;
  const [w, h] = SIZES[id];
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  paint(c.getContext("2d"), w, h);
  const blob = await new Promise((res) => c.toBlob(res, "image/png"));
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `soft-noire-${motif}-${layout}-${id}.png`;
  a.click();
  document.getElementById("hint").textContent =
    "iOS: Photos → Share → Use as Wallpaper. Android: Downloads → Set as wallpaper.";
});

document.getElementById("log").addEventListener("click", () => {
  const r = score(performance.now() - start);
  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob(
      [JSON.stringify({ motif, layout, report: r, taps, note: "On-device. Not a medical score." }, null, 2)],
      { type: "application/json" },
    ),
  );
  a.download = "soft-noire-tap-signal.json";
  a.click();
});

setInterval(hud, 200);
redraw();
hud();

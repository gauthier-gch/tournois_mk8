/* =========================================================
   TOURNOI DES BÂTONS DANS LES ROUES — script.js
   ========================================================= */

/* ---------- Utilitaires ---------- */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* =========================================================
   1) NAVIGATION PAR ONGLETS
   ========================================================= */
function initTabs() {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      panels.forEach((p) => p.classList.remove("is-active"));
      tab.classList.add("is-active");
      document.getElementById(tab.dataset.tab).classList.add("is-active");
    });
  });
}

/* =========================================================
   2) ONGLET AVATARS — machine à sous
   ========================================================= */

const REEL_CATS = [
  { key: "pilots",  label: "Pilote" },
  { key: "karts",   label: "Kart" },
  { key: "wheels",  label: "Roues" },
  { key: "gliders", label: "Parapente" },
];

function buildAvatarFrames() {
  const grid = document.getElementById("avatarGrid");
  let html = "";
  for (let p = 0; p < 4; p++) {
    let reels = "";
    REEL_CATS.forEach((c) => {
      reels += `
        <div class="reel" data-cat="${c.key}">
          <div class="reel-label">${c.label}</div>
          <div class="reel-img-wrap"><img src="" alt="" /></div>
          <div class="reel-name"></div>
        </div>`;
    });
    html += `
      <div class="avatar-frame" data-player="${p}">
        <div class="frame-head">
          <span class="frame-title"><span class="num">${p + 1}</span>Joueur ${p + 1}</span>
        </div>
        <div class="reels">${reels}</div>
        <button class="reroll-btn" data-player="${p}" disabled>↻ Relancer ce tirage</button>
      </div>`;
  }
  grid.innerHTML = html;
}

/* Fait défiler une case jusqu'à se stopper sur un item au hasard */
function spinReel(reel, items, durationMs) {
  const img = reel.querySelector("img");
  const nameEl = reel.querySelector(".reel-name");
  reel.classList.add("spinning");
  reel.classList.remove("landed");
  nameEl.textContent = "";

  const interval = setInterval(() => {
    const it = items[Math.floor(Math.random() * items.length)];
    img.src = it.img;
    img.alt = it.name;
  }, 70);

  setTimeout(() => {
    clearInterval(interval);
    const final = items[Math.floor(Math.random() * items.length)];
    img.src = final.img;
    img.alt = final.name;
    nameEl.textContent = final.name;
    reel.classList.remove("spinning");
    reel.classList.add("landed");
  }, durationMs);
}

/* Lance les 4 cases d'un encadré, décalées dans le temps */
function generateFrame(frame) {
  const reels = frame.querySelectorAll(".reel");
  reels.forEach((reel, idx) => {
    const cat = reel.dataset.cat;
    spinReel(reel, marioKartData[cat], 1000 + idx * 450);
  });
}

function initAvatars() {
  buildAvatarFrames();

  const veil = document.getElementById("avatarVeil");
  const generateBtn = document.getElementById("generateAvatarsBtn");
  const grid = document.getElementById("avatarGrid");

  // Bouton principal : défloute + génère tous les encadrés
  generateBtn.addEventListener("click", () => {
    veil.classList.add("hidden");
    grid.querySelectorAll(".avatar-frame").forEach((f) => generateFrame(f));
    // active les boutons "relancer" (1 utilisation chacun)
    grid.querySelectorAll(".reroll-btn").forEach((b) => (b.disabled = false));
  });

  // Boutons "relancer ce tirage" : 1 seule fois par encadré
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".reroll-btn");
    if (!btn || btn.disabled) return;
    const frame = btn.closest(".avatar-frame");
    generateFrame(frame);
    // on consomme l'unique relance
    btn.disabled = true;
    btn.textContent = "Tirage déjà relancé";
  });
}

/* =========================================================
   2 bis) ONGLET CONTRE LA MONTRE — 1 avatar + 1 circuit
   ========================================================= */

function buildTimeTrialFrame() {
  const wrap = document.getElementById("clmAvatar");
  let reels = "";
  REEL_CATS.forEach((c) => {
    reels += `
      <div class="reel" data-cat="${c.key}">
        <div class="reel-label">${c.label}</div>
        <div class="reel-img-wrap"><img src="" alt="" /></div>
        <div class="reel-name"></div>
      </div>`;
  });
  wrap.innerHTML = `
    <div class="avatar-frame clm-frame">
      <div class="frame-head">
        <span class="frame-title">🏁 Ta compo</span>
      </div>
      <div class="reels">${reels}</div>
    </div>`;
}

function initTimeTrial() {
  buildTimeTrialFrame();

  const btn = document.getElementById("generateClmBtn");
  const stage = document.getElementById("clmStage");
  const courseName = document.getElementById("clmCourseName");
  const courseBox = document.getElementById("clmCourse");
  const frame = document.querySelector("#clmAvatar .avatar-frame");

  btn.addEventListener("click", () => {
    // 1) Circuit aléatoire parmi les circuits NON commentés
    const circuits = getAvailableCircuits();
    const chosen = circuits[Math.floor(Math.random() * circuits.length)];

    stage.classList.add("revealed");
    courseBox.classList.remove("landed");
    courseName.textContent = "…";

    // 2) Avatar unique : les 4 cases défilent
    generateFrame(frame);

    // Petit effet : le circuit se "fixe" avec les cases
    setTimeout(() => {
      courseName.textContent = chosen;
      courseBox.classList.add("landed");
    }, 900);

    btn.textContent = "⏱️ Relancer le contre la montre";
  });
}

/* =========================================================
   3) ONGLET MALUS — roulettes
   ========================================================= */

/* Construit la liste ordonnée des segments des roues.
   Ordre = physique → in game → duo → aucun
   (cet ordre doit rester cohérent avec computeAssignment) */
function buildSegments() {
  const segs = [];
  malusData.physique.forEach((t, i) => segs.push({ type: "phys", text: t, label: "P" + (i + 1) }));
  malusData.ingame.forEach((t, i) => segs.push({ type: "game", text: t, label: "J" + (i + 1) }));
  segs.push({ type: "duo",  text: malusData.duo[0],   label: "DUO" });
  segs.push({ type: "none", text: "Aucun malus 🍀", label: "RAS" });
  return segs;
}

const SEGMENTS = buildSegments();
const DUO_INDEX = SEGMENTS.findIndex((s) => s.type === "duo");
const NONE_INDEX = SEGMENTS.findIndex((s) => s.type === "none");

/* Couleurs des quartiers selon le type (2 nuances pour le contraste) */
function colorFor(seg, i) {
  const palettes = {
    phys: ["#4fa8e0", "#3b8fc4"],
    game: ["#ff8a1e", "#e0760f"],
    duo:  ["#e0218a", "#e0218a"],
    none: ["#43b047", "#43b047"],
  };
  const pal = palettes[seg.type];
  return pal[i % 2];
}

function polar(cx, cy, r, deg) {
  const a = ((deg - 90) * Math.PI) / 180; // 0° = haut, sens horaire
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

/* Génère le SVG d'une roue (segment 0 centré en haut) */
function buildWheelSVG() {
  const cx = 120, cy = 120, r = 112;
  const seg = 360 / SEGMENTS.length;
  let inner = `<circle cx="${cx}" cy="${cy}" r="115" fill="#0d0e15"/>`;
  SEGMENTS.forEach((s, i) => {
    const a0 = i * seg - seg / 2;
    const a1 = i * seg + seg / 2;
    const [x0, y0] = polar(cx, cy, r, a0);
    const [x1, y1] = polar(cx, cy, r, a1);
    inner += `<path d="M${cx},${cy} L${x0.toFixed(2)},${y0.toFixed(2)} A${r},${r} 0 0 1 ${x1.toFixed(2)},${y1.toFixed(2)} Z" fill="${colorFor(s, i)}" stroke="#14161f" stroke-width="1.5"/>`;
    const [lx, ly] = polar(cx, cy, r * 0.66, i * seg);
    inner += `<text x="${lx.toFixed(2)}" y="${ly.toFixed(2)}" class="wheel-seg-label" text-anchor="middle" dominant-baseline="middle" transform="rotate(${(i * seg).toFixed(2)} ${lx.toFixed(2)} ${ly.toFixed(2)})">${s.label}</text>`;
  });
  return `<svg class="wheel-svg" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}

function buildMalusWheels() {
  const grid = document.getElementById("malusGrid");
  let html = "";
  for (let p = 0; p < 4; p++) {
    html += `
      <div class="malus-player">
        <h3><span class="num">${p + 1}</span>Joueur ${p + 1}</h3>
        <div class="wheel-wrap">
          <div class="wheel-pointer"></div>
          ${buildWheelSVG()}
          <div class="wheel-hub"></div>
        </div>
        <div class="malus-result empty" id="result-${p}">
          <span class="txt">En attente du lancement…</span>
        </div>
      </div>`;
  }
  grid.innerHTML = html;
}

/* Calcule une attribution VALIDE pour les 4 joueurs :
   - 3 chances sur 4 d'avoir un malus
   - aucun doublon (sauf duo)
   - le duo concerne EXACTEMENT 2 joueurs
   Renvoie un tableau de 4 indices de segment. */
function computeAssignment() {
  const result = [NONE_INDEX, NONE_INDEX, NONE_INDEX, NONE_INDEX];

  // Qui écope d'un malus ?
  const needs = [];
  for (let p = 0; p < 4; p++) if (Math.random() < 0.75) needs.push(p);
  shuffle(needs);

  // Pool des malus "solo" (physique + in game)
  const singles = [];
  for (let i = 0; i < DUO_INDEX; i++) singles.push(i);
  shuffle(singles);

  let duoUsed = false;
  let i = 0;
  while (i < needs.length) {
    const remaining = needs.length - i;
    const canDuo = !duoUsed && remaining >= 2;

    // Le duo est un malus comme un autre dans le tirage
    const candidates = singles.slice();
    if (canDuo) candidates.push("DUO");
    const pick = candidates[Math.floor(Math.random() * candidates.length)];

    if (pick === "DUO") {
      result[needs[i]] = DUO_INDEX;
      result[needs[i + 1]] = DUO_INDEX; // un 2e joueur hérite forcément du duo
      duoUsed = true;
      i += 2;
    } else {
      result[needs[i]] = pick;
      singles.splice(singles.indexOf(pick), 1);
      i += 1;
    }
  }
  return result;
}

/* Calcule l'angle final pour amener un segment sous le pointeur (en haut) */
function rotationForSegment(currentDeg, segIndex) {
  const seg = 360 / SEGMENTS.length;
  const targetOrientation = -(segIndex * seg);
  const base = currentDeg + 360 * 6; // au moins 6 tours
  return base + (((targetOrientation - base) % 360) + 360) % 360;
}

function revealResult(p, segIndex) {
  const seg = SEGMENTS[segIndex];
  const el = document.getElementById("result-" + p);
  let cls, tag;
  if (seg.type === "phys")      { cls = "t-phys"; tag = "Malus physique"; }
  else if (seg.type === "game") { cls = "t-game"; tag = "Malus in game"; }
  else if (seg.type === "duo")  { cls = "t-duo";  tag = "Malus DUO 🤝"; }
  else                          { cls = "t-none"; tag = "Épargné !"; }

  el.className = "malus-result reveal " + cls;
  el.innerHTML = `<span class="tag">${tag}</span><span class="txt">${seg.text}</span>`;
}

function initMalus() {
  buildMalusWheels();

  const rotations = [0, 0, 0, 0];
  const spinBtn = document.getElementById("spinMalusBtn");
  const wheels = document.querySelectorAll(".wheel-svg");
  const SPIN_MS = 5000;

  spinBtn.addEventListener("click", () => {
    spinBtn.disabled = true;

    const assignment = computeAssignment();

    // Réinitialise les cartes résultat
    for (let p = 0; p < 4; p++) {
      const el = document.getElementById("result-" + p);
      el.className = "malus-result empty";
      el.innerHTML = `<span class="txt">La roue tourne…</span>`;
    }

    // Lance les 4 roues simultanément
    wheels.forEach((wheel, p) => {
      rotations[p] = rotationForSegment(rotations[p], assignment[p]);
      wheel.style.transform = `rotate(${rotations[p]}deg)`;
    });

    // Révèle les résultats une fois les roues arrêtées
    setTimeout(() => {
      for (let p = 0; p < 4; p++) revealResult(p, assignment[p]);
      spinBtn.disabled = false;
      spinBtn.textContent = "🎡 Relancer la roulette";
    }, SPIN_MS + 200);
  });
}

/* =========================================================
   INITIALISATION
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initTimeTrial();
  initAvatars();
  initMalus();
});


// ==========================================================
// AJUSTES QUE IREMOS CAMBIANDO JUNTAS
// ==========================================================
// Día 1 = fecha de inicio real de la experiencia.
const START_DATE = new Date("2026-08-08T00:00:00");

// Solo los días <= a este número están PUBLICADOS.
// Puedes preparar contenido de días futuros sin que él lo vea.
const LAST_PUBLISHED_DAY = 51;

// Pon un número para probar un día concreto mientras editas, por ejemplo 12.
// Antes de publicar, vuelve a dejarlo en null.
const TEST_DAY = null;

// MODO PRUEBA:
// Tu enlace puede terminar en ?modo=prueba&dia=16
// El enlace normal de tu novio NO lleva estos parámetros.
const URL_PARAMS = new URLSearchParams(window.location.search);
const PREVIEW_MODE = URL_PARAMS.get("modo") === "prueba";
const PREVIEW_DAY_FROM_URL = parseInt(URL_PARAMS.get("dia") || "", 10);
const STORAGE_PREFIX = PREVIEW_MODE ? "preview-" : "novio-";

const TOTAL_DAYS = 51;

// Las piezas aparecen en posiciones desordenadas, pero siempre en el mismo orden.
const PUZZLE_REVEAL_ORDER = [47,1,34,16,25,31,29,48,43,46,26,27,21,13,12,17,5,50,20,22,7,39,40,42,32,6,2,4,10,11,19,28,41,49,38,24,23,33,36,37,14,30,3,35,15,44,45,18,8,9,51];


function actualDay() {
  if (PREVIEW_MODE && Number.isFinite(PREVIEW_DAY_FROM_URL)) {
    return Math.max(1, Math.min(PREVIEW_DAY_FROM_URL, TOTAL_DAYS));
  }
  if (TEST_DAY !== null) return Math.max(1, Math.min(TEST_DAY, TOTAL_DAYS));

  const now = new Date();
  const start = new Date(START_DATE);
  now.setHours(0,0,0,0);
  start.setHours(0,0,0,0);

  return Math.max(1, Math.min(Math.floor((now-start)/86400000)+1, TOTAL_DAYS));
}

const TODAY = actualDay();
const availableThrough = PREVIEW_MODE ? TOTAL_DAYS : Math.min(TODAY, LAST_PUBLISHED_DAY);

document.getElementById("todayLabel").textContent = `Día ${TODAY}`;
document.getElementById("remainingLabel").textContent = `${Math.max(0,TOTAL_DAYS-TODAY)} ${TOTAL_DAYS-TODAY===1?"día":"días"}`;
updateHeaderForDay(TODAY);


function updateHeaderForDay(day) {
  const remaining = Math.max(0, TOTAL_DAYS - day);
  const todayLabel = document.getElementById("todayLabel");
  const remainingLabel = document.getElementById("remainingLabel");

  if (todayLabel) todayLabel.textContent = `Día ${day}`;
  if (remainingLabel) {
    remainingLabel.textContent = `${remaining} ${remaining === 1 ? "día" : "días"}`;
  }
}

const grid = document.getElementById("daysGrid");
const view = document.getElementById("dayView");
const calendar = document.getElementById("calendar");
const modal = document.getElementById("lockedModal");
const lockedMessage = document.getElementById("lockedMessage");

document.getElementById("enterBtn").onclick = () => calendar.scrollIntoView({behavior:"smooth"});
document.getElementById("closeModal").onclick = () => modal.classList.add("hidden");
modal.onclick = e => { if(e.target===modal) modal.classList.add("hidden"); };
document.getElementById("backBtn").onclick = () => {
  updateHeaderForDay(TODAY);
  view.classList.add("hidden");
  calendar.classList.remove("hidden");
  calendar.scrollIntoView({behavior:"smooth"});
};

DAYS_DATA.forEach(item => {
  const b = document.createElement("button");
  b.className = "day-button";
  b.innerHTML = `<strong>${item.day}</strong><small>${item.day<=availableThrough ? "ABRIR" : "CERRADO"}</small>`;
  if (item.day <= availableThrough) b.classList.add("available");
  else b.classList.add("locked");
  if (item.day === TODAY) b.classList.add("today");
  b.onclick = () => {
    if (!PREVIEW_MODE && item.day > TODAY) {
      lockedMessage.textContent = `El Día ${item.day} todavía no ha llegado. Vuelve cuando sea su momento ♥`;
      modal.classList.remove("hidden");
      return;
    }
    if (!PREVIEW_MODE && item.day > LAST_PUBLISHED_DAY) {
      lockedMessage.textContent = `Este regalo todavía lo estoy preparando para ti ♥`;
      modal.classList.remove("hidden");
      return;
    }
    openDay(item);
  };
  grid.appendChild(b);
});

function specialFor(day) {
  if(day===1) return `
    <div class="envelope-experience" id="envelopeExperience">
      <button class="envelope-button" id="openEnvelopeBtn" type="button" aria-label="Abrir la carta del Día 1">
        <span class="envelope-shadow"></span>
        <span class="envelope">
          <span class="envelope-back"></span>
          <span class="letter-peek">Para ti ♥</span>
          <span class="envelope-front"></span>
          <span class="envelope-flap"></span>
          <span class="wax">♥</span>
        </span>
        <strong>Aplasta el sobre para abrir tu primera carta</strong>
        <small>Prometo que esta sí la puedes abrir hoy 🥹</small>
      </button>

      <div class="day1-letter-wrap hidden" id="day1LetterWrap">
        <div class="letter day1-letter">
          <p><strong>Mi amor:</strong></p>
          <p>Si estás leyendo esto significa que empezó nuestra cuenta regresiva.</p>
          <p>No te voy a mentir: voy a extrañarte muchísimo. Pero también sé que cada día que pase será un día menos para volver a abrazarte.</p>
          <p>Hice esto para acompañarte un poquito cada día, aunque sea desde lejos. Habrá cartas, recuerdos, canciones, pequeñas sorpresas y cosas que me hicieron pensar en ti.</p>
          <p>Espero que cuando abras cada día sientas que, de alguna forma, sigo contigo. Y prométeme algo: no abras los siguientes antes de tiempo 🥹</p>
          <p style="text-align:right"><strong>Te amo muchísimo.<br>Paola ♥</strong></p>
        </div>

        <div class="quote" style="margin-top:18px">“No estamos contando los días que faltan. Estamos contando los días que nos acercan.”</div>
  `;

  if(day===2) return `
    <div class="day2-experience">
      <div class="day2-intro">
        <span class="day2-heart">♥</span>
        <h3>Hoy vi algo y pensé en ti</h3>
        <p>Hay cosas pequeñas que aparecen en cualquier momento y, sin querer, me llevan directo a ti.</p>
      </div>

      <button class="memory-reveal-btn" id="memoryRevealBtn" type="button">
        <span>💭</span>
        <strong>Aplasta aquí para descubrir qué me recordó a ti</strong>
        <small>Una cosita muy tú ♥</small>
      </button>

      <div class="memory-card hidden" id="memoryCard">
        <div class="memory-polaroid">
          <div class="memory-placeholder">
            <span>♥</span>
            <p>Aquí pondremos la foto, objeto, canción o detalle exacto que te recuerde a él.</p>
          </div>
          <strong>Me recordó a ti porque...</strong>
        </div>
        <p class="memory-note">
          No sé cómo haces para aparecer en tantas cosas de mi día, pero me gusta.
          A veces basta una canción, un color, una frase o algo mínimo para que piense en ti.
        </p>
      </div>
    </div>`;

  if([6,14,39].includes(day)) return `<div class="coupon">VALE ESPECIAL ♥<br><small>Lo vamos a personalizar juntas para este día.</small></div>`;
  if([5,23,36,45].includes(day)) return `<div class="placeholder">🎵 Aquí pondremos el enlace, canción o audio exacto cuando pulamos este día.</div>`;
  if([7,13,19,28,31,43].includes(day)) return `<div class="placeholder">📷 Aquí colocaremos la foto exacta que quieras usar para este día.</div>`;
  if([11,16,21,27,33,37,38].includes(day)) return `<div class="placeholder">✨ Este día tendrá una interacción especial o mini juego. Ya está reservado para que lo diseñemos juntas.</div>`;
  return `<div class="placeholder">♥ Esta es la base del regalo de hoy. Iremos cambiando texto, fotos, colores o interacción cuando pulamos este día.</div>`;
}

function openDay(item) {
  updateHeaderForDay(item.day);
  calendar.classList.add("hidden");
  view.classList.remove("hidden");
  document.getElementById("dayChip").textContent = `DÍA ${item.day}`;
  document.getElementById("dayTitle").textContent = item.title;
  document.getElementById("dayType").textContent = item.type;

  const dayText = document.getElementById("dayText");
  // En el Día 1 primero aparece únicamente el sobre; la carta cuenta la historia.
  if (item.day === 1) {
    dayText.textContent = "";
    dayText.classList.add("hidden");
  } else {
    dayText.classList.remove("hidden");
    dayText.textContent = item.text;
  }

  document.getElementById("specialContent").innerHTML = specialFor(item.day);
  renderDayCalendar(item.day);

  const pieceWasFound = PREVIEW_MODE ? false : localStorage.getItem(`${STORAGE_PREFIX}puzzle-piece-${item.day}`) === "found";

  buildPuzzle(item.day, pieceWasFound);
  setupPuzzleReveal(item.day, pieceWasFound);

  if (item.day === 1) setupEnvelope();
  if (item.day === 2) setupDay2Memory();

  window.scrollTo({top:0,behavior:"smooth"});
}

function setupEnvelope() {
  const button = document.getElementById("openEnvelopeBtn");
  const wrap = document.getElementById("day1LetterWrap");
  const experience = document.getElementById("envelopeExperience");
  if (!button || !wrap || !experience) return;

  const alreadyOpened = localStorage.getItem(`${STORAGE_PREFIX}day1-envelope-opened`) === "yes";
  if (alreadyOpened) {
    button.classList.add("opened");
    wrap.classList.remove("hidden");
  }

  button.addEventListener("click", () => {
    if (button.classList.contains("opened")) return;
    button.classList.add("opening");
    localStorage.setItem(`${STORAGE_PREFIX}day1-envelope-opened`, "yes");

    setTimeout(() => {
      button.classList.remove("opening");
      button.classList.add("opened");
      wrap.classList.remove("hidden");
      wrap.classList.add("letter-arrive");
      setTimeout(() => wrap.scrollIntoView({behavior:"smooth", block:"center"}), 180);
    }, 850);
  });
}



function setupDay2Memory() {
  const btn = document.getElementById("memoryRevealBtn");
  const card = document.getElementById("memoryCard");
  if (!btn || !card) return;

  const opened = localStorage.getItem(`${STORAGE_PREFIX}day2-memory-opened`) === "yes";
  if (opened) {
    btn.classList.add("opened");
    card.classList.remove("hidden");
  }

  btn.addEventListener("click", () => {
    if (btn.classList.contains("opened")) return;
    btn.classList.add("opening");
    localStorage.setItem(`${STORAGE_PREFIX}day2-memory-opened`, "yes");

    setTimeout(() => {
      btn.classList.remove("opening");
      btn.classList.add("opened");
      card.classList.remove("hidden");
      card.classList.add("memory-arrive");
      setTimeout(() => card.scrollIntoView({behavior:"smooth", block:"center"}), 120);
    }, 650);
  });
}





function setupPuzzleReveal(day, alreadyFound) {
  const btn = document.getElementById("puzzleRevealBtn");
  const hint = document.getElementById("puzzleRevealHint");
  const frame = document.getElementById("puzzleFrame");
  if (!btn || !frame) return;

  const targetPieceNumber = PUZZLE_REVEAL_ORDER[day - 1];

  if (alreadyFound && !PREVIEW_MODE) {
    btn.classList.add("piece-found");
    btn.querySelector("strong").textContent = "Tu pieza de hoy ya está colocada ♥";
    if (hint) hint.textContent = `Pieza del Día ${day} colocada`;
  }

  btn.onclick = () => {
    const currentPiece = document.querySelector(
      `.cover-piece[data-piece="${targetPieceNumber}"]`
    );
    if (!currentPiece) return;

    // En el modo real, una pieza ya colocada no vuelve a cambiar.
    if (btn.classList.contains("piece-found") && !PREVIEW_MODE) {
      frame.scrollIntoView({behavior:"smooth", block:"center"});
      return;
    }

    // Sin vista previa ni animación intermedia:
    // al tocar el botón se descubre directamente SU lugar en el tablero.
    currentPiece.classList.add("revealed");
    currentPiece.style.visibility = "hidden";
    currentPiece.style.opacity = "0";

    localStorage.setItem(`${STORAGE_PREFIX}puzzle-piece-${day}`, "found");

    btn.classList.add("piece-found");
    btn.querySelector("strong").textContent = PREVIEW_MODE
      ? "Volver a descubrir la pieza de hoy ♥"
      : "¡Tu pieza ya está en el rompecabezas! ♥";

    if (hint) hint.textContent = `Pieza del Día ${day} colocada`;

    launchPuzzleSparkles();
    frame.scrollIntoView({behavior:"smooth", block:"center"});
  };
}

function launchPuzzleSparkles() {
  const holder = document.getElementById("puzzleSparkles");
  if (!holder) return;
  holder.innerHTML = "";
  const symbols = ["♥","✦","♥","✧","♥","✦","✧","♥"];
  symbols.forEach((symbol, i) => {
    const s = document.createElement("span");
    s.textContent = symbol;
    s.style.left = `${12 + (i * 11) % 78}%`;
    s.style.top = `${58 - (i % 3) * 12}%`;
    s.style.animationDelay = `${i * 55}ms`;
    holder.appendChild(s);
  });
  setTimeout(() => holder.innerHTML = "", 1500);
}

// ==========================================================
// CALENDARIO REAL: 8 DE AGOSTO DE 2026 = DÍA 1
// 51 días: del 8 de agosto al 27 de septiembre.
// ==========================================================
const EXPERIENCE_START = new Date("2026-08-08T00:00:00");
const EXPERIENCE_END = new Date("2026-09-27T23:59:59");

function normalizeDate(d) {
  const x = new Date(d);
  x.setHours(0,0,0,0);
  return x;
}

function renderDayCalendar(dayNumber) {
  const container = document.getElementById("dayMonthCalendar");
  const title = document.getElementById("dayCalendarTitle");
  const subtitle = document.getElementById("dayCalendarSubtitle");
  if (!container || !title) return;

  const selectedDate = normalizeDate(
    new Date(EXPERIENCE_START.getTime() + (dayNumber - 1) * 86400000)
  );

  const year = selectedDate.getFullYear();
  const monthIndex = selectedDate.getMonth();
  const monthNames = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ];

  title.textContent = `${monthNames[monthIndex]} ${year}`;
  subtitle.textContent = `Hoy estamos en el Día ${dayNumber}. Todo lo anterior ya quedó tachado ♥`;
  container.innerHTML = "";

  const firstDay = new Date(year, monthIndex, 1);
  const lastDay = new Date(year, monthIndex + 1, 0);
  const offset = (firstDay.getDay() + 6) % 7;
  const start = normalizeDate(EXPERIENCE_START);
  const end = normalizeDate(EXPERIENCE_END);

  for (let i = 0; i < offset; i++) {
    const empty = document.createElement("div");
    empty.className = "date-cell empty";
    container.appendChild(empty);
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = normalizeDate(new Date(year, monthIndex, day));
    const cell = document.createElement("div");
    cell.className = "date-cell";
    cell.innerHTML = `<span class="date-number">${day}</span>`;

    const inExperience = date >= start && date <= end;

    if (!inExperience) {
      cell.classList.add("outside");
    } else {
      const expDay = Math.floor((date - start) / 86400000) + 1;
      const badge = document.createElement("small");
      badge.className = "experience-day";
      badge.textContent = `Día ${expDay}`;
      cell.appendChild(badge);

      if (date < selectedDate) cell.classList.add("crossed");
      if (date.getTime() === selectedDate.getTime()) cell.classList.add("calendar-today");
      if (date > selectedDate) cell.classList.add("future-date");
    }

    container.appendChild(cell);
  }
}

function buildPuzzle(day, revealToday = false) {
  const rowColumns = [10,10,10,10,11];
  const overlay = document.getElementById("puzzleOverlay");
  overlay.innerHTML = "";

  const revealedNumbers = new Set();

  // En el modo real, todas las piezas de días anteriores que ya fueron descubiertas
  // quedan colocadas en el tablero.
  if (!PREVIEW_MODE) {
    for (let d = 1; d < day; d++) {
      if (localStorage.getItem(`${STORAGE_PREFIX}puzzle-piece-${d}`) === "found") {
        revealedNumbers.add(PUZZLE_REVEAL_ORDER[d - 1]);
      }
    }
  } else {
    // En prueba mostramos como colocadas las piezas de días anteriores
    // para simular el progreso, pero la del día actual empieza tapada.
    for (let d = 1; d < day; d++) {
      revealedNumbers.add(PUZZLE_REVEAL_ORDER[d - 1]);
    }
  }

  if (revealToday) {
    revealedNumbers.add(PUZZLE_REVEAL_ORDER[day - 1]);
  }

  let n = 0;
  rowColumns.forEach((cols,row) => {
    const top = row / rowColumns.length * 100;
    const height = 100 / rowColumns.length;

    for(let col = 0; col < cols; col++) {
      n++;
      const p = document.createElement("div");
      p.className = "cover-piece";
      p.dataset.piece = n;
      p.style.left = `${col / cols * 100}%`;
      p.style.top = `${top}%`;
      p.style.width = `${100 / cols}%`;
      p.style.height = `${height}%`;

      if (revealedNumbers.has(n)) {
        p.classList.add("revealed");
        p.style.visibility = "hidden";
        p.style.opacity = "0";
      }

      overlay.appendChild(p);
    }
  });
}


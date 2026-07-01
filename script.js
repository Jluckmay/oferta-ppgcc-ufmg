const DAYS = [
  { key: "SEG", label: "Segunda" },
  { key: "TER", label: "Terça" },
  { key: "QUA", label: "Quarta" },
  { key: "QUI", label: "Quinta" },
  { key: "SEX", label: "Sexta" },
];

const DISPLAY_SLOTS = [
  { start: "10:00", end: "12:40" },
  { start: "13:00", end: "14:40" },
  { start: "14:55", end: "16:35" },
  { start: "17:00", end: "18:40" },
  { start: "19:00", end: "20:40" },
];

const COURSES = [
  {
    id: "dcc831-p10",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Modelos Generativos para Imagens",
    code: "DCC831",
    className: "P10",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "TER", start: "14:55", end: "16:35" },
      { day: "QUI", start: "14:55", end: "16:35" },
    ],
  },
  {
    id: "dcc831-p11",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Seminários Avançados em Grafos e Algoritmos",
    code: "DCC831",
    className: "P11",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Português",
    modality: "Presencial",
    meetings: [{ day: "SEX", start: "13:00", end: "16:35" }],
  },
  {
    id: "dcc831-p12",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Theory and Practice of SMT Solving",
    code: "DCC831",
    className: "P12",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Inglês",
    modality: "Presencial",
    meetings: [
      { day: "SEG", start: "17:00", end: "18:40" },
      { day: "QUA", start: "17:00", end: "18:40" },
    ],
  },
  {
    id: "dcc831-p13",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Criptografia - teoria e aplicações",
    code: "DCC831",
    className: "P13",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Inglês",
    modality: "Presencial",
    meetings: [
      { day: "SEG", start: "19:00", end: "20:40" },
      { day: "QUA", start: "19:00", end: "20:40" },
    ],
  },
  {
    id: "dcc831-p14",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: IA Generativa para Música",
    code: "DCC831",
    className: "P14",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "TER", start: "17:00", end: "18:40" },
      { day: "QUI", start: "17:00", end: "18:40" },
    ],
  },
  {
    id: "dcc831-p15",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Aprendizado por Reforço",
    code: "DCC831",
    className: "P15",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "TER", start: "17:00", end: "18:40" },
      { day: "QUI", start: "17:00", end: "18:40" },
    ],
  },
  {
    id: "dcc831-p16",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Manutenção e Evolução de Software",
    code: "DCC831",
    className: "P16",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "SEG", start: "17:00", end: "18:40" },
      { day: "QUA", start: "17:00", end: "18:40" },
    ],
  },
  {
    id: "dcc831-p17",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Sistemas Operacionais Avançados",
    code: "DCC831",
    className: "P17",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "TER", start: "14:55", end: "16:35" },
      { day: "QUI", start: "14:55", end: "16:35" },
    ],
  },
  {
    id: "dcc831-p18",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Quantitative Information Flow",
    code: "DCC831",
    className: "P18",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Inglês",
    modality: "Presencial",
    meetings: [
      { day: "SEG", start: "14:55", end: "16:35" },
      { day: "QUA", start: "14:55", end: "16:35" },
    ],
  },
  {
    id: "dcc831-p19",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Nanocomputação e Nanotecnologia Computacional",
    code: "DCC831",
    className: "P19",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "SEG", start: "17:00", end: "18:40" },
      { day: "QUA", start: "17:00", end: "18:40" },
    ],
  },
  {
    id: "dcc831-p20",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Cibersegurança",
    code: "DCC831",
    className: "P20",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "SEG", start: "19:00", end: "20:40" },
      { day: "QUA", start: "19:00", end: "20:40" },
    ],
  },
  {
    id: "dcc831-p21",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Computação Natural",
    code: "DCC831",
    className: "P21",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "TER", start: "17:00", end: "18:40" },
      { day: "QUI", start: "17:00", end: "18:40" },
    ],
  },
  {
    id: "dcc831-p22",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Heurísticas e Metaheurísticas",
    code: "DCC831",
    className: "P22",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "TER", start: "14:55", end: "16:35" },
      { day: "QUI", start: "14:55", end: "16:35" },
    ],
  },
  {
    id: "dcc831-p23",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Programação e Arquitetura de Computadores Paralelos",
    code: "DCC831",
    className: "P23",
    type: "T",
    cpv: "S",
    vacancies: 10,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "SEG", start: "14:55", end: "16:35" },
      { day: "QUA", start: "14:55", end: "16:35" },
    ],
  },
  {
    id: "dcc831-p24",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Teoria dos Grafos",
    code: "DCC831",
    className: "P24",
    type: "T",
    cpv: "S",
    vacancies: 10,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "TER", start: "13:00", end: "14:40" },
      { day: "QUI", start: "13:00", end: "14:40" },
    ],
  },
  {
    id: "dcc831-pg1",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Aprendizado Profundo para Processamento de Linguagem Natural",
    code: "DCC831",
    className: "PG1",
    type: "T",
    cpv: "S",
    vacancies: 40,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "TER", start: "17:00", end: "18:40" },
      { day: "QUI", start: "17:00", end: "18:40" },
    ],
  },
  {
    id: "dcc831-pg2",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Engenharia de Software Experimental",
    code: "DCC831",
    className: "PG2",
    type: "T",
    cpv: "S",
    vacancies: 40,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "SEG", start: "17:00", end: "18:40" },
      { day: "QUA", start: "17:00", end: "18:40" },
    ],
  },
  {
    id: "dcc831-pg3",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Engenharia de Software para Sistemas Inteligentes",
    code: "DCC831",
    className: "PG3",
    type: "T",
    cpv: "S",
    vacancies: 40,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "SEG", start: "14:55", end: "16:35" },
      { day: "QUA", start: "14:55", end: "16:35" },
    ],
  },
  {
    id: "dcc831-pg4",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Seminários Avançados em Processamento de Linguagem Natural e Computação Social",
    code: "DCC831",
    className: "PG4",
    type: "T",
    cpv: "S",
    vacancies: 40,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "SEG", start: "14:55", end: "16:35" },
      { day: "QUA", start: "14:55", end: "16:35" },
    ],
  },
  {
    id: "dcc831-pg5",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Inteligência Artificial: Caracterização e Medição",
    code: "DCC831",
    className: "PG5",
    type: "T",
    cpv: "S",
    vacancies: 40,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "TER", start: "14:55", end: "16:35" },
      { day: "QUI", start: "14:55", end: "16:35" },
    ],
  },
  {
    id: "dcc831-pg6",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Bancos de Dados Geográficos e Ciência de Dados Geoespaciais",
    code: "DCC831",
    className: "PG6",
    type: "T",
    cpv: "S",
    vacancies: 10,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "TER", start: "17:00", end: "18:40" },
      { day: "QUI", start: "17:00", end: "18:40" },
    ],
  },
  {
    id: "dcc831-pg7",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Teste de Software",
    code: "DCC831",
    className: "PG7",
    type: "T",
    cpv: "S",
    vacancies: 10,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "TER", start: "19:00", end: "20:40" },
      { day: "QUI", start: "19:00", end: "20:40" },
    ],
  },
  {
    id: "dcc831-pg8",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Otimização Linear Robusta",
    code: "DCC831",
    className: "PG8",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "TER", start: "13:00", end: "14:40" },
      { day: "QUI", start: "13:00", end: "14:40" },
    ],
  },
  {
    id: "dcc831-pg9",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Grandes Modelos de Linguagem",
    code: "DCC831",
    className: "PG9",
    type: "T",
    cpv: "S",
    vacancies: 15,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "SEG", start: "14:55", end: "16:35" },
      { day: "QUA", start: "14:55", end: "16:35" },
    ],
  },
  {
    id: "dcc850-pg1",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Seminários Avançados de Pós-Graduação I",
    code: "DCC850",
    className: "PG1",
    type: "T",
    cpv: "S",
    vacancies: 40,
    language: "Português",
    modality: "Presencial",
    meetings: [{ day: "SEX", start: "10:00", end: "12:40" }],
  },
  {
    id: "dcc850-pg2",
    activity: "Tópicos Especiais em Ciência da Computação",
    name: "TECC: Seminários Avançados de Pós-Graduação II",
    code: "DCC850",
    className: "PG2",
    type: "T",
    cpv: "S",
    vacancies: 40,
    language: "Português",
    modality: "Presencial",
    meetings: [{ day: "SEX", start: "10:00", end: "12:40" }],
  },
  {
    id: "dcc865-pg1",
    activity: "Projeto e Análise de Algoritmos",
    name: "Projeto e Análise de Algoritmos",
    code: "DCC865",
    className: "PG1",
    type: "T",
    cpv: "N",
    vacancies: 25,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "SEG", start: "13:00", end: "14:40" },
      { day: "QUA", start: "13:00", end: "14:40" },
    ],
  },
  {
    id: "dcc865-pg2",
    activity: "Projeto e Análise de Algoritmos",
    name: "Projeto e Análise de Algoritmos",
    code: "DCC865",
    className: "PG2",
    type: "T",
    cpv: "N",
    vacancies: 25,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "SEG", start: "13:00", end: "14:40" },
      { day: "QUA", start: "13:00", end: "14:40" },
    ],
  },
  {
    id: "dcc904-pg",
    activity: "Estágio em Docência I",
    name: "Estágio em Docência I",
    code: "DCC904",
    className: "PG",
    type: "P",
    cpv: "N",
    vacancies: 40,
    language: "Português",
    modality: "Presencial",
    meetings: [{ day: "SEX", start: "14:55", end: "16:35" }],
  },
  {
    id: "dcc905-pg",
    activity: "Estágio em Docência II",
    name: "Estágio em Docência II",
    code: "DCC905",
    className: "PG",
    type: "P",
    cpv: "N",
    vacancies: 40,
    language: "Português",
    modality: "Presencial",
    meetings: [{ day: "SEX", start: "17:00", end: "18:40" }],
  },
  {
    id: "dcc911-pg",
    activity: "Robótica Móvel",
    name: "Robótica Móvel",
    code: "DCC911",
    className: "PG",
    type: "T",
    cpv: "N",
    vacancies: 5,
    language: "Português",
    modality: "Presencial",
    meetings: [
      { day: "TER", start: "13:00", end: "14:40" },
      { day: "QUI", start: "13:00", end: "14:40" },
    ],
  },
];

const els = {
  scheduleGrid: document.querySelector("#scheduleGrid"),
  courseList: document.querySelector("#courseList"),
  searchInput: document.querySelector("#searchInput"),
  codeFilter: document.querySelector("#codeFilter"),
  languageFilter: document.querySelector("#languageFilter"),
  conflictOnly: document.querySelector("#conflictOnly"),
  totalCourses: document.querySelector("#totalCourses"),
  totalMeetings: document.querySelector("#totalMeetings"),
  totalConflicts: document.querySelector("#totalConflicts"),
  resultInfo: document.querySelector("#resultInfo"),
  btnPrint: document.querySelector("#btnPrint"),
  btnClear: document.querySelector("#btnClear"),
  modal: document.querySelector("#courseModal"),
  closeModal: document.querySelector("#closeModal"),
  modalContent: document.querySelector("#modalContent"),
};

function timeToMinutes(value) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function intervalsOverlap(aStart, aEnd, bStart, bEnd) {
  return timeToMinutes(aStart) < timeToMinutes(bEnd) && timeToMinutes(aEnd) > timeToMinutes(bStart);
}

function normalize(value) {
  return value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function cssColorFor(course) {
  const palette = ["#0e5b9f", "#12386b", "#287271", "#7b2cbf", "#8a4f17", "#2f855a", "#805ad5", "#2563eb"];
  if (course.language === "Inglês") return "#aa1236";
  let hash = 0;
  for (const char of course.id) hash = char.charCodeAt(0) + ((hash << 5) - hash);
  return palette[Math.abs(hash) % palette.length];
}

function formatMeetings(course) {
  return course.meetings.map((m) => `${m.day} ${m.start} - ${m.end}`).join(" · ");
}

function uniqueCodes() {
  return [...new Set(COURSES.map((course) => course.code))].sort();
}

function populateFilters() {
  uniqueCodes().forEach((code) => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = code;
    els.codeFilter.appendChild(option);
  });
}

function getFilters() {
  return {
    query: normalize(els.searchInput.value.trim()),
    code: els.codeFilter.value,
    language: els.languageFilter.value,
    conflictOnly: els.conflictOnly.checked,
  };
}

function matchesFilters(course, filters) {
  const haystack = normalize(`${course.name} ${course.code} ${course.className} ${course.activity} ${course.language}`);
  const matchesQuery = !filters.query || haystack.includes(filters.query);
  const matchesCode = filters.code === "all" || course.code === filters.code;
  const matchesLanguage = filters.language === "all" || course.language === filters.language;
  return matchesQuery && matchesCode && matchesLanguage;
}

function visibleCourses() {
  const filters = getFilters();
  return COURSES.filter((course) => matchesFilters(course, filters));
}

function coursesInSlot(courses, day, slot) {
  return courses.filter((course) =>
    course.meetings.some((meeting) => meeting.day === day && intervalsOverlap(meeting.start, meeting.end, slot.start, slot.end))
  );
}

function meetingForSlot(course, day, slot) {
  return course.meetings.find((meeting) => meeting.day === day && intervalsOverlap(meeting.start, meeting.end, slot.start, slot.end));
}

function countConflictSlots(courses) {
  let total = 0;
  for (const slot of DISPLAY_SLOTS) {
    for (const day of DAYS) {
      if (coursesInSlot(courses, day.key, slot).length > 1) total += 1;
    }
  }
  return total;
}

function createCourseCard(course, options = {}) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = `course-card ${course.language === "Inglês" ? "is-english" : ""} ${options.isLong ? "is-long" : ""}`;
  card.style.setProperty("--card-color", cssColorFor(course));
  card.innerHTML = `
    <span class="course-title">${course.name}</span>
    <span class="course-subtitle">
      <span class="tag">${course.code} · ${course.className}</span>
      <span class="tag ${course.language === "Inglês" ? "tag--accent" : ""}">${course.language}</span>
      ${options.conflict ? `<span class="tag tag--warn">conflito</span>` : ""}
      ${options.isLong ? `<span class="tag">${options.meeting.start}-${options.meeting.end}</span>` : ""}
    </span>
  `;
  card.addEventListener("click", () => openModal(course));
  return card;
}

function renderGrid() {
  const courses = visibleCourses();
  const filters = getFilters();
  els.scheduleGrid.innerHTML = "";

  const headerTime = document.createElement("div");
  headerTime.className = "grid-head";
  headerTime.textContent = "Horário";
  els.scheduleGrid.appendChild(headerTime);

  DAYS.forEach((day) => {
    const head = document.createElement("div");
    head.className = "grid-head";
    head.textContent = day.label;
    els.scheduleGrid.appendChild(head);
  });

  DISPLAY_SLOTS.forEach((slot) => {
    const timeCell = document.createElement("div");
    timeCell.className = "time-cell";
    timeCell.textContent = `${slot.start} – ${slot.end}`;
    els.scheduleGrid.appendChild(timeCell);

    DAYS.forEach((day) => {
      const slotCourses = coursesInSlot(courses, day.key, slot);
      const hasConflict = slotCourses.length > 1;
      const shouldHide = filters.conflictOnly && !hasConflict;

      const cell = document.createElement("div");
      cell.className = `day-cell ${slotCourses.length === 0 || shouldHide ? "is-empty" : ""}`;

      if (shouldHide) {
        cell.innerHTML = `<span class="empty-text">Sem conflito</span>`;
      } else if (slotCourses.length === 0) {
        cell.innerHTML = `<span class="empty-text">Livre</span>`;
      } else {
        const meta = document.createElement("div");
        meta.className = "cell-meta";
        meta.innerHTML = hasConflict ? `<span class="conflict-badge">! ${slotCourses.length} disciplinas</span>` : "";
        cell.appendChild(meta);

        slotCourses.forEach((course) => {
          const meeting = meetingForSlot(course, day.key, slot);
          const isLong = meeting && (meeting.start !== slot.start || meeting.end !== slot.end);
          cell.appendChild(createCourseCard(course, { conflict: hasConflict, isLong, meeting }));
        });
      }

      els.scheduleGrid.appendChild(cell);
    });
  });

  updateStats(courses);
}

function renderList() {
  const courses = visibleCourses();
  els.courseList.innerHTML = "";

  if (courses.length === 0) {
    els.courseList.innerHTML = `<div class="no-results">Nenhuma disciplina encontrada para os filtros selecionados.</div>`;
    return;
  }

  courses.forEach((course) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "course-row";
    row.innerHTML = `
      <h3>${course.name}</h3>
      <p>${formatMeetings(course)}</p>
      <span class="tag">${course.code} · ${course.className}</span>
      <span class="tag">${course.vacancies} vagas</span>
      <span class="tag ${course.language === "Inglês" ? "tag--accent" : ""}">${course.language}</span>
    `;
    row.addEventListener("click", () => openModal(course));
    els.courseList.appendChild(row);
  });
}

function updateStats(courses) {
  const totalMeetings = courses.reduce((sum, course) => sum + course.meetings.length, 0);
  const conflicts = countConflictSlots(courses);
  els.totalCourses.textContent = courses.length;
  els.totalMeetings.textContent = totalMeetings;
  els.totalConflicts.textContent = conflicts;
  els.resultInfo.textContent = `${courses.length} disciplina${courses.length === 1 ? "" : "s"} exibida${courses.length === 1 ? "" : "s"}`;
}

function openModal(course) {
  els.modalContent.innerHTML = `
    <div class="modal-content">
      <div class="modal-hero">
        <h2>${course.name}</h2>
        <p>${course.activity}</p>
      </div>
      <div class="detail-grid">
        <div class="detail"><strong>Código</strong><span>${course.code}</span></div>
        <div class="detail"><strong>Turma</strong><span>${course.className}</span></div>
        <div class="detail"><strong>Tipo</strong><span>${course.type}</span></div>
        <div class="detail"><strong>C.P.V.</strong><span>${course.cpv}</span></div>
        <div class="detail"><strong>Vagas</strong><span>${course.vacancies}</span></div>
        <div class="detail"><strong>Idioma</strong><span>${course.language}</span></div>
        <div class="detail"><strong>Modalidade</strong><span>${course.modality}</span></div>
        <div class="detail"><strong>Horários</strong><span>${formatMeetings(course)}</span></div>
      </div>
    </div>
  `;
  if (typeof els.modal.showModal === "function") {
    els.modal.showModal();
  }
}

function closeModal() {
  if (els.modal.open) els.modal.close();
}

function clearFilters() {
  els.searchInput.value = "";
  els.codeFilter.value = "all";
  els.languageFilter.value = "all";
  els.conflictOnly.checked = false;
  render();
}

function render() {
  renderGrid();
  renderList();
}

function bindEvents() {
  [els.searchInput, els.codeFilter, els.languageFilter, els.conflictOnly].forEach((element) => {
    element.addEventListener("input", render);
    element.addEventListener("change", render);
  });
  els.btnPrint.addEventListener("click", () => window.print());
  els.btnClear.addEventListener("click", clearFilters);
  els.closeModal.addEventListener("click", closeModal);
  els.modal.addEventListener("click", (event) => {
    if (event.target === els.modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

populateFilters();
bindEvents();
render();

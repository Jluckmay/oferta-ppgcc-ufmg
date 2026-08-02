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

const RAW_COURSES = [
  {
    "number": 1,
    "code": "DCC831",
    "name": "TECC: Aprendizado Profundo para Processamento de Linguagem Natural",
    "className": "PG1",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 17:00/18:40",
    "teacher": "Adriano Veloso",
    "room": "DCC 2009",
    "startDate": "11/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 2,
    "code": "DCC831",
    "name": "TECC: Engenharia de Software Experimental",
    "className": "PG2",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "2a e 4a - 17:00/18:40",
    "teacher": "Eduardo Figueiredo",
    "room": "DCC 2009",
    "startDate": "03/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "SIM",
    "language": "Português"
  },
  {
    "number": 3,
    "code": "DCC831",
    "name": "TECC: Engenharia de Software para Sistemas Inteligentes",
    "className": "PG3",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "2a e 4a - 14:55/16:35",
    "teacher": "João Eduardo",
    "room": "DCC 2013",
    "startDate": "10/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "SIM",
    "language": "Português"
  },
  {
    "number": 4,
    "code": "DCC831",
    "name": "TECC: Seminários Avançados em Processamento de Linguagem Natural e Computação Social",
    "className": "PG4",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "2a e 4a - 14:55/16:35",
    "teacher": "Jussara",
    "room": "DCC 2015",
    "startDate": "10/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "SIM",
    "language": "Português"
  },
  {
    "number": 5,
    "code": "DCC831",
    "name": "TECC: Inteligência Artificial: Caracterização e Medição",
    "className": "PG5",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 14:55/16:35",
    "teacher": "Wagner",
    "room": "DCC 2013",
    "startDate": "11/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 6,
    "code": "DCC831",
    "name": "TECC: Bancos de Dados Geográficos e Ciência de Dados Geoespaciais",
    "className": "PG6",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 13:00/14:40",
    "teacher": "Clodoveu",
    "room": "CAD 3 - A406",
    "startDate": "04/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 7,
    "code": "DCC831",
    "name": "TECC: Teste de Software",
    "className": "PG7",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 19:00/20:40",
    "teacher": "André Hora",
    "room": "CAD 3 - A312",
    "startDate": "04/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 8,
    "code": "DCC831",
    "name": "TECC: Otimização Linear Robusta",
    "className": "PG8",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 13:00/14:40",
    "teacher": "Márcio Costa",
    "room": "CAD 3 - A211",
    "startDate": "11/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "SIM",
    "language": "Português"
  },
  {
    "number": 9,
    "code": "DCC831",
    "name": "TECC: Grandes Modelos de Linguagem",
    "className": "PG9",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "2a e 4a - 14:55/16:35",
    "teacher": "Anísio",
    "room": "CAD 3 - A313",
    "startDate": "10/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 10,
    "code": "DCC831",
    "name": "TECC: Theory and Practice of SMT Solving",
    "className": "P12",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "2a e 4a - 17:00/18:40",
    "teacher": "Haniel",
    "room": "CAD 3 - A211",
    "startDate": "10/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "SIM",
    "language": "Inglês"
  },
  {
    "number": 11,
    "code": "DCC831",
    "name": "TECC: Criptografia – teoria e aplicações (inglês)",
    "className": "P13",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "2a e 4a - 19:00/20:40",
    "teacher": "Jeroen",
    "room": "CAD 3 - A211",
    "startDate": "10/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "SIM",
    "language": "Inglês"
  },
  {
    "number": 12,
    "code": "DCC831",
    "name": "TECC: IA Generativa para Música",
    "className": "P14",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 17:00/18:40",
    "teacher": "Lucas Ferreira",
    "room": "CAD 3 - A313",
    "startDate": "11/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 13,
    "code": "DCC831",
    "name": "TECC: Aprendizado por Reforço",
    "className": "P15",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 17:00/18:40",
    "teacher": "Luiz Chaimowicz",
    "room": "CAD 3 - A213",
    "startDate": "11/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 14,
    "code": "DCC831",
    "name": "TES: Manutenção e Evolução de Software",
    "className": "P16",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "2a e 4a - 17:00/18:40",
    "teacher": "Marco Túlio",
    "room": "CAD 3 - A212",
    "startDate": "",
    "plan": "",
    "elective": "",
    "isolated": "SIM",
    "language": "Português"
  },
  {
    "number": 15,
    "code": "DCC831",
    "name": "TECC: Sistemas Operacionais Avançados",
    "className": "P17",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 14:55/16:35",
    "teacher": "Marcos Augusto Menezes",
    "room": "CAD 3 - Aud. B 3001",
    "startDate": "11/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "SIM",
    "language": "Português"
  },
  {
    "number": 16,
    "code": "DCC831",
    "name": "TECC: Quantitative Information Flow (inglês)",
    "className": "P18",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "2a e 4a - 14:55/16:35",
    "teacher": "Mário Sérgio",
    "room": "CAD 3 - A310",
    "startDate": "10/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "SIM",
    "language": "Inglês"
  },
  {
    "number": 17,
    "code": "DCC831",
    "name": "TECC: Nanocomputação e Nanotecnologia Computacional",
    "className": "P19",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "2a e 4a - 17:00/18:40",
    "teacher": "Omar",
    "room": "CAD 3 - A410",
    "startDate": "03/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 18,
    "code": "DCC831",
    "name": "TECC: Cibersegurança",
    "className": "P20",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 19:00/20:40",
    "teacher": "Michele Nogueira",
    "room": "CAD 3 - A208",
    "startDate": "04/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 19,
    "code": "DCC831",
    "name": "TECC: Computação Natural",
    "className": "P21",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 17:00/18:40",
    "teacher": "Gisele",
    "room": "CAD 3 - A312",
    "startDate": "11/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 20,
    "code": "DCC831",
    "name": "TECC: Heurísticas e Metaheurísticas",
    "className": "P22",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 14:55/16:35",
    "teacher": "Thiago Noronha",
    "room": "CAD 3 - A312",
    "startDate": "11/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "SIM",
    "language": "Português"
  },
  {
    "number": 21,
    "code": "DCC831",
    "name": "TECC: Programação e Arquitetura de Computadores Paralelos",
    "className": "P23",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "2a e 4a - 14:55/16:35",
    "teacher": "George",
    "room": "CAD 3 - A406",
    "startDate": "10/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "SIM",
    "language": "Português"
  },
  {
    "number": 22,
    "code": "DCC831",
    "name": "TECC: Teoria dos Grafos",
    "className": "P24",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 13:00/14:40",
    "teacher": "Gabriel Coutinho",
    "room": "CAD 3 - A311",
    "startDate": "11/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 23,
    "code": "DCC831",
    "name": "TECC: Projeto de Sistemas Robóticos",
    "className": "P25",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 19:00/20:40",
    "teacher": "Paulo Rezeck",
    "room": "CAD 3 - A410",
    "startDate": "11/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 24,
    "code": "DCC850",
    "name": "TECC: Seminários Avançados de Pós-Graduação I",
    "className": "PG1",
    "workload": 15,
    "credits": 1,
    "type": "OB",
    "scheduleText": "6a - 10:00/12:40",
    "teacher": "Pedro",
    "room": "2077",
    "startDate": "05/08/2026",
    "plan": "",
    "elective": "NÃO",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 25,
    "code": "DCC850",
    "name": "TECC: Seminários Avançados de Pós-Graduação II",
    "className": "PG2",
    "workload": 15,
    "credits": 1,
    "type": "OB",
    "scheduleText": "6a - 10:00/12:40",
    "teacher": "Fabrício",
    "room": "2077",
    "startDate": "05/08/2026",
    "plan": "",
    "elective": "NÃO",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 26,
    "code": "DCC851",
    "name": "TECC: Modelos Generativos para Imagens",
    "className": "PG1",
    "workload": 30,
    "credits": 2,
    "type": "OP",
    "scheduleText": "3a e 5a - 14:55/16:35",
    "teacher": "Erickson",
    "room": "DCC 2014",
    "startDate": "11/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 27,
    "code": "DCC851",
    "name": "TECC: Seminários Avançados em Grafos e Algoritmos",
    "className": "PG2",
    "workload": 30,
    "credits": 2,
    "type": "OP",
    "scheduleText": "6a - 13:00/14:40",
    "teacher": "Guilherme Gomes",
    "room": "DCC 2009",
    "startDate": "14/08/2026",
    "plan": "",
    "elective": "",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 28,
    "code": "DCC865",
    "name": "Projeto e Análise de Algoritmos",
    "className": "PG",
    "workload": 60,
    "credits": 4,
    "type": "OB",
    "scheduleText": "2a e 4a - 13:00/14:40",
    "teacher": "Olga",
    "room": "DCC 2013",
    "startDate": "",
    "plan": "",
    "elective": "NÃO",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 29,
    "code": "DCC904",
    "name": "Estágio em Docência I",
    "className": "PG",
    "workload": 30,
    "credits": 2,
    "type": "OB",
    "scheduleText": "",
    "teacher": "Ericksom",
    "room": "",
    "startDate": "",
    "plan": "",
    "elective": "NÃO",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 30,
    "code": "DCC905",
    "name": "Estágio em Docência II",
    "className": "PG",
    "workload": 30,
    "credits": 2,
    "type": "OB",
    "scheduleText": "",
    "teacher": "Fabrício",
    "room": "",
    "startDate": "",
    "plan": "",
    "elective": "NÃO",
    "isolated": "NÃO",
    "language": "Português"
  },
  {
    "number": 31,
    "code": "DCC911",
    "name": "Robótica Móvel",
    "className": "PG",
    "workload": 60,
    "credits": 4,
    "type": "OP",
    "scheduleText": "3a e 5a - 13:00/14:40",
    "teacher": "Douglas",
    "room": "CAD 3 - A407",
    "startDate": "04/08/2026",
    "plan": "",
    "elective": "NÃO",
    "isolated": "SIM",
    "language": "Português"
  }
];

const DAY_MAP = {
  "2a": "SEG",
  "3a": "TER",
  "4a": "QUA",
  "5a": "QUI",
  "6a": "SEX",
};

const COURSES = RAW_COURSES.map((course) => ({
  ...course,
  id: `${course.code.toLowerCase()}-${course.className.toLowerCase()}-${course.number}`.replace(/[^a-z0-9-]/g, "-"),
  meetings: parseMeetings(course.scheduleText),
}));

const state = {
  search: "",
  code: "all",
  type: "all",
  isolated: "all",
};

const elements = {
  totalCourses: document.querySelector("#totalCourses"),
  scheduledCourses: document.querySelector("#scheduledCourses"),
  roomsCount: document.querySelector("#roomsCount"),
  searchInput: document.querySelector("#searchInput"),
  codeFilter: document.querySelector("#codeFilter"),
  typeFilter: document.querySelector("#typeFilter"),
  isolatedFilter: document.querySelector("#isolatedFilter"),
  btnPrint: document.querySelector("#btnPrint"),
  btnClear: document.querySelector("#btnClear"),
  scheduleGrid: document.querySelector("#scheduleGrid"),
  courseList: document.querySelector("#courseList"),
  resultInfo: document.querySelector("#resultInfo"),
  modal: document.querySelector("#courseModal"),
  modalContent: document.querySelector("#modalContent"),
  closeModal: document.querySelector("#closeModal"),
};

function parseMeetings(scheduleText) {
  if (!scheduleText || !scheduleText.includes("-")) return [];

  const [daysPart, hourPart] = scheduleText.split("-").map((part) => part.trim());
  const [start, end] = hourPart.split("/").map((part) => part.trim());
  if (!start || !end) return [];

  const dayTokens = daysPart
    .replace(/\s+e\s+/g, ",")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  return dayTokens
    .map((token) => DAY_MAP[token])
    .filter(Boolean)
    .map((day) => ({ day, start, end }));
}

function setupFilters() {
  [...new Set(COURSES.map((course) => course.code))]
    .sort()
    .forEach((code) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = code;
      elements.codeFilter.appendChild(option);
    });

  elements.searchInput.addEventListener("input", (event) => {
    state.search = normalize(event.target.value);
    render();
  });

  elements.codeFilter.addEventListener("change", (event) => {
    state.code = event.target.value;
    render();
  });

  elements.typeFilter.addEventListener("change", (event) => {
    state.type = event.target.value;
    render();
  });

  elements.isolatedFilter.addEventListener("change", (event) => {
    state.isolated = event.target.value;
    render();
  });


  elements.btnPrint.addEventListener("click", () => window.print());
  elements.btnClear.addEventListener("click", clearFilters);
  elements.closeModal.addEventListener("click", () => elements.modal.close());
  elements.modal.addEventListener("click", (event) => {
    if (event.target === elements.modal) elements.modal.close();
  });
}

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getSearchBlob(course) {
  return normalize([
    course.number,
    course.code,
    course.name,
    course.className,
    course.type,
    course.scheduleText,
    course.teacher,
    course.room,
    course.startDate,
    course.isolated,
    course.language,
  ].join(" "));
}

function getFilteredCourses() {
  return COURSES.filter((course) => {
    const matchesSearch = !state.search || getSearchBlob(course).includes(state.search);
    const matchesCode = state.code === "all" || course.code === state.code;
    const matchesType = state.type === "all" || course.type === state.type;
    const matchesIsolated = state.isolated === "all" || course.isolated === state.isolated;
    return matchesSearch && matchesCode && matchesType && matchesIsolated;
  });
}

function coursesForCell(courses, day, slot) {
  return courses
    .filter((course) => course.meetings.some((meeting) => (
      meeting.day === day && meeting.start === slot.start && meeting.end === slot.end
    )))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
}

function render() {
  const filteredCourses = getFilteredCourses();
  const uniqueRooms = new Set(COURSES.map((course) => course.room).filter(Boolean));

  elements.totalCourses.textContent = COURSES.length;
  elements.scheduledCourses.textContent = COURSES.filter((course) => course.meetings.length > 0).length;
  elements.roomsCount.textContent = uniqueRooms.size;
  elements.resultInfo.textContent = `${filteredCourses.length} de ${COURSES.length} disciplinas`;

  renderSchedule(filteredCourses);
  renderList(filteredCourses);
}

function renderSchedule(courses) {
  elements.scheduleGrid.innerHTML = "";

  const emptyTop = document.createElement("div");
  emptyTop.className = "grid-cell grid-head";
  emptyTop.textContent = "Horário";
  elements.scheduleGrid.appendChild(emptyTop);

  DAYS.forEach((day) => {
    const cell = document.createElement("div");
    cell.className = "grid-cell grid-head";
    cell.textContent = day.label;
    elements.scheduleGrid.appendChild(cell);
  });

  DISPLAY_SLOTS.forEach((slot) => {
    const timeCell = document.createElement("div");
    timeCell.className = "grid-cell grid-time";
    timeCell.innerHTML = `<span>${slot.start}<br>${slot.end}</span>`;
    elements.scheduleGrid.appendChild(timeCell);

    DAYS.forEach((day) => {
      const items = coursesForCell(courses, day.key, slot);
      const cell = document.createElement("div");
      cell.className = "grid-cell";

      if (items.length === 0) {
        const empty = document.createElement("div");
        empty.className = "cell-empty";
        empty.textContent = "Livre";
        cell.appendChild(empty);
      } else {
        items.forEach((course) => cell.appendChild(createCourseCard(course)));
      }
      elements.scheduleGrid.appendChild(cell);
    });
  });
}

function createCourseCard(course) {
  const button = document.createElement("button");
  button.className = `course-card course-card--${course.type.toLowerCase()}`;
  button.type = "button";
  button.addEventListener("click", () => openModal(course));

  button.innerHTML = `
    <div class="course-card__top">
      <span class="course-card__name">${escapeHtml(shortName(course.name))}</span>
      <span class="badge">${course.type}</span>
    </div>
    <div class="course-card__meta">
      <strong>${escapeHtml(course.code)} · ${escapeHtml(course.className)}</strong><br>
      ${escapeHtml(course.room || "Sala não informada")}<br>
      ${escapeHtml(course.teacher || "Docente não informado")}
    </div>
  `;
  return button;
}

function renderList(courses) {
  elements.courseList.innerHTML = "";

  if (courses.length === 0) {
    elements.courseList.innerHTML = `<div class="no-results">Nenhuma disciplina encontrada com os filtros atuais.</div>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  courses
    .slice()
    .sort((a, b) => a.number - b.number)
    .forEach((course) => {
      const item = document.createElement("button");
      item.className = "list-item";
      item.type = "button";
      item.addEventListener("click", () => openModal(course));
      item.innerHTML = `
        <div class="list-item__title">
          <h3>${escapeHtml(course.number)}. ${escapeHtml(course.name)}</h3>
          <span class="badge">${course.type}</span>
        </div>
        <div class="meta-grid">
          <div><strong>Código / turma</strong>${escapeHtml(course.code)} · ${escapeHtml(course.className)}</div>
          <div><strong>Horário</strong>${escapeHtml(course.scheduleText || "Não informado")}</div>
          <div><strong>Docente</strong>${escapeHtml(course.teacher || "Não informado")}</div>
          <div><strong>Sala</strong>${escapeHtml(course.room || "Não informada")}</div>
        </div>
      `;
      fragment.appendChild(item);
    });
  elements.courseList.appendChild(fragment);
}

function openModal(course) {
  const isOb = course.type === "OB";
  elements.modalContent.innerHTML = `
    <div class="modal-head ${isOb ? "modal-head--ob" : ""}">
      <span class="badge">${escapeHtml(course.code)} · ${escapeHtml(course.className)} · ${escapeHtml(course.type)}</span>
      <h2>${escapeHtml(course.name)}</h2>
      <p>${escapeHtml(course.scheduleText || "Horário não informado")}</p>
    </div>
    <div class="modal-body">
      <div class="detail-grid">
        <div class="detail"><span>Docente</span><strong>${escapeHtml(course.teacher || "Não informado")}</strong></div>
        <div class="detail"><span>Sala</span><strong>${escapeHtml(course.room || "Não informada")}</strong></div>
        <div class="detail"><span>Início das aulas</span><strong>${escapeHtml(course.startDate || "Não informado")}</strong></div>
        <div class="detail"><span>Carga horária / créditos</span><strong>${course.workload}h · ${course.credits} crédito(s)</strong></div>
        <div class="detail"><span>Disciplina isolada</span><strong>${escapeHtml(course.isolated || "Não informado")}</strong></div>
        <div class="detail"><span>Disciplina eletiva</span><strong>${escapeHtml(course.elective || "Não informado")}</strong></div>
        <div class="detail"><span>Plano de curso</span><strong>${escapeHtml(course.plan || "Não informado")}</strong></div>
        <div class="detail"><span>Idioma</span><strong>${escapeHtml(course.language || "Não informado")}</strong></div>
      </div>
    </div>
  `;

  if (typeof elements.modal.showModal === "function") {
    elements.modal.showModal();
  } else {
    alert(`${course.name}\n${course.scheduleText || "Horário não informado"}`);
  }
}

function shortName(name) {
  return name
    .replace(/^TECC:\s*/i, "")
    .replace(/^TES:\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function clearFilters() {
  state.search = "";
  state.code = "all";
  state.type = "all";
  state.isolated = "all";

  elements.searchInput.value = "";
  elements.codeFilter.value = "all";
  elements.typeFilter.value = "all";
  elements.isolatedFilter.value = "all";
  render();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

setupFilters();
render();

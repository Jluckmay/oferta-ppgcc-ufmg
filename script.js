// Constants
const DAYS = [
  { key: "SEG", label: "Segunda", labelEn: "Monday" },
  { key: "TER", label: "Terça", labelEn: "Tuesday" },
  { key: "QUA", label: "Quarta", labelEn: "Wednesday" },
  { key: "QUI", label: "Quinta", labelEn: "Thursday" },
  { key: "SEX", label: "Sexta", labelEn: "Friday" },
];

const DISPLAY_SLOTS = [
  { start: "10:00", end: "12:40" },
  { start: "13:00", end: "14:40" },
  { start: "14:55", end: "16:35" },
  { start: "17:00", end: "18:40" },
  { start: "19:00", end: "20:40" },
];

const DAY_MAP = {
  "2a": "SEG",
  "3a": "TER",
  "4a": "QUA",
  "5a": "QUI",
  "6a": "SEX",
};

const TRANSLATIONS = {
  pt: {
    title: "Grade de Horários",
    subtitle: "Visualização interativa da oferta atualizada de disciplinas do PPGCC",
    disciplines: "disciplinas",
    scheduled: "com horário",
    rooms: "salas informadas",
    search: "Buscar disciplina, código, turma, docente ou sala",
    code: "Código",
    type: "Tipo",
    isolated: "Disciplina isolada",
    all: "Todos",
    optional: "Optativas",
    mandatory: "Obrigatórias",
    yes: "Sim",
    no: "Não",
    clear: "Limpar filtros",
    print: "Imprimir / salvar PDF",
    exportImage: "Baixar como Imagem",
    exportJSON: "Baixar como JSON",
    importJSON: "Importar JSON",
    semester: "Semestre",
    noResults: "Nenhuma disciplina encontrada com os filtros atuais.",
    schedule: "Grade semanal",
    scheduleDesc: "Os cards exibem disciplina, turma, sala e docente. Clique em um card para ver os detalhes completos.",
    list: "Lista de disciplinas",
    listDesc: "Inclui carga horária, créditos, tipo, docente, sala, início das aulas e possibilidade de disciplina isolada.",
    free: "Livre",
    code_label: "Código / turma",
    schedule_label: "Horário",
    teacher_label: "Docente",
    room_label: "Sala",
    workload_label: "Carga horária / créditos",
    isolated_label: "Disciplina isolada",
    elective_label: "Disciplina eletiva",
    plan_label: "Plano de curso",
    language_label: "Idioma",
    notInformed: "Não informado",
    notInformedRoom: "Não informada",
  },
  en: {
    title: "Schedule",
    subtitle: "Interactive view of the updated PPGCC course offerings",
    disciplines: "courses",
    scheduled: "with schedule",
    rooms: "rooms informed",
    search: "Search course, code, class, teacher or room",
    code: "Code",
    type: "Type",
    isolated: "Isolated course",
    all: "All",
    optional: "Electives",
    mandatory: "Mandatory",
    yes: "Yes",
    no: "No",
    clear: "Clear filters",
    print: "Print / save PDF",
    exportImage: "Download as Image",
    exportJSON: "Download as JSON",
    importJSON: "Import JSON",
    semester: "Semester",
    noResults: "No courses found with the current filters.",
    schedule: "Weekly schedule",
    scheduleDesc: "Cards display course, class, room and teacher. Click on a card to see full details.",
    list: "Course list",
    listDesc: "Includes workload, credits, type, teacher, room, start date and isolated course option.",
    free: "Free",
    code_label: "Code / class",
    schedule_label: "Schedule",
    teacher_label: "Teacher",
    room_label: "Room",
    workload_label: "Workload / credits",
    isolated_label: "Isolated course",
    elective_label: "Elective course",
    plan_label: "Course plan",
    language_label: "Language",
    notInformed: "Not informed",
    notInformedRoom: "Not informed",
  },
};

// State
let state = {
  language: localStorage.getItem("language") || "pt",
  theme: localStorage.getItem("theme") || "light",
  courses: [],
  semesters: [],
  selectedSemester: "",
  searchTerms: "",
  selectedCode: "all",
  selectedType: "all",
  selectedIsolated: "all",
  selectedCourse: null,
};

// Utility Functions
function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function shortName(name) {
  return name
    .replace(/^(TECC|TES|TCC|PPGCC):\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

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

function parseSemesterIdentifier(value) {
  const cleaned = String(value ?? "").replace(/\.json$/i, "");
  const [year, term] = cleaned.split("-").map((part) => Number(part));
  return {
    year: Number.isFinite(year) ? year : 0,
    term: Number.isFinite(term) ? term : 0,
  };
}

function getMostRecentSemester(semesterFiles) {
  if (!semesterFiles.length) return "";

  const ranked = semesterFiles
    .map((semester) => ({
      filename: String(semester),
      ...parseSemesterIdentifier(semester),
    }))
    .sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return b.term - a.term;
    });

  return ranked[0]?.filename || "";
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
  return state.courses.filter((course) => {
    const searchBlob = getSearchBlob(course);
    const terms = state.searchTerms.split(";").map((t) => normalize(t)).filter(Boolean);
    const matchesSearch = terms.length === 0 || terms.some((term) => searchBlob.includes(term));
    const matchesCode = state.selectedCode === "all" || course.code === state.selectedCode;
    const matchesType = state.selectedType === "all" || course.type === state.selectedType;
    const matchesIsolated = state.selectedIsolated === "all" || course.isolated === state.selectedIsolated;
    return matchesSearch && matchesCode && matchesType && matchesIsolated;
  });
}

function coursesForCell(coursesArray, day, slot) {
  return coursesArray
    .filter((course) => course.meetings?.some((meeting) => (
      meeting.day === day && meeting.start === slot.start && meeting.end === slot.end
    )))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
}

const t = () => TRANSLATIONS[state.language];

// UI Update Functions
function updateTheme() {
  if (state.theme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("themeIcon").textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    document.getElementById("themeIcon").textContent = "🌙";
  }
  localStorage.setItem("theme", state.theme);
}

function updateLanguage() {
  document.getElementById("langDisplay").textContent = state.language.toUpperCase();
  localStorage.setItem("language", state.language);
  renderUI();
}

function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
  updateTheme();
}

function toggleLanguage() {
  state.language = state.language === "pt" ? "en" : "pt";
  updateLanguage();
}

function clearFilters() {
  state.searchTerms = "";
  state.selectedCode = "all";
  state.selectedType = "all";
  state.selectedIsolated = "all";
  document.getElementById("searchInput").value = "";
  document.getElementById("codeFilter").value = "all";
  document.getElementById("typeFilter").value = "all";
  document.getElementById("isolatedFilter").value = "all";
  applyFilters();
}

function applyFilters() {
  state.searchTerms = document.getElementById("searchInput").value;
  state.selectedCode = document.getElementById("codeFilter").value;
  state.selectedType = document.getElementById("typeFilter").value;
  state.selectedIsolated = document.getElementById("isolatedFilter").value;
  renderUI();
}

function updateStats() {
  const filteredCourses = getFilteredCourses();
  const uniqueRooms = new Set(state.courses.map((course) => course.room).filter(Boolean));
  
  document.getElementById("totalCourses").textContent = state.courses.length;
  document.getElementById("scheduledCourses").textContent = state.courses.filter((c) => c.meetings && c.meetings.length > 0).length;
  document.getElementById("totalRooms").textContent = uniqueRooms.size;
  document.getElementById("resultCount").textContent = filteredCourses.length;
  document.getElementById("totalCount").textContent = state.courses.length;
}

function renderScheduleGrid() {
  const grid = document.getElementById("scheduleGrid");
  grid.innerHTML = "";
  const filteredCourses = getFilteredCourses();

  // Header
  const headerTimeCell = document.createElement("div");
  headerTimeCell.className = "grid-cell grid-head";
  headerTimeCell.textContent = "Horário";
  grid.appendChild(headerTimeCell);

  DAYS.forEach((day) => {
    const headerCell = document.createElement("div");
    headerCell.className = "grid-cell grid-head";
    headerCell.textContent = state.language === "pt" ? day.label : day.labelEn;
    grid.appendChild(headerCell);
  });

  // Time slots
  DISPLAY_SLOTS.forEach((slot) => {
    const timeCell = document.createElement("div");
    timeCell.className = "grid-cell grid-time";
    timeCell.innerHTML = `<span>${slot.start}<br />${slot.end}</span>`;
    grid.appendChild(timeCell);

    DAYS.forEach((day) => {
      const items = coursesForCell(filteredCourses, day.key, slot);
      const cell = document.createElement("div");
      cell.className = `grid-cell ${items.length > 1 ? "grid-cell--multiple" : ""}`;

      if (items.length === 0) {
        const empty = document.createElement("div");
        empty.className = "cell-empty";
        empty.textContent = t().free;
        cell.appendChild(empty);
      } else {
        const container = document.createElement("div");
        container.className = "course-cards-container";

        items.forEach((course) => {
          const card = document.createElement("button");
          card.className = `course-card course-card--${course.type.toLowerCase()}`;
          card.onclick = () => openModal(course);
          card.innerHTML = `
            <div class="course-card__top">
              <span class="course-card__name">${escapeHtml(shortName(course.name))}</span>
              <span class="badge">${course.type}</span>
            </div>
            <div class="course-card__meta">
              <strong>${escapeHtml(course.code)} · ${escapeHtml(course.className)}</strong>
              <span>${escapeHtml(course.room || t().notInformedRoom)}</span>
              <span>${escapeHtml(course.teacher || t().notInformed)}</span>
            </div>
          `;
          container.appendChild(card);
        });

        cell.appendChild(container);
      }

      grid.appendChild(cell);
    });
  });
}

function renderCourseList() {
  const list = document.getElementById("courseList");
  list.innerHTML = "";
  const filteredCourses = getFilteredCourses();

  if (filteredCourses.length === 0) {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.textContent = t().noResults;
    list.appendChild(noResults);
    return;
  }

  filteredCourses.forEach((course) => {
    const item = document.createElement("button");
    item.className = "list-item";
    item.onclick = () => openModal(course);
    item.innerHTML = `
      <div class="list-item__title">
        <h3>${course.number}. ${escapeHtml(course.name)}</h3>
        <span class="badge">${course.type}</span>
      </div>
      <div class="meta-grid">
        <div><strong>${t().code_label}</strong>${escapeHtml(course.code)} · ${escapeHtml(course.className)}</div>
        <div><strong>${t().schedule_label}</strong>${escapeHtml(course.scheduleText || t().notInformed)}</div>
        <div><strong>${t().teacher_label}</strong>${escapeHtml(course.teacher || t().notInformed)}</div>
        <div><strong>${t().room_label}</strong>${escapeHtml(course.room || t().notInformedRoom)}</div>
      </div>
    `;
    list.appendChild(item);
  });
}

function renderUI() {
  updateStats();
  renderScheduleGrid();
  renderCourseList();
}

function openModal(course) {
  state.selectedCourse = course;
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  modal.setAttribute("aria-hidden", "false");
  modalTitle.textContent = course.name;
  modalBody.innerHTML = `
    <div class="detail-grid">
      <div class="detail">
        <span>${t().code_label}</span>
        <strong>${escapeHtml(course.code)} · ${escapeHtml(course.className)} · ${course.type}</strong>
      </div>
      <div class="detail">
        <span>${t().schedule_label}</span>
        <strong>${escapeHtml(course.scheduleText || t().notInformed)}</strong>
      </div>
      <div class="detail">
        <span>${t().teacher_label}</span>
        <strong>${escapeHtml(course.teacher || t().notInformed)}</strong>
      </div>
      <div class="detail">
        <span>${t().room_label}</span>
        <strong>${escapeHtml(course.room || t().notInformedRoom)}</strong>
      </div>
      <div class="detail">
        <span>${t().workload_label}</span>
        <strong>${course.workload}h · ${course.credits} ${state.language === "pt" ? "crédito(s)" : "credit(s)"}</strong>
      </div>
      <div class="detail">
        <span>${t().isolated_label}</span>
        <strong>${escapeHtml(course.isolated || t().notInformed)}</strong>
      </div>
      <div class="detail">
        <span>${t().language_label}</span>
        <strong>${escapeHtml(course.language || t().notInformed)}</strong>
      </div>
    </div>
  `;

  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

// Export Functions
function exportAsJSON() {
  const filtered = getFilteredCourses();
  const dataStr = JSON.stringify(filtered, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `grade-horarios-${new Date().toISOString().split("T")[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function exportAsImage() {
  const grid = document.getElementById("scheduleGrid");
  if (!grid) return;

  try {
    // Use html2canvas if available, otherwise use a simple fallback
    if (typeof html2canvas !== "undefined") {
      const canvas = await html2canvas(grid, {
        backgroundColor: state.theme === "dark" ? "#1a1b1e" : "#ffffff",
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `grade-horarios-${new Date().toISOString().split("T")[0]}.png`;
      link.click();
    } else {
      alert("Para exportar como imagem, adicione a biblioteca html2canvas ao projeto.");
    }
  } catch (error) {
    console.error("Erro ao exportar imagem:", error);
    alert("Erro ao exportar imagem. Tente novamente.");
  }
}

function importJSON() {
  document.getElementById("fileInput").click();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fileInput").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result);
        console.log("Dados importados:", data);
        alert("JSON importado com sucesso!");
      } catch (error) {
        alert("Erro ao importar JSON");
      }
    };
    reader.readAsText(file);
  });
});

// Data Loading
async function loadSemesters() {
  const semesterSelect = document.getElementById("semesterFilter");
  semesterSelect.innerHTML = '<option value="">Semestre</option>';

  let semesterFiles = [];

  try {
    const response = await fetch("semesters/manifest.json");
    if (!response.ok) {
      throw new Error(`Manifesto não encontrado: ${response.status}`);
    }

    const manifest = await response.json();
    semesterFiles = Array.isArray(manifest.semesters) ? manifest.semesters : [];
  } catch (error) {
    console.warn("Não foi possível carregar o manifesto; usando fallback local.", error);
    semesterFiles = Object.keys(SEMESTER_DATA || {});
  }

  const latestSemester = getMostRecentSemester(semesterFiles);
  state.semesters = semesterFiles;

  semesterFiles
    .slice()
    .sort((a, b) => {
      const aInfo = parseSemesterIdentifier(a);
      const bInfo = parseSemesterIdentifier(b);
      if (aInfo.year !== bInfo.year) return bInfo.year - aInfo.year;
      return bInfo.term - aInfo.term;
    })
    .forEach((sem) => {
      const option = document.createElement("option");
      option.value = sem;
      option.textContent = sem.replace(".json", "").replace("-", "/");
      semesterSelect.appendChild(option);
    });

  if (semesterFiles.length > 0) {
    await loadSemesterData(latestSemester || semesterFiles[0]);
  }
}

async function loadSemesterData(filename) {
  try {
    let data = SEMESTER_DATA?.[filename];

    if (!data) {
      const response = await fetch(`semesters/${filename}`);
      if (!response.ok) {
        throw new Error(`Arquivo de semestre não encontrado: ${response.status}`);
      }
      data = await response.json();
    }

    const coursesSource = Array.isArray(data) ? data : data.courses;
    const semesterLabel = Array.isArray(data) ? filename.replace(".json", "") : data.semester;

    const processedCourses = coursesSource.map((course) => ({
      ...course,
      id: `${course.code.toLowerCase()}-${course.className.toLowerCase()}-${course.number}`.replace(/[^a-z0-9-]/g, "-"),
      meetings: parseMeetings(course.scheduleText),
    }));

    state.courses = processedCourses;
    state.selectedSemester = semesterLabel;
    state.selectedCode = "all";
    state.selectedType = "all";
    state.selectedIsolated = "all";
    state.searchTerms = "";

    // Update UI
    document.getElementById("semesterDisplay").textContent = semesterLabel;
    document.getElementById("semesterTitle").textContent = semesterLabel;
    document.getElementById("searchInput").value = "";
    document.getElementById("codeFilter").value = "all";
    document.getElementById("typeFilter").value = "all";
    document.getElementById("isolatedFilter").value = "all";
    document.getElementById("semesterFilter").value = filename;

    // Update code filter options
    const uniqueCodes = Array.from(new Set(state.courses.map((course) => course.code))).sort();
    const codeFilter = document.getElementById("codeFilter");
    codeFilter.innerHTML = '<option value="all">Código</option>';
    uniqueCodes.forEach((code) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = code;
      codeFilter.appendChild(option);
    });

    renderUI();
  } catch (error) {
    console.error("Erro ao carregar semestre:", error);
  }
}

// Modal close on overlay click
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  updateTheme();
  loadSemesters();
});

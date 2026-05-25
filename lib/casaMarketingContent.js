const storageKey = "odonto-casa-marketing-checklist-v1";

const channelStrategies = [
  {
    title: "Google / Maps / site",
    text: "Captar quem já está procurando atendimento odontológico domiciliar ou hospitalar em Maringá e região.",
  },
  {
    title: "Instagram",
    text: "Construir confiança, familiaridade, autoridade, rotina e lembrança sem transformar o perfil em catálogo de serviços.",
  },
  {
    title: "WhatsApp",
    text: "Converter interessados em conversas claras, triagem responsável e agendamentos quando houver indicação.",
  },
  {
    title: "Parcerias locais",
    text: "Gerar indicação recorrente com ILPIs, casas de repouso, home cares, cuidadores, clínicas e profissionais de saúde.",
  },
];

const instagramPillars = [
  ["Rotina e lifestyle profissional", "35%"],
  ["Educação simples em saúde bucal", "25%"],
  ["Cuidado domiciliar/hospitalar", "20%"],
  ["Autoridade e bastidores", "10%"],
  ["Prova social e relacionamento", "10%"],
];

const checklists = [
  {
    id: "instagram-ajustes",
    title: "Ajustes recomendados no Instagram",
    items: [
      "Atualizar nome pesquisável.",
      "Testar opção: “Dra. Patrícia | Dentista em Casa”.",
      "Testar opção: “Patrícia Craveiro | Dentista”.",
      "Testar opção: “Dra. Patrícia | Odonto em Casa”.",
      "Atualizar bio.",
      "Incluir CRO/PR 40021.",
      "Informar atendimento domiciliar e hospitalar.",
      "Informar idosos, acamados e mobilidade reduzida.",
      "Informar Maringá e região.",
      "Inserir CTA para WhatsApp.",
      "Criar destaque “Comece aqui”.",
      "Criar destaque “Em casa”.",
      "Criar destaque “Hospitalar”.",
      "Criar destaque “Idosos”.",
      "Criar destaque “Dúvidas”.",
      "Criar destaque “Rotina”.",
      "Criar destaque “Depoimentos”.",
      "Criar destaque “Contato”.",
      "Fixar post “Quem é a Dra. Patrícia”.",
      "Fixar post “Como funciona o atendimento odontológico em casa”.",
      "Fixar post “Para quem é indicado o atendimento domiciliar”.",
    ],
  },
  {
    id: "google-empresa",
    title: "Google Empresa",
    intro:
      "No Google Empresa, o conteúdo deve ser mais direto e orientado à intenção de busca.",
    items: [
      "Revisar categoria principal.",
      "Revisar categorias secundárias.",
      "Revisar descrição do perfil.",
      "Conferir área de atendimento.",
      "Conferir telefone.",
      "Conferir site com domínio sem www.",
      "Conferir link com UTM.",
      "Revisar serviços principais.",
      "Revisar serviços específicos.",
      "Adicionar fotos institucionais seguras.",
      "Criar post semanal.",
      "Criar perguntas frequentes.",
      "Criar rotina de resposta a avaliações.",
      "Criar link curto de avaliação.",
      "Criar QR Code de avaliação.",
    ],
  },
  {
    id: "site-seo",
    title: "Site e SEO",
    items: [
      "Melhorar página de atendimento domiciliar.",
      "Melhorar página de idosos e acamados.",
      "Melhorar página de atendimento hospitalar.",
      "Melhorar página de instituições e cuidadores.",
      "Criar FAQ específica em páginas principais.",
      "Cada página deve ter CTA claro para WhatsApp.",
      "Cada página deve explicar para quem é indicado.",
      "Cada página deve explicar limites e necessidade de avaliação.",
      "Cada página deve reforçar área de atendimento.",
      "Cada página deve linkar para conteúdos relacionados.",
      "Não prometer resultado.",
      "Não usar linguagem sensacionalista.",
    ],
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    items: [
      "Criar mensagem inicial de atendimento.",
      "Criar mensagem para triagem.",
      "Criar mensagem pós-atendimento.",
      "Criar mensagem ética de pedido de avaliação.",
      "Criar etiquetas para origem do contato.",
      "Criar etiquetas por canal: Google, Instagram, indicação, parceria, site.",
      "Criar planilha simples de origem dos contatos.",
    ],
  },
  {
    id: "parcerias",
    title: "Parcerias locais",
    items: [
      "Listar 30 ILPIs, casas de repouso, home cares, clínicas e profissionais de saúde.",
      "Selecionar 10 prioridades.",
      "Criar mensagem de abordagem.",
      "Criar PDF institucional.",
      "Fazer 10 contatos por mês.",
      "Registrar resposta.",
      "Fazer follow-up após 7 dias.",
      "Criar conteúdo colaborativo quando possível.",
      "Criar página ou seção para ILPIs/home care.",
    ],
  },
  {
    id: "metricas",
    title: "Métricas",
    intro: "Campos orientativos para revisão semanal ou mensal.",
    items: [
      "Seguidores.",
      "Alcance.",
      "Visualizações de Reels.",
      "Cliques no link da bio.",
      "Mensagens recebidas.",
      "Origem dos contatos.",
      "Cliques no site.",
      "Ligações.",
      "Cliques no WhatsApp.",
      "Avaliações novas.",
      "Nota média no Google.",
      "Páginas mais acessadas.",
      "Termos do Search Console.",
      "Conversões vindas do Google Empresa.",
      "Conversões vindas do Instagram.",
      "Conversões vindas de indicação.",
    ],
  },
];

const contentSeries = [
  {
    title: "Diário de uma dentista em casa",
    items: [
      "O que preparo antes de sair.",
      "O que muda fora do consultório.",
      "O que as famílias mais perguntam.",
      "Por que nem tudo pode ser feito em casa.",
      "O que aprendi atendendo idosos.",
    ],
  },
  {
    title: "Boca de idoso sem tabu",
    items: [
      "Mau hálito.",
      "Prótese machucando.",
      "Boca seca.",
      "Sangramento gengival.",
      "Dificuldade para mastigar.",
    ],
  },
  {
    title: "Para cuidadores",
    items: [
      "Como organizar a higiene bucal.",
      "O que observar na escovação.",
      "Quando pedir avaliação.",
      "Como lidar com resistência.",
      "Cuidados com prótese.",
    ],
  },
  {
    title: "Bastidores com propósito",
    items: [
      "Minha agenda.",
      "Meus estudos.",
      "Minha rotina de deslocamento.",
      "Como organizo a semana.",
      "O que me fez escolher esse caminho.",
    ],
  },
];

const reels = [
  {
    title: "Reel 1",
    rows: [
      ["Tema", "Hoje meu consultório vai até o paciente."],
      ["Hook", "“Hoje meu consultório não tem endereço fixo.”"],
      [
        "CTA",
        "“Para saber se o atendimento domiciliar é indicado, envie uma mensagem pelo link da bio.”",
      ],
    ],
  },
  {
    title: "Reel 2",
    rows: [
      ["Tema", "3 sinais para observar na boca de um idoso."],
      [
        "Pontos",
        "Mau hálito persistente, sangramento ou gengiva vermelha, prótese machucando ou dificuldade para mastigar.",
      ],
    ],
  },
  {
    title: "Reel 3",
    rows: [
      ["Tema", "Dentista em casa não é improviso."],
      [
        "Mensagem",
        "Atendimento domiciliar precisa de preparo, avaliação, limite profissional e segurança.",
      ],
    ],
  },
  {
    title: "Reel 4",
    rows: [
      ["Tema", "Coisas que fazem parte da rotina de uma dentista domiciliar."],
      [
        "Pontos",
        "Agenda, deslocamento, escuta da família, adaptação ao ambiente, orientação ao cuidador e registro do atendimento.",
      ],
    ],
  },
  {
    title: "Reel 5",
    rows: [
      ["Tema", "Dentista em casa é só para emergência?"],
      [
        "Mensagem",
        "Não; também pode envolver avaliação, prevenção, orientação de higiene e acompanhamento.",
      ],
    ],
  },
];

const serviceIntentGroups = [
  {
    title: "Grupo 1 — Termos principais",
    items: [
      "Dentista em casa.",
      "Dentista a domicílio.",
      "Dentista domiciliar.",
      "Odontologia domiciliar.",
      "Atendimento odontológico domiciliar.",
    ],
  },
  {
    title: "Grupo 2 — Público prioritário",
    items: [
      "Dentista para idosos em casa.",
      "Dentista para paciente acamado.",
      "Dentista para mobilidade reduzida.",
      "Dentista para pacientes neurológicos.",
      "Dentista para pacientes especiais.",
    ],
  },
  {
    title: "Grupo 3 — Contexto institucional",
    items: [
      "Dentista em casa de repouso.",
      "Atendimento odontológico em ILPI.",
      "Odontologia home care.",
      "Home care odontológico.",
      "Atendimento odontológico hospitalar.",
      "Dentista em UTI.",
    ],
  },
  {
    title: "Grupo 4 — Procedimentos/necessidades",
    items: [
      "Limpeza dentária em casa.",
      "Higiene bucal para acamados.",
      "Prótese dentária em casa.",
      "Dor de dente em casa.",
      "Tratamento de gengiva em casa.",
      "Avaliação odontológica domiciliar.",
    ],
  },
];

const calendar = [
  {
    title: "Semana 1 — Apresentação e confiança",
    items: [
      "Reel: quem é a Dra. Patrícia.",
      "Reel: hoje meu consultório vai até o paciente.",
      "Reel: dentista em casa não é improviso.",
      "Carrossel: como funciona o atendimento.",
      "Stories: rotina + enquete sobre cuidado com idosos.",
      "Google Empresa: atendimento domiciliar.",
    ],
  },
  {
    title: "Semana 2 — Idosos e cuidadores",
    items: [
      "Reel: 3 sinais para observar na boca do idoso.",
      "Reel: prótese machucando.",
      "Reel: higiene bucal de paciente acamado.",
      "Carrossel: checklist para cuidadores.",
      "Stories: caixinha de dúvidas.",
      "Google Empresa: dentista para idosos.",
    ],
  },
  {
    title: "Semana 3 — Hospitalar e home care",
    items: [
      "Reel: odontologia hospitalar não é estética.",
      "Reel: quando o atendimento precisa de cuidado especial.",
      "Reel: bastidores sem paciente.",
      "Carrossel: dúvidas sobre atendimento hospitalar.",
      "Stories: rotina + explicações curtas.",
      "Google Empresa: atendimento hospitalar.",
    ],
  },
  {
    title: "Semana 4 — Autoridade e conversão",
    items: [
      "Reel: o que aprendi atendendo fora do consultório.",
      "Reel: quando chamar um dentista em casa.",
      "Reel: mitos sobre odontologia domiciliar.",
      "Carrossel: perguntas frequentes.",
      "Stories: perguntas + chamada para WhatsApp.",
      "Google Empresa: avaliação domiciliar.",
    ],
  },
];

const ethicalDonts = [
  "Prometer resultado.",
  "Explorar medo ou dor.",
  "Expor pacientes sem autorização.",
  "Publicar procedimento em andamento.",
  "Usar imagens sensacionalistas.",
  "Inventar depoimentos.",
  "Incentivar avaliação falsa.",
  "Pedir avaliação com nota ou texto específico.",
  "Fazer diagnóstico individual em conteúdo público.",
  "Publicar dados de pacientes.",
];

const ethicalDos = [
  "Bastidores sem paciente.",
  "Rotina profissional.",
  "Orientações gerais.",
  "Educação para cuidadores.",
  "Reflexões sobre cuidado.",
  "Dúvidas frequentes.",
  "Fotos profissionais.",
  "Cards educativos.",
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function slug(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function list(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function taskList(sectionId, items) {
  return `<div class="task-list">${items
    .map((item, index) => {
      const id = `${sectionId}-${index + 1}`;
      return `<label class="task-item" data-task-item>
        <input type="checkbox" data-task="${escapeHtml(id)}" />
        <span>${escapeHtml(item)}</span>
      </label>`;
    })
    .join("")}</div>`;
}

function checklistSection(checklist) {
  return `<section class="panel-section" id="${escapeHtml(checklist.id)}" data-section="${escapeHtml(
    checklist.id,
  )}">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Checklist</p>
        <h2>${escapeHtml(checklist.title)}</h2>
        ${checklist.intro ? `<p>${escapeHtml(checklist.intro)}</p>` : ""}
      </div>
      <button type="button" class="section-action" data-mark-section>Marcar tudo da seção</button>
    </div>
    <div class="section-progress" aria-live="polite">
      <span data-section-progress>0%</span>
      <div><i style="width: 0%" data-section-bar></i></div>
    </div>
    ${taskList(checklist.id, checklist.items)}
  </section>`;
}

function cardGrid(items) {
  return `<div class="card-grid">${items
    .map(
      (item) => `<article class="info-card">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>`,
    )
    .join("")}</div>`;
}

function textCards(groups) {
  return `<div class="card-grid">${groups
    .map(
      (group) => `<article class="info-card">
        <h3>${escapeHtml(group.title)}</h3>
        ${list(group.items)}
      </article>`,
    )
    .join("")}</div>`;
}

function script() {
  return `<script>
(() => {
  const storageKey = ${JSON.stringify(storageKey)};
  const checkboxes = Array.from(document.querySelectorAll("[data-task]"));
  const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
  const importInput = document.querySelector("[data-import-input]");
  let activeFilter = "all";

  function readProgress() {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey) || "{}");
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }

  function writeProgress(progress) {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }

  function currentProgress() {
    return Object.fromEntries(checkboxes.map((input) => [input.dataset.task, input.checked]));
  }

  function applyProgress(progress) {
    checkboxes.forEach((input) => {
      input.checked = Boolean(progress[input.dataset.task]);
    });
    updateDashboard();
  }

  function percent(done, total) {
    return total ? Math.round((done / total) * 100) : 0;
  }

  function updateDashboard() {
    const done = checkboxes.filter((input) => input.checked).length;
    const total = checkboxes.length;
    const overall = percent(done, total);
    document.querySelector("[data-overall-percent]").textContent = overall + "%";
    document.querySelector("[data-overall-count]").textContent = done + " de " + total + " tarefas";
    document.querySelector("[data-overall-bar]").style.width = overall + "%";

    const categories = [];
    document.querySelectorAll("[data-section]").forEach((section) => {
      const sectionInputs = Array.from(section.querySelectorAll("[data-task]"));
      if (!sectionInputs.length) return;
      const sectionDone = sectionInputs.filter((input) => input.checked).length;
      const sectionPercent = percent(sectionDone, sectionInputs.length);
      section.querySelector("[data-section-progress]").textContent = sectionPercent + "%";
      section.querySelector("[data-section-bar]").style.width = sectionPercent + "%";
      categories.push({
        title: section.querySelector("h2").textContent,
        done: sectionDone,
        total: sectionInputs.length,
        percent: sectionPercent,
      });
    });

    document.querySelector("[data-category-progress]").innerHTML = categories
      .map((item) => \`<li><span>\${item.title}</span><strong>\${item.percent}%</strong><small>\${item.done}/\${item.total}</small></li>\`)
      .join("");

    document.querySelectorAll("[data-task-item]").forEach((item) => {
      const checked = item.querySelector("[data-task]").checked;
      const hidden = activeFilter === "done" ? !checked : activeFilter === "pending" ? checked : false;
      item.hidden = hidden;
    });
  }

  checkboxes.forEach((input) => {
    input.addEventListener("change", () => {
      writeProgress(currentProgress());
      updateDashboard();
    });
  });

  document.querySelectorAll("[data-mark-section]").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest("[data-section]").querySelectorAll("[data-task]").forEach((input) => {
        input.checked = true;
      });
      writeProgress(currentProgress());
      updateDashboard();
    });
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      updateDashboard();
    });
  });

  document.querySelector("[data-clear-progress]").addEventListener("click", () => {
    if (!confirm("Limpar todo o progresso salvo neste navegador?")) return;
    localStorage.removeItem(storageKey);
    applyProgress({});
  });

  document.querySelector("[data-export-progress]").addEventListener("click", () => {
    const payload = {
      version: 1,
      storageKey,
      exportedAt: new Date().toISOString(),
      progress: currentProgress(),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "painel-casa-progresso.json";
    link.click();
    URL.revokeObjectURL(link.href);
  });

  document.querySelector("[data-import-progress]").addEventListener("click", () => importInput.click());
  importInput.addEventListener("change", async () => {
    const file = importInput.files && importInput.files[0];
    if (!file) return;
    try {
      const payload = JSON.parse(await file.text());
      const progress = payload.progress && typeof payload.progress === "object" ? payload.progress : payload;
      applyProgress(progress);
      writeProgress(currentProgress());
    } catch {
      alert("Não foi possível importar este JSON.");
    } finally {
      importInput.value = "";
    }
  });

  document.querySelector("[data-print]").addEventListener("click", () => window.print());

  applyProgress(readProgress());
})();
</script>`;
}

function styles() {
  return `<style>
:root {
  --bg: #f6f8f7;
  --panel: #ffffff;
  --ink: #18312d;
  --muted: #5b6f69;
  --line: #dce7e1;
  --brand: #0f766e;
  --brand-dark: #115e59;
  --accent: #d97706;
  --soft: #e8f4f1;
  --danger: #9f1239;
  color-scheme: light;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--ink);
  line-height: 1.55;
}
a { color: inherit; }
button, input { font: inherit; }
.shell {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}
.hero {
  background: linear-gradient(135deg, #0f766e 0%, #18312d 100%);
  color: #fff;
  padding: 48px 0 36px;
}
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 28px;
  align-items: end;
}
.eyebrow {
  margin: 0 0 8px;
  color: var(--brand);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}
.hero .eyebrow { color: #bff3ea; }
h1, h2, h3 { line-height: 1.15; margin: 0; letter-spacing: 0; }
h1 { font-size: clamp(2.1rem, 5vw, 4.4rem); max-width: 900px; }
h2 { font-size: clamp(1.35rem, 3vw, 2rem); }
h3 { font-size: 1.05rem; }
p { margin: 0; }
.hero p:not(.eyebrow) { color: #e7fffb; max-width: 760px; }
.hero-actions, .toolbar-actions, .filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.button, .section-action {
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 10px 14px;
  background: var(--brand);
  color: #fff;
  cursor: pointer;
  font-weight: 800;
}
.button.secondary, .section-action {
  background: #fff;
  color: var(--brand-dark);
  border-color: var(--line);
}
.button.warning { background: #fff7ed; color: #9a3412; border-color: #fed7aa; }
.button[aria-pressed="true"] { background: var(--brand-dark); color: #fff; }
.notice {
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.24);
  border-radius: 8px;
  padding: 14px;
  color: #e7fffb;
}
.dashboard {
  margin: -20px auto 26px;
  position: sticky;
  top: 0;
  z-index: 5;
}
.dashboard-inner {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 18px 42px rgba(15, 35, 31, 0.12);
  padding: 16px;
  display: grid;
  grid-template-columns: minmax(220px, 0.8fr) minmax(280px, 1.2fr);
  gap: 18px;
  align-items: center;
}
.progress-number { font-size: 2rem; font-weight: 900; color: var(--brand-dark); }
.progress-track, .section-progress div {
  height: 10px;
  background: #e6eee9;
  border-radius: 999px;
  overflow: hidden;
  margin-top: 8px;
}
.progress-track i, .section-progress i {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--brand), var(--accent));
  border-radius: inherit;
}
.category-progress {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.category-progress li {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 9px;
  display: grid;
  gap: 2px;
}
.category-progress span { font-size: 0.78rem; color: var(--muted); }
.category-progress strong { color: var(--brand-dark); }
.category-progress small { color: var(--muted); }
.content {
  display: grid;
  gap: 18px;
  padding-bottom: 52px;
}
.panel-section {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 22px;
}
.section-heading {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: start;
  margin-bottom: 16px;
}
.section-heading p { color: var(--muted); margin-top: 8px; }
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.info-card {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 16px;
  background: #fbfdfc;
}
.info-card p, .info-card li, .copy-box, .task-item span { color: var(--muted); }
.info-card ul, .plain-list {
  margin: 12px 0 0;
  padding-left: 18px;
}
.pillar-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(130px, 1fr));
  gap: 10px;
}
.pillar {
  background: var(--soft);
  border: 1px solid #c8e8e0;
  border-radius: 8px;
  padding: 14px;
}
.pillar strong { display: block; color: var(--brand-dark); font-size: 1.5rem; }
.copy-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.copy-box {
  background: #fbfdfc;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 16px;
  white-space: pre-line;
}
.task-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
.task-item {
  min-height: 44px;
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr);
  gap: 10px;
  align-items: start;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 10px;
  background: #fbfdfc;
}
.task-item input { width: 18px; height: 18px; accent-color: var(--brand); margin-top: 2px; }
.task-item:has(input:checked) { background: var(--soft); border-color: #a8dcd2; }
.section-progress {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  margin-bottom: 14px;
  color: var(--brand-dark);
  font-weight: 900;
}
.table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 8px;
}
.table th, .table td {
  border: 1px solid var(--line);
  padding: 10px;
  text-align: left;
  vertical-align: top;
}
.table th { background: var(--soft); }
.alert-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.alert-card { border-radius: 8px; padding: 16px; border: 1px solid var(--line); }
.alert-card.dont { background: #fff1f2; border-color: #fecdd3; }
.alert-card.do { background: #ecfdf5; border-color: #bbf7d0; }
.alert-card.dont h3 { color: var(--danger); }
.alert-card.do h3 { color: #166534; }
.print-note { color: var(--muted); font-size: 0.9rem; margin-top: 10px; }
@media (max-width: 860px) {
  .hero-grid, .dashboard-inner, .card-grid, .copy-grid, .task-list, .alert-grid { grid-template-columns: 1fr; }
  .category-progress { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .pillar-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .dashboard { position: static; margin-top: 16px; }
  .section-heading { display: grid; }
}
@media (max-width: 560px) {
  .shell { width: min(100% - 20px, 1180px); }
  .hero { padding-top: 32px; }
  .panel-section { padding: 16px; }
  .category-progress, .pillar-grid { grid-template-columns: 1fr; }
  .button, .section-action { width: 100%; }
}
@media print {
  .dashboard, .hero-actions, .section-action, .filter-row, .toolbar-actions { display: none !important; }
  body { background: #fff; color: #000; }
  .panel-section, .info-card, .copy-box, .task-item { break-inside: avoid; box-shadow: none; }
}
</style>`;
}

export function renderCasaMarketingPanel() {
  const checklistHtml = checklists.map(checklistSection).join("");

  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow" />
  <title>Painel Casa — Marketing Odonto em Casa</title>
  ${styles()}
</head>
<body>
  <header class="hero">
    <div class="shell hero-grid">
      <div>
        <p class="eyebrow">Painel privado</p>
        <h1>Painel Casa — Marketing Odonto em Casa</h1>
        <p>Central de marketing da Odonto em Casa / Dra. Patrícia Craveiro para organizar estratégia, checklist de execução, calendário editorial e próximos passos.</p>
        <div class="hero-actions" style="margin-top: 20px">
          <a class="button" href="#checklists">Ir para checklists</a>
          <a class="button secondary" href="#calendario">Ver calendário</a>
        </div>
      </div>
      <aside class="notice">
        Este painel salva o progresso neste navegador. Para usar em outro dispositivo, exporte e importe o JSON.
      </aside>
    </div>
  </header>

  <aside class="shell dashboard" aria-label="Progresso do painel">
    <div class="dashboard-inner">
      <div>
        <p class="eyebrow">Progresso geral</p>
        <div class="progress-number" data-overall-percent>0%</div>
        <p data-overall-count>0 de 0 tarefas</p>
        <div class="progress-track"><i data-overall-bar style="width: 0%"></i></div>
      </div>
      <div>
        <div class="filter-row" aria-label="Filtro de tarefas">
          <button class="button" type="button" data-filter="all" aria-pressed="true">Todas</button>
          <button class="button secondary" type="button" data-filter="pending" aria-pressed="false">Pendentes</button>
          <button class="button secondary" type="button" data-filter="done" aria-pressed="false">Concluídas</button>
        </div>
        <div class="toolbar-actions" style="margin-top: 10px">
          <button class="button secondary" type="button" data-export-progress>Exportar progresso JSON</button>
          <button class="button secondary" type="button" data-import-progress>Importar progresso JSON</button>
          <button class="button secondary" type="button" data-print>Imprimir plano</button>
          <button class="button warning" type="button" data-clear-progress>Limpar progresso</button>
          <input type="file" accept="application/json" hidden data-import-input />
        </div>
      </div>
      <ul class="category-progress" data-category-progress></ul>
    </div>
  </aside>

  <main class="shell content">
    <section class="panel-section" id="visao-geral">
      <div class="section-heading">
        <div>
          <p class="eyebrow">1. Visão geral</p>
          <h2>Projeto Casa</h2>
        </div>
      </div>
      <p>O projeto Casa é a central de marketing da Odonto em Casa / Dra. Patrícia Craveiro. O objetivo é aumentar visibilidade, confiança, autoridade e geração de contatos para atendimento odontológico domiciliar e hospitalar em Maringá e região.</p>
    </section>

    <section class="panel-section" id="estrategia">
      <div class="section-heading">
        <div>
          <p class="eyebrow">2. Estratégia por canal</p>
          <h2>Canais e função de cada um</h2>
        </div>
      </div>
      ${cardGrid(channelStrategies)}
    </section>

    <section class="panel-section" id="posicionamento">
      <div class="section-heading">
        <div>
          <p class="eyebrow">3. Posicionamento</p>
          <h2>Dra. Patrícia Craveiro</h2>
        </div>
      </div>
      <div class="copy-box">“Dra. Patrícia Craveiro: dentista que leva cuidado odontológico para quem precisa de atenção fora do consultório, com uma comunicação humana, educativa e próxima da realidade das famílias.”</div>
      <p class="print-note">A comunicação não deve ser apenas sobre home care odontológico. O Instagram deve mostrar estilo de vida profissional, rotina, bastidores, educação em saúde, cuidado com idosos, reflexões e autoridade humana.</p>
    </section>

    <section class="panel-section" id="pilares-instagram">
      <div class="section-heading">
        <div>
          <p class="eyebrow">4. Pilares de conteúdo do Instagram</p>
          <h2>Vitrine de confiança</h2>
          <p>O Instagram não deve virar catálogo de serviços. Ele deve funcionar como vitrine de confiança.</p>
        </div>
      </div>
      <div class="pillar-grid">
        ${instagramPillars
          .map(
            ([name, value]) => `<div class="pillar"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(
              name,
            )}</span></div>`,
          )
          .join("")}
      </div>
    </section>

    <div id="checklists">${checklistHtml}</div>

    <section class="panel-section" id="bio-sugerida">
      <div class="section-heading">
        <div>
          <p class="eyebrow">6. Bio sugerida</p>
          <h2>Opções para teste</h2>
        </div>
      </div>
      <div class="copy-grid">
        <div class="copy-box"><strong>Opção 1</strong>
Cirurgiã-dentista | CRO/PR 40021
Atendimento domiciliar e hospitalar
Idosos • acamados • mobilidade reduzida
Maringá e região
Agende pelo WhatsApp ↓

Indicação: passa mais autoridade.</div>
        <div class="copy-box"><strong>Opção 2</strong>
Dentista para quem precisa de cuidado fora do consultório
Atendimento domiciliar e hospitalar
Idosos, acamados e mobilidade reduzida
Maringá e região
WhatsApp ↓

Indicação: passa mais acolhimento.</div>
      </div>
    </section>

    <section class="panel-section" id="series">
      <div class="section-heading">
        <div>
          <p class="eyebrow">7. Séries de conteúdo</p>
          <h2>Quadros recorrentes</h2>
        </div>
      </div>
      ${textCards(contentSeries)}
    </section>

    <section class="panel-section" id="roteiros-reels">
      <div class="section-heading">
        <div>
          <p class="eyebrow">8. Roteiros prontos de Reels</p>
          <h2>Roteiros resumidos</h2>
        </div>
      </div>
      <div class="card-grid">
        ${reels
          .map(
            (reel) => `<article class="info-card">
              <h3>${escapeHtml(reel.title)}</h3>
              <table class="table"><tbody>${reel.rows
                .map(
                  ([label, text]) =>
                    `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(text)}</td></tr>`,
                )
                .join("")}</tbody></table>
            </article>`,
          )
          .join("")}
      </div>
    </section>

    <section class="panel-section" id="servicos-intencoes">
      <div class="section-heading">
        <div>
          <p class="eyebrow">10. Serviços e intenções</p>
          <h2>Matriz de busca</h2>
        </div>
      </div>
      ${textCards(serviceIntentGroups)}
    </section>

    <section class="panel-section" id="mensagens">
      <div class="section-heading">
        <div>
          <p class="eyebrow">12 e 13. Mensagens prontas</p>
          <h2>WhatsApp e parcerias</h2>
        </div>
      </div>
      <div class="copy-grid">
        <div class="copy-box"><strong>Mensagem ética de avaliação</strong>
Olá, tudo bem? Aqui é da Odonto em Casa.

Agradecemos pela confiança no atendimento. Sua opinião ajuda outras famílias que procuram atendimento odontológico domiciliar a entender melhor nosso trabalho.

Caso queira, você pode deixar uma avaliação sincera neste link:
[link de avaliação do Google]

Obrigado(a)!</div>
        <div class="copy-box"><strong>Mensagem de abordagem</strong>
Olá, tudo bem?

Sou a Dra. Patrícia Craveiro, cirurgiã-dentista com atendimento odontológico domiciliar e hospitalar em Maringá e região.

Atendo pacientes idosos, acamados, com mobilidade reduzida e pessoas que precisam de avaliação odontológica fora do consultório tradicional, sempre mediante avaliação da condição clínica e da viabilidade do atendimento.

Gostaria de apresentar o serviço para que vocês conheçam essa possibilidade de cuidado para famílias, cuidadores e pacientes acompanhados pela instituição.

Podemos agendar uma conversa rápida?</div>
      </div>
    </section>

    <section class="panel-section" id="calendario">
      <div class="section-heading">
        <div>
          <p class="eyebrow">14. Calendário de 30 dias</p>
          <h2>Sequência editorial</h2>
        </div>
      </div>
      ${textCards(calendar)}
    </section>

    <section class="panel-section" id="etica">
      <div class="section-heading">
        <div>
          <p class="eyebrow">16. Regras éticas</p>
          <h2>Alertas de comunicação</h2>
        </div>
      </div>
      <div class="alert-grid">
        <article class="alert-card dont"><h3>Não fazer</h3>${list(ethicalDonts)}</article>
        <article class="alert-card do"><h3>Fazer</h3>${list(ethicalDos)}</article>
      </div>
    </section>
  </main>
  ${script()}
</body>
</html>`;
}

export { storageKey };

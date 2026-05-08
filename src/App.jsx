import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  Accessibility,
  Baby,
  CalendarCheck,
  Camera,
  Check,
  ChevronRight,
  Copy,
  ExternalLink,
  HeartPulse,
  Home,
  Hospital,
  Link as LinkIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  RefreshCw,
  Save,
  ShieldCheck,
  Trash2,
  Upload,
  UserRound,
  X,
} from "lucide-react";
import {
  buildWhatsAppLink,
  cloneDefaultConfig,
  isExternalHref,
  loadSiteConfig,
  mergeConfig,
  normalizeButton,
  resetSiteConfig,
  resolveButtonHref,
  saveSiteConfig,
} from "./lib/siteConfig.js";

const iconMap = {
  baby: Baby,
  calendar: CalendarCheck,
  check: Check,
  external: ExternalLink,
  heart: HeartPulse,
  home: Home,
  hospital: Hospital,
  accessibility: Accessibility,
  instagram: Camera,
  link: LinkIcon,
  mail: Mail,
  map: MapPin,
  message: MessageCircle,
  phone: Phone,
  shield: ShieldCheck,
  user: UserRound,
  wheelchair: Accessibility,
};

const canUseAdmin = import.meta.env.DEV;

function App() {
  const [config, setConfig] = useState(() => loadSiteConfig());
  const [mode, setMode] = useState(() =>
    window.location.hash === "#admin" && canUseAdmin ? "admin" : "public",
  );

  useEffect(() => {
    const handleHash = () => {
      const nextMode =
        window.location.hash === "#admin" && canUseAdmin ? "admin" : "public";

      if (window.location.hash === "#admin" && !canUseAdmin) {
        window.history.replaceState(null, "", window.location.pathname);
      }

      setMode(nextMode);
    };

    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const persistConfig = (nextConfig) => {
    const normalized = mergeConfig(nextConfig);
    setConfig(normalized);
    saveSiteConfig(normalized);
  };

  if (mode === "admin" && canUseAdmin) {
    return (
      <AdminPanel
        config={config}
        onSave={persistConfig}
        onReset={() => {
          const next = resetSiteConfig();
          setConfig(next);
          return next;
        }}
      />
    );
  }

  return <PublicPage config={config} />;
}

function PublicPage({ config, isPreview = false }) {
  const { profile, buttons } = config;
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const activeButtons = useMemo(
    () => buttons.filter((button) => button.active),
    [buttons],
  );

  const sharePage = async () => {
    const shareData = {
      title: profile.brandName,
      text: profile.intro,
      url: window.location.origin + window.location.pathname,
    };

    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard?.writeText(shareData.url);
  };

  return (
    <main className={isPreview ? "site-page preview-page" : "site-page"}>
      <div className="page-background" />
      <section className="link-shell" aria-label="Página de links">
        <header className="hero">
          <img
            className="hero-image"
            src={profile.coverImage}
            alt="Kit odontológico preparado para atendimento domiciliar"
          />
          <div className="hero-scrim" />
          <div className="hero-actions" aria-label="Ações rápidas">
            <a
              className="icon-button"
              href={buildWhatsAppLink(profile)}
              aria-label="Abrir WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" size={19} />
            </a>
            <button
              className="icon-button"
              type="button"
              onClick={sharePage}
              aria-label="Compartilhar página"
            >
              <ExternalLink aria-hidden="true" size={18} />
            </button>
          </div>

          <div className="brand-panel">
            <BrandMark
              profile={profile}
              onOpenLogo={() => setIsLogoModalOpen(true)}
            />
            <p className="eyebrow">{profile.headline}</p>
            <p className="professional">{profile.professionalName}</p>
            <p className="credential">{profile.credential}</p>
          </div>
        </header>

        <section className="intro-block">
          <p>{profile.intro}</p>
        </section>

        <nav className="link-list" aria-label="Links principais">
          {activeButtons.map((button) => (
            <ActionButton key={button.id} button={button} profile={profile} />
          ))}
        </nav>

        <section className="info-section" id="homecare">
          <div className="section-heading">
            <Home aria-hidden="true" size={20} />
            <h2>Homecare em destaque</h2>
          </div>
          <p>
            O atendimento vai até o paciente com planejamento, biossegurança e
            foco em conforto. É uma alternativa para avaliação, prevenção,
            acompanhamento e cuidados odontológicos individualizados.
          </p>
        </section>

        <section className="info-section" id="pacientes">
          <div className="section-heading">
            <HeartPulse aria-hidden="true" size={20} />
            <h2>Quem pode receber atendimento</h2>
          </div>
          <div className="patient-grid">
            <PatientItem icon="user" label="Idosos" />
            <PatientItem icon="wheelchair" label="Dificuldade de locomoção" />
            <PatientItem icon="heart" label="Pacientes acamados" />
            <PatientItem icon="baby" label="Crianças" />
          </div>
        </section>

        <footer className="footer">
          <span>{profile.serviceArea}</span>
          {canUseAdmin ? <a href="#admin">Editar página</a> : null}
        </footer>
      </section>

      <LogoModal
        imageSrc={profile.brandMarkImage}
        brandName={profile.brandName}
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
      />
    </main>
  );
}

function ActionButton({ button, profile }) {
  const Icon = iconMap[button.icon] || LinkIcon;
  const href = resolveButtonHref(button, profile);
  const external = isExternalHref(href);

  return (
    <a
      className={button.highlighted ? "action-link highlighted" : "action-link"}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="action-icon">
        <Icon aria-hidden="true" size={21} />
      </span>
      <span className="action-text">{button.label}</span>
      <ChevronRight aria-hidden="true" className="action-arrow" size={19} />
    </a>
  );
}

function BrandMark({ profile, onOpenLogo }) {
  const [imageFailed, setImageFailed] = useState(false);
  const logoImage = profile.brandMarkImage?.trim();
  const text =
    profile.brandMarkText?.trim() || getBrandInitials(profile.brandName);

  useEffect(() => {
    setImageFailed(false);
  }, [logoImage]);

  if (logoImage && !imageFailed) {
    return (
      <button
        className="brand-mark image-mark"
        type="button"
        onClick={onOpenLogo}
        aria-label="Ampliar logo da marca"
      >
        <img src={logoImage} alt="" onError={() => setImageFailed(true)} />
      </button>
    );
  }

  return (
    <div className="brand-mark" aria-hidden="true">
      <span>{text}</span>
    </div>
  );
}

function LogoModal({ imageSrc, brandName, isOpen, onClose }) {
  const logoImage = imageSrc?.trim();

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !logoImage) return null;

  return (
    <div
      className="logo-modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="logo-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Logo da marca em tamanho ampliado"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="logo-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Fechar"
        >
          <X aria-hidden="true" size={22} />
        </button>
        <img src={logoImage} alt={`Logo ${brandName}`} />
      </div>
    </div>
  );
}

function getBrandInitials(name) {
  const initials = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return initials || "OC";
}

function PatientItem({ icon, label }) {
  const Icon = iconMap[icon] || Check;
  return (
    <div className="patient-item">
      <Icon aria-hidden="true" size={18} />
      <span>{label}</span>
    </div>
  );
}

function AdminPanel({ config, onSave, onReset }) {
  const [draft, setDraft] = useState(() => mergeConfig(config));
  const [jsonText, setJsonText] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setDraft(mergeConfig(config));
  }, [config]);

  const updateProfile = (field, value) => {
    setDraft((current) => ({
      ...current,
      profile: {
        ...current.profile,
        [field]: value,
      },
    }));
  };

  const updateButton = (id, field, value) => {
    setDraft((current) => ({
      ...current,
      buttons: current.buttons.map((button) =>
        button.id === id ? { ...button, [field]: value } : button,
      ),
    }));
  };

  const addButton = () => {
    setDraft((current) => ({
      ...current,
      buttons: [
        ...current.buttons,
        normalizeButton({
          id: crypto.randomUUID(),
          label: "Novo botão",
          type: "custom",
          icon: "link",
          url: "https://",
          active: true,
        }),
      ],
    }));
  };

  const removeButton = (id) => {
    setDraft((current) => ({
      ...current,
      buttons: current.buttons.filter((button) => button.id !== id),
    }));
  };

  const moveButton = (index, direction) => {
    setDraft((current) => {
      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= current.buttons.length) return current;

      const buttons = [...current.buttons];
      const [button] = buttons.splice(index, 1);
      buttons.splice(nextIndex, 0, button);
      return { ...current, buttons };
    });
  };

  const saveDraft = () => {
    onSave(draft);
    setStatus("Alterações salvas neste navegador.");
  };

  const copyJson = async () => {
    const text = JSON.stringify(draft, null, 2);
    setJsonText(text);
    await navigator.clipboard?.writeText(text);
    setStatus("Configuração copiada em JSON.");
  };

  const importJson = () => {
    try {
      const parsed = JSON.parse(jsonText);
      setDraft(mergeConfig(parsed));
      setStatus("JSON importado para o editor.");
    } catch {
      setStatus("Não foi possível ler esse JSON.");
    }
  };

  const resetDraft = () => {
    const next = onReset();
    setDraft(next);
    setStatus("Configuração original restaurada.");
  };

  return (
    <main className="admin-page">
      <section className="admin-workspace">
        <header className="admin-header">
          <div>
            <p className="eyebrow">Painel de cadastro</p>
            <h1>Editar página homecare</h1>
          </div>
          <div className="admin-header-actions">
            <a className="ghost-button" href="#">
              <ArrowLeft aria-hidden="true" size={18} />
              Ver página
            </a>
            <button
              className="primary-button"
              type="button"
              onClick={saveDraft}
            >
              <Save aria-hidden="true" size={18} />
              Salvar
            </button>
          </div>
        </header>

        {status ? <p className="status-message">{status}</p> : null}

        <section className="admin-section">
          <h2>Dados da marca</h2>
          <div className="form-grid">
            <TextField
              label="Nome da marca"
              value={draft.profile.brandName}
              onChange={(value) => updateProfile("brandName", value)}
            />
            <TextField
              label="Nome profissional"
              value={draft.profile.professionalName}
              onChange={(value) => updateProfile("professionalName", value)}
            />
            <TextField
              label="CRO"
              value={draft.profile.credential}
              onChange={(value) => updateProfile("credential", value)}
            />
            <TextField
              label="Texto do logo"
              value={draft.profile.brandMarkText}
              onChange={(value) => updateProfile("brandMarkText", value)}
              placeholder="OC"
            />
            <TextField
              label="Imagem do logo"
              value={draft.profile.brandMarkImage}
              onChange={(value) => updateProfile("brandMarkImage", value)}
              placeholder="/assets/logo.png ou https://..."
            />
            <TextField
              label="WhatsApp com DDI"
              value={draft.profile.whatsappNumber}
              onChange={(value) => updateProfile("whatsappNumber", value)}
            />
            <TextField
              label="Instagram"
              value={draft.profile.instagramUrl}
              onChange={(value) => updateProfile("instagramUrl", value)}
            />
            <TextField
              label="Imagem de fundo do topo"
              value={draft.profile.coverImage}
              onChange={(value) => updateProfile("coverImage", value)}
            />
            <TextField
              label="Área de atendimento"
              value={draft.profile.serviceArea}
              onChange={(value) => updateProfile("serviceArea", value)}
            />
          </div>
          <TextArea
            label="Mensagem inicial do WhatsApp"
            value={draft.profile.whatsappMessage}
            onChange={(value) => updateProfile("whatsappMessage", value)}
          />
          <TextArea
            label="Texto de apresentação"
            value={draft.profile.intro}
            onChange={(value) => updateProfile("intro", value)}
          />
        </section>

        <section className="admin-section">
          <div className="section-title-row">
            <h2>Botões cadastrados</h2>
            <button
              className="secondary-button"
              type="button"
              onClick={addButton}
            >
              <Plus aria-hidden="true" size={18} />
              Novo botão
            </button>
          </div>

          <div className="button-editor-list">
            {draft.buttons.map((button, index) => (
              <ButtonEditor
                key={button.id}
                button={button}
                index={index}
                total={draft.buttons.length}
                onChange={updateButton}
                onRemove={removeButton}
                onMove={moveButton}
              />
            ))}
          </div>
        </section>

        <section className="admin-section">
          <h2>Exportar ou importar configuração</h2>
          <p className="admin-note">
            Em hospedagem estática, o painel salva localmente. Use o JSON para
            guardar a configuração ou preparar uma futura integração com banco.
          </p>
          <div className="json-actions">
            <button
              className="secondary-button"
              type="button"
              onClick={copyJson}
            >
              <Copy aria-hidden="true" size={18} />
              Copiar JSON
            </button>
            <button
              className="secondary-button"
              type="button"
              onClick={importJson}
            >
              <Upload aria-hidden="true" size={18} />
              Importar JSON
            </button>
            <button
              className="danger-button"
              type="button"
              onClick={resetDraft}
            >
              <RefreshCw aria-hidden="true" size={18} />
              Restaurar padrão
            </button>
          </div>
          <textarea
            className="json-textarea"
            value={jsonText}
            onChange={(event) => setJsonText(event.target.value)}
            placeholder="Cole aqui uma configuração JSON para importar."
          />
        </section>
      </section>

      <aside className="admin-preview" aria-label="Prévia">
        <PublicPage config={draft} isPreview />
      </aside>
    </main>
  );
}

function ButtonEditor({ button, index, total, onChange, onRemove, onMove }) {
  return (
    <article className="button-editor">
      <div className="button-editor-top">
        <strong>{button.label}</strong>
        <div className="button-editor-actions">
          <button
            type="button"
            className="small-icon-button"
            onClick={() => onMove(index, -1)}
            disabled={index === 0}
            aria-label="Mover para cima"
          >
            <ArrowUp aria-hidden="true" size={17} />
          </button>
          <button
            type="button"
            className="small-icon-button"
            onClick={() => onMove(index, 1)}
            disabled={index === total - 1}
            aria-label="Mover para baixo"
          >
            <ArrowDown aria-hidden="true" size={17} />
          </button>
          <button
            type="button"
            className="small-icon-button destructive"
            onClick={() => onRemove(button.id)}
            aria-label="Remover botão"
          >
            <Trash2 aria-hidden="true" size={17} />
          </button>
        </div>
      </div>

      <div className="form-grid compact">
        <TextField
          label="Texto do botão"
          value={button.label}
          onChange={(value) => onChange(button.id, "label", value)}
        />
        <label className="field">
          <span>Tipo</span>
          <select
            value={button.type}
            onChange={(event) =>
              onChange(button.id, "type", event.target.value)
            }
          >
            <option value="whatsapp">WhatsApp</option>
            <option value="instagram">Instagram</option>
            <option value="section">Seção da página</option>
            <option value="custom">Link externo</option>
            <option value="phone">Telefone</option>
            <option value="email">E-mail</option>
          </select>
        </label>
        <label className="field">
          <span>Ícone</span>
          <select
            value={button.icon}
            onChange={(event) =>
              onChange(button.id, "icon", event.target.value)
            }
          >
            {Object.keys(iconMap).map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <TextField
          label="URL ou âncora"
          value={button.url}
          onChange={(value) => onChange(button.id, "url", value)}
          placeholder="https://... ou #homecare"
        />
      </div>

      <div className="toggle-row">
        <label>
          <input
            type="checkbox"
            checked={button.active}
            onChange={(event) =>
              onChange(button.id, "active", event.target.checked)
            }
          />
          Visível
        </label>
        <label>
          <input
            type="checkbox"
            checked={button.highlighted}
            onChange={(event) =>
              onChange(button.id, "highlighted", event.target.checked)
            }
          />
          Destacar
        </label>
      </div>
    </article>
  );
}

function TextField({ label, value, onChange, placeholder = "" }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function TextArea({ label, value, onChange }) {
  return (
    <label className="field field-wide">
      <span>{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default App;

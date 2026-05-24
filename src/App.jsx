import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Home,
  Hospital,
  Menu,
  MessageCircle,
  Users,
  X,
} from "lucide-react";
import {
  cities,
  faqItems,
  navItems,
  pages,
  serviceCards,
  site,
  whatsappMessages,
} from "./data/siteData.js";
import { buildJsonLd } from "./lib/seoData.js";

const routeOrder = Object.keys(pages).filter((path) => path !== "/404/");

function App() {
  const [path, setPath] = useState(() =>
    normalizePath(window.location.pathname),
  );

  useEffect(() => {
    const handlePopState = () =>
      setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const pagePath = pages[path] ? path : "/404/";
  const page = pages[pagePath];
  const isNotFound = pagePath === "/404/";

  useEffect(() => {
    applySeo(page, pagePath, isNotFound);
  }, [page, pagePath, isNotFound]);

  return (
    <SiteLayout currentPath={pagePath}>
      <JsonLd data={buildJsonLd(pagePath, page, isNotFound)} />
      {renderRoute(pagePath, page)}
    </SiteLayout>
  );
}

function SiteLayout({ currentPath, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  return (
    <>
      <header className="site-header">
        <a className="brand-link" href="/" aria-label="Odonto em Casa">
          <img
            src="/assets/logo-icon.png"
            width="44"
            height="44"
            alt=""
            decoding="async"
          />
          <span>
            <strong>Odonto em Casa</strong>
            <small>Dentista domiciliar em Maringá</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav
          className={isMenuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Menu principal"
        >
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              aria-current={currentPath === item.path ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
          <WhatsAppLink
            className="nav-whatsapp"
            location="main_nav"
            label="whatsapp_menu"
          >
            WhatsApp
          </WhatsAppLink>
        </nav>
      </header>
      <main>{children}</main>
      <Footer />
      <WhatsAppLink
        className="floating-whatsapp"
        location="mobile_fixed"
        label="whatsapp_mobile_fixed"
      >
        <MessageCircle aria-hidden="true" size={20} />
        <span>Agendar avaliação pelo WhatsApp</span>
      </WhatsAppLink>
    </>
  );
}

function HomePage({ page }) {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <img
          className="hero-image"
          src={site.coverImage}
          width="1600"
          height="1067"
          alt="Dentista domiciliar em Maringá"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Odonto em Casa | Maringá e região</p>
          <h1 id="home-title">{page.h1}</h1>
          <p className="hero-lede">
            Cuidado odontológico humanizado em casa, hospitais e instituições
            para idosos, pacientes acamados, pessoas com dificuldade de
            locomoção, pessoas com necessidades especiais e crianças.
          </p>
          <div className="button-row">
            <WhatsAppLink
              className="primary-button"
              messageKey="home"
              location="home_hero"
              label="whatsapp_home_hero"
            >
              <MessageCircle aria-hidden="true" size={20} />
              Agendar avaliação pelo WhatsApp
            </WhatsAppLink>
            <a
              className="secondary-button hero-secondary"
              href="/atendimento-domiciliar/"
            >
              Entender como funciona
            </a>
          </div>
          <p className="technical-note">
            Sob responsabilidade técnica da {site.professionalDisplayName},{" "}
            {site.credential}.
          </p>
        </div>
      </section>

      <section className="intro-band">
        <div>
          <p className="eyebrow">Atendimento no local do paciente</p>
          <h2>Odontologia domiciliar com avaliação individualizada</h2>
        </div>
        <p>
          A Odonto em Casa oferece atendimento odontológico domiciliar e
          hospitalar em Maringá e região, sob responsabilidade técnica da
          {` ${site.professionalDisplayName}, ${site.credential}`}. O cuidado é
          indicado para famílias, cuidadores, casas de repouso, instituições de
          longa permanência, home cares e pacientes que precisam de um dentista
          em casa.
        </p>
      </section>

      <section className="section-grid">
        <FeatureCard
          icon={<Home />}
          title="Dentista em casa"
          text="Consulta em domicílio para idosos, pacientes acamados, crianças, pessoas com dificuldade de locomoção e pessoas com necessidades especiais."
          href="/atendimento-domiciliar/"
        />
        <FeatureCard
          icon={<Hospital />}
          title="Atendimento hospitalar"
          text="Atendimento odontológico hospitalar conforme autorização da instituição, condição clínica do paciente e viabilidade técnica do caso."
          href="/atendimento-hospitalar/"
        />
        <FeatureCard
          icon={<Users />}
          title="Cuidadores e instituições"
          text="Orientação de higiene oral para familiares, cuidadores, ILPIs, casas de repouso e equipes de home care."
          href="/instituicoes-e-cuidadores/"
        />
      </section>

      <CtaBand
        title="Precisa de atendimento odontológico domiciliar em Maringá?"
        text="Conte pelo WhatsApp quem precisa do atendimento, a cidade, a principal queixa e se há dificuldade de locomoção ou internação."
        messageKey="home"
        location="home_bottom"
      />
    </>
  );
}

function ServicesPage({ page }) {
  const serviceGroups = [
    {
      title: "Avaliação e atendimento",
      text: "Para entender a necessidade inicial, definir limites técnicos e organizar o cuidado no local mais adequado.",
      services: serviceCards.slice(0, 3),
    },
    {
      title: "Pacientes e famílias",
      text: "Atendimento para pessoas que precisam de cuidado odontológico com menor deslocamento e orientação próxima da família.",
      services: serviceCards.slice(3, 10),
    },
    {
      title: "Cuidadores, instituições e escolas",
      text: "Orientação prática para rotinas de higiene oral, prevenção e educação em saúde bucal.",
      services: serviceCards.slice(10),
    },
  ];

  return (
    <ContentPage page={page}>
      <div className="services-intro">
        <p>
          Conheça os serviços da Odonto em Casa para atendimento odontológico
          domiciliar, hospitalar, institucional e educativo em Maringá e região.
          Cada caso passa por avaliação para definir o que pode ser feito no
          local com segurança e o que precisa de consultório ou estrutura
          hospitalar.
        </p>
        <WhatsAppLink
          className="primary-button"
          location="services_intro"
          label="whatsapp_services_intro"
        >
          <MessageCircle aria-hidden="true" size={20} />
          Agendar avaliação pelo WhatsApp
        </WhatsAppLink>
      </div>
      <div className="service-groups">
        {serviceGroups.map((group) => (
          <section className="service-group" key={group.title}>
            <div className="service-group-heading">
              <h2>{group.title}</h2>
              <p>{group.text}</p>
            </div>
            <div className="service-list">
              {group.services.map((service) => (
                <article className="service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
      <CtaBand
        title="Página de serviços para o Perfil da Empresa"
        text="Esta página concentra os serviços da Odonto em Casa para uso no Google Business Profile e em navegação interna do site."
        location="services_bottom"
      />
    </ContentPage>
  );
}

function HomecarePage({ page }) {
  return (
    <ContentPage page={page}>
      <p>
        O atendimento odontológico domiciliar leva a avaliação do dentista até a
        casa do paciente. É uma alternativa para idosos, pacientes acamados,
        pessoas com dificuldade de locomoção, pessoas com necessidades
        especiais, crianças e famílias que precisam de orientação sem deslocar o
        paciente.
      </p>
      <InfoList
        items={[
          "A conversa inicial pelo WhatsApp levanta cidade, queixa, idade, condição geral e limitações do paciente.",
          "A avaliação em casa verifica necessidade, ambiente, biossegurança, possibilidades e limites do atendimento domiciliar.",
          "Equipamentos e materiais portáteis podem ser usados quando o caso permite, sem prometer que todo procedimento seja feito em casa.",
          "Quando a situação exige estrutura maior, exames ou suporte específico, a família recebe orientação sobre encaminhamento adequado.",
        ]}
      />
      <CtaBand
        title="Agende uma avaliação odontológica domiciliar"
        text="Envie as informações iniciais pelo WhatsApp para entender a melhor forma de atendimento."
        location="domiciliar_bottom"
      />
    </ContentPage>
  );
}

function HospitalPage({ page }) {
  return (
    <ContentPage page={page}>
      <p>
        O atendimento odontológico hospitalar em Maringá e região pode ser
        organizado quando há necessidade, possibilidade técnica e autorização da
        instituição. A Odonto em Casa não promete atendimento irrestrito:
        hospitais seguem protocolos próprios e a condição clínica do paciente
        precisa ser considerada.
      </p>
      <InfoList
        items={[
          "A entrada no hospital depende de autorização formal ou liberação da instituição.",
          "A avaliação considera regras hospitalares, risco clínico, materiais permitidos e necessidade de suporte da equipe.",
          "Alguns casos podem ser apenas avaliados ou orientados no hospital e encaminhados para outro ambiente quando necessário.",
          "Familiares e responsáveis devem informar internação, diagnóstico conhecido, medicações, restrições e contatos da equipe assistencial.",
        ]}
      />
      <CtaBand
        title="Fale sobre atendimento odontológico hospitalar"
        text="Explique pelo WhatsApp a situação do paciente e o hospital ou instituição envolvida."
        messageKey="hospitalar"
        location="hospitalar_bottom"
      />
    </ContentPage>
  );
}

function ElderlyPage({ page }) {
  return (
    <ContentPage page={page}>
      <p>
        Familiares e cuidadores costumam perceber mudanças na alimentação,
        higiene oral e conforto antes que o paciente consiga explicar o que
        sente. A avaliação odontológica domiciliar ajuda a entender sinais de
        alerta sem deslocar idosos, pacientes acamados ou pessoas com mobilidade
        reduzida.
      </p>
      <div className="alert-grid" aria-label="Sinais de alerta">
        {[
          "Dor na boca ou na face",
          "Dificuldade para mastigar",
          "Sangramento gengival",
          "Mau hálito persistente",
          "Prótese machucando",
          "Feridas na boca",
          "Dificuldade de higiene",
          "Alteração alimentar",
        ].map((item) => (
          <span key={item}>
            <CheckCircle2 aria-hidden="true" size={18} />
            {item}
          </span>
        ))}
      </div>
      <p>
        Esses sinais não substituem consulta e não permitem diagnóstico online.
        A conduta depende da avaliação presencial, histórico de saúde, ambiente
        e viabilidade técnica.
      </p>
      <CtaBand
        title="Atendimento para familiar idoso ou acamado"
        text="Informe a cidade, idade, condição de locomoção, queixa principal e se há cuidador responsável."
        messageKey="idosos"
        location="idosos_bottom"
      />
    </ContentPage>
  );
}

function ChildPage({ page }) {
  return (
    <ContentPage page={page}>
      <p>
        O atendimento odontológico infantil domiciliar busca acolher a criança,
        orientar os pais e construir uma relação mais tranquila com o cuidado
        bucal. A abordagem pode incluir prevenção, escovação, alimentação, medo
        de dentista e adaptação gradual ao atendimento.
      </p>
      <InfoList
        items={[
          "Orientação aos pais sobre rotina de higiene oral, escovação e prevenção de cáries.",
          "Acolhimento para crianças com receio do dentista, respeitando tempo, comunicação e segurança.",
          "Atendimento em casa quando a avaliação indicar viabilidade e benefício para a família.",
          "Ações educativas em saúde bucal para crianças em escolas, conforme disponibilidade e alinhamento com a instituição.",
        ]}
      />
      <CtaBand
        title="Fale sobre atendimento odontológico infantil em casa"
        text="Envie a idade da criança, cidade, principal dúvida e objetivo do atendimento."
        messageKey="infantil"
        location="infantil_bottom"
      />
    </ContentPage>
  );
}

function CitiesPage({ page }) {
  const cityTexts = {
    Maringá:
      "Maringá é a cidade principal de atendimento da Odonto em Casa, com foco em dentista domiciliar, atendimento hospitalar e orientação para famílias, cuidadores e instituições.",
    Sarandi:
      "Em Sarandi, o atendimento odontológico domiciliar ajuda famílias que precisam evitar deslocamentos de idosos, pacientes acamados, crianças ou pessoas com dificuldade de locomoção.",
    Paiçandu:
      "Em Paiçandu, a Odonto em Casa organiza avaliações em domicílio conforme disponibilidade de agenda, necessidade do paciente e possibilidade técnica do caso.",
    Mandaguaçu:
      "Em Mandaguaçu, o atendimento é indicado para quem busca dentista em casa com orientação clara para familiares e cuidadores antes da consulta.",
    Marialva:
      "Em Marialva, famílias podem solicitar avaliação odontológica domiciliar para idosos, pacientes com mobilidade reduzida, crianças e pessoas com necessidades especiais.",
    Floresta:
      "Em Floresta, a Odonto em Casa atende mediante agendamento e avaliação de deslocamento, sempre com orientação prévia pelo WhatsApp.",
    Mandaguari:
      "Em Mandaguari, o atendimento domiciliar é organizado para casos em que o deslocamento ao consultório é difícil ou precisa ser evitado.",
    Iguaraçu:
      "Em Iguaraçu, a avaliação odontológica domiciliar pode apoiar famílias e cuidadores na identificação de necessidades de saúde bucal.",
    "Dr. Camargo":
      "Em Dr. Camargo, o atendimento ocorre conforme agenda, distância, condições do paciente e viabilidade técnica do cuidado solicitado.",
  };

  return (
    <ContentPage page={page}>
      <p>
        A Odonto em Casa atende Maringá e cidades próximas com odontologia
        domiciliar e hospitalar mediante avaliação, agendamento e viabilidade
        técnica.
      </p>
      <div className="city-grid">
        {cities.map((city) => (
          <article className="city-card" key={city}>
            <h2>Dentista domiciliar em {city}</h2>
            <p>{cityTexts[city]}</p>
          </article>
        ))}
      </div>
    </ContentPage>
  );
}

function InstitutionsPage({ page }) {
  return (
    <ContentPage page={page}>
      <p>
        Casas de repouso, ILPIs, empresas de home care, cuidadores,
        fisioterapeutas, fonoaudiólogos, nutricionistas e familiares podem
        contar com orientação odontológica para melhorar a rotina de higiene
        bucal e identificar sinais que merecem avaliação.
      </p>
      <InfoList
        items={[
          "Palestras e orientações para cuidadores e equipes de instituições.",
          "Apoio a famílias que acompanham idosos, pacientes acamados ou pessoas com necessidades especiais.",
          "Atendimento odontológico em instituições conforme autorização, agenda e viabilidade técnica.",
          "Orientação de higiene oral adaptada à rotina da instituição ou do home care.",
        ]}
      />
      <CtaBand
        title="Fale sobre parceria ou orientação para cuidadores"
        text="Envie o tipo de instituição, cidade, número aproximado de pessoas atendidas e objetivo da orientação."
        messageKey="instituicoes"
        location="instituicoes_bottom"
      />
    </ContentPage>
  );
}

function SchoolsPage({ page }) {
  return (
    <ContentPage page={page}>
      <p>
        A Odonto em Casa realiza ações educativas de saúde bucal para crianças
        em escolas de Maringá e região, conforme disponibilidade e alinhamento
        com a instituição. As atividades usam linguagem lúdica para falar sobre
        escovação, alimentação, prevenção de cáries e cuidado com a saúde bucal.
      </p>
      <InfoList
        items={[
          "Conteúdo adaptado à faixa etária das crianças.",
          "Orientação preventiva para reforçar hábitos de higiene bucal.",
          "Conversas com educadores ou responsáveis quando a escola solicitar.",
          "Ações gratuitas ou institucionais podem ser avaliadas conforme agenda e proposta.",
        ]}
      />
      <CtaBand
        title="Solicite uma ação educativa para escola"
        text="Informe pelo WhatsApp o nome da escola, cidade, faixa etária e objetivo da atividade."
        location="escolas_bottom"
      />
    </ContentPage>
  );
}

function AboutPage({ page }) {
  return (
    <ContentPage page={page}>
      <div className="about-grid">
        <img
          src="/assets/logo-icon3.png"
          width="360"
          height="360"
          alt="Dra. Patrícia Craveiro, responsável técnica da Odonto em Casa"
          loading="lazy"
          decoding="async"
        />
        <div>
          <p>
            A Odonto em Casa é uma marca criada para levar atendimento
            odontológico humanizado a quem precisa ou prefere ser atendido em
            casa, hospital ou instituição.
          </p>
          <p>
            A responsável técnica e fundadora é a {site.professionalDisplayName}
            , cirurgiã-dentista, {site.credential}. O atendimento atual
            contempla odontologia domiciliar e hospitalar em Maringá e região,
            com avaliação individualizada, orientação para familiares e respeito
            aos limites técnicos de cada caso.
          </p>
          <p>
            Quando aplicável, a atuação também inclui atendimento odontológico
            infantil e ações educativas em saúde bucal para crianças. Não há
            promessa de resultado, diagnóstico online ou atendimento em todos os
            casos sem avaliação.
          </p>
        </div>
      </div>
    </ContentPage>
  );
}

function FaqPage({ page }) {
  return (
    <ContentPage page={page}>
      <div className="faq-list">
        {faqItems.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <ChevronDown aria-hidden="true" size={18} />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </ContentPage>
  );
}

function NotFoundPage({ page }) {
  return (
    <ContentPage page={page} compact>
      <p>
        A URL acessada não existe neste site. Como o domínio pode ter tido
        conteúdo antigo indexado, esta página não é redirecionada
        automaticamente para a home.
      </p>
      <div className="button-row">
        <a className="secondary-button" href="/">
          Voltar para a home
        </a>
        <WhatsAppLink
          className="primary-button"
          location="404"
          label="whatsapp_404"
        >
          <MessageCircle aria-hidden="true" size={20} />
          Agendar avaliação pelo WhatsApp
        </WhatsAppLink>
      </div>
    </ContentPage>
  );
}

function ContentPage({ page, children, compact = false }) {
  return (
    <section className={compact ? "content-page compact-page" : "content-page"}>
      <div className="page-title">
        <p className="eyebrow">Odonto em Casa</p>
        <h1>{page.h1}</h1>
      </div>
      <div className="content-body">{children}</div>
    </section>
  );
}

function FeatureCard({ icon, title, text, href }) {
  return (
    <article className="feature-card">
      <div className="feature-icon" aria-hidden="true">
        {icon}
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
      <a className="text-link" href={href}>
        Saiba mais
      </a>
    </article>
  );
}

function InfoList({ items }) {
  return (
    <ul className="info-list">
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 aria-hidden="true" size={19} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CtaBand({ title, text, messageKey = "default", location }) {
  return (
    <section className="cta-band">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <WhatsAppLink
        className="primary-button"
        messageKey={messageKey}
        location={location}
        label={`whatsapp_${location}`}
      >
        <MessageCircle aria-hidden="true" size={20} />
        Agendar avaliação pelo WhatsApp
      </WhatsAppLink>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="footer-logo" href="/" aria-label="Odonto em Casa">
            <img
              src="/assets/logo-icon.png"
              width="52"
              height="52"
              alt=""
              loading="lazy"
            />
            <span>
              <strong>Odonto em Casa</strong>
              <small>Dentista domiciliar em Maringá e região</small>
            </span>
          </a>
          <p>
            Atendimento odontológico domiciliar e hospitalar para idosos,
            pacientes acamados, pessoas com dificuldade de locomoção, pessoas
            com necessidades especiais e crianças.
          </p>
        </div>

        <nav className="footer-links" aria-label="Links do rodapé">
          <strong>Site</strong>
          <a href="/servicos/">Serviços</a>
          <a href="/cidades-atendidas/">Cidades atendidas</a>
          <a href="/faq/">Dúvidas</a>
          <a href="/sobre/">Sobre</a>
        </nav>

        <div className="footer-contact">
          <strong>Contato</strong>
          <a href={site.instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <WhatsAppLink
            className="footer-whatsapp"
            location="footer"
            label="whatsapp_footer"
          >
            <MessageCircle aria-hidden="true" size={18} />
            Falar com a Odonto em Casa
          </WhatsAppLink>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Responsável técnica: {site.professionalDisplayName} -{" "}
          {site.credential}
        </p>
        <p>
          Atendimento mediante avaliação, agendamento e viabilidade técnica do
          caso.
        </p>
      </div>
    </footer>
  );
}

function WhatsAppLink({
  children,
  className,
  messageKey = "default",
  location,
  label,
}) {
  const href = buildWhatsAppHref(messageKey);

  const handleClick = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "click", {
        event_category: "contato",
        event_label: label || location || "whatsapp",
        event_action: "click",
      });
    }
  };

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      data-event="whatsapp_click"
      data-location={location}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function renderRoute(path, page) {
  switch (path) {
    case "/":
      return <HomePage page={page} />;
    case "/servicos/":
      return <ServicesPage page={page} />;
    case "/atendimento-domiciliar/":
      return <HomecarePage page={page} />;
    case "/atendimento-hospitalar/":
      return <HospitalPage page={page} />;
    case "/idosos-e-acamados/":
      return <ElderlyPage page={page} />;
    case "/atendimento-infantil/":
      return <ChildPage page={page} />;
    case "/cidades-atendidas/":
      return <CitiesPage page={page} />;
    case "/instituicoes-e-cuidadores/":
      return <InstitutionsPage page={page} />;
    case "/escolas/":
      return <SchoolsPage page={page} />;
    case "/sobre/":
      return <AboutPage page={page} />;
    case "/faq/":
      return <FaqPage page={page} />;
    default:
      return <NotFoundPage page={page} />;
  }
}

function applySeo(page, path, isNotFound) {
  const canonicalPath = isNotFound ? "/404/" : path;
  const canonicalUrl = `${site.canonicalOrigin}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const ogDescription = page.ogDescription || page.description;

  document.documentElement.lang = "pt-BR";
  document.title = page.title;
  upsertMeta("name", "description", page.description);
  upsertMeta(
    "name",
    "robots",
    page.noindex ? "noindex,follow" : "index,follow",
  );
  upsertLink("canonical", canonicalUrl);
  upsertMeta("property", "og:title", page.title);
  upsertMeta("property", "og:description", ogDescription);
  upsertMeta("property", "og:url", canonicalUrl);
  upsertMeta("property", "og:image", site.ogImage);
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:locale", "pt_BR");
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", page.title);
  upsertMeta("name", "twitter:description", ogDescription);
  upsertMeta("name", "twitter:image", site.ogImage);
}

function upsertMeta(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function buildWhatsAppHref(messageKey = "default") {
  const message = whatsappMessages[messageKey] || whatsappMessages.default;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  const clean = pathname.split("?")[0].split("#")[0];
  return clean.endsWith("/") ? clean : `${clean}/`;
}

export { routeOrder };
export default App;

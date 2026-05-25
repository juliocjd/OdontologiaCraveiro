export const site = {
  brandName: "Odonto em Casa",
  canonicalOrigin: "https://odontoemcasa.com.br",
  phoneDisplay: "+55 44 99984-4607",
  whatsappNumber: "5544999844607",
  instagramUrl: "https://www.instagram.com/dra.patriciacraveiro/",
  logo: "https://odontoemcasa.com.br/logo.png",
  ogImage: "https://odontoemcasa.com.br/og-image.jpg",
  professionalName: "Dra. Patricia Craveiro",
  professionalDisplayName: "Dra. Patrícia Craveiro",
  credential: "CRO/PR 40021",
  serviceArea: "Maringá e região",
  coverImage: "/assets/homecare-dental-1280.webp",
};

export const cities = [
  "Maringá",
  "Sarandi",
  "Paiçandu",
  "Mandaguaçu",
  "Marialva",
  "Floresta",
  "Mandaguari",
  "Iguaraçu",
  "Dr. Camargo",
];

export const navItems = [
  { label: "Início", path: "/" },
  { label: "Serviços", path: "/servicos/" },
  { label: "Atendimento domiciliar", path: "/atendimento-domiciliar/" },
  { label: "Atendimento hospitalar", path: "/atendimento-hospitalar/" },
  { label: "Idosos e acamados", path: "/idosos-e-acamados/" },
  { label: "Atendimento infantil", path: "/atendimento-infantil/" },
  { label: "Cidades atendidas", path: "/cidades-atendidas/" },
  { label: "Instituições e cuidadores", path: "/instituicoes-e-cuidadores/" },
  { label: "Escolas", path: "/escolas/" },
  { label: "Sobre", path: "/sobre/" },
  { label: "Dúvidas", path: "/faq/" },
];

export const whatsappMessages = {
  home: "Olá, gostaria de agendar uma avaliação odontológica domiciliar.",
  idosos:
    "Olá, gostaria de atendimento odontológico domiciliar para um familiar idoso ou acamado.",
  hospitalar: "Olá, gostaria de saber sobre atendimento odontológico hospitalar.",
  infantil:
    "Olá, gostaria de saber sobre atendimento odontológico infantil em casa.",
  instituicoes:
    "Olá, gostaria de falar sobre parceria/orientação odontológica para instituição ou cuidadores.",
  dor: "Olá, gostaria de orientação sobre dor de dente em casa.",
  protese:
    "Olá, gostaria de avaliação de prótese dentária em casa.",
  homeCare:
    "Olá, gostaria de atendimento odontológico para paciente em home care.",
  default: "Olá, gostaria de agendar uma avaliação odontológica domiciliar.",
};

export const homeServiceLinks = [
  {
    label: "Limpeza dentária em casa",
    path: "/limpeza-dentaria-em-casa/",
  },
  {
    label: "Higiene bucal para acamados",
    path: "/higiene-bucal-para-acamados/",
  },
  {
    label: "Cuidados com próteses dentárias",
    path: "/protese-dentaria-em-casa/",
  },
  {
    label: "Dor de dente em casa",
    path: "/dor-de-dente-em-casa/",
  },
  {
    label: "Tratamento de cárie e restauração",
    path: "/tratamento-de-carie-em-casa/",
  },
  {
    label: "Tratamento de gengiva",
    path: "/tratamento-de-gengiva-em-casa/",
  },
  {
    label: "Pacientes em home care",
    path: "/dentista-para-paciente-em-home-care/",
  },
  {
    label: "Pacientes com Alzheimer e demência",
    path: "/dentista-para-paciente-com-alzheimer-e-demencia/",
  },
];

export const serviceCards = [
  {
    key: "avaliacao",
    title: "Avaliação odontológica domiciliar",
    text: "Consulta inicial em casa para entender a queixa, as condições de saúde, a rotina de cuidados e a viabilidade técnica do atendimento.",
  },
  {
    key: "atendimento-casa",
    title: "Atendimento odontológico em casa",
    text: "Cuidado planejado para quem prefere ou precisa receber o dentista em casa, com equipamentos portáteis e orientação para a família.",
  },
  {
    key: "atendimento-hospitalar",
    title: "Atendimento odontológico hospitalar",
    text: "Avaliação e atendimento conforme autorização da instituição, condição clínica do paciente, regras hospitalares e possibilidade técnica.",
    message: "hospitalar",
  },
  {
    key: "limpeza",
    title: "Limpeza dentária em casa",
    text: "Avaliação para limpeza dentária domiciliar em Maringá e região, quando o ambiente, a condição clínica e a segurança do caso permitem.",
  },
  {
    key: "profilaxia",
    title: "Profilaxia dentária domiciliar",
    text: "Cuidado preventivo em casa, mediante avaliação, para reduzir acúmulo de placa, orientar higiene e acompanhar a saúde bucal.",
  },
  {
    key: "higiene-acamados",
    title: "Higiene bucal para acamados",
    text: "Orientação e cuidado bucal para pacientes acamados, com foco em rotina segura, conforto e apoio aos familiares ou cuidadores.",
    message: "idosos",
  },
  {
    key: "higiene-idosos",
    title: "Higiene bucal para idosos",
    text: "Avaliação da higiene oral, próteses, gengiva e dificuldades de cuidado diário, sempre conforme necessidade e viabilidade técnica.",
    message: "idosos",
  },
  {
    key: "cuidados-idosos",
    title: "Cuidados bucais para idosos em casa",
    text: "Acompanhamento e orientação para idosos em casa, considerando mastigação, próteses, dor, medicamentos e apoio do cuidador.",
    message: "idosos",
  },
  {
    key: "cuidadores",
    title: "Orientação de higiene bucal para cuidadores",
    text: "Treinamento prático para melhorar a higiene bucal diária de idosos, pacientes acamados e pessoas dependentes de cuidado.",
    message: "instituicoes",
  },
  {
    key: "avaliacao-protese",
    title: "Avaliação de prótese dentária em casa",
    text: "Verificação de próteses que machucam, soltam, dificultam a mastigação ou provocam feridas, sempre com avaliação presencial.",
    message: "protese",
  },
  {
    key: "ajuste-protese",
    title: "Ajuste de prótese dentária em casa",
    text: "Avaliação da possibilidade de ajuste ou orientação sobre próteses, conforme segurança, materiais necessários e condição da boca.",
    message: "protese",
  },
  {
    key: "manutencao-protese",
    title: "Manutenção de prótese dentária em domicílio",
    text: "Orientação e avaliação de manutenção de próteses em domicílio, com encaminhamento quando o caso exigir laboratório ou consultório.",
    message: "protese",
  },
  {
    key: "protese-machucando",
    title: "Atendimento para prótese dentária machucando",
    text: "Avaliação de feridas, dor, pressão e dificuldade para mastigar causadas por prótese, com conduta definida após exame presencial.",
    message: "protese",
  },
  {
    key: "carie",
    title: "Tratamento de cárie em casa",
    text: "Avaliação de lesões de cárie e possibilidade de tratamento domiciliar, quando houver viabilidade técnica e segurança do caso.",
  },
  {
    key: "restauracao",
    title: "Restauração dentária em casa",
    text: "Restauração pode ser avaliada para atendimento em domicílio, considerando acesso, material, isolamento, extensão da lesão e conforto do paciente.",
  },
  {
    key: "gengiva",
    title: "Tratamento de gengiva em casa",
    text: "Avaliação de sangramento, inflamação, higiene e desconforto gengival, com orientação ou cuidado conforme condição clínica.",
  },
  {
    key: "dor",
    title: "Dor de dente em casa",
    text: "Avaliação de dor de dente em domicílio para identificar sinais de alerta e orientar a conduta possível com segurança.",
    message: "dor",
  },
  {
    key: "dor-domicilio",
    title: "Atendimento para dor de dente em domicílio",
    text: "Atendimento mediante avaliação para pacientes com dor e dificuldade de deslocamento, sem promessa de resolução em todos os casos.",
    message: "dor",
  },
  {
    key: "urgencia",
    title: "Urgência odontológica domiciliar",
    text: "Avaliação de queixas urgentes em casa conforme agenda, condição clínica, segurança e viabilidade técnica, sem caracterizar pronto atendimento contínuo.",
    message: "dor",
  },
  {
    key: "idosos",
    title: "Atendimento para idosos",
    text: "Apoio odontológico para idosos, com atenção a próteses, dor, higiene oral, mastigação e sinais que precisam de avaliação presencial.",
    message: "idosos",
  },
  {
    key: "acamados",
    title: "Atendimento para pacientes acamados",
    text: "Consulta odontológica domiciliar para pacientes acamados, com planejamento individual e orientação para familiares e cuidadores.",
    message: "idosos",
  },
  {
    key: "alzheimer",
    title: "Dentista para paciente com Alzheimer",
    text: "Atendimento odontológico domiciliar com abordagem cuidadosa, comunicação adaptada e avaliação da segurança para pacientes com Alzheimer.",
    message: "idosos",
  },
  {
    key: "demencia",
    title: "Dentista para paciente com demência",
    text: "Avaliação odontológica para pacientes com demência, considerando rotina, colaboração, cuidador responsável e condição clínica.",
    message: "idosos",
  },
  {
    key: "internacao-domiciliar",
    title: "Atendimento odontológico em internação domiciliar",
    text: "Cuidado odontológico para pacientes em internação domiciliar, conforme alinhamento com família, equipe assistencial e viabilidade técnica.",
    message: "homeCare",
  },
  {
    key: "home-care",
    title: "Dentista para paciente em home care",
    text: "Avaliação e orientação odontológica para pacientes acompanhados por equipes de home care em Maringá e região.",
    message: "homeCare",
  },
  {
    key: "dificuldade-locomocao",
    title: "Pessoas com dificuldade de locomoção",
    text: "Atendimento para pessoas que enfrentam barreiras de deslocamento até o consultório, sempre mediante avaliação do caso.",
  },
  {
    key: "pne",
    title: "Pessoas com necessidades especiais",
    text: "Cuidado odontológico acolhedor para pessoas com necessidades especiais, considerando comunicação, rotina, segurança e conforto.",
  },
  {
    key: "casa-repouso",
    title: "Avaliação odontológica em casa de repouso",
    text: "Atendimento em casas de repouso e ILPIs conforme autorização da instituição, agenda, ambiente e segurança do caso.",
    message: "instituicoes",
  },
  {
    key: "paciente-hospitalizado",
    title: "Dentista para paciente hospitalizado",
    text: "Avaliação odontológica para paciente hospitalizado conforme autorização da instituição, regras hospitalares e condição clínica.",
    message: "hospitalar",
  },
  {
    key: "infantil",
    title: "Atendimento odontológico infantil domiciliar",
    text: "Atendimento odontológico infantil em casa, com acolhimento, prevenção, orientação aos pais e adaptação gradual da criança.",
    message: "infantil",
  },
  {
    key: "escolas",
    title: "Ações educativas em escolas",
    text: "Atividades de saúde bucal para crianças, com linguagem lúdica sobre escovação, alimentação e prevenção.",
  },
  {
    key: "palestras",
    title: "Palestras para cuidadores e instituições",
    text: "Orientação para casas de repouso, ILPIs, home cares e equipes multiprofissionais sobre cuidado bucal na rotina.",
    message: "instituicoes",
  },
];

export const serviceGroups = [
  {
    title: "Avaliação e atendimento",
    text: "Primeiro passo para entender a necessidade, os limites técnicos e o local mais seguro para o cuidado.",
    serviceKeys: ["avaliacao", "atendimento-casa", "atendimento-hospitalar"],
  },
  {
    title: "Higiene, prevenção e rotina de cuidados",
    text: "Serviços voltados à prevenção, higiene oral e orientação prática para famílias e cuidadores.",
    serviceKeys: [
      "limpeza",
      "profilaxia",
      "higiene-acamados",
      "higiene-idosos",
      "cuidados-idosos",
      "cuidadores",
    ],
  },
  {
    title: "Próteses, dor e queixas comuns",
    text: "Avaliação de próteses, dor, cárie, gengiva e outros sinais que precisam de exame presencial.",
    serviceKeys: [
      "avaliacao-protese",
      "ajuste-protese",
      "manutencao-protese",
      "protese-machucando",
      "carie",
      "restauracao",
      "gengiva",
      "dor",
      "dor-domicilio",
      "urgencia",
    ],
  },
  {
    title: "Idosos, acamados e pacientes em home care",
    text: "Cuidado odontológico em casa para pacientes que precisam de planejamento, acolhimento e menor deslocamento.",
    serviceKeys: [
      "idosos",
      "acamados",
      "alzheimer",
      "demencia",
      "internacao-domiciliar",
      "home-care",
      "dificuldade-locomocao",
      "pne",
    ],
  },
  {
    title: "Instituições, hospitais e escolas",
    text: "Atendimento e orientação em instituições, hospitais, casas de repouso, home cares e escolas.",
    serviceKeys: [
      "casa-repouso",
      "paciente-hospitalizado",
      "infantil",
      "escolas",
      "palestras",
    ],
  },
];

export const pages = {
  "/": {
    title: "Dentista Domiciliar em Maringá | Odonto em Casa",
    description:
      "Atendimento odontológico domiciliar e hospitalar em Maringá e região para idosos, pacientes acamados, hospitalizados, pessoas com dificuldade de locomoção, pessoas com necessidades especiais e crianças. Agende pelo WhatsApp.",
    ogDescription:
      "Atendimento odontológico domiciliar e hospitalar em Maringá e região, com cuidado humanizado para quem precisa receber atendimento em casa, hospital ou instituição.",
    h1: "Dentista domiciliar e hospitalar em Maringá e região",
    message: "home",
  },
  "/servicos/": {
    title: "Serviços de Odontologia Domiciliar em Maringá | Odonto em Casa",
    description:
      "Conheça os serviços da Odonto em Casa: avaliação odontológica domiciliar, limpeza dentária em casa, próteses, dor de dente, idosos, acamados, home care e atendimento hospitalar em Maringá e região.",
    h1: "Serviços de odontologia domiciliar e hospitalar em Maringá",
  },
  "/atendimento-domiciliar/": {
    title: "Atendimento Odontológico Domiciliar em Maringá | Odonto em Casa",
    description:
      "Dentista em casa em Maringá e região. Atendimento odontológico domiciliar para quem tem dificuldade de locomoção, idosos, acamados, pessoas com necessidades especiais e crianças.",
    h1: "Atendimento odontológico domiciliar em Maringá",
  },
  "/atendimento-hospitalar/": {
    title: "Atendimento Odontológico Hospitalar em Maringá | Odonto em Casa",
    description:
      "Atendimento odontológico hospitalar em Maringá e região, conforme avaliação, autorização da instituição e possibilidade técnica do caso.",
    h1: "Atendimento odontológico hospitalar em Maringá",
    message: "hospitalar",
  },
  "/idosos-e-acamados/": {
    title: "Dentista para Idosos e Pacientes Acamados em Maringá | Odonto em Casa",
    description:
      "Atendimento odontológico domiciliar para idosos, pacientes acamados e pessoas com mobilidade reduzida em Maringá e região. Orientação para familiares e cuidadores.",
    h1: "Dentista para idosos e pacientes acamados em Maringá",
    message: "idosos",
  },
  "/atendimento-infantil/": {
    title: "Atendimento Odontológico Infantil em Casa em Maringá | Odonto em Casa",
    description:
      "Atendimento odontológico infantil domiciliar e orientação de saúde bucal para crianças e famílias em Maringá e região.",
    h1: "Atendimento odontológico infantil em casa",
    message: "infantil",
  },
  "/cidades-atendidas/": {
    title: "Dentista Domiciliar em Maringá e Região | Cidades Atendidas",
    description:
      "A Odonto em Casa atende Maringá, Sarandi, Paiçandu, Mandaguaçu, Marialva, Floresta, Mandaguari, Iguaraçu, Dr. Camargo e região.",
    h1: "Cidades atendidas pela Odonto em Casa",
  },
  "/instituicoes-e-cuidadores/": {
    title: "Parcerias com Casas de Repouso, Home Care e Cuidadores | Odonto em Casa",
    description:
      "A Odonto em Casa realiza orientação e atendimento odontológico para instituições, cuidadores, casas de repouso e equipes de home care em Maringá e região.",
    h1: "Odontologia domiciliar para instituições, cuidadores e famílias",
    message: "instituicoes",
  },
  "/escolas/": {
    title: "Educação em Saúde Bucal para Escolas em Maringá | Odonto em Casa",
    description:
      "Ações educativas de saúde bucal para crianças em escolas de Maringá e região, com linguagem lúdica e orientação preventiva.",
    h1: "Educação em saúde bucal para escolas",
  },
  "/sobre/": {
    title: "Sobre a Odonto em Casa | Atendimento Odontológico Domiciliar em Maringá",
    description:
      "Conheça a Odonto em Casa e a Dra. Patrícia Craveiro, responsável técnica pelo atendimento odontológico domiciliar e hospitalar em Maringá e região.",
    h1: "Sobre a Odonto em Casa",
  },
  "/faq/": {
    title: "Dúvidas Frequentes sobre Dentista Domiciliar | Odonto em Casa",
    description:
      "Tire dúvidas sobre atendimento odontológico domiciliar e hospitalar em Maringá: para quem é indicado, como funciona, quais cidades são atendidas e como agendar.",
    h1: "Dúvidas frequentes sobre atendimento odontológico domiciliar",
  },
  "/limpeza-dentaria-em-casa/": {
    title: "Limpeza Dentária em Casa em Maringá | Odonto em Casa",
    description:
      "Limpeza dentária em casa em Maringá e região, mediante avaliação, condição clínica do paciente e viabilidade técnica do atendimento domiciliar.",
    h1: "Limpeza dentária em casa em Maringá",
  },
  "/higiene-bucal-para-acamados/": {
    title: "Higiene Bucal para Acamados em Maringá | Odonto em Casa",
    description:
      "Orientação e cuidado de higiene bucal para acamados, idosos e cuidadores em Maringá e região, conforme avaliação e segurança do caso.",
    h1: "Higiene bucal para acamados e idosos",
    message: "idosos",
  },
  "/protese-dentaria-em-casa/": {
    title: "Prótese Dentária em Casa em Maringá | Odonto em Casa",
    description:
      "Avaliação e cuidados com prótese dentária em casa em Maringá e região, incluindo prótese machucando, ajustes e orientação conforme viabilidade técnica.",
    h1: "Avaliação e cuidados com prótese dentária em casa",
    message: "protese",
  },
  "/dor-de-dente-em-casa/": {
    title: "Dor de Dente em Casa em Maringá | Odonto em Casa",
    description:
      "Atendimento para dor de dente em casa em Maringá e região, mediante avaliação da queixa, condição clínica e segurança do caso.",
    h1: "Atendimento para dor de dente em casa",
    message: "dor",
  },
  "/tratamento-de-carie-em-casa/": {
    title: "Tratamento de Cárie em Casa em Maringá | Odonto em Casa",
    description:
      "Avaliação para tratamento de cárie e restauração em casa em Maringá e região, conforme viabilidade técnica e segurança do paciente.",
    h1: "Tratamento de cárie e restauração em casa",
  },
  "/tratamento-de-gengiva-em-casa/": {
    title: "Tratamento de Gengiva em Casa em Maringá | Odonto em Casa",
    description:
      "Avaliação de gengiva em atendimento domiciliar em Maringá e região, para sangramento, inflamação, higiene e orientação preventiva.",
    h1: "Tratamento de gengiva em atendimento domiciliar",
  },
  "/dentista-para-paciente-em-home-care/": {
    title: "Dentista para Paciente em Home Care em Maringá | Odonto em Casa",
    description:
      "Dentista para paciente em home care em Maringá e região, com avaliação odontológica domiciliar conforme equipe, família e condição clínica.",
    h1: "Dentista para paciente em home care",
    message: "homeCare",
  },
  "/dentista-para-paciente-com-alzheimer-e-demencia/": {
    title: "Dentista para Paciente com Alzheimer e Demência em Maringá | Odonto em Casa",
    description:
      "Atendimento odontológico domiciliar para pacientes com Alzheimer e demência em Maringá e região, conforme avaliação, rotina e segurança do caso.",
    h1: "Atendimento odontológico para pacientes com Alzheimer e demência",
    message: "idosos",
  },
  "/404/": {
    title: "Página não encontrada | Odonto em Casa",
    description:
      "A página solicitada não foi encontrada no site da Odonto em Casa.",
    h1: "Página não encontrada",
    noindex: true,
  },
};

export const serviceDetailPages = {
  "/limpeza-dentaria-em-casa/": {
    intro:
      "A limpeza dentária em casa pode ajudar pacientes que têm dificuldade de deslocamento até o consultório, especialmente idosos, pacientes acamados e pessoas em acompanhamento domiciliar. Antes de qualquer conduta, é feita uma avaliação da boca, da saúde geral e das condições do ambiente.",
    indicatedFor: [
      "Pessoas com dificuldade de locomoção em Maringá e região.",
      "Idosos que precisam de cuidado preventivo sem sair de casa.",
      "Pacientes em home care que precisam de acompanhamento odontológico.",
      "Famílias que desejam orientação sobre placa, tártaro, gengiva e rotina de higiene.",
    ],
    homeHelp:
      "Quando a condição clínica e o ambiente permitem, o atendimento domiciliar pode facilitar a prevenção, reduzir desconfortos e orientar a família sobre a rotina de cuidado bucal.",
    safety:
      "A limpeza ou profilaxia em casa depende de avaliação, equipamentos necessários, segurança do caso e viabilidade técnica. Se houver necessidade de estrutura maior, a família recebe orientação sobre o melhor encaminhamento.",
    cta: "Fale pelo WhatsApp para avaliar limpeza dentária em casa.",
  },
  "/higiene-bucal-para-acamados/": {
    intro:
      "A higiene bucal para acamados exige cuidado, adaptação e orientação para quem acompanha o paciente diariamente. A Odonto em Casa atende Maringá e região com foco em avaliação, prevenção de desconfortos e apoio aos cuidadores.",
    indicatedFor: [
      "Pacientes acamados com dificuldade para escovar os dentes ou higienizar próteses.",
      "Idosos dependentes de cuidado diário.",
      "Familiares e cuidadores que precisam aprender uma rotina mais segura.",
      "Pacientes com feridas, sangramento, mau hálito persistente ou alteração alimentar.",
    ],
    homeHelp:
      "O atendimento em casa permite observar a rotina real do paciente, orientar posicionamento, materiais, frequência de higiene e sinais que exigem avaliação odontológica.",
    safety:
      "A conduta depende da condição clínica do paciente, colaboração possível, risco de engasgo, medicações e segurança do caso. Não há diagnóstico definitivo sem avaliação presencial.",
    cta: "Envie a situação do paciente pelo WhatsApp para organizar a avaliação.",
  },
  "/protese-dentaria-em-casa/": {
    intro:
      "Prótese dentária machucando, solta ou dificultando a mastigação é uma queixa comum entre idosos e pacientes com mobilidade reduzida. Em casa, é possível avaliar feridas, adaptação, higiene e necessidade de ajuste ou encaminhamento.",
    indicatedFor: [
      "Pessoas com prótese total ou parcial que machuca ou incomoda.",
      "Idosos com feridas na boca, dor ao mastigar ou prótese frouxa.",
      "Pacientes que precisam de orientação sobre limpeza e armazenamento da prótese.",
      "Famílias que desejam saber se o caso pode ser resolvido em casa ou precisa de laboratório/consultório.",
    ],
    homeHelp:
      "A avaliação domiciliar ajuda a entender se a prótese está causando trauma, se há alteração na gengiva e quais cuidados imediatos podem ser adotados com segurança.",
    safety:
      "Ajustes, manutenção ou encaminhamentos dependem da avaliação, dos materiais necessários e da viabilidade técnica. Nem toda prótese pode ser corrigida no domicílio.",
    cta: "Fale com a Odonto em Casa sobre avaliação de prótese dentária.",
    messageKey: "protese",
  },
  "/dor-de-dente-em-casa/": {
    intro:
      "Dor de dente em casa precisa ser avaliada com cuidado, principalmente quando o paciente é idoso, acamado, hospitalizado ou tem dificuldade de deslocamento. O objetivo inicial é entender a queixa e orientar a conduta possível com segurança.",
    indicatedFor: [
      "Pacientes com dor, inchaço, sensibilidade ou dificuldade para mastigar.",
      "Idosos e pessoas acamadas que não conseguem se deslocar facilmente.",
      "Familiares que precisam entender se o caso pode ser avaliado em casa.",
      "Pacientes em home care ou instituições que apresentam queixa odontológica.",
    ],
    homeHelp:
      "A avaliação domiciliar permite examinar sinais visíveis, histórico, medicamentos, próteses, gengiva e condição geral para orientar os próximos passos.",
    safety:
      "Dor de dente pode ter várias causas e alguns casos exigem exames, consultório ou hospital. O atendimento em casa depende de agenda, avaliação, condição clínica e viabilidade técnica, sem promessa de resolução em todos os casos.",
    cta: "Descreva a dor pelo WhatsApp para receber orientação sobre avaliação.",
    messageKey: "dor",
  },
  "/tratamento-de-carie-em-casa/": {
    intro:
      "O tratamento de cárie e restauração em casa pode ser avaliado para pacientes que têm dificuldade de locomoção. A decisão depende do tamanho da lesão, acesso ao dente, controle de umidade, materiais necessários e segurança do atendimento.",
    indicatedFor: [
      "Pacientes com suspeita de cárie, cavidade, dor ou restauração quebrada.",
      "Idosos, acamados e pessoas com mobilidade reduzida.",
      "Crianças ou adultos que precisam de avaliação odontológica domiciliar.",
      "Famílias que desejam entender se a restauração pode ser feita em casa.",
    ],
    homeHelp:
      "A consulta domiciliar permite avaliar a queixa, orientar cuidados e definir se há possibilidade técnica de tratamento no local ou necessidade de encaminhamento.",
    safety:
      "Nem toda cárie pode ser tratada em casa. Alguns casos exigem radiografia, isolamento, equipamento específico, consultório ou atendimento hospitalar.",
    cta: "Fale pelo WhatsApp sobre avaliação de cárie ou restauração em casa.",
  },
  "/tratamento-de-gengiva-em-casa/": {
    intro:
      "Sangramento, gengiva inchada, mau hálito persistente e dificuldade de higiene podem indicar necessidade de avaliação odontológica. Em atendimento domiciliar, a Odonto em Casa orienta cuidados e avalia possibilidades de conduta em Maringá e região.",
    indicatedFor: [
      "Pacientes com sangramento gengival ou desconforto na gengiva.",
      "Idosos e acamados com dificuldade de higiene oral.",
      "Pessoas que usam prótese e apresentam feridas ou inflamação.",
      "Cuidadores que precisam adaptar a rotina de escovação e limpeza.",
    ],
    homeHelp:
      "O atendimento em casa ajuda a observar escovação, próteses, materiais usados e fatores da rotina que podem piorar a gengiva.",
    safety:
      "O tratamento depende da avaliação clínica, higiene, colaboração do paciente, extensão do problema e segurança do caso. Quando necessário, pode haver encaminhamento para estrutura complementar.",
    cta: "Agende uma avaliação de gengiva em atendimento domiciliar.",
  },
  "/dentista-para-paciente-em-home-care/": {
    intro:
      "Pacientes em home care podem precisar de acompanhamento odontológico para dor, higiene oral, próteses, feridas na boca ou prevenção de complicações. A Odonto em Casa atende Maringá e região com avaliação alinhada à família e à equipe assistencial.",
    indicatedFor: [
      "Pacientes em internação domiciliar ou acompanhamento por home care.",
      "Famílias que precisam de dentista em casa para paciente debilitado.",
      "Equipes e cuidadores que precisam de orientação de higiene bucal.",
      "Pacientes com dificuldade de locomoção, uso de próteses ou queixas bucais.",
    ],
    homeHelp:
      "O atendimento domiciliar permite avaliar o paciente no ambiente de cuidado, conversar com responsáveis e orientar uma rotina compatível com a condição clínica.",
    safety:
      "A conduta depende de autorização dos responsáveis, informações clínicas, medicações, risco do paciente, segurança do caso e viabilidade técnica do atendimento.",
    cta: "Fale pelo WhatsApp sobre atendimento odontológico para home care.",
    messageKey: "homeCare",
  },
  "/dentista-para-paciente-com-alzheimer-e-demencia/": {
    intro:
      "Pacientes com Alzheimer e demência podem apresentar resistência ao cuidado, dificuldade de comunicação, alteração alimentar e problemas com próteses ou higiene oral. A avaliação em casa busca respeitar rotina, segurança e conforto.",
    indicatedFor: [
      "Pacientes com Alzheimer, demência ou alteração cognitiva.",
      "Familiares e cuidadores que percebem dor, mau hálito, feridas ou recusa alimentar.",
      "Pessoas com dificuldade de deslocamento ou baixa tolerância a ambientes desconhecidos.",
      "Casos que exigem orientação de higiene bucal adaptada à rotina do cuidado.",
    ],
    homeHelp:
      "No domicílio, a avaliação pode ser mais acolhedora por acontecer em ambiente familiar, com presença de cuidadores e adaptação da comunicação.",
    safety:
      "O atendimento depende da colaboração possível, condição clínica, segurança do paciente, presença de responsável e viabilidade técnica. Alguns casos podem exigir estrutura complementar.",
    cta: "Converse pelo WhatsApp sobre atendimento para paciente com Alzheimer ou demência.",
    messageKey: "idosos",
  },
};

export const faqItems = [
  {
    question: "O que é atendimento odontológico domiciliar?",
    answer:
      "É a consulta odontológica realizada no local onde a pessoa está, como casa, instituição de cuidado ou home care, quando o deslocamento é difícil ou quando a família prefere esse formato.",
  },
  {
    question: "Para quem é indicado?",
    answer:
      "É indicado para idosos, pacientes acamados, pessoas hospitalizadas, pessoas com dificuldade de locomoção, pessoas com necessidades especiais, crianças e famílias que precisam de orientação de saúde bucal.",
  },
  {
    question: "Você atende pacientes acamados?",
    answer:
      "Sim. O atendimento para pacientes acamados depende de avaliação inicial, condições clínicas, ambiente disponível e viabilidade técnica do caso.",
  },
  {
    question: "Você atende em hospital?",
    answer:
      "Sim, quando há possibilidade técnica e autorização da instituição. O atendimento hospitalar segue regras do hospital, condição clínica do paciente e alinhamento prévio com a família ou equipe.",
  },
  {
    question: "Precisa de autorização do hospital ou da instituição?",
    answer:
      "Sim. Hospitais, casas de repouso, ILPIs e outras instituições podem ter regras próprias. A entrada e o atendimento dependem de autorização e organização prévia.",
  },
  {
    question: "Quais procedimentos podem ser feitos em casa?",
    answer:
      "A possibilidade de procedimento depende da avaliação. Consultas, orientações, medidas preventivas, acompanhamento e alguns cuidados clínicos podem ser viáveis com equipamento portátil.",
  },
  {
    question: "Quais casos precisam ir para consultório ou hospital?",
    answer:
      "Casos que exigem estrutura maior, exames específicos, sedação, centro cirúrgico ou suporte médico podem precisar de consultório, clínica ou ambiente hospitalar adequado.",
  },
  {
    question: "Você atende crianças?",
    answer:
      "Sim. O atendimento odontológico infantil domiciliar pode envolver acolhimento, prevenção, orientação aos pais, escovação, alimentação e adaptação da criança ao cuidado odontológico.",
  },
  {
    question: "Quais cidades são atendidas?",
    answer:
      "A Odonto em Casa atende Maringá, Sarandi, Paiçandu, Mandaguaçu, Marialva, Floresta, Mandaguari, Iguaraçu, Dr. Camargo e região.",
  },
  {
    question: "Como funciona o agendamento?",
    answer:
      "O primeiro contato é pelo WhatsApp. A família informa a necessidade, cidade, condição geral do paciente e local de atendimento para organização da avaliação.",
  },
  {
    question: "Como é definido o valor?",
    answer:
      "O valor depende do tipo de atendimento, deslocamento, necessidade clínica, materiais e complexidade. A definição é feita após conversa inicial e avaliação do caso.",
  },
  {
    question: "O atendimento é feito com equipamento portátil?",
    answer:
      "Quando indicado, são usados equipamentos e materiais portáteis adequados ao atendimento domiciliar, sempre respeitando os limites técnicos e de biossegurança.",
  },
  {
    question: "Como funciona a biossegurança?",
    answer:
      "O atendimento segue cuidados de higiene, organização de materiais, barreiras de proteção e descarte adequado conforme o tipo de consulta e ambiente.",
  },
  {
    question: "O que o familiar precisa informar antes da consulta?",
    answer:
      "É importante informar queixa principal, idade, cidade, medicamentos, doenças, limitações de locomoção, uso de próteses, internação, restrições e quem acompanha o paciente.",
  },
];

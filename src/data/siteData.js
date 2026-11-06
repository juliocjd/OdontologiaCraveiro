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
  serviceAreaNotice: "Atendimento presencial somente em Maringá e região, no Paraná.",
  whatsappCityPrompt: "Minha cidade é: ",
  gaMeasurementId: "G-4EH3DR1G73",
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
  { label: "Home care", path: "/dentista-para-paciente-em-home-care/" },
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
    path: "/atendimento-domiciliar/",
    title: "Atendimento odontológico em casa",
    text: "Cuidado planejado para quem prefere ou precisa receber o dentista em casa, com equipamentos portáteis e orientação para a família.",
  },
  {
    key: "atendimento-hospitalar",
    path: "/atendimento-hospitalar/",
    title: "Atendimento odontológico hospitalar",
    text: "Avaliação e atendimento conforme autorização da instituição, condição clínica do paciente, regras hospitalares e possibilidade técnica.",
    message: "hospitalar",
  },
  {
    key: "limpeza",
    path: "/limpeza-dentaria-em-casa/",
    title: "Limpeza dentária em casa",
    text: "Avaliação para uma limpeza dentária pontual em casa — remoção de tártaro e polimento —, quando o ambiente, a condição clínica e a segurança do caso permitem.",
  },
  {
    key: "profilaxia",
    title: "Programa de profilaxia domiciliar",
    text: "Plano de visitas preventivas recorrentes em casa, com controle de placa e acompanhamento periódico da saúde bucal, indicado para quem já está em cuidado domiciliar regular.",
  },
  {
    key: "higiene-acamados",
    path: "/higiene-bucal-para-acamados/",
    title: "Higiene bucal para acamados",
    text: "Orientação e cuidado bucal para pacientes acamados, com foco em rotina segura, conforto e apoio aos familiares ou cuidadores.",
    message: "idosos",
  },
  {
    key: "higiene-idosos",
    path: "/higiene-bucal-para-acamados/",
    title: "Higiene bucal para idosos",
    text: "Avaliação inicial da higiene oral do idoso — próteses, gengiva e dificuldades do dia a dia —, para entender o que precisa de atenção imediata.",
    message: "idosos",
  },
  {
    key: "cuidados-idosos",
    title: "Acompanhamento bucal contínuo para idosos em casa",
    text: "Plano de acompanhamento periódico para idosos já em cuidado domiciliar, considerando mastigação, próteses, dor, medicamentos em uso e a rotina de quem cuida.",
    message: "idosos",
  },
  {
    key: "cuidadores",
    path: "/instituicoes-e-cuidadores/",
    title: "Orientação de higiene bucal para cuidadores",
    text: "Treinamento prático, individual ou em pequenos grupos, para cuidadores aplicarem a técnica correta de higiene bucal no dia a dia de quem cuidam.",
    message: "instituicoes",
  },
  {
    key: "avaliacao-protese",
    path: "/protese-dentaria-em-casa/",
    title: "Avaliação de prótese dentária em casa",
    text: "Primeira avaliação para qualquer queixa de prótese — dor, folga, dificuldade de mastigar ou desconforto —, para identificar a causa e indicar o próximo passo com segurança.",
    message: "protese",
  },
  {
    key: "ajuste-protese",
    path: "/protese-dentaria-em-casa/",
    title: "Ajuste de prótese dentária em casa",
    text: "Para prótese solta, frouxa ou que se move ao falar e mastigar — avaliação da possibilidade de ajuste, conforme segurança, materiais e condição da boca.",
    message: "protese",
  },
  {
    key: "manutencao-protese",
    path: "/protese-dentaria-em-casa/",
    title: "Manutenção de prótese dentária em domicílio",
    text: "Orientação de limpeza, armazenamento e cuidado diário para quem já usa prótese sem queixa, com encaminhamento a laboratório ou consultório quando o caso exigir.",
    message: "protese",
  },
  {
    key: "protese-machucando",
    path: "/protese-dentaria-em-casa/",
    title: "Atendimento para prótese dentária machucando",
    text: "Foco em prótese que machuca: feridas, pressão e dor na gengiva causadas pelo encaixe, com avaliação presencial antes de qualquer conduta.",
    message: "protese",
  },
  {
    key: "carie",
    path: "/tratamento-de-carie-em-casa/",
    title: "Tratamento de cárie em casa",
    text: "Avaliação de suspeita de cárie — dor, sensibilidade ou cavidade visível —, para entender a extensão da lesão e se o tratamento em casa é tecnicamente viável.",
  },
  {
    key: "restauracao",
    path: "/tratamento-de-carie-em-casa/",
    title: "Restauração dentária em casa",
    text: "Para quando a cárie já foi identificada ou uma restauração antiga quebrou: avaliação da obturação em domicílio, considerando acesso, material, isolamento e extensão da lesão.",
  },
  {
    key: "gengiva",
    path: "/tratamento-de-gengiva-em-casa/",
    title: "Tratamento de gengiva em casa",
    text: "Avaliação de sangramento, inflamação, higiene e desconforto gengival, com orientação ou cuidado conforme condição clínica.",
  },
  {
    key: "dor",
    path: "/dor-de-dente-em-casa/",
    title: "Dor de dente em casa",
    text: "Orientação inicial sobre dor de dente: possíveis causas, sinais de alerta e o que observar até a avaliação, sem substituir exame presencial.",
    message: "dor",
  },
  {
    key: "dor-domicilio",
    path: "/dor-de-dente-em-casa/",
    title: "Atendimento para dor de dente em domicílio",
    text: "Atendimento para quem tem dor e não consegue se deslocar até um consultório — avaliação mediante agenda, sem promessa de resolução em todos os casos.",
    message: "dor",
  },
  {
    key: "urgencia",
    title: "Urgência odontológica domiciliar",
    text: "Para queixas urgentes além da dor — trauma, inchaço, prótese quebrada —, avaliadas conforme agenda e viabilidade técnica; não substitui plantão ou pronto-socorro odontológico.",
    message: "dor",
  },
  {
    key: "idosos",
    path: "/idosos-e-acamados/",
    title: "Atendimento para idosos",
    text: "Porta de entrada para qualquer queixa odontológica de idosos com mobilidade preservada ou reduzida — próteses, dor, higiene e mastigação.",
    message: "idosos",
  },
  {
    key: "acamados",
    path: "/idosos-e-acamados/",
    title: "Atendimento para pacientes acamados",
    text: "Atendimento para pacientes que não saem da cama: planejamento de posicionamento seguro, atenção ao risco de engasgo e orientação prática para quem cuida no dia a dia.",
    message: "idosos",
  },
  {
    key: "alzheimer",
    path: "/dentista-para-paciente-com-alzheimer-e-demencia/",
    title: "Dentista para paciente com Alzheimer",
    text: "Atendimento adaptado ao estágio do Alzheimer — comunicação simplificada, rotina previsível e avaliação de segurança para colaborar com o tratamento.",
    message: "idosos",
  },
  {
    key: "demencia",
    path: "/dentista-para-paciente-com-alzheimer-e-demencia/",
    title: "Dentista para paciente com demência",
    text: "Avaliação odontológica para quadros de demência em geral, inclusive Alzheimer, considerando nível de colaboração, rotina do paciente e orientação ao cuidador responsável.",
    message: "idosos",
  },
  {
    key: "internacao-domiciliar",
    path: "/dentista-para-paciente-em-home-care/",
    title: "Atendimento odontológico em internação domiciliar",
    text: "Para pacientes em internação domiciliar formal, com quadro clínico mais complexo, em cuidado odontológico coordenado com médico e equipe assistencial responsável.",
    message: "homeCare",
  },
  {
    key: "home-care",
    path: "/dentista-para-paciente-em-home-care/",
    title: "Dentista para paciente em home care",
    text: "Para pacientes acompanhados por empresa ou equipe de home care em rotina de cuidado contínuo, com avaliação odontológica alinhada ao plano já em andamento.",
    message: "homeCare",
  },
  {
    key: "dificuldade-locomocao",
    title: "Pessoas com dificuldade de locomoção",
    text: "Atendimento para quem enfrenta qualquer barreira de deslocamento até o consultório — física, logística ou de transporte —, sempre mediante avaliação do caso.",
  },
  {
    key: "pne",
    title: "Pessoas com necessidades especiais",
    text: "Cuidado odontológico acolhedor para pessoas com deficiência física, intelectual ou sensorial, com comunicação e ambiente adaptados a cada necessidade.",
  },
  {
    key: "casa-repouso",
    path: "/instituicoes-e-cuidadores/",
    title: "Avaliação odontológica em casa de repouso",
    text: "Atendimento em casas de repouso e ILPIs conforme autorização da instituição, agenda, ambiente e segurança do caso.",
    message: "instituicoes",
  },
  {
    key: "paciente-hospitalizado",
    path: "/atendimento-hospitalar/",
    title: "Dentista para paciente hospitalizado",
    text: "Avaliação odontológica para paciente hospitalizado conforme autorização da instituição, regras hospitalares e condição clínica.",
    message: "hospitalar",
  },
  {
    key: "infantil",
    path: "/atendimento-infantil/",
    title: "Atendimento odontológico infantil domiciliar",
    text: "Atendimento odontológico infantil em casa, com acolhimento, prevenção, orientação aos pais e adaptação gradual da criança.",
    message: "infantil",
  },
  {
    key: "escolas",
    path: "/escolas/",
    title: "Ações educativas em escolas",
    text: "Atividades de saúde bucal para crianças, com linguagem lúdica sobre escovação, alimentação e prevenção.",
  },
  {
    key: "palestras",
    path: "/instituicoes-e-cuidadores/",
    title: "Palestras para cuidadores e instituições",
    text: "Palestra ou roda de conversa para equipes de casas de repouso, ILPIs e home cares sobre saúde bucal na rotina de cuidado — formato de evento, não treinamento individual.",
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
      "Atendimento odontológico domiciliar e hospitalar em Maringá e região (PR) para idosos, pacientes acamados, hospitalizados, pessoas com dificuldade de locomoção, pessoas com necessidades especiais e crianças. Agende pelo WhatsApp.",
    ogDescription:
      "Atendimento odontológico domiciliar e hospitalar em Maringá e região (PR), com cuidado humanizado para quem precisa receber atendimento em casa, hospital ou instituição.",
    h1: "Dentista domiciliar e hospitalar em Maringá e região",
    message: "home",
  },
  "/servicos/": {
    title: "Serviços de Odontologia Domiciliar em Maringá | Odonto em Casa",
    description:
      "Conheça os serviços da Odonto em Casa: avaliação odontológica domiciliar, limpeza dentária em casa, próteses, dor de dente, idosos, acamados, home care e atendimento hospitalar em Maringá e região (PR).",
    h1: "Serviços de odontologia domiciliar e hospitalar em Maringá",
  },
  "/atendimento-domiciliar/": {
    title: "Atendimento Odontológico Domiciliar em Maringá | Odonto em Casa",
    description:
      "Dentista em casa em Maringá e região (PR). Atendimento odontológico domiciliar para quem tem dificuldade de locomoção, idosos, acamados, pessoas com necessidades especiais e crianças.",
    h1: "Atendimento odontológico domiciliar em Maringá",
  },
  "/atendimento-hospitalar/": {
    title: "Atendimento Odontológico Hospitalar em Maringá | Odonto em Casa",
    description:
      "Atendimento odontológico hospitalar em Maringá e região (PR), conforme avaliação, autorização da instituição e possibilidade técnica do caso.",
    h1: "Atendimento odontológico hospitalar em Maringá",
    message: "hospitalar",
  },
  "/idosos-e-acamados/": {
    title: "Dentista para Idosos e Pacientes Acamados em Maringá | Odonto em Casa",
    description:
      "Atendimento odontológico domiciliar para idosos, pacientes acamados e pessoas com mobilidade reduzida em Maringá e região (PR). Orientação para familiares e cuidadores.",
    h1: "Dentista para idosos e pacientes acamados em Maringá",
    message: "idosos",
  },
  "/atendimento-infantil/": {
    title: "Atendimento Odontológico Infantil em Casa em Maringá | Odonto em Casa",
    description:
      "Atendimento odontológico infantil domiciliar e orientação de saúde bucal para crianças e famílias em Maringá e região (PR).",
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
      "A Odonto em Casa realiza orientação e atendimento odontológico para instituições, cuidadores, casas de repouso e equipes de home care em Maringá e região (PR).",
    h1: "Odontologia domiciliar para instituições, cuidadores e famílias",
    message: "instituicoes",
  },
  "/escolas/": {
    title: "Educação em Saúde Bucal para Escolas em Maringá | Odonto em Casa",
    description:
      "Ações educativas de saúde bucal para crianças em escolas de Maringá e região (PR), com linguagem lúdica e orientação preventiva.",
    h1: "Educação em saúde bucal para escolas",
  },
  "/sobre/": {
    title: "Sobre a Odonto em Casa | Atendimento Odontológico Domiciliar em Maringá",
    description:
      "Conheça a Odonto em Casa e a Dra. Patrícia Craveiro, responsável técnica pelo atendimento odontológico domiciliar e hospitalar em Maringá e região (PR).",
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
      "Limpeza dentária em casa em Maringá e região (PR), mediante avaliação, condição clínica do paciente e viabilidade técnica do atendimento domiciliar.",
    h1: "Limpeza dentária em casa em Maringá",
  },
  "/higiene-bucal-para-acamados/": {
    title: "Higiene Bucal para Acamados em Maringá | Odonto em Casa",
    description:
      "Orientação e cuidado de higiene bucal para acamados, idosos e cuidadores em Maringá e região (PR), conforme avaliação e segurança do caso.",
    h1: "Higiene bucal para acamados e idosos",
    message: "idosos",
  },
  "/protese-dentaria-em-casa/": {
    title: "Prótese Dentária em Casa em Maringá | Odonto em Casa",
    description:
      "Avaliação e cuidados com prótese dentária em casa em Maringá e região (PR), incluindo prótese machucando, ajustes e orientação conforme viabilidade técnica.",
    h1: "Avaliação e cuidados com prótese dentária em casa",
    message: "protese",
  },
  "/dor-de-dente-em-casa/": {
    title: "Dor de Dente em Casa em Maringá | Odonto em Casa",
    description:
      "Atendimento para dor de dente em casa em Maringá e região (PR), mediante avaliação da queixa, condição clínica e segurança do caso.",
    h1: "Atendimento para dor de dente em casa",
    message: "dor",
  },
  "/tratamento-de-carie-em-casa/": {
    title: "Tratamento de Cárie em Casa em Maringá | Odonto em Casa",
    description:
      "Avaliação para tratamento de cárie e restauração em casa em Maringá e região (PR), conforme viabilidade técnica e segurança do paciente.",
    h1: "Tratamento de cárie e restauração em casa",
  },
  "/tratamento-de-gengiva-em-casa/": {
    title: "Tratamento de Gengiva em Casa em Maringá | Odonto em Casa",
    description:
      "Avaliação de gengiva em atendimento domiciliar em Maringá e região (PR), para sangramento, inflamação, higiene e orientação preventiva.",
    h1: "Tratamento de gengiva em atendimento domiciliar",
  },
  "/dentista-para-paciente-em-home-care/": {
    title: "Dentista Home Care em Maringá | Odonto em Casa",
    description:
      "Dentista para pacientes em home care em Maringá e região (PR): avaliação odontológica coordenada com a equipe de enfermagem, médico e família responsáveis pelo cuidado.",
    h1: "Dentista para pacientes em home care em Maringá",
    message: "homeCare",
  },
  "/dentista-para-paciente-com-alzheimer-e-demencia/": {
    title: "Dentista para Paciente com Alzheimer e Demência em Maringá | Odonto em Casa",
    description:
      "Atendimento odontológico domiciliar para pacientes com Alzheimer e demência em Maringá e região (PR), conforme avaliação, rotina e segurança do caso.",
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
    sections: [
      {
        title: "Por que a higiene bucal pesa tanto para quem está acamado",
        text: "Quem passa a maior parte do tempo na cama costuma ter a boca mais seca, pode engolir com dificuldade e depende de outra pessoa para escovar os dentes. A placa se acumula mais rápido e pode causar dor, feridas e dificuldade para comer. Em pacientes com dificuldade de engolir, a má higiene bucal também está associada a maior risco de pneumonia por aspiração, porque bactérias da boca podem chegar aos pulmões.",
      },
      {
        title: "Como costuma ser uma rotina mais segura",
        items: [
          "Antes de começar, eleve a cabeceira ou incline a cabeça do paciente para o lado, conforme a orientação da equipe que o acompanha, para reduzir o risco de engasgo.",
          "Use escova macia e pouca pasta: o excesso faz espuma e é mais difícil de remover.",
          "Evite encher a boca de água. Umedeça a escova e retire o excesso de saliva e pasta com gaze umedecida.",
          "Limpe dentes, gengiva, bochechas e língua com movimentos suaves, mesmo em quem não tem dentes.",
          "Retire as próteses removíveis, limpe-as fora da boca e siga a orientação recebida sobre usá-las durante o sono.",
          "Ao final, hidrate os lábios se estiverem ressecados.",
        ],
      },
      {
        title: "Sinais para avisar o dentista",
        items: [
          "Feridas na boca que não cicatrizam em cerca de duas semanas.",
          "Placas brancas ou vermelhas na língua, nas bochechas ou no céu da boca.",
          "Sangramento frequente ou mau hálito que não melhora com a higiene.",
          "Prótese que machuca, dentes moles ou quebrados.",
          "Recusa alimentar, careta ou agitação na hora de comer ou escovar, que podem indicar dor.",
        ],
        note: "Inchaço no rosto ou no pescoço com febre, dificuldade para engolir ou para respirar é urgência: procure atendimento médico imediatamente.",
      },
      {
        title: "O que acontece na visita",
        text: "A visita começa com uma conversa sobre o histórico de saúde, os medicamentos e a rotina de cuidados. Depois, são examinados dentes, gengiva, língua e próteses. Quando possível, a técnica é demonstrada no próprio paciente, junto de quem faz os cuidados diários. Ajuda deixar separados a lista de medicamentos, as próteses e os materiais de higiene usados hoje.",
      },
    ],
    faqTitle: "Dúvidas sobre higiene bucal de pacientes acamados",
    faq: [
      {
        question: "Paciente com sonda, que não come pela boca, precisa de higiene bucal?",
        answer:
          "Sim. Mesmo sem comer pela boca, a placa continua se formando, a boca tende a ficar mais seca e a língua pode acumular resíduos. A forma de fazer a higiene é orientada conforme o caso.",
      },
      {
        question: "Quantas vezes por dia fazer a higiene?",
        answer:
          "Como regra geral, ao menos duas vezes ao dia, com atenção especial à limpeza antes de dormir. A frequência ideal para cada paciente é definida na avaliação.",
      },
      {
        question: "Posso usar enxaguante bucal?",
        answer:
          "Não por conta própria. Quem tem dificuldade de engolir ou de cuspir pode aspirar o líquido. Produtos como a clorexidina só devem ser usados com indicação profissional.",
      },
      {
        question: "Hastes com esponja substituem a escova?",
        answer:
          "Em geral, não. Elas ajudam a umedecer e limpar a mucosa, mas removem a placa dos dentes com menos eficiência que uma escova macia.",
      },
      {
        question: "E se o paciente morder a escova ou não abrir a boca?",
        answer:
          "Não force a abertura nem coloque os dedos entre os dentes. Interrompa, tente novamente mais tarde e conte isso na conversa inicial, porque há técnicas e materiais que podem ser orientados conforme o caso.",
      },
    ],
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
    sections: [
      {
        title: "Por que a cárie é comum em idosos e pacientes em casa",
        text: "A saliva ajuda a proteger os dentes, e a idade e vários medicamentos podem deixar a boca mais seca. A retração da gengiva expõe a raiz, que é mais vulnerável. Suplementos e alimentos adoçados ao longo do dia, somados à dificuldade de escovar, aumentam o risco. A cárie pode avançar com pouca dor, principalmente em quem não consegue explicar o que sente.",
      },
      {
        title: "O que pode indicar cárie",
        items: [
          "Sensibilidade a doce, frio ou calor.",
          "Mancha escura ou esbranquiçada, buraco ou comida sempre presa no mesmo lugar.",
          "Restauração quebrada ou que caiu, ou dente lascado.",
          "Passar a mastigar só de um lado ou recusar certos alimentos.",
          "Em quem não consegue explicar: mão no rosto ou irritação ao comer ou escovar.",
        ],
      },
      {
        title: "O que pode ser viável em casa",
        items: [
          "Exame do dente e orientação sobre higiene e alimentação.",
          "Aplicação de flúor ou de outros produtos para ajudar a controlar a lesão, quando indicados.",
          "Restauração com instrumentos manuais e material restaurador adequado, técnica usada quando não há a estrutura de um consultório.",
          "Pequenas restaurações com equipamento portátil, quando o acesso ao dente e o controle da saliva permitirem.",
        ],
      },
      {
        title: "Quando é preciso outro ambiente",
        items: [
          "Suspeita de infecção no nervo do dente, que pode exigir tratamento de canal.",
          "Inchaço, abscesso ou extração mais complexa.",
          "Necessidade de exames de imagem que não podem ser feitos no local.",
          "Paciente que não tolera o atendimento em casa ou que precisa de sedação.",
        ],
      },
      {
        title: "Como se preparar para a visita",
        text: "Deixe separados a lista de medicamentos, incluindo anticoagulantes, e os exames recentes. Escolha um lugar bem iluminado, com tomada por perto, onde o paciente possa ficar em uma posição confortável. Não interrompa nenhum medicamento por conta própria antes da consulta.",
      },
    ],
    faqTitle: "Dúvidas sobre cárie e restauração em casa",
    faq: [
      {
        question: "Mancha escura no dente é sempre cárie?",
        answer:
          "Não. Manchas também podem vir de alimentos, café, tabaco ou restaurações antigas. Só o exame presencial permite saber a causa.",
      },
      {
        question: "O procedimento dói?",
        answer:
          "Depende da extensão da lesão e do tipo de procedimento. A anestesia local pode ser usada quando for indicada e segura para o paciente.",
      },
      {
        question: "A restauração feita em casa dura tanto quanto a do consultório?",
        answer:
          "Depende do tamanho da lesão, do material, do controle da saliva e da higiene no dia a dia. Por isso, a durabilidade não pode ser prometida e o acompanhamento é recomendado.",
      },
      {
        question: "A dor parou. Ainda preciso de avaliação?",
        answer:
          "Sim. A dor pode diminuir mesmo com o problema avançando, então a melhora não significa que o dente esteja curado.",
      },
    ],
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
    sections: [
      {
        title: "Gengivite e periodontite: qual é a diferença",
        text: "A gengivite é a inflamação causada pela placa acumulada junto à gengiva. Costuma provocar vermelhidão, inchaço e sangramento, e pode regredir com limpeza profissional e melhora da higiene. Sem controle, em algumas pessoas ela evolui para periodontite, que atinge o osso e os tecidos que sustentam o dente e pode levar a dentes moles e à perda de dentes. O dano da periodontite não se reverte por completo, mas a doença pode ser controlada.",
      },
      {
        title: "O que costuma piorar a gengiva de quem recebe cuidados em casa",
        items: [
          "Dificuldade de escovar sozinho ou de receber a higiene de outra pessoa.",
          "Prótese mal adaptada ou que não é bem limpa.",
          "Boca seca, muitas vezes causada por medicamentos.",
          "Diabetes sem controle adequado e tabagismo.",
          "Alguns medicamentos, como certos anticonvulsivantes e remédios para pressão, que podem aumentar o volume da gengiva.",
        ],
      },
      {
        title: "O que pode ser feito em casa",
        items: [
          "Exame da gengiva, dos dentes e das próteses.",
          "Orientação de técnica e de escovas adaptadas para o paciente e para quem cuida.",
          "Remoção do tártaro acessível com instrumentos manuais ou portáteis, quando for seguro.",
          "Acompanhamento periódico, com intervalo definido conforme o caso.",
        ],
      },
      {
        title: "Quando avisar com mais pressa",
        items: [
          "Pus na gengiva, dor ou inchaço que aumentam.",
          "Dente que ficou mole de repente.",
          "Feridas que não cicatrizam em cerca de duas semanas.",
        ],
        note: "Sangramento que não para, principalmente em quem usa anticoagulante, ou inchaço com febre ou dificuldade para engolir ou respirar exigem atendimento médico imediato.",
      },
    ],
    faqTitle: "Dúvidas sobre gengiva e atendimento em casa",
    faq: [
      {
        question: "Se a gengiva sangra, devo parar de escovar?",
        answer:
          "Não. Em geral, o sangramento é sinal de inflamação causada pela placa, e parar de escovar tende a piorar o quadro. Use escova macia, com delicadeza, e agende uma avaliação.",
      },
      {
        question: "Enxaguante bucal resolve?",
        answer:
          "Não substitui a remoção da placa pela escovação e pela limpeza profissional. Produtos específicos só devem ser usados com orientação.",
      },
      {
        question: "Uso anticoagulante. Posso ser atendido em casa?",
        answer:
          "Pode ser possível, mas é preciso informar antes da visita. Nunca interrompa nem altere o medicamento por conta própria: qualquer ajuste é decidido com o médico responsável.",
      },
      {
        question: "A doença na gengiva tem relação com o diabetes?",
        answer:
          "Sim. O diabetes sem controle aumenta o risco e a gravidade das doenças da gengiva, e a inflamação gengival pode dificultar o controle da glicemia. Por isso, é importante informar o diagnóstico.",
      },
      {
        question: "Mau hálito sempre vem da gengiva?",
        answer:
          "Nem sempre. Ele também pode vir da língua, de próteses, da boca seca ou de outras condições de saúde. A avaliação ajuda a identificar a origem.",
      },
    ],
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
    sections: [
      {
        title: "Como o cuidado muda conforme a doença avança",
        items: [
          "Fase inicial: é um bom momento para revisar a boca, tratar o que for necessário e criar uma rotina simples, enquanto a colaboração tende a ser maior.",
          "Fase intermediária: a pessoa pode esquecer etapas ou precisar de lembretes, e a escovação costuma ser supervisionada, passo a passo.",
          "Fase avançada: a higiene passa a ser feita pelo cuidador, com foco em conforto, controle da dor e atenção ao risco de engasgo.",
        ],
      },
      {
        title: "Como a dor pode aparecer quando o paciente não consegue dizer",
        items: [
          "Recusa alimentar ou preferência repentina por alimentos pastosos.",
          "Mão no rosto ou resistência ao toque na boca.",
          "Tirar a prótese com frequência ou não aceitar mais usá-la.",
          "Irritação ou agitação sem causa aparente, principalmente ao comer ou escovar.",
          "Mastigar só de um lado ou mau hálito novo.",
        ],
        note: "Esses sinais também podem ter outras causas, por isso vale informar também o médico que acompanha o paciente.",
      },
      {
        title: "Dicas para a escovação do dia a dia",
        items: [
          "Mantenha o mesmo horário e o mesmo lugar, escolhendo o período em que a pessoa costuma estar mais tranquila.",
          "Use frases curtas e uma instrução por vez. Mostrar o movimento ou escovar junto pode ajudar.",
          "Se a pessoa ainda consegue segurar a escova, coloque sua mão sobre a dela para guiar o movimento.",
          "Uma escova de cabo mais grosso costuma ser mais fácil de segurar.",
          "Se houver resistência, pare e tente novamente mais tarde em vez de insistir.",
        ],
      },
      {
        title: "Como a visita é adaptada",
        text: "A consulta em casa acontece em um ambiente conhecido, de preferência no horário em que o paciente costuma estar mais calmo e com alguém de confiança ao lado. Cada etapa é explicada de forma simples. Quando necessário, o cuidado é dividido em visitas mais curtas para respeitar a tolerância da pessoa.",
      },
    ],
    faqTitle: "Dúvidas sobre atendimento para pacientes com Alzheimer e demência",
    faq: [
      {
        question: "E se o paciente recusar o atendimento?",
        answer:
          "A recusa é comum e não significa que o atendimento seja impossível. O paciente não é forçado: busca-se acalmá-lo e tentar novamente. Se a recusa impedir um tratamento necessário, as alternativas são discutidas com a família e o médico.",
      },
      {
        question: "É possível fazer sedação em casa?",
        answer:
          "Não. Quando o caso exige sedação, o atendimento precisa ocorrer em um ambiente com estrutura adequada, como o hospitalar, e com a equipe responsável.",
      },
      {
        question: "Quem precisa estar presente na consulta?",
        answer:
          "Um familiar ou cuidador que o paciente conheça e o responsável que possa autorizar as decisões sobre o tratamento.",
      },
      {
        question: "O paciente perde ou esconde a prótese. O que fazer?",
        answer:
          "Isso é comum. Guarde a prótese sempre no mesmo lugar, confira onde ela está ao fim do dia e, em instituições, peça que seja identificada. Prótese frouxa precisa de avaliação, porque pode machucar e, em alguns casos, oferecer risco de engasgo.",
      },
      {
        question: "E se o paciente engolir a pasta de dente?",
        answer:
          "Usar pouca pasta reduz a quantidade engolida. Se a pessoa já não consegue cuspir, converse na avaliação sobre o tipo de pasta e a técnica mais adequados.",
      },
    ],
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

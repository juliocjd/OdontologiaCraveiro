export const site = {
  brandName: "Odonto em Casa",
  canonicalOrigin: "https://www.odontoemcasa.com.br",
  phoneDisplay: "+55 44 99984-4607",
  whatsappNumber: "5544999844607",
  instagramUrl: "https://www.instagram.com/dra.patriciacraveiro/",
  logo: "https://www.odontoemcasa.com.br/logo.png",
  ogImage: "https://www.odontoemcasa.com.br/og-image.jpg",
  professionalName: "Dra. Patricia Craveiro",
  professionalDisplayName: "Dra. Patrícia Craveiro",
  credential: "CRO/PR 40021",
  serviceArea: "Maringá e região",
  coverImage: "/assets/homecare-dental.png",
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
  default: "Olá, gostaria de agendar uma avaliação odontológica domiciliar.",
};

export const serviceCards = [
  {
    title: "Avaliação odontológica domiciliar",
    text: "Consulta inicial em casa para entender a queixa, as condições de saúde, a rotina de cuidados e a viabilidade técnica do atendimento.",
  },
  {
    title: "Atendimento odontológico em casa",
    text: "Cuidado planejado para quem prefere ou precisa receber o dentista em casa, com equipamentos portáteis e orientação para a família.",
  },
  {
    title: "Atendimento odontológico hospitalar",
    text: "Avaliação e atendimento conforme autorização da instituição, condição clínica do paciente, regras hospitalares e possibilidade técnica.",
    message: "hospitalar",
  },
  {
    title: "Atendimento para idosos",
    text: "Apoio odontológico para idosos, com atenção a próteses, dor, higiene oral, mastigação e sinais que precisam de avaliação presencial.",
    message: "idosos",
  },
  {
    title: "Atendimento para pacientes acamados",
    text: "Consulta odontológica domiciliar para pacientes acamados, com planejamento individual e orientação para familiares e cuidadores.",
    message: "idosos",
  },
  {
    title: "Pessoas com dificuldade de locomoção",
    text: "Atendimento para pessoas que enfrentam barreiras de deslocamento até o consultório, sempre mediante avaliação do caso.",
  },
  {
    title: "Pessoas com necessidades especiais",
    text: "Cuidado odontológico acolhedor para pessoas com necessidades especiais, considerando comunicação, rotina, segurança e conforto.",
  },
  {
    title: "Orientação de higiene oral para cuidadores",
    text: "Treinamento prático para melhorar a higiene bucal diária de idosos, pacientes acamados e pessoas dependentes de cuidado.",
  },
  {
    title: "Avaliação de próteses que machucam",
    text: "Verificação de próteses que causam feridas, dor, dificuldade para mastigar ou alteração alimentar, sem diagnóstico online.",
  },
  {
    title: "Atendimento odontológico infantil domiciliar",
    text: "Atendimento odontológico infantil em casa, com acolhimento, prevenção, orientação aos pais e adaptação gradual da criança.",
    message: "infantil",
  },
  {
    title: "Ações educativas em escolas",
    text: "Atividades de saúde bucal para crianças, com linguagem lúdica sobre escovação, alimentação e prevenção.",
  },
  {
    title: "Palestras para cuidadores e instituições",
    text: "Orientação para casas de repouso, ILPIs, home cares e equipes multiprofissionais sobre cuidado bucal na rotina.",
    message: "instituicoes",
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
      "Conheça os serviços da Odonto em Casa: avaliação odontológica domiciliar, atendimento hospitalar, cuidado para idosos, pacientes acamados, PNE, crianças e orientação para cuidadores em Maringá e região.",
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
  "/404/": {
    title: "Página não encontrada | Odonto em Casa",
    description:
      "A página solicitada não foi encontrada no site da Odonto em Casa.",
    h1: "Página não encontrada",
    noindex: true,
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

export const defaultProfile = {
  brandName: "Odontologia Craveiro",
  professionalName: "Dra. Patrícia Craveiro",
  credential: "Cirurgiã-dentista | CRO/PR 40021",
  brandMarkText: "OC",
  brandMarkImage: "/assets/logo-icon.png",
  headline: "Homecare odontológico em Maringá e Região",
  intro:
    "Cuidado individualizado para quem prefere ou precisa receber atendimento odontológico em casa, no hospital ou em instituições de cuidado em Maringá e Região.",
  serviceArea: "Atendimento odontológico homecare em Maringá e Região",
  whatsappNumber: "5544999844607",
  whatsappMessage:
    "Olá! Vim pelo site e gostaria de agendar uma consulta odontológica homecare em Maringá e Região.",
  instagramUrl: "https://www.instagram.com/dra.patriciacraveiro/",
  email: "",
  coverImage: "/assets/homecare-dental.png",
};

export const defaultButtons = [
  {
    id: "agendar-whatsapp",
    label: "Agende sua consulta",
    type: "whatsapp",
    icon: "message",
    url: "",
    active: true,
    highlighted: true,
  },
  {
    id: "homecare",
    label: "Como funciona o homecare",
    type: "section",
    icon: "home",
    url: "#homecare",
    active: true,
    highlighted: false,
  },
  {
    id: "hospitalar",
    label: "Atendimento hospitalar",
    type: "section",
    icon: "hospital",
    url: "#hospitalar",
    active: true,
    highlighted: false,
  },
  {
    id: "pacientes",
    label: "Para quem é indicado",
    type: "section",
    icon: "heart",
    url: "#pacientes",
    active: true,
    highlighted: false,
  },
  {
    id: "instagram",
    label: "Acompanhe no Instagram",
    type: "instagram",
    icon: "instagram",
    url: "",
    active: true,
    highlighted: false,
  },
];

export const defaultConfig = {
  profile: defaultProfile,
  buttons: defaultButtons,
};

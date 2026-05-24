import { cities, serviceCards, site } from "../data/siteData.js";

export function buildJsonLd(path, page, isNotFound = false) {
  const canonicalPath = isNotFound ? "/404/" : path;
  const url = `${site.canonicalOrigin}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const organization = {
    "@type": "Organization",
    "@id": `${site.canonicalOrigin}/#organization`,
    name: site.brandName,
    url: `${site.canonicalOrigin}/`,
    logo: site.logo,
    image: site.ogImage,
    telephone: `+${site.whatsappNumber}`,
    sameAs: [site.instagramUrl],
    areaServed: cities.map((city) => ({ "@type": "City", name: city })),
    founder: { "@id": `${site.canonicalOrigin}/#dra-patricia-craveiro` },
  };
  const person = {
    "@type": "Person",
    "@id": `${site.canonicalOrigin}/#dra-patricia-craveiro`,
    name: site.professionalDisplayName,
    jobTitle: "Cirurgiã-dentista responsável técnica",
    worksFor: { "@id": `${site.canonicalOrigin}/#organization` },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CRO-PR",
      value: "40021",
    },
  };
  const service = {
    "@type": "Service",
    "@id": `${site.canonicalOrigin}/#servico-odontologia-domiciliar`,
    name: "Atendimento odontológico domiciliar e hospitalar",
    provider: { "@id": `${site.canonicalOrigin}/#organization` },
    areaServed: "Maringá e região",
    serviceType: "Odontologia domiciliar e hospitalar",
    description:
      "Atendimento odontológico em domicílio, hospitais e instituições para idosos, pacientes acamados, hospitalizados, pessoas com dificuldade de locomoção, pessoas com necessidades especiais e crianças.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de odontologia domiciliar",
      itemListElement: serviceCards.map((serviceItem) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceItem.title,
          description: serviceItem.text,
        },
      })),
    },
  };
  const dentist = {
    "@type": "Dentist",
    "@id": `${site.canonicalOrigin}/#dentist`,
    name: site.brandName,
    url: `${site.canonicalOrigin}/`,
    image: site.ogImage,
    logo: site.logo,
    telephone: `+${site.whatsappNumber}`,
    areaServed: cities.map((city) => ({ "@type": "City", name: city })),
    parentOrganization: { "@id": `${site.canonicalOrigin}/#organization` },
    employee: { "@id": `${site.canonicalOrigin}/#dra-patricia-craveiro` },
    sameAs: [site.instagramUrl],
    description:
      "Dentista domiciliar e hospitalar em Maringá e região, com atendimento mediante avaliação, condição clínica do paciente e viabilidade técnica do caso.",
  };

  const graph = [organization, dentist, person, service];

  if (path !== "/" || isNotFound) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: `${site.canonicalOrigin}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.h1,
          item: url,
        },
      ],
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

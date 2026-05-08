import { defaultConfig } from "../data/siteData.js";

const STORAGE_KEY = "odontologia-craveiro-site-config-v1";

export function cloneDefaultConfig() {
  return structuredClone(defaultConfig);
}

export function loadSiteConfig() {
  if (typeof window === "undefined") {
    return cloneDefaultConfig();
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return cloneDefaultConfig();
  }

  try {
    const parsed = JSON.parse(stored);
    return mergeConfig(parsed);
  } catch {
    return cloneDefaultConfig();
  }
}

export function saveSiteConfig(config) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}

export function resetSiteConfig() {
  window.localStorage.removeItem(STORAGE_KEY);
  return cloneDefaultConfig();
}

export function mergeConfig(config) {
  return {
    profile: {
      ...defaultConfig.profile,
      ...(config?.profile ?? {}),
    },
    buttons: Array.isArray(config?.buttons)
      ? config.buttons.map(normalizeButton)
      : cloneDefaultConfig().buttons,
  };
}

export function normalizeButton(button) {
  return {
    id: button?.id || crypto.randomUUID(),
    label: button?.label || "Novo botão",
    type: button?.type || "custom",
    icon: button?.icon || "link",
    url: button?.url || "",
    active: button?.active !== false,
    highlighted: button?.highlighted === true,
  };
}

export function sanitizePhone(value) {
  return String(value || "").replace(/\D/g, "");
}

export function buildWhatsAppLink(profile) {
  const phone = sanitizePhone(profile.whatsappNumber);
  const text = encodeURIComponent(profile.whatsappMessage || "");
  return phone ? `https://wa.me/${phone}?text=${text}` : "#";
}

export function resolveButtonHref(button, profile) {
  if (button.type === "whatsapp") return buildWhatsAppLink(profile);
  if (button.type === "instagram") return profile.instagramUrl || button.url || "#";
  if (button.type === "phone") {
    const phone = sanitizePhone(profile.whatsappNumber);
    return phone ? `tel:+${phone}` : "#";
  }
  if (button.type === "email") return profile.email ? `mailto:${profile.email}` : "#";
  return button.url || "#";
}

export function isExternalHref(href) {
  return /^https?:\/\//i.test(href) || href.startsWith("tel:") || href.startsWith("mailto:");
}

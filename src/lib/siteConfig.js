import { site, whatsappMessages } from "../data/siteData.js";

const STORAGE_KEY = "odonto-em-casa-site-config-v1";

export function sanitizePhone(value) {
  return String(value || "").replace(/\D/g, "");
}

export function buildWhatsAppLink(messageKey = "default") {
  const phone = sanitizePhone(site.whatsappNumber);
  const text = encodeURIComponent(whatsappMessages[messageKey] || whatsappMessages.default);
  return phone ? `https://wa.me/${phone}?text=${text}` : "#";
}

export function getStorageKey() {
  return STORAGE_KEY;
}

import { timingSafeEqual } from "node:crypto";
import { renderCasaMarketingPanel } from "../lib/casaMarketingContent.js";

const securityHeaders = {
  "X-Robots-Tag": "noindex, nofollow",
  "Cache-Control": "no-store",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "no-referrer",
  "Content-Security-Policy":
    "default-src 'self'; img-src 'self' data:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'",
};

function setSecurityHeaders(res) {
  for (const [key, value] of Object.entries(securityHeaders)) {
    res.setHeader(key, value);
  }
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a || ""), "utf8");
  const right = Buffer.from(String(b || ""), "utf8");

  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

function parseBasicAuth(header = "") {
  const [scheme, encoded] = String(header).split(" ");
  if (scheme !== "Basic" || !encoded) return null;

  try {
    const decoded = Buffer.from(encoded, "base64").toString("utf8");
    const separatorIndex = decoded.indexOf(":");
    if (separatorIndex === -1) return null;

    return {
      user: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1),
    };
  } catch {
    return null;
  }
}

function send(res, statusCode, body, contentType = "text/plain; charset=utf-8") {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", contentType);
  res.end(body);
}

export default function handler(req, res) {
  setSecurityHeaders(res);

  const expectedUser = process.env.CASA_PANEL_USER;
  const expectedPassword = process.env.CASA_PANEL_PASSWORD;

  if (!expectedUser || !expectedPassword) {
    send(res, 503, "Painel indisponível.");
    return;
  }

  const credentials = parseBasicAuth(req.headers.authorization);
  const isAuthorized =
    credentials &&
    safeEqual(credentials.user, expectedUser) &&
    safeEqual(credentials.password, expectedPassword);

  if (!isAuthorized) {
    res.setHeader("WWW-Authenticate", 'Basic realm="Painel Casa", charset="UTF-8"');
    send(res, 401, "Autenticação necessária.");
    return;
  }

  send(res, 200, renderCasaMarketingPanel(), "text/html; charset=utf-8");
}


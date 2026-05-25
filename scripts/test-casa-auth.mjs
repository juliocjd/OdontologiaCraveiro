import handler from "../api/casa.js";

function createResponse() {
  const headers = new Map();
  let body = "";

  return {
    statusCode: 200,
    setHeader(name, value) {
      headers.set(name.toLowerCase(), value);
    },
    end(value = "") {
      body += value;
    },
    getHeader(name) {
      return headers.get(name.toLowerCase());
    },
    body() {
      return body;
    },
  };
}

function basic(user, password) {
  return `Basic ${Buffer.from(`${user}:${password}`, "utf8").toString("base64")}`;
}

function call(authorization) {
  const res = createResponse();
  handler({ headers: { authorization } }, res);
  return res;
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const user = process.env.CASA_PANEL_USER;
const password = process.env.CASA_PANEL_PASSWORD;

if (!user || !password) {
  const missingConfig = call();
  assert(missingConfig.statusCode === 503, "missing config must return 503");
  assert(
    missingConfig.getHeader("x-robots-tag") === "noindex, nofollow",
    "missing config response must be noindex",
  );
  console.log("Casa auth test passed: missing config fails closed with 503.");
  process.exit(0);
}

const unauthenticated = call();
assert(unauthenticated.statusCode === 401, "missing auth must return 401");
assert(
  unauthenticated.getHeader("www-authenticate")?.includes("Basic"),
  "401 must include WWW-Authenticate Basic header",
);
assert(
  unauthenticated.getHeader("x-robots-tag") === "noindex, nofollow",
  "401 response must be noindex",
);

const wrongPassword = call(basic(user, `${password}-wrong`));
assert(wrongPassword.statusCode === 401, "wrong password must return 401");

const authenticated = call(basic(user, password));
assert(authenticated.statusCode === 200, "valid credentials must return 200");
assert(
  authenticated.getHeader("content-type") === "text/html; charset=utf-8",
  "valid response must be HTML",
);
assert(
  authenticated.getHeader("cache-control") === "no-store",
  "valid response must use no-store",
);
assert(
  authenticated.body().includes("Painel Casa — Marketing Odonto em Casa"),
  "valid response must include the panel title",
);
assert(
  authenticated.body().includes("odonto-casa-marketing-checklist-v1"),
  "valid response must include the localStorage key",
);

console.log("Casa auth test passed: 401 without auth, 401 with wrong password, 200 with valid credentials.");

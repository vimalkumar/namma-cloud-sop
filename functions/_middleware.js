/**
 * Cloudflare Pages Middleware — HTTP Basic Auth Password Protection
 *
 * Set these environment variables in Cloudflare Pages dashboard:
 *   SITE_PASSWORD  — the password to access the site
 *   SITE_USER      — (optional) username, defaults to "admin"
 */

const REALM = "Namma Cloud SOP — Enter credentials to continue";

function unauthorizedResponse() {
  return new Response("🔒 Unauthorized — Please provide valid credentials.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"`,
      "Content-Type": "text/plain",
    },
  });
}

function parseBasicAuth(header) {
  if (!header || !header.startsWith("Basic ")) return null;
  const encoded = header.slice(6);
  const decoded = atob(encoded);
  const sep = decoded.indexOf(":");
  if (sep === -1) return null;
  return {
    user: decoded.slice(0, sep),
    pass: decoded.slice(sep + 1),
  };
}

export async function onRequest(context) {
  const { env, request } = context;

  const sitePassword = env.SITE_PASSWORD;

  // If no password is configured, allow access (useful for local dev)
  if (!sitePassword) {
    return context.next();
  }

  const expectedUser = env.SITE_USER || "admin";
  const authHeader = request.headers.get("Authorization");
  const credentials = parseBasicAuth(authHeader);

  if (
    credentials &&
    credentials.user === expectedUser &&
    credentials.pass === sitePassword
  ) {
    return context.next();
  }

  return unauthorizedResponse();
}


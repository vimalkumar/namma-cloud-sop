/**
 * Cloudflare Pages Middleware for HTTP Basic Authentication
 * 
 * Protects the entire site with a password stored in the CFP_PASSWORD environment variable.
 * 
 * Setup:
 * 1. Place this file at: /functions/_middleware.js (protects entire site)
 *    OR: /functions/admin/_middleware.js (protects only /admin/*)
 * 2. Set CFP_PASSWORD in Cloudflare Dashboard:
 *    Workers & Pages > [Your Project] > Settings > Environment variables
 */

export async function onRequest(context) {
  const { request, env } = context;

  // Get the password from environment variable
  const VALID_PASSWORD = env.CFP_PASSWORD;

  // If no password is configured, allow access (for development)
  if (!VALID_PASSWORD) {
    console.warn("CFP_PASSWORD not set - authentication disabled");
    return context.next();
  }

  // Check for Authorization header
  const authHeader = request.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return unauthorizedResponse("Authentication required");
  }

  // Decode and validate credentials
  try {
    const base64Credentials = authHeader.slice("Basic ".length);
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(":");

    // Check password (username can be anything)
    if (password === VALID_PASSWORD) {
      // Authentication successful - serve the page
      return context.next();
    }
  } catch (e) {
    // Invalid base64 or format
    console.error("Auth error:", e.message);
  }

  return unauthorizedResponse("Invalid credentials");
}

/**
 * Returns a 401 Unauthorized response with WWW-Authenticate header
 */
function unauthorizedResponse(message) {
  return new Response(message, {
    status: 401,
    statusText: "Unauthorized",
    headers: {
      "WWW-Authenticate": 'Basic realm="Namma Cloud SOP", charset="UTF-8"',
      "Content-Type": "text/plain",
    },
  });
}

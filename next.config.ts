import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

/*
  The marketing site's own headers.

  Deliberately looser than the app's (app.joinshiftly.com), and that is the
  point of the two being separate deployments: a landing page wants an
  embedded demo, analytics and whatever a form widget needs, and the app —
  which holds staff names, hours and a visitor register — should never have
  its policy widened to make room for any of that.

  There is no Content-Security-Policy here yet on purpose. Add one once the
  page's real third parties are known, rather than writing a policy now and
  loosening it every time something is embedded.
*/
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  ...(isProd
    ? [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" }]
    : []),
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;

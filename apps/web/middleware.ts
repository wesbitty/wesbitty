import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /examples (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|examples/|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  const hostname = req.headers.get("host") || "demo.wesbitty.com";

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = url.pathname;

  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
      ? hostname
          .replace(`.vercel.pub`, "")
          .replace(`.wesbitty.com`, "")
      : hostname.replace(`.localhost:3210`, "");

  // rewrites for app pages
  if (currentHost === "app") {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!session?.email && path !== "/login") {
      return NextResponse.redirect(new URL("/login", req.url));
    } else if (session?.email && path === "/login") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.rewrite(new URL(`/_app${path}`, req.url));
  }

  if (hostname === "localhost:3210" || hostname === "wesbitty.com") {
    return NextResponse.rewrite(new URL(`${path}`, req.url));
  }

  // rewrite everything else to `/_sites/[site] dynamic route
  return NextResponse.rewrite(
    new URL(`/_sites/${currentHost}${path}`, req.url)
  );
}

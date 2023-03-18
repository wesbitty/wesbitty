import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api/|_next/|_static/|examples/|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  const hostname = req.headers.get("host") || "platforms.vercel.app";

  const path = url.pathname;

  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
       ? hostname
          .replace(`.wesbitty.org`, "")
          .replace(`.bitty.vercel.app`, "")
        :hostname.replace(`.localhost:3000`, "");

  if (currentHost == "app") {
    if (
      url.pathname === "/login" &&
      (req.cookies.get("next-auth.session-token") ||
        req.cookies.get("__Secure-next-auth.session-token"))
    ) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    url.pathname = `/app${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (hostname === "localhost:3000" || hostname === "bitty.vercel.app") {
    return NextResponse.rewrite(new URL(`${path}`, req.url));
  }

  return NextResponse.rewrite(
    new URL(`/_sites/${currentHost}${path}`, req.url)
  );
}

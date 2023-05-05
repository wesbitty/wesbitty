import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /examples (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|examples/|[\\w-]+\\.\\w+).*)',
  ],
}

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl

  // Get hostname of request (e.g. demo.wesbitty.org, demo.localhost:3000)
  const hostname = req.headers.get('host') || 'demo.wesbitty.org'

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = url.pathname

  // Only for demo purposes - remove this if you want to use your root domain as the landing page
  if (hostname === 'wesbitty.org' || hostname === 'wesbittyv2.vercel.app') {
    return NextResponse.redirect('https://demo.wesbitty.org')
  }

  /*  You have to replace ".wesbitty.org" with your own domain if you deploy this example under your domain.
      You can also use wildcard subdomains on .vercel.app links that are associated with your Vercel team slug
      in this case, our team slug is "platformize", thus *.wesbittyv2.vercel.app works. Do note that you'll
      still need to add "*.wesbittyv2.vercel.app" as a wildcard domain on your Vercel dashboard. */
  const currentHost =
    process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'
      ? hostname
          .replace(`.wesbitty.org`, '')
          .replace(`.wesbittyv2.vercel.app`, '')
      : hostname.replace(`.localhost:3000`, '')

  // rewrites for app pages
  if (currentHost == 'app') {
    if (
      url.pathname === '/login' &&
      (req.cookies.get('next-auth.session-token') ||
        req.cookies.get('__Secure-next-auth.session-token'))
    ) {
      url.pathname = '/'
      return NextResponse.redirect(url)
    }

    url.pathname = `/app${url.pathname}`
    return NextResponse.rewrite(url)
  }

  // rewrite root application to `/home` folder
  if (hostname === 'localhost:3000' || hostname === 'wesbitty.org') {
    return NextResponse.rewrite(new URL(`/home${path}`, req.url))
  }

  // rewrite everything else to `/_sites/[site] dynamic route
  return NextResponse.rewrite(new URL(`/_sites/${currentHost}${path}`, req.url))
}

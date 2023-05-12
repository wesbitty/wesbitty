import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [
    '/((?!api/|_next/|_static/|brand/|images/|examples/|[\\w-]+\\.\\w+).*)',
  ],
}

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl
  const hostname = req.headers.get('host') || 'wesbitty.org'
  const path = url.pathname

  const currentHost =
    process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'
      ? hostname.replace(`.wesbitty.org`, '')
      : hostname.replace(
          `.3000-wesbitty-wesbitty-dtnyvntx4ke.ws-eu97.gitpod.io`,
          ''
        )

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

  if (
    hostname === '3000-wesbitty-wesbitty-dtnyvntx4ke.ws-eu97.gitpod.io' ||
    hostname === 'wesbitty.org'
  ) {
    return NextResponse.rewrite(new URL(`${path}`, req.url))
  }

  return NextResponse.rewrite(new URL(`/_sites/${currentHost}${path}`, req.url))
}

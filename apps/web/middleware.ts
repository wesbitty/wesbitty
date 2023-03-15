import { NextRequest, NextResponse } from 'next/server'
import { getHostnameDataOrDefault } from './wesbitty/lib/db'

export const config = {
  matcher: ['/', '/about', '/_sites/:path'],
}

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl

  const path = url.pathname

  // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
  const hostname = req.headers.get('host')

  const currentHost =
    process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'
      ? hostname.replace(`.wesbitty.com`, '')
      : hostname.replace(`.localhost:3210`, '')

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

  // rewrite root application to `/index` folder
  if (hostname === 'localhost:3210' || hostname === 'wesbitty.com') {
    return NextResponse.rewrite(new URL(`${path}`, req.url))
  }

  // rewrite everything else to `/_sites/[site] dynamic route
  return NextResponse.rewrite(new URL(`/_sites/${currentHost}${path}`, req.url))
}

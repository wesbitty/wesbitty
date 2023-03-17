import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const host  = process.env.APP_URL
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;
  const hostname = req.headers.get('host');
 
  const currentHost = 
  process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
  .replace(`.${host}`, '');


  if (pathname.startsWith(`/_sites`)) {
    return new Response(null, { status: 404 });
  }

  if (!pathname.includes('.') && !pathname.startsWith('/api')) {
    if (hostname === host) {
      url.pathname = `${pathname}`;
    } else {
      url.pathname = `/_sites/${currentHost}${pathname}`;
    }

    return NextResponse.rewrite(url);
  }
};
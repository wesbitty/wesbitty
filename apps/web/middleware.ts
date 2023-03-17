import { NextRequest, NextResponse } from 'next/server'

const CUSTOMHOST = process.env.NODE_ENV === 'production'
	? 'wesbitty.org'
    : 'localhost:3000'

export default (req: NextRequest) => {
  const host = req.headers.get('host')
  
  if (host.endsWith(`.${CUSTOMHOST}`)) {
    const subdomain = host.replace(`.${CUSTOMHOST}`, '')
    const url = req.nextUrl.clone()
    url.pathname = `_sites/${subdomain}${url.pathname}`
    return NextResponse.rewrite(url)
  }
  
  return NextResponse.next()
}

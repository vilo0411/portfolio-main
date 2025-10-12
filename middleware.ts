import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Block Next.js default font requests
  if (request.nextUrl.pathname.startsWith('/__nextjs_font/')) {
    return new NextResponse(null, { status: 404 })
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/__nextjs_font/:path*',
}
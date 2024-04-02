import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // const cookie = request.cookies
  // console.log("cookie",cookie)

  return NextResponse.next()
}
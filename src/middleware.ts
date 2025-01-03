import { auth } from "@/auth"
import { NextResponse } from "next/server"


export default auth((req) => {

    const userIsLoggedIn = !!req.auth;

    const blockedRoutes = ["/dashboard", "/chat"]

    const isProtectedRoute = blockedRoutes.some((route) =>
        req.nextUrl.pathname.startsWith(route)
    )

//   if (req.nextUrl.pathname === "/"){
//     return NextResponse.redirect(new URL("/chat", req.url))
//   }
//   else
   if (isProtectedRoute && !userIsLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url))
  }
  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
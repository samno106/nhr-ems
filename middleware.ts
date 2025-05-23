// export { default } from "next-auth/middleware";

// export const config = { matcher: ["/dashboard/:path*"] };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const path = request.nextUrl.pathname;

  const routes ={
    "/dashboard/buildings/data":["view-buildings"],
    "/dashboard/buildings/overview":["view-buildings"],
    "/dashboard/employees/overview":["view-employees"],
    "/dashboard/employees/data":["view-employees"],
    "/dashboard/reports":["view-reports"],
  }

  const requiredPermission = routes[path as keyof typeof routes];

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {

    if(requiredPermission){
      const res = await fetch(`${request.nextUrl.origin}/api/permissions`)
      const permissions = await res.json();
      const hasPermission = permissions.some((perm)=>requiredPermission.includes(perm.slug));
  
      if (!hasPermission) {
        return NextResponse.redirect(new URL('/dashboard/errors', request.url));
      }
    }

    
  } catch (error) {
    console.log(error)
    // return NextResponse.redirect(new URL('/', request.url));
  }


  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

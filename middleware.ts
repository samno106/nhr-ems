// export { default } from "next-auth/middleware";

// export const config = { matcher: ["/dashboard/:path*"] };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const path = request.nextUrl.pathname;
  // console.log("token==>", token.roleId);
  const routes = {
    "/dashboard/employees/overview": ["view-employees"],
    "/dashboard/employees/data": ["view-employees"],
    "/dashboard/buildings/data": ["view-buildings"],
    "/dashboard/buildings/overview": ["view-buildings"],
    "/dashboard/vip/overview": ["view-vip"],
    "/dashboard/vip/data": ["view-vip"],
    "/dashboard/workflow": ["view-workflow"],
    "/dashboard/reports": ["view-reports"],
    "/dashboard/e-forms": ["view-e-forms"],
    "/dashboard/tools": ["view-tools"],
    "/dashboard/user-access": ["view-users"],
    "/dashboard/settings": ["view-settings"],
  };

  const requiredPermission = routes[path as keyof typeof routes];

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    if (requiredPermission) {
      const res = await fetch(
        `${request.nextUrl.origin}/api/permissions/${token?.roleId}`
      );
      const permissions = await res.json();
      const hasPermission = permissions.some((perm) =>
        requiredPermission.includes(perm.slug)
      );
      console.log("permissions =>", permissions);

      if (!hasPermission) {
        return NextResponse.redirect(new URL("/dashboard/errors", request.url));
      }
    }
  } catch (error) {
    console.log(error);
    // return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

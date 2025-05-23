import { getPermissionByRole } from "@/actions";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }) {
  const { roleId } = await params;
  try {
    const { permissions } = await getPermissionByRole(roleId);
    return Response.json(permissions);
  } catch (error) {
    console.log("[PERMIS_GET]", error);
    return new Response("Internal error", { status: 500 });
  }
}

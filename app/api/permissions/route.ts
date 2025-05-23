import { getPermission } from '@/actions';
import { permissions } from './../../../prisma/seed/data';

// import type { NextApiRequest, NextApiResponse } from 'next'
// import { getPermission } from "@/actions";

//   export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const {permissions} = await getPermission();
//     res.status(200).json(permissions);
//   }

export async function GET(req:Request){
    try{
        const {permissions } = await getPermission();
        return Response.json(permissions);

    }catch (error) {
        console.log("[DEPART_GET]", error);
        return new Response("Internal error", { status: 500 });
      }
}
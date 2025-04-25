import { Button } from "@/components/ui/button";
import {  ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mr-2">NHR EMS</h2>
        <div className="flex items-center space-x-2">
          <ArrowRight/>
        <Button asChild variant="ghost">
        <Link href={"/dashboard"}>Dashboard</Link>
        </Button>
        </div>
    </div>
  );
}

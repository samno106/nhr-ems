import { AuthLogo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {  ArrowRight, ChevronRight, Key, KeyRound, User2 } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full md:px-56 px-5">
      <div className="md:flex flex-row md:gap-5 justify-center items-start w-full">
        <div className="md:w-[50%]">
          <AuthLogo/>
          <h3 className="text-xl text-gray-600 mt-1">Welcome back</h3>
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-700 md:mt-4 mt-2">Login to your account</h3>
        </div>
        <div className="md:w-[50%]">
         <div className=" space-y-5">
          <div className=" relative">
            <User2 className="size-5 absolute left-2.5 top-3.5 text-gray-400"/>
            <Input className="py-6 pl-10 placeholder:text-gray-400" placeholder="Username"/>
          </div>

          <div className=" relative">
            <KeyRound className="size-5 absolute left-2.5 top-3.5 text-gray-400"/>
            <Input className="py-6 pl-10 placeholder:text-gray-400" placeholder="Password"/>
          </div>
          <div>
            <Button className="px-24 py-6 flex justify-between items-center w-[50%] cursor-pointer">
              <span className="pl-4">Login</span>
              <ChevronRight className=" size-5 mr-2"/>
            </Button>
          </div>
         </div>
        </div>
      </div>
        {/* <h2 className="text-2xl font-bold mr-2">NHR EMS</h2>
        <div className="flex items-center space-x-2">
          <ArrowRight/>
        <Button asChild variant="ghost">
        <Link href={"/dashboard"}>Dashboard</Link>
        </Button>
        </div> */}
    </div>
  );
}

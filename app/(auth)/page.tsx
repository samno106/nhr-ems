import { AuthLogo } from "@/components/logo";
import SiginClient from "./_components/signin-client";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full md:px-56 px-5">
      <div className="md:flex flex-row md:gap-5 justify-center items-start w-full">
        <div className="md:w-[50%]">
          <AuthLogo />
          <h3 className="text-xl text-gray-600 mt-1">Welcome back</h3>
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-700 md:mt-4 mt-2">
            Login to your account
          </h3>
        </div>
        <div className="md:w-[50%]">
          <SiginClient />
        </div>
      </div>
    </div>
  );
}

import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      fullName: string;
      roleId: string;
      profile: string;
    };
  }

  interface User {
    id: string;
    email: string;
    fullName: string;
    roleId: string;
    profile: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    fullName: string;
    roleId: string;
    profile: string;
  }
}

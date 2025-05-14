import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      // Add any other custom properties here
    };
  }

  interface User {
    id: string;
    email: string;
    // Add any other user properties from your database
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    // Add any other JWT properties here
  }
}

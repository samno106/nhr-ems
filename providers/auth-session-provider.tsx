// components/SessionHandler.js
"use client";
import useAuthStore from "@/stores/auth.store";
import { useSession } from "next-auth/react";

import { useEffect } from "react";

const AuthSessionProvider = () => {
  const { data: session } = useSession();
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    setSession(session);
  }, [session, setSession]);

  return null;
};

export default AuthSessionProvider;

"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Loader,
  XCircle,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      // theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CheckCircle2 className="size-5 text-green-500" />,
        info: <Info className="size-5 text-blue-500" />,
        warning: <AlertTriangle className="h-4 w-4 text-amber-500" />,
        error: <XCircle className="size-5 text-red-500" />,
        loading: <Loader className="size-5 text-gray-500 animate-spin" />,
      }}
      {...props}
    />
  );
};

export { Toaster };

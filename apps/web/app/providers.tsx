"use client";

import AppWalletProvider from "@/components/AppWalletProvider";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>
        <AppWalletProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </AppWalletProvider>
      </SessionProvider>
    </>
  );
}

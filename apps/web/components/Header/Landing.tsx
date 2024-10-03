"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Brain, Wallet, Sun, Moon, LogOut, LogIn } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { useTheme } from "next-themes";
import TopupDialog from "../Topup";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { signOut, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LandingHeader() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { connected } = useWallet();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    setIsLoggedIn(false);
  };

  const handleGoogleLogin = async () => {
    try {
      const signInRes = await signIn("google", {
        callbackUrl: "/",
        redirect: false,
      });
      if (signInRes) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (theme) {
      setIsDarkMode(theme === "dark");
    }
    setMounted(true);
  }, [theme]);

  if (!mounted) return null;

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="#">
        <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
        <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Bodhi
        </span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          href="#how-it-works"
        >
          How It Works
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          href="#faq"
        >
          FAQ
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          href="/chat"
        >
          Chat
        </Link>
        {connected && (
          <div className="text-sm font-medium">
            Balance:{" "}
            <span className="text-green-600 dark:text-green-400">
              100 BODHI
            </span>
          </div>
        )}
        {!connected && (
          <WalletMultiButton
            style={{
              backgroundColor: isDarkMode ? "#9333ea" : "#2b145a",
              height: "40px",
              borderRadius: "4px",
            }}
            endIcon={<Wallet />}
          />
        )}

        {connected && <TopupDialog />}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => (isLoggedIn ? handleSignOut() : handleGoogleLogin())}
        >
          {isLoggedIn ? (
            <LogOut className="w-4 h-4 mr-2" />
          ) : (
            <LogIn className="w-4 h-4 mr-2" />
          )}
          Log {isLoggedIn ? "Out" : "In"}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun /> : <Moon />}
        </Button>
      </nav>
    </header>
  );
}

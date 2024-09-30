"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Brain, Moon, Sun, Wallet } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { useTheme } from "next-themes";
import TopupDialog from "../Topup";

export default function LandingHeader() {
  const { theme, setTheme } = useTheme();

  const [walletAddress, setWalletAddress] = useState("");

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
        <div className="text-sm font-medium">
          Balance:{" "}
          <span className="text-green-600 dark:text-green-400">100 BODHI</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center rounded-[4px]"
        >
          <Wallet className="w-4 h-4 mr-2" />
          {walletAddress ? "Wallet Connected" : "Add Wallet"}
        </Button>
        <TopupDialog />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </nav>
    </header>
  );
}

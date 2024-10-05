"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@repo/ui/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import { Brain, Moon, Sun, Wallet, LogOut } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import TopupDialog from "../Topup";
import { useWallet } from "@solana/wallet-adapter-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import TokenUsage from "../TokenUsage";

export default function ChatHeader() {
  const { theme, setTheme } = useTheme();
  const { connected } = useWallet();
  const router = useRouter();

  const [model, setModel] = useState("gpt-4");
  const [walletAddress, setWalletAddress] = useState("");

  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (theme) {
      setIsDarkMode(theme === "dark");
    }
    setIsMounted(true);
  }, [theme]);

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="/">
        <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
        <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Bodhi
        </span>
      </Link>
      <div className="ml-auto flex items-center space-x-4">
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger className="w-[180px] rounded-[4px]">
            <SelectValue placeholder="Select AI Model" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-800 rounded-[4px]">
            <SelectItem value="gpt-4">GPT-4</SelectItem>
            <SelectItem value="gemini">Gemini</SelectItem>
            <SelectItem value="llama">LLaMA</SelectItem>
          </SelectContent>
        </Select>
        <div className="text-sm font-medium">
          Balance:{" "}
          <span className="text-green-600 dark:text-green-400">100 BODHI</span>
        </div>
        <TokenUsage />
        {connected && <TopupDialog />}
        <Button variant="ghost" size="sm" onClick={() => handleSignOut()}>
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full"
          aria-label="Toggle dark mode"
        >
          {isMounted && // Conditional rendering based on mount status
            (theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            ))}
        </Button>
      </div>
    </header>
  );
}

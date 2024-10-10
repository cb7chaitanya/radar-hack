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
import { Brain, Moon, Sun, LogOut, X, Menu } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import TopupDialog from "../Topup";
import { useWallet } from "@solana/wallet-adapter-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import TokenUsage from "../TokenUsage";

interface Props {
  handleTokenUsage: () => void;
  isDisabled: boolean;
  token: number;
}

export default function ChatHeader({
  handleTokenUsage,
  isDisabled,
  token,
}: Props) {
  const { theme, setTheme } = useTheme();
  const { connected } = useWallet();
  const router = useRouter();

  const [model, setModel] = useState("gpt-4");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (theme) {
      setIsDarkMode(theme === "dark");
    }
    setMounted(true);
  }, [theme]);

  const handleSignOut = async () => {
    await signOut();
  };

  if (!mounted) return null;

  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-700 w-full sticky top-0 z-50 transition-all duration-300">
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            Bodhi
          </span>
        </Link>
        <div className="ml-auto flex items-center">
          <nav className="hidden lg:flex items-center space-x-4">
            <div
              className="cursor-pointer hover:text-purple-600"
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              Dashboard
            </div>
            <Select value={model} onValueChange={setModel}>
              <SelectTrigger className="w-[180px] h-[36px] rounded-[4px]">
                <SelectValue placeholder="Select AI Model" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 rounded-[4px]">
                <SelectItem
                  className="cursor-pointer hover:text-purple-600"
                  value="gpt-4"
                >
                  GPT-4
                </SelectItem>
                <SelectItem
                  className="cursor-pointer hover:text-purple-600"
                  value="gemini"
                >
                  Gemini
                </SelectItem>
                <SelectItem
                  className="cursor-pointer hover:text-purple-600"
                  value="llama"
                >
                  LLaMA
                </SelectItem>
              </SelectContent>
            </Select>
            <TokenUsage
              TokenUsage={handleTokenUsage}
              isDisabled={isDisabled}
              tokenCount={token}
            />
            {connected && <TopupDialog />}
          </nav>
          {connected && (
            <div className="text-sm font-medium pl-0 lg:pl-[12px]">
              Balance:{" "}
              <span className="text-green-600 dark:text-green-400">
                100 BODHI
              </span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            className="rounded-full"
            aria-label="Toggle dark mode"
          >
            {mounted &&
              (isDarkMode ? (
                <Sun className="h-5 w-5 hover:text-purple-600" />
              ) : (
                <Moon className="h-5 w-5 hover:text-purple-600" />
              ))}
          </Button>
          {
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSignOut()}
              className="hidden lg:flex hover:text-purple-600 cursor-pointer"
            >
              <LogOut className="w-4 h-4 mr-2 cursor-pointer" />
              Log Out
            </Button>
          }
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>
      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-x-100"
            : "opacity-0 translate-x-full"
        }`}
      >
        <div className="h-[60px]"></div>
        <nav className="flex flex-col space-y-4 p-4">
          <Select value={model} onValueChange={setModel}>
            <SelectTrigger className="w-full rounded-[4px]">
              <SelectValue placeholder="Select AI Model" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 rounded-[4px]">
              <SelectItem
                className="cursor-pointer hover:text-purple-600"
                value="gpt-4"
              >
                GPT-4
              </SelectItem>
              <SelectItem
                className="cursor-pointer hover:text-purple-600"
                value="gemini"
              >
                Gemini
              </SelectItem>
              <SelectItem
                className="cursor-pointer hover:text-purple-600"
                value="llama"
              >
                LLaMA
              </SelectItem>
            </SelectContent>
          </Select>
          <TokenUsage
            TokenUsage={handleTokenUsage}
            isDisabled={isDisabled}
            tokenCount={token}
          />
          <div
            className="text-center cursor-pointer hover:text-purple-600"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Dashboard
          </div>
          {connected && <TopupDialog />}
          <Button
            variant="ghost"
            className="hover:text-purple-600"
            size="sm"
            onClick={() => handleSignOut()}
          >
            <LogOut className="w-4 h-4 mr-2 cursor-pointer" />
            Log Out
          </Button>
        </nav>
      </div>
    </>
  );
}

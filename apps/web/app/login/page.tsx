"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { LoginFooter } from "@/components/Login/footer";
import { RightSide } from "@/components/Login/RightSide";
import { LeftSide } from "@/components/Login/LeftSide";

export default function LoginPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (theme) {
      setIsDarkMode(theme === "dark");
    }
    setMounted(true);
  }, [theme]);

  useEffect(() => {
    if (theme) {
      setIsDarkMode(theme === "dark");
    }
    setMounted(true);
  }, [theme]);

  if (!mounted) return null;

  return (
    <div
      className={`flex flex-col min-h-screen bg-white dark:bg-gradient-to-r dark:from-primary-900 dark:via-primary-800  dark:to-gray-800`}
    >
      <div className="flex-grow flex flex-col md:flex-row">
        {/* Left side - Login content */}
        <LeftSide />
        {/* Right side - Graphics */}
        <RightSide />
      </div>
      <LoginFooter>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </LoginFooter>
    </div>
  );
}

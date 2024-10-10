"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Brain, Wallet, Sun, Moon, LogOut, LogIn, X, Menu } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { useTheme } from "next-themes";
import TopupDialog from "../Topup";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { navitems } from "./navitems";

export default function LandingHeader() {
  const { theme, setTheme } = useTheme();
  const { connected } = useWallet();
  const router = useRouter();
  const session = useSession();

  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
  };

  const handleSignIn = async () => {
    router.push("/login");
  };

  useEffect(() => {
    if (theme) {
      setIsDarkMode(theme === "dark");
    }
    setMounted(true);
  }, [theme]);

  if (!mounted) return null;

  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-all duration-300">
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            Bodhi
          </span>
        </Link>
        <div className="flex items-center ml-auto">
          <nav className="hidden lg:flex items-center gap-4 sm:gap-6">
            {navitems.length > 0 ? (
              navitems.map((item: any) => (
                <Link
                  className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  href={item.href}
                  key={item.id}
                >
                  {item.name}
                </Link>
              ))
            ) : (
              <div>No items</div>
            )}

            <WalletMultiButton
              style={{
                backgroundColor: "#9333ea",
                height: "36px",
                borderRadius: "4px",
              }}
              endIcon={<Wallet />}
            />

            {connected && <TopupDialog />}
          </nav>
          {connected && (
            <div className="text-sm font-medium ml-[12px]">
              Balance:{" "}
              <span className="text-green-600 dark:text-green-400">
                100 BODHI
              </span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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
          {session.status !== "loading" && (
            <Button
              className="hidden lg:flex hover:text-purple-600"
              variant="ghost"
              size="sm"
              onClick={() =>
                session.status === "authenticated"
                  ? handleSignOut()
                  : handleSignIn()
              }
            >
              {session.status === "authenticated" ? (
                <LogOut className="w-4 h-4 mr-2" />
              ) : (
                <LogIn className="w-4 h-4 mr-2" />
              )}
              Log {session.status === "authenticated" ? "Out" : "In"}
            </Button>
          )}
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
      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md z-40 inset-0 duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translat-x-100"
            : "opacity-0 translate-x-full"
        }`}
      >
        <div className="h-[60px]"></div>
        <nav className="flex flex-col space-y-4 p-4">
          {navitems.length > 0 ? (
            navitems.map((item: any) => (
              <Link
                className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-center p-2"
                href={item.href}
                key={item.id}
              >
                {item.name}
              </Link>
            ))
          ) : (
            <div>No items</div>
          )}
          {!connected && (
            <WalletMultiButton
              style={{
                backgroundColor: "#9333ea",
                height: "36px",
                borderRadius: "4px",
                width: "100%",
                justifyContent: "center",
              }}
              endIcon={<Wallet />}
            />
          )}

          {connected && <TopupDialog />}
          {session.status !== "loading" && (
            <Button
              variant="ghost"
              className="hover:text-purple-600"
              size="sm"
              onClick={() =>
                session.status === "authenticated"
                  ? handleSignOut()
                  : handleSignIn()
              }
            >
              {session.status === "authenticated" ? (
                <LogOut className="w-4 h-4 mr-2" />
              ) : (
                <LogIn className="w-4 h-4 mr-2" />
              )}
              Log {session.status === "authenticated" ? "Out" : "In"}
            </Button>
          )}
        </nav>
      </div>
    </>
  );
}

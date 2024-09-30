"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import { Brain, Send, Moon, Sun, User, Bot, Wallet } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";

export default function ChatHeader() {
  const { theme, setTheme } = useTheme();

  const [input, setInput] = useState("");
  const [model, setModel] = useState("gpt-4");
  const [walletAddress, setWalletAddress] = useState("");

  const handleAddWallet = (address: string) => {
    setWalletAddress(address);
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
        <Button
          variant="outline"
          size="sm"
          className="flex items-center rounded-[4px]"
        >
          <Wallet className="w-4 h-4 mr-2" />
          {walletAddress ? "Wallet Connected" : "Add Wallet"}
        </Button>
        {/* <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center rounded-[4px]"
            >
              <Wallet className="w-4 h-4 mr-2" />
              {walletAddress ? "Wallet Connected" : "Add Wallet"}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Crypto Wallet</DialogTitle>
              <DialogDescription>
                Enter your wallet address to connect it to your Bodhi account.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Enter wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
              <Button onClick={() => handleAddWallet(walletAddress)}>
                Connect
              </Button>
            </div>
          </DialogContent>
        </Dialog> */}
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
      </div>
    </header>
  );
}

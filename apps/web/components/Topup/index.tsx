"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import { DollarSign, ArrowRightLeft } from "lucide-react";

export default function TopupDialog() {
  const [solanaAmount, setSolanaAmount] = useState("");
  const [bodhiBalance, setBodhiBalance] = useState(100);

  const handleTopUp = (amount: string) => {
    const solana = parseFloat(amount);
    if (!isNaN(solana)) {
      const bodhiAmount = solana * 100; // 1 Solana = 100 BODHI
      setBodhiBalance((prev) => prev + bodhiAmount);
      setSolanaAmount("");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center rounded-[4px]"
        >
          <DollarSign className="w-4 h-4 mr-2" />
          Top Up
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-[4px] bg-gray-200 dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle>
            Top Up Your
            <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Bodhi
            </span>{" "}
            Balance
          </DialogTitle>
          <DialogDescription>
            Swap Solana for BODHI tokens to use in your AI conversations.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center space-x-4 my-4">
          <div className="text-center">
            <p className="text-2xl font-bold">1 SOL</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Solana</p>
          </div>
          <ArrowRightLeft className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <div className="text-center">
            <p className="text-2xl font-bold">100 BODHI</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bodhi Tokens
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Amount of Solana to swap
            </p>
            <Input
              id="solana-amount"
              placeholder="Enter Solana amount"
              type="number"
              min="0"
              step="0.1"
              value={solanaAmount}
              onChange={(e) => setSolanaAmount(e.target.value)}
              className="outline-none rounded-[4px]"
            />
          </div>
          <Button
            className="self-center w-full rounded-[4px] bg-gradient-to-br from-purple-600 to-pink-600 text-white hover:text-purple-900 transition-all"
            size="lg"
            onClick={() => handleTopUp(solanaAmount)}
          >
            Swap and Top Up
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

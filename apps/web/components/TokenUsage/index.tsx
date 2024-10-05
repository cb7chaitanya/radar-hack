import React, { useState } from "react";
import { BarChart2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { Button } from "@repo/ui/components/ui/button";

export default function TokenUsage() {
  const [tokenUsage, setTokenUsage] = useState({
    used: 0,
    total: 0,
    conversations: 0,
  });
  const [isLoadingTokens, setIsLoadingTokens] = useState(false);
  const [isTokenUsageSection, setIsTokenUsageSection] = useState(false);

  const fetchTokenUsage = async () => {
    setIsLoadingTokens(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setTokenUsage({
      used: 1500,
      total: 10000,
      conversations: 25,
    });
    setIsLoadingTokens(false);
    setIsTokenUsageSection(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center rounded-[4px] bg-gradient-to-r from-blue-500 to-blue-700 border-0 text-white"
        >
          <BarChart2 className="w-4 h-4 mr-2" />
          Fetch Token Usage
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-200 dark:bg-gray-800 rounded-[4px]">
        <DialogHeader>
          <DialogTitle>Token Usage Statistics</DialogTitle>
        </DialogHeader>
        {isTokenUsageSection ? (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Tokens Used
              </h3>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-2xl font-semibold">
                  {tokenUsage?.used} / {tokenUsage?.total}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {((tokenUsage?.used / tokenUsage?.total) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Conversations
              </h3>
              <p className="mt-1 text-2xl font-semibold">
                {tokenUsage?.conversations}
              </p>
            </div>
            <Button
              onClick={fetchTokenUsage}
              disabled={isLoadingTokens}
              className="bg-primary-700"
            >
              {isLoadingTokens ? "Refreshing..." : "Refresh Stats"}
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Click the button below to load your token usage statistics.
            </p>
            <Button
              variant={"outline"}
              onClick={fetchTokenUsage}
              disabled={isLoadingTokens}
            >
              {isLoadingTokens ? "Loading..." : "Load Stats"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

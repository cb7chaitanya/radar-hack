import React, { useState } from "react";
import { BarChart2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { Button } from "@repo/ui/components/ui/button";

interface Props {
  TokenUsage: () => void;
  isDisabled: boolean;
  tokenCount: number;
}

export default function TokenUsage({
  TokenUsage,
  isDisabled,
  tokenCount,
}: Props) {
  const [tokenUsage, setTokenUsage] = useState({
    used: 0,
    total: 0,
    conversations: 0,
  });
  const [isLoadingTokens, setIsLoadingTokens] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center rounded-[4px] bg-gradient-to-r from-blue-500 to-blue-700 border-0 text-white"
          onClick={TokenUsage}
          disabled={isDisabled}
        >
          <BarChart2 className="w-4 h-4 mr-2" />
          Fetch Token Usage
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-200 dark:bg-gray-800 rounded-[4px]">
        <DialogHeader>
          <DialogTitle>Token Usage Statistics</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Tokens Used
            </h3>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-2xl font-semibold">
                {/* {tokenUsage?.used} / {tokenUsage?.total} */}
                {tokenCount}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {/* {((tokenUsage?.used / tokenUsage?.total) * 100).toFixed(1)}% */}
                0.0%
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
            onClick={TokenUsage}
            disabled={isLoadingTokens}
            className="bg-primary-700 h-[36px] rounded-[4px] "
          >
            {isLoadingTokens ? "Refreshing..." : "Refresh Stats"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

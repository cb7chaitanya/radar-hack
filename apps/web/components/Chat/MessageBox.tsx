"use client";
import React, { FC, useState, Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { TextGenerateEffect } from "@repo/ui/components/ui/text-generate-effect";
import { Bot, Check, CheckCircle, Copy } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import Markdown from "./Markdown";

interface Props {
  message: string;
}

async function copyText({ message }: Props) {
  try {
    await navigator.clipboard.writeText(message);
    return true; // Indicates successful copy
  } catch (err) {
    console.error("Failed to copy text: ", err);
    return false; // Indicates failure
  }
}

const MessageBox: FC<Props> = ({ message }) => {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = async () => {
    const success = await copyText({ message });

    if (success) {
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 5000);
    }
  };

  return (
    <div className="">
      <div className="">
        <Bot className="w-5 h-5 text-white" />
      </div>
      <div className=" flex flex-col w-full">
        <div className="max-w-[80%] bg-gradient-to-br from-purple-600 to-pink-600 p-4 w-fit rounded-[4px]">
          <Markdown message={message} />
        </div>
        <div className="flex">
          {!isCopy ? (
            <div
              className="cursor-pointer flex flex-row items-center mt-1"
              onClick={handleCopy}
            >
              <span className="text-sm md:text-md mr-2 text-gray-400">
                Copy
              </span>
              <Copy size={14} className="text-gray-400" />
            </div>
          ) : (
            <div className="cursor-pointer flex flex-row items-center mt-1">
              <span className="text-sm md:text-md mr-2 text-gray-400">
                Copied!
              </span>
              <Check size={14} className="text-gray-400" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;

"use client";
import React, { FC, useState } from "react";
import { TextGenerateEffect } from "@repo/ui/components/ui/text-generate-effect";
import { Bot, Check, CheckCircle, Copy } from "lucide-react";

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
      <div className="ml-20 md:ml-24">
        <Bot className="w-5 h-5 text-white" />
      </div>
      <div className="items-center flex flex-col w-full">
        <div className="max-w-[80%] bg-gradient-to-br from-purple-600 to-pink-600 px-4 w-fit pb-3 rounded-[4px]">
          {!isCopy ? (
            <div
              className="flex flex-row gap-2 items-end cursor-pointer mt-2 bg-gray-800 w-fit px-2 py-2"
              onClick={handleCopy}
            >
              Copy
              <div className="mt-2">
                <Copy />
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center mt-2  bg-gray-800 w-fit px-2 py-2">
              <Check className="text-white" />
              <span className="text-white ml-2">Copied!</span>
            </div>
          )}
          <TextGenerateEffect words={message} duration={0.5} className="" />
        </div>
      </div>
    </div>
  );
};

export default MessageBox;

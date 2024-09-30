/** @format */

"use client";

import { geminiStore } from "@/actions/storePrompt";
import axios from "axios";
import { ArrowUp, Image, Paperclip, RefreshCw } from "lucide-react";
import { useState } from "react";
import PromptBox from "./PromtBox";
import MessageBox from "./MessageBox";
import { promptMessages, promptType } from "./prompt";

export default function Chat() {
  const [input, setInput] = useState("");
  const [responseArr, setResponseArr] = useState<string[]>([]);
  const [promptArr, setPromptArr] = useState<string[]>([]);
  const [error, setError] = useState("");

  const [messages, setMessages] = useState<
    { type: "prompt" | "response"; content: string }[]
  >([]);

  const handleChatSend = async () => {
    if (input.trim().length === 0) {
      setError("Please enter at least one letter to send a message.");
      return; // Prevent further execution
    } else {
      setError("");
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "prompt", content: input },
      ]);
      setPromptArr((arr) => [...arr, input]);
      const res = await axios({
        url: "http://localhost:3301/api/v1/gemini/prompt",
        method: "POST",
        data: {
          query: {
            prompt: input,
          },
        },
      });
      setResponseArr((arr) => [...arr, res.data.response.promptResult]);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "response", content: res.data.response.promptResult },
      ]);
      setInput("");
      await geminiStore(
        input,
        res.data.response.promptResult,
        res.data.response.usageMetadata.promptTokenCount,
        res.data.response.usageMetadata.candidatesTokenCount,
        2,
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        setInput((prevInput) => (prevInput) + "\n");
      } else {
        e.preventDefault(); // prevent default enter behavior
        if (input.trim().length > 0) {
          handleChatSend();
        }
      }
    }
  };

  const handleRefreshPrompts = () => {
    setMessages([]); // clear chat history
  };

  return (
    <div className="w-full min-h-screen flex flex-col text-white relative">
      <div className="mt-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full py-10">
        {messages.length === 0 && (
          <div>
            <h1 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
              <span className="dark:text-white text-gray-800 font-bold"> Hi there,</span> <span className="text-[#a855f7]">John</span> <br /> <span className="dark:text-white text-gray-800">What</span>{" "}
              <span className="text-[#38bdf8]">would like to know</span>?
            </h1>

            <p className="text-center text-gray-400 text-sm sm:text-base my-6">
              Use one of the most common prompts below or use your own to begin
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {promptMessages.length > 0 ? (
                promptMessages.map((prompt: promptType, index: number) => (
                  <div className="bg-gray-800 rounded-lg p-4 text-center" key={index}>
                    <p className="text-lg text-white">
                      {prompt.text}
                    </p>
                  </div>
                ))
              ) : (
                <div>
                  No prompts available
                </div>
              )}
            </div>
          </div>
        )}

        {messages.length > 0 && (
          <button className="flex items-center text-gray-400 hover:text-white space-x-2 mb-4" onClick={handleRefreshPrompts}>
            <RefreshCw />
            <span>Refresh Prompts</span>
          </button>
        )}
        {/* Display Prompts */}
        {messages.map((message, index) =>
          message?.type === "prompt" ? (
            <PromptBox key={index} prompt={message?.content} />
          ) : (
            <MessageBox key={index} message={message.content} />
          ),
        )}

        <div className="w-full">
          <div className="bg-gray-800 rounded-[4px] w-full py-3 px-4 flex items-center space-x-3 mb-4 mt-8">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={4}
              placeholder="Ask whatever you want..."
              className="bg-transparent flex-grow text-white placeholder-gray-400 focus:outline-none text-lg"
            />
            <button
              className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full"
              onClick={handleChatSend}
            >
              <ArrowUp size={20} />
            </button>
          </div>

          <div className="flex items-center justify-between w-full text-gray-400">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2">
                <Paperclip />
                <span>Add Attachment</span>
              </button>
              <button className="flex items-center space-x-2">
                <Image />
                <span>Use Image</span>
              </button>
            </div>
            <span>{input.length}/1000</span>
          </div>
        </div>
      </div>
      {error && (
        <div className="text-red-500 text-center my-3">
          {error}
        </div>
      )}
    </div>
  );
}

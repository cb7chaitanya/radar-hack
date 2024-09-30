/** @format */

"use client";

import { geminiStore } from "@/actions/storePrompt";
import axios from "axios";
import { ArrowUp, Image, Paperclip, RefreshCw } from "lucide-react";
import { useRef, useState } from "react";
import PromptBox from "./PromtBox";
import MessageBox from "./MessageBox";
import { promptMessages, promptType } from "./prompt";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { type: "prompt" | "response"; content: string }[]
  >([]);

  const submitButtonRef: any = useRef();

  const isEmpty = (value: string) => value.trim().length === 0;

  const handleChatSend = async () => {
    setInput("");
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "prompt", content: input },
    ]);
    const res = await axios({
      url: "http://localhost:3301/api/v1/gemini/prompt",
      method: "POST",
      data: {
        query: {
          prompt: input,
        },
      },
    });
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "response", content: res.data.response.promptResult },
    ]);
    await geminiStore(
      input,
      res.data.response.promptResult,
      res.data.response.usageMetadata.promptTokenCount,
      res.data.response.usageMetadata.candidatesTokenCount,
      2,
    );
  };

  const handleEnterKey = (e: any) => {
    if (e.key === "Enter") {
      if (e.shiftKey || isEmpty(input)) {
        e.preventDefault();
        setInput((prevInput) => prevInput + "\n");
      } else {
        e.preventDefault();
        submitButtonRef.current.click();
      }
    }
  };

  // className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 animate-gradient-x"
  return (
    <div className="bg-gradient-to-b from-[#0b1120] to-[#0f172a] w-full min-h-screen flex flex-col text-white">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 animate-gradient-x">
        <h1 className="text-left ml-8 mt-4 text-2xl font-bold">Bodhi</h1>
      </div>

      <div className="mt-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full py-10 space-y-8">
        <h1 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl">
          Hi there, <span className="text-[#a855f7]">John</span> <br /> What{" "}
          <span className="text-[#38bdf8]">would like to know</span>?
        </h1>

        <p className="text-center text-gray-400 text-sm sm:text-base">
          Use one of the most common prompts below or use your own to begin
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {promptMessages.length > 0 ? (
                promptMessages.map((prompt: promptType, index: number) => (
                  <div className="bg-gray-800 rounded-lg p-4 text-center cursor-pointer" key={index} onClick={()=>{
                    setInput(prompt.text)
                  }}>
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

        <button className="flex items-center text-gray-400 hover:text-white space-x-2">
          <RefreshCw />
          <span onClick={() => setMessages([])}>Refresh Prompts</span>
        </button>
        {/* Display Prompts */}
        {messages.map((message, index) =>
          message?.type === "prompt" ? (
            <PromptBox key={index} prompt={message?.content} />
          ) : (
            <MessageBox key={index} message={message.content} />
          ),
        )}

        <div className="bg-gray-800 rounded-lg w-full p-4 flex items-center space-x-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            placeholder="Ask whatever you want..."
            className="bg-transparent flex-grow text-white placeholder-gray-400 focus:outline-none text-lg"
            onKeyDown={handleEnterKey}
          />
          <button
            ref={submitButtonRef}
            className="bg-[#38bdf8] p-3 rounded-full"
            onClick={handleChatSend}
            disabled={isEmpty(input)}
          >
            <ArrowUp />
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
  );
}
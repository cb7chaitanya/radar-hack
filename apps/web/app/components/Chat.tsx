"use client";

import { geminiStore } from "@/actions/storePrompt";
import axios from "axios";
import { ArrowUp, Image, Paperclip, RefreshCw } from "lucide-react";
import { useState } from "react";

export default function Chat() {
    const [input, setInput] = useState("");
    const [responseArr, setResponseArr] = useState<string[]>([]);
    const [promptArr, setPromptArr] = useState<string[]>([]);

    return (
        <div className="bg-gradient-to-b from-[#0b1120] to-[#0f172a] w-full min-h-screen flex flex-col text-white">
            <div className="bg-gradient-to-r from-violet-400 to-purple-500 text-transparent bg-clip-text">
                <h1 className="text-left ml-8 mt-4 text-2xl font-bold">
                    Bodhi
                </h1>
            </div>

            <div className="mt-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full py-10 space-y-8">
                <h1 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl">
                    Hi there, <span className="text-[#a855f7]">John</span>{" "}
                    <br /> What{" "}
                    <span className="text-[#38bdf8]">would like to know</span>?
                </h1>

                <p className="text-center text-gray-400 text-sm sm:text-base">
                    Use one of the most common prompts below or use your own to
                    begin
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                        <p className="text-lg text-white">
                            I want some tokens,can you assist me with that
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                        <p className="text-lg text-white">
                            Generate tokens worth $1000 USDC
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                        <p className="text-lg text-white">
                            I have solana can i exchange it with your tokens?
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                        <p className="text-lg text-white">
                            How much do i need to pay to get 1 token?
                        </p>
                    </div>
                </div>

                <button className="flex items-center text-gray-400 hover:text-white space-x-2">
                    <RefreshCw />
                    <span>Refresh Prompts</span>
                </button>
                {responseArr}
                <br />
                {promptArr}
                <div className="bg-gray-800 rounded-lg w-full p-4 flex items-center space-x-3">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="Ask whatever you want..."
                        className="bg-transparent flex-grow text-white placeholder-gray-400 focus:outline-none text-lg"
                    />
                    <button
                        className="bg-[#38bdf8] p-3 rounded-full"
                        onClick={async () => {
                            setPromptArr((arr) => [...arr, input]);
                            const res = await axios({
                                url: `${process.env.NEXT_PUBLIC_WEBHOOK_URL}/api/v1/gemini/prompt`,
                                method: "POST",
                                data: {
                                    query: {
                                        prompt: input,
                                    },
                                },
                            });
                            setResponseArr((arr) => [
                                ...arr,
                                res.data.response.promptResult,
                            ]);
                            await geminiStore(
                                input,
                                res.data.response.promptResult,
                                res.data.response.usageMetadata
                                    .promptTokenCount,
                                res.data.response.usageMetadata
                                    .candidatesTokenCount,
                                2
                            );
                        }}
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
                    <span>0/1000</span>
                </div>
            </div>
        </div>
    );
}

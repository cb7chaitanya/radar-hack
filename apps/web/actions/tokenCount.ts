"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function geminiTokenCount(prompt: string) {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY || "");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const countResult = await model.countTokens(prompt);
    return countResult.totalTokens;
}

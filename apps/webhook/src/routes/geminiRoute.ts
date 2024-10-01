import { GoogleGenerativeAI } from "@google/generative-ai";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    msg: "Healthy GEMINI server!",
  });
});

router.post("/tokencount", async (req, res) => {
  const API_KEY = process.env.GEMINI_API_KEY;

  const { query } = req.body;
  const { prompt } = query;

  const genAI = new GoogleGenerativeAI(API_KEY || "");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const countResult = await model.countTokens(prompt);

    res.json({
      response: countResult,
      success: true,
    });
  } catch (e) {
    res.json({
      success: false,
    });
  }
});

router.post(`/prompt`, async (req, res) => {
  const API_KEY = process.env.GEMINI_API_KEY;
  const { query } = req.body;
  const { prompt } = query;

  const genAI = new GoogleGenerativeAI(API_KEY || "");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    const promptResult = result.response.text();

    res.json({
      response: {
        usageMetadata: result.response.usageMetadata,
        promptResult,
      },
      success: true,
    });
  } catch (e) {
    res.json({
      success: false,
    });
  }
});

export default router;

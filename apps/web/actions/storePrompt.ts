"use server";

import prisma from "@/app/db";

export async function geminiStore(
  prompt: string,
  response: string,
  inputToken: number,
  outputToken: number,
  userId: string,
) {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      promptHistory: {
        create: [
          {
            textContent: prompt,
          },
        ],
      },
      responseHistory: {
        create: [
          {
            textContent: response,
          },
        ],
      },
      tokenCount: {
        create: [
          {
            inputToken,
            outputToken,
          },
        ],
      },
    },
  });
}

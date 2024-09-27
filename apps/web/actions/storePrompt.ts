"use server";

import prisma from "@repo/db/client";

export async function geminiStore(
    prompt: string,
    response: string,
    inputToken: number,
    outputToken: number,
    userId: number
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

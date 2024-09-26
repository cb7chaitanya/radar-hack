"use server";

import prisma from "@repo/db/client";

export async function geminiStorePrompt(prompt: string, userId: number) {
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
        },
    });
}

export async function geminiStoreResponse(response: string, userId: number) {
    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            responseHistory: {
                create: [
                    {
                        textContent: response,
                    },
                ],
            },
        },
    });
}

export async function geminiStoreTokenCount(
    inputToken: number,
    outputToken: number,
    userId: number
) {
    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
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

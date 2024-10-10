"use server";

import prisma from "@repo/db/client";
import { count } from "console";

export async function getTokenCount(userId: string) {
  //Actual dynamic logic
  // const user = await prisma.user.findUnique({
  //     where: {
  //         id: userId
  //     },
  //     select: {
  //         tokenCount: true
  //     }
  // })
  // const tokenSum = user?.tokenCount.map((count) => count.inputToken + count.outputToken)
  // const timestamp = user?.tokenCount.map((count) => count.timestamp)

  //Data for testing dashboard page
  const tokenCountData = [
    {
      id: 1,
      userId: "user1",
      inputToken: 10,
      outputToken: 5,
      timestamp: "2023-02-20T14:30:00.000Z",
    },
    {
      id: 2,
      userId: "user1",
      inputToken: 15,
      outputToken: 10,
      timestamp: "2023-02-20T15:00:00.000Z",
    },
    {
      id: 3,
      userId: "user1",
      inputToken: 20,
      outputToken: 15,
      timestamp: "2023-02-20T15:30:00.000Z",
    },
    {
      id: 4,
      userId: "user2",
      inputToken: 5,
      outputToken: 0,
      timestamp: "2023-02-20T14:30:00.000Z",
    },
    {
      id: 5,
      userId: "user2",
      inputToken: 10,
      outputToken: 5,
      timestamp: "2023-02-20T15:00:00.000Z",
    },
    {
      id: 6,
      userId: "user2",
      inputToken: 15,
      outputToken: 10,
      timestamp: "2023-02-20T15:30:00.000Z",
    },
  ];
  const transformedData = tokenCountData.map((data) => ({
    timestamp: data.timestamp,
    totalToken: data.inputToken + data.outputToken,
  }));

  // const tokenSum = tokenCountData.map((count) => count.inputToken + count.outputToken)
  // const timestamp = tokenCountData.map((count) => count.timestamp)

  return transformedData;
}

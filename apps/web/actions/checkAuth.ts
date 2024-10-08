"use server";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function checkAuth() {
  try {

    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      redirect("/api/auth/signin");
    }
    return session;
  } catch (error) {
    throw new Error(`Failed to get session:${error} `);
  }
}

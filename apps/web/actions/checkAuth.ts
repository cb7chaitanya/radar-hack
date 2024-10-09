"use server";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function checkAuth() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      redirect("/api/auth/signin");
    }
    return session;
  } catch (error) {
    if (isRedirectError(error)) throw error;
    // redirect("/");
  }
}

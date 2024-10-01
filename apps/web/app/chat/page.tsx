import Chat from "@/components/Chat";
import ChatHeader from "@/components/Header/ChatHeader";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session: any = await getServerSession(authOptions);
  const userId = session.user.id;

  return (
    <div className="flex flex-col min-h-screen dark:bg-gradient-to-r dark:from-[#0F172A] dark:via-[#2b145a]  dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* bg-gradient-to-b from-[#0b1120] to-[#0f172a] */}
      <ChatHeader />
      <main className="flex-1">
        <Chat userId={userId} />
      </main>
    </div>
  );
}

import { checkAuth } from "@/actions/checkAuth";
import Chat from "@/components/Chat";
import ChatHeader from "@/components/Header/ChatHeader";

export default async function Page() {
  const session: any = await checkAuth();
  const userId = session.user.id;
  return (
    <div className="flex flex-col min-h-screen dark:bg-gradient-to-r dark:from-primary-900 dark:via-primary-800  dark:to-gray-800 text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* bg-gradient-to-b from-[#0b1120] to-[#0f172a] */}
      <ChatHeader />
      <main className="flex-1">
        <Chat userId={userId} />
      </main>
    </div>
  );
}

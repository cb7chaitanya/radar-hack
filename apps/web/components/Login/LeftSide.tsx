import { Button } from "@repo/ui/components/ui/button";
import { Brain } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export const LeftSide = () => {
  const handleGoogleLogin = async () => {
    try {
      const signInRes = await signIn("google", {
        callbackUrl: "/chat",
        redirect: false,
      });

      if (signInRes?.error) {
        console.error("Login failed:", signInRes.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full md:w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-4">
            <Brain className="h-12 w-12 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            Welcome to Bodhi
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Connect with Google to start chatting with AI
          </p>
        </div>

        <Button
          className="w-full py-6 text-lg font-semibold bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 transition-all duration-300 ease-in-out transform dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-gray-600 rounded-[4px]"
          onClick={handleGoogleLogin}
        >
          <svg
            className="w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Connect with Google
        </Button>

        <div className="text-center md:text-left text-sm text-gray-500 dark:text-gray-400">
          By connecting, you agree to our{" "}
          <Link
            href="#"
            className="text-purple-600 dark:text-purple-400 hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="#"
            className="text-purple-600 dark:text-purple-400 hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

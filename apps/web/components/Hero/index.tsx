/** @format */

"use client";

import { Button } from "@repo/ui/components/ui/button";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="w-full flex flex-col justify-center px-4 md:px-6 h-[40rem] lg:h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl/none mb-4 text-gray-800 dark:text-white">
            Unlock the Power of AI with{" "}
            <span className="ml-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Bodhi
            </span>
          </h1>
          <p className="mx-auto md:mx-0 max-w-[700px] text-gray-600 dark:text-gray-200 md:text-xl my-3 italic">
            Foundational AI, Limitless Possibilities
          </p>
          <p className="mx-auto md:mx-0 max-w-[700px] text-gray-600 dark:text-gray-200 md:text-xl mb-6">
            Chat with cutting-edge AI models using blockchain technology. Pay as
            you go, no subscriptions required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              className="rounded-[4px] bg-gradient-to-br from-purple-600 to-pink-600 text-white hover:text-purple-900 transition-all px-[1rem] lg:px-[2rem]"
              size="lg"
              onClick={() => {
                router.push("/chat");
              }}
            >
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="text-gray-600 dark:text-gray-400 border-purple-600 rounded-[4px] hover:text-purple-600 dark:hover:text-purple-300 transition-colors px-[1rem] lg:px-[2rem]"
              size="lg"
              onClick={() => console.log("== Learn More ==")}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 relative mt-20 md:mt-0">
          <Image
            src={require("@/assets/chatpage.png")}
            alt="AI Chat Illustration"
            width={600}
            height={600}
            className="rounded-[4px] shadow-2xl"
          />
          <div className="absolute -bottom-9 -left-4 bg-white dark:bg-gray-800 rounded-[4px] p-4 shadow-lg">
            <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Powered by Blockchain
            </p>
          </div>
          <div className="absolute -top-12 -right-4 bg-white dark:bg-gray-800 p-4 shadow-lg rounded-[4px]">
            <p className="text-sm font-semibold text-pink-600 dark:text-pink-400">
              Advanced AI Models
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

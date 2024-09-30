import React from "react";
import {
  Brain,
  Coins,
  MessageSquare,
  Zap,
  Moon,
  Sun,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Coins,
      title: "Blockchain-Powered Wallet",
      description:
        "Securely recharge your wallet and receive Bodhi tokens for AI interactions.",
    },
    {
      icon: MessageSquare,
      title: "Premium AI Models",
      description:
        "Access the latest AI models like GPT, Gemini, and LLaMA for your conversations.",
    },
    {
      icon: Zap,
      title: "Pay As You Go",
      description:
        "No subscriptions. Only pay for the AI interactions you need.",
    },
    {
      icon: MessageCircle,
      title: "LLM Hub",
      description: "Central dashboard for accessing multiple LLMs",
    },
  ];
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[4px] items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

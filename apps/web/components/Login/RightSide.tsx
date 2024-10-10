import Image from "next/image";
import React from "react";

export const RightSide = () => {
  return (
    <div className="w-full md:w-1/2 relative overflow-hidden flex justify-center items-center">
      <div className="">
        <div className="w-full h-full max-w-2xl max-h-2xl relative">
          <Image
            src={require("@/assets/gp2.png")}
            alt="AI Chat Illustration"
            className="object-cover w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
          />
          <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-[4px] p-4 shadow-lg">
            <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Advanced AI Models
            </p>
          </div>
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-[4px] p-4 shadow-lg">
            <p className="text-sm font-semibold text-pink-600 dark:text-pink-400">
              Powered By Blockchain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

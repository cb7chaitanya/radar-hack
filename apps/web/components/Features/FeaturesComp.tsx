"use client";
import { features } from "./features";

export const FeaturesComp = () => {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.length > 0 ? (
            features.map((feature: any, index: number) => (
              <div
                key={index}
                className="flex flex-col rounded-[4px] items-center text-center p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400">
                  <feature.icon />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))
          ) : (
            <div>No features</div>
          )}
        </div>
      </div>
    </section>
  );
};

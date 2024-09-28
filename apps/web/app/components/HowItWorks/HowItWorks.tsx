import { HoverEffect } from '@repo/ui/components/ui/card-hover-effect';
import { steps } from './steps';

export const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-r from-[#0F172A] via-[#2b145a] to-gray-800 text-white py-16 px-6">
      <h2 className="text-center text-4xl font-bold mb-12">How It Works</h2>
      <HoverEffect items={steps} className="grid-cols-1 md:grid-cols-2 gap-8" />
    </div>
  );
};

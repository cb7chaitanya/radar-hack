import Image from "next/image";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { FAQ } from "./components/FAQ/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden">
   <Hero/>
   <Features/>
   <HowItWorks/>
   <FAQ/>
    </div>
  );
}

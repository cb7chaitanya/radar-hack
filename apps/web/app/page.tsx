import Hero from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { FAQ } from "@/components/FAQ/FAQ";
import LandingHeader from "@/components/Header/Landing";
import CallOut from "@/components/CallOut";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gradient-to-r dark:from-[#0F172A] dark:via-[#2b145a]  dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 */}
      <LandingHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        {/* <CallOut /> */}
      </main>
      <Footer />
    </div>
  );
}

import Hero from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { FAQ } from "@/components/FAQ/FAQ";
import LandingHeader from "@/components/Header/Landing";
import CallOut from "@/components/CallOut";
import Footer from "@/components/Footer";
import { FeaturesComp } from "@/components/Features/FeaturesComp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gradient-to-r dark:from-primary-900 dark:via-primary-800  dark:to-gray-800 text-gray-900 dark:text-gray-100 transitin-colors duration-500">
      <LandingHeader />
      <main className="flex-1">
        <Hero />
        <FeaturesComp />
        <HowItWorks />
        <FAQ />
        {/* <CallOut /> */}
      </main>
      <Footer />
    </div>
  );
}

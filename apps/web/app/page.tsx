import Image from "next/image";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
   <Hero/>
    </div>
  );
}

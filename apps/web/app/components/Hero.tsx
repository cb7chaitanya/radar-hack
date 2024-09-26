// import { HoverBorderGradient } from "@repo/ui/hover-border-gradient";

export const Hero = () => {
    return <>
    <div className="bg-gradient-to-r from-[#0F172A] via-[#2b145a]  to-gray-800 w-full h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          Welcome to Bodhi
        </h1>
        <p className="text-lg md:text-xl mb-6 text-center max-w-lg">
        Foundational AI, Limitless Possibilities
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300">
            Get Started
          </button>
          <button className="border border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
            Learn More
          </button>
        </div>
        
      </div>
  
    </>
}
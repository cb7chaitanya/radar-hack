export const Features = () => {
    return (
      <div className="bg-gradient-to-r from-[#0F172A] via-[#2b145a] to-gray-800 w-full py-16 px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-10">
          Key Features
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg transition duration-500 hover:opacity-50 hover:scale-95">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Bodhi Hub</h3>
            <p className="text-white">
              Central dashboard for accessing multiple LLMs
            </p>
          </div>
  
          <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg transition duration-500 hover:opacity-50 hover:scale-95">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Bodhi Exchange</h3>
            <p className="text-white">Marketplace for AI asset trading</p>
          </div>
  
          <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg transition duration-500 hover:opacity-50 hover:scale-95">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Bodhi Metrics</h3>
            <p className="text-white">
              Real-time LLM token tracking and analytics
            </p>
          </div>
  
          <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg transition duration-500 hover:opacity-50 hover:scale-95">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Bodhi Pay</h3>
            <p className="text-white">
              Flexible pay-as-you-query system using SOL
            </p>
          </div>
  
          <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg transition duration-500 hover:opacity-50 hover:scale-95">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Bodhi API</h3>
            <p className="text-white">
              Unified interface for seamless LLM integration
            </p>
          </div>
        </div>
      </div>
    );
  };
  
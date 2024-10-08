"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection } from "@solana/web3.js";
import {
  initializeMarketplace,
  addService,
  processAction,
  getMarketplaceData,
} from "@/lib/integration";

const MarketplaceComponent = () => {
  const wallet = useWallet();
  const connection = new Connection("https://api.devnet.solana.com");
  const [marketplaceData, setMarketplaceData] = useState<any>(null);

  // Fetch marketplace data
  const fetchMarketplace = async () => {
    if (!wallet.connected) return;

    try {
      const data = await getMarketplaceData(connection, wallet);
      setMarketplaceData(data);
    } catch (error) {
      console.error("Error fetching marketplace:", error);
    }
  };

  // Initialize the marketplace
  const handleInitialize = async () => {
    if (!wallet.connected) {
      alert("Please connect your wallet first");
      return;
    }

    try {
      const tx = await initializeMarketplace(connection, wallet);
      console.log("Initialization successful:", tx);
      await fetchMarketplace();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Add a new service
  const handleAddService = async () => {
    if (!wallet.connected) return;

    try {
      const tx = await addService(
        connection,
        wallet,
        0, // service index
        "Test Service",
        1000000, // input price (lamports)
        2000000, // output price (lamports)
      );
      console.log("Service added:", tx);
      await fetchMarketplace();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (wallet.connected) {
      fetchMarketplace();
    }
  }, [wallet.connected]);

  return (
    <div>
      <h1>Marketplace</h1>
      <button onClick={handleInitialize}>Initialize Marketplace</button>
      <button onClick={handleAddService}>Add Service</button>

      {marketplaceData && (
        <div>
          <h2>Services:</h2>
          {marketplaceData.services.map(
            (service: any, index: number) =>
              service.serviceName[0] !== 0 && (
                <div key={index}>
                  <h3>Service {index}</h3>
                  <p>
                    Name:{" "}
                    {String.fromCharCode(
                      ...service.serviceName.filter((x: number) => x !== 0),
                    )}
                  </p>
                  <p>Input Price: {service.inputTokenPrice.toString()}</p>
                  <p>Output Price: {service.outputTokenPrice.toString()}</p>
                </div>
              ),
          )}
        </div>
      )}
    </div>
  );
};

export default MarketplaceComponent;

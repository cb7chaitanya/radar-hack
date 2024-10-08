import { Connection, PublicKey, SystemProgram } from "@solana/web3.js";
import {
  Program,
  AnchorProvider,
  web3,
  utils,
  BN,
} from "@project-serum/anchor";
import { Buffer } from "buffer";
import { IDL, PubKey } from "@/utils/config";

// The PROGRAM_ID is your deployed contract's address on devnet
const PROGRAM_ID = new PublicKey(PubKey);
const MARKET_SEED = "market";

// Get the marketplace PDA (Program Derived Address)
export const getMarketplacePDA = () => {
  const [marketPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from(MARKET_SEED)],
    PROGRAM_ID,
  );
  return marketPDA;
};

// Setup the program instance
export const getProgram = (connection: Connection, wallet: any) => {
  const provider = new AnchorProvider(
    connection,
    wallet,
    AnchorProvider.defaultOptions(),
  );

  // You'll need to import your IDL here
  const program = new Program(IDL, PROGRAM_ID, provider);
  return program;
};

// Initialize the marketplace
export const initializeMarketplace = async (
  connection: Connection,
  wallet: any,
) => {
  try {
    const program = getProgram(connection, wallet);
    const marketPDA = getMarketplacePDA();

    const tx = await program.methods
      .initialize()
      .accounts({
        marketplace: marketPDA,
        user: wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    return tx;
  } catch (error) {
    console.error("Error initializing marketplace:", error);
    throw error;
  }
};

// Add a service to the marketplace
export const addService = async (
  connection: Connection,
  wallet: any,
  serviceIndex: number,
  serviceName: string,
  inputTokenPrice: number,
  outputTokenPrice: number,
) => {
  try {
    const program = getProgram(connection, wallet);
    const marketPDA = getMarketplacePDA();

    // Convert service name to bytes and pad to 32 bytes
    const serviceNameBytes = new Uint8Array(32);
    const encoder = new TextEncoder();
    const nameBytes = encoder.encode(serviceName);
    serviceNameBytes.set(nameBytes);

    const tx = await program.methods
      .addService(
        serviceIndex,
        Array.from(serviceNameBytes),
        new BN(inputTokenPrice),
        new BN(outputTokenPrice),
      )
      .accounts({
        marketplace: marketPDA,
        user: wallet.publicKey,
      })
      .rpc();

    return tx;
  } catch (error) {
    console.error("Error adding service:", error);
    throw error;
  }
};

// Process an action in the marketplace
export const processAction = async (
  connection: Connection,
  wallet: any,
  serviceIndex: number,
  inputTokenAmount: number,
  outputTokenAmount: number,
  userTokenAccount: PublicKey,
  platformTokenAccount: PublicKey,
) => {
  try {
    const program = getProgram(connection, wallet);
    const marketPDA = getMarketplacePDA();

    const tx = await program.methods
      .processAction(
        serviceIndex,
        new BN(inputTokenAmount),
        new BN(outputTokenAmount),
      )
      .accounts({
        marketplace: marketPDA,
        user: wallet.publicKey,
        userTokenAccount: userTokenAccount,
        platformTokenAccount: platformTokenAccount,
        tokenProgram: utils.token.TOKEN_PROGRAM_ID,
      })
      .rpc();

    return tx;
  } catch (error) {
    console.error("Error processing action:", error);
    throw error;
  }
};

// Get marketplace data
export const getMarketplaceData = async (
  connection: Connection,
  wallet: any,
) => {
  try {
    const program = getProgram(connection, wallet);
    const marketPDA = getMarketplacePDA();

    const marketplaceAccount =
      await program.account.marketplace.fetch(marketPDA);
    return marketplaceAccount;
  } catch (error) {
    console.error("Error fetching marketplace data:", error);
    throw error;
  }
};

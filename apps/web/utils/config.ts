import { Idl } from "@project-serum/anchor";

export const IDL: Idl = {
  version: "0.1.0",
  name: "marketplace",
  instructions: [
    {
      name: "initialize",
      accounts: [
        { name: "marketplace", isMut: true, isSigner: false },
        { name: "user", isMut: true, isSigner: true },
        { name: "systemProgram", isMut: false, isSigner: false },
      ],
      args: [],
    },
    {
      name: "addService",
      accounts: [
        { name: "marketplace", isMut: true, isSigner: false },
        { name: "user", isMut: true, isSigner: true },
      ],
      args: [
        { name: "serviceIndex", type: "u8" },
        { name: "serviceName", type: { array: ["u8", 32] } },
        { name: "inputTokenPrice", type: "u64" },
        { name: "outputTokenPrice", type: "u64" },
      ],
    },
    {
      name: "processAction",
      accounts: [
        { name: "marketplace", isMut: true, isSigner: false },
        { name: "user", isMut: true, isSigner: true },
        { name: "userTokenAccount", isMut: true, isSigner: false },
        { name: "platformTokenAccount", isMut: true, isSigner: false },
        { name: "tokenProgram", isMut: false, isSigner: false },
      ],
      args: [
        { name: "serviceIndex", type: "u8" },
        { name: "inputTokenAmount", type: "u64" },
        { name: "outputTokenAmount", type: "u64" },
      ],
    },
  ],
  accounts: [
    {
      name: "Marketplace",
      type: {
        kind: "struct",
        fields: [
          { name: "services", type: { array: [{ defined: "Service" }, 50] } },
        ],
      },
    },
  ],
  types: [
    {
      name: "Service",
      type: {
        kind: "struct",
        fields: [
          { name: "serviceName", type: { array: ["u8", 32] } },
          { name: "inputTokenPrice", type: "u64" },
          { name: "outputTokenPrice", type: "u64" },
        ],
      },
    },
  ],
  errors: [
    { code: 6000, name: "Unauthorized", msg: "Unauthorized user." },
    { code: 6001, name: "InvalidArgument", msg: "Service name is too long." },
    {
      code: 6002,
      name: "InvalidServiceIndex",
      msg: "Service index is invalid.",
    },
    { code: 6003, name: "InsufficientFunds", msg: "Insufficient funds." },
    { code: 6004, name: "ProgramError", msg: "General program error." },
  ],
};

export const PubKey = "En5VWoXjQRnpNHA3nDdC4E8mUMEDXCwGo5UowY3ASDoT";

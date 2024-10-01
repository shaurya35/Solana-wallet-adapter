import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useEffect } from "react";

export default function ShowBalance() {
  const { connection } = useConnection();
  const wallet = useWallet();

  async function getBalance() {
    const balance = await connection.getBalance(wallet.publicKey);
    document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
  }

  getBalance();

  return (
    <div>
      Balance: <span id="balance"></span> SOL
    </div>
  );
}

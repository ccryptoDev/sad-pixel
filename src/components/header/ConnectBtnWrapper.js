import React, { useMemo } from "react";
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import ConnectBtn from './ConnectBtn'

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

import {
  REACT_APP_TREASURY_ADDRESS,
  REACT_APP_CANDY_MACHINE_CONFIG,
  REACT_APP_CANDY_MACHINE_ID,
  REACT_APP_SOLANA_NETWORK,
  REACT_APP_SOLANA_RPC_HOST,
  REACT_APP_CANDY_START_DATE
} from '../../utils/constants'

const treasury = new anchor.web3.PublicKey(
  REACT_APP_TREASURY_ADDRESS
);

const config = new anchor.web3.PublicKey(
  REACT_APP_CANDY_MACHINE_CONFIG
);

const candyMachineId = new anchor.web3.PublicKey(
  REACT_APP_CANDY_MACHINE_ID
);

const network = REACT_APP_SOLANA_NETWORK;

const rpcHost = REACT_APP_SOLANA_RPC_HOST
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(REACT_APP_CANDY_START_DATE, 10);

const txTimeout = 30000;

const ConnectBtnWrapper = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
        getPhantomWallet(),
        getSlopeWallet(),
        getSolflareWallet(),
        getSolletWallet({ network }),
        getSolletExtensionWallet({ network })
    ],
    []
  );

  return (
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect={true}>
          <WalletDialogProvider>
            <ConnectBtn
              candyMachineId={candyMachineId}
              config={config}
              connection={connection}
              startDate={startDateSeed}
              treasury={treasury}
              txTimeout={txTimeout}
            />
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
  );
};

export default ConnectBtnWrapper;

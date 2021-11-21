import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BaseModal from '../modal/baseModal'
import BuyModal from '../modal/buyModal'
import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "../../utils/candy-machine";

const ConnectButton = styled(WalletDialogButton)`
  font-style: normal !important;
  font-weight: 300 !important;
  font-size: 18px !important;
  line-height: 24px !important;
  text-transform: uppercase !important;
  color: #fff !important;
  margin: 12px 16px !important;
  cursor: pointer !important;
  transition: 0.5s;
  padding: 0px !important;
  box-shadow: none;
  font-family: inherit !important;

  &:hover {
    color: rgb(171, 171, 171) !important;
    background-color: transparent !important;
  }
`;

const MintButton = styled.button`
  font-style: normal !important;
  font-weight: 300 !important;
  font-size: 18px !important;
  line-height: 24px !important;
  text-transform: uppercase !important;
  color: #fff !important;
  margin: 12px 16px !important;
  cursor: pointer !important;
  transition: 0.5s;
  padding: 0px !important;
  box-shadow: none;
  font-family: inherit !important;

  &:hover {
    color: rgb(171, 171, 171) !important;
    background-color: transparent !important;
  }
`;

const MintContainer = styled.div`
  button:hover {
    backgoround-color: white !important
  }
`; // add your styles here

export interface connectProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const ConnectBtn = (props: connectProps) => {
  const [show, setShow] = useState(false);

  const wallet = useAnchorWallet();

  const onMintModal = () => {
    setShow(true)
  }

  const closeModal = () => {
    setShow(false)
  }

  return (
    <MintContainer>
      {!wallet ? (
          <ConnectButton>Connect</ConnectButton>
        ) : (
          <MintButton
            onClick={onMintModal}
          >
            Mint
          </MintButton>
      )}
      <BaseModal 
        show={show} 
        closeModal={closeModal} 
        address={wallet && shortenAddress(wallet.publicKey.toBase58() || "")}
      >
        <BuyModal 
          closeModal={closeModal} 
          pricePerMint="0.099" 
          max="3"
          candyMachineId={props.candyMachineId}
          config={props.config}
          connection={props.connection}
          startDate={props.startDate}
          treasury={props.treasury}
          txTimeout={props.txTimeout} 
        />
      </BaseModal>
    </MintContainer>
  )
}

export default ConnectBtn
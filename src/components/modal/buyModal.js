import React, { useState, useEffect } from 'react'

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

const BuyModal = (props) => {
  const { closeModal, pricePerMint, max } = props

  const [isMinting, setIsMinting] = useState(false);
  const [startDate, setStartDate] = useState(new Date(props.startDate));
  const [balance, setBalance] = useState();
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [alertState, setAlertState] = useState({})

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState({});

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);
  
  const [totalAmount, setTotalAmount] = useState(pricePerMint)
  const [amount, setAmount] = useState(1)

  const handleAmount = (num) => {
    setAmount(num)
    setTotalAmount( (pricePerMint * num).toFixed(3) )
  }

  const handleMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  }

  return (
    <div className="modal-body">
      <br />
      <h3>minting has begun</h3>
      <div className="coupon" style={{display: `none`}}>
        <div className="coupon-inner">
          <input type="text" id="coupon-code" name="coupon-code" placeholder="Paste mint coupon code" />
          <div className="coupon-label">
            <label>Price per mint</label>
            <span>{pricePerMint} ETH</span>
          </div>
        </div>
      </div>
      <div className="mint-amount">
        <div className="amount-inner">
          <div className="max" style={{display: `none`}}>max <label>{max}</label></div>
          <div className="amount-input">
            <input type="number" id="amount" name="amount" min={1} onChange={(e) => handleAmount(e.target.value)} value={amount} />
            <label></label>
          </div>
          <div className="mint-summary">
            <label>Total</label>
            <span>{totalAmount} SOL</span>
          </div>
          <div className="mint-btn" onClick={handleMint}>MINT</div>
        </div>
      </div>
    </div>
  )
}

export default BuyModal
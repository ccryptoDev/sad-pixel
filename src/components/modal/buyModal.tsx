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
  mintMultipleToken,
  shortenAddress,
} from "../../utils/candy-machine";

export interface connectProps {
  closeModal: () => void;
  max: string;
  pricePerMint: string;
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

interface Error {
  code: number;
  msg: string
}

const BuyModal = (props: connectProps) => {
  const { closeModal, pricePerMint, max, txTimeout, connection } = props

  const [successMint, setSuccessMint] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [startDate, setStartDate] = useState(new Date(props.startDate));
  const [balance, setBalance] = useState(0);
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [alertState, setAlertState] = useState({})

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

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
        wallet as anchor.Wallet,
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

  const handleAmount = (num: number) => {
    setAmount(num)
    setTotalAmount( (parseFloat(pricePerMint) * num).toFixed(3) )
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
          setSuccessMint(true)
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
      setAlertState({
        open: true,
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
  };

  const handleMultiMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const signedTransactions: any = await mintMultipleToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury,
          amount
        );
        
        const promiseArray = []

        for (let index = 0; index < signedTransactions.length; index++) {
          const tx = signedTransactions[index];
          promiseArray.push(awaitTransactionSignatureConfirmation(
            tx,
            txTimeout,
            connection,
            "singleGossip",
            true
          ))
        }

        const allTransactionsResult = await Promise.all(promiseArray)
        let totalSuccess = 0;
        let totalFailure = 0;

        for (let index = 0; index < allTransactionsResult.length; index++) {
          const transactionStatus = allTransactionsResult[index];
          if (!transactionStatus?.err) {
            totalSuccess += 1
          } else {
            totalFailure += 1
          }
        }

        if (totalFailure) {
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
      // let message = error.msg || "Minting failed! Please try again!";
      // if (!error.msg) {
      //   if (error.msg.indexOf("0x138")) {
      //   } else if (error.message.indexOf("0x137")) {
      //     message = `SOLD OUT!`;
      //   } else if (error.message.indexOf("0x135")) {
      //     message = `Insufficient funds to mint. Please fund your wallet.`;
      //   }
      // } else {
      //   if (error.code === 311) {
      //     message = `SOLD OUT!`;
      //     setIsSoldOut(true);
      //   } else if (error.code === 312) {
      //     message = `Minting period hasn't started yet.`;
      //   }
      // }

      setAlertState({
        open: true,
        // message,
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
      {!successMint && (
      <>
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
              <input type="number" id="amount" name="amount" min={1} max={1} onChange={(e) => handleAmount(parseFloat(e.target.value))} value={amount} />
              <label></label>
            </div>
            <div className="mint-summary">
              <label>Total</label>
              <span>{totalAmount} SOL</span>
            </div>
            <div className="mint-btn" onClick={handleMint}>MINT</div>
          </div>
        </div>
      </>)}
      {successMint && (
        <>
          <h3 className="main-font">Minting Success!</h3>
          <div className="success-message">
            <p>Welcome to the</p>
            <p>Sad Pixels Community</p>
          </div>
        </>
      )}
    </div>
  )
}

export default BuyModal
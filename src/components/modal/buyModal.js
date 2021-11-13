import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { purchaseToad } from '../../utils/useWeb3'

const BuyModal = (props) => {
  const { closeModal, pricePerMint, max } = props

  const [totalAmount, setTotalAmount] = useState(pricePerMint)
  const [amount, setAmount] = useState(1)

  const handleAmount = (num) => {
    setAmount(num)
    setTotalAmount(pricePerMint * num)
  }

  const handleMint = async () => {
    try{
      const result = await purchaseToad(amount, totalAmount)
      if(result) {
        closeModal();
      }
    } catch(e) {
      console.log('error', e.error.message)
    }
  }

  return (
    <div className="modal-body">
      <br />
      <h3>presale has begun</h3>
      <div className="coupon">
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
          <div className="max">max <label>{max}</label></div>
          <div className="amount-input">
            <input type="number" id="amount" name="amount" max={max} min={1} onChange={(e) => handleAmount(e.target.value)} value={amount} />
            <label></label>
          </div>
          <div className="mint-summary">
            <label>Total</label>
            <span>{totalAmount} ETH</span>
          </div>
          <div className="mint-btn" onClick={handleMint}>MINT</div>
        </div>
      </div>
    </div>
  )
}

export default BuyModal
import React from 'react'
import "../assets/Transactions.css";
import TransactionDetails from "./TransactionDetails";

const Transactions = () => {
  return (
    <div>
      <TransactionDetails header={"Fund Transfer"} />
      <TransactionDetails header={"Multi currency transfer"} />
    </div>
  );
};

export default Transactions
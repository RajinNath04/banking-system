import React from 'react'
import "../assets/Transactions.css";

const Transactions = () => {
  return (
    <div>
      <div className="container p-4 transaction-container">
        <h3 className="transaction-account-number">Fund Transfer</h3>
        <div className="m-3 transaction-account-number">
          Account Number: <b>1234567890</b>{" "}
        </div>
        <div className="m-3">
          <input
            type="text"
            className="form-control"
            // value={filterValue}
            // onChange={(e) => setFilterValue(e.target.value)}
            placeholder="Enter Account Number"
          />
        </div>
        <div className="m-3">
          <input
            type="text"
            className="form-control"
            // value={filterValue}
            // onChange={(e) => setFilterValue(e.target.value)}
            placeholder="Enter Amount"
          />
        </div>
        <div className="m-3">
          <button>Send</button>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default Transactions
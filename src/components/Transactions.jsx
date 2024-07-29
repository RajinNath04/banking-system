import React from 'react'
import "../assets/Transactions.css";

const Transactions = () => {
  return (
    <div>
      <div className="container p-4 transaction-container">
        <h3 className="transaction-account-number">Fund Transfer</h3>
        <div className="m-3 transaction-account-number transaction-account">
          Account Number: <b>1234567890</b>{" "}
        </div>
        <div className="m-3 transaction-input-container">
          <div className="transaction-input mr-2">
            <input
              type="text"
              className="form-control"
              // value={filterValue}
              // onChange={(e) => setFilterValue(e.target.value)}
              placeholder="Enter Account Number"
            />
          </div>
          <div className="transaction-input mr-2">
            <input
              type="text"
              className="form-control"
              // value={filterValue}
              // onChange={(e) => setFilterValue(e.target.value)}
              placeholder="Enter Amount"
            />
          </div>
        </div>

        <div className="m-3 transaction-button-section">
          <div className="transaction-button">
            <button>Send</button>
          </div>
        </div>
      </div>
      <div className="container p-4 transaction-container mt-4">
        <h3 className="transaction-account-number">Multi currency transfer</h3>
        <div className="m-3 transaction-account-number transaction-account">
          Account Number: <b>1234567890</b>{" "}
        </div>
        <div className="m-3 transaction-input-container">
          <div className="transaction-input mr-2">
            <input
              type="text"
              className="form-control"
              // value={filterValue}
              // onChange={(e) => setFilterValue(e.target.value)}
              placeholder="Enter Account Number"
            />
          </div>
          <div className="transaction-input mr-2">
            <input
              type="text"
              className="form-control"
              // value={filterValue}
              // onChange={(e) => setFilterValue(e.target.value)}
              placeholder="Enter Amount"
            />
          </div>
        </div>

        <div className="m-3 transaction-button-section">
          <div className="transaction-button">
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions
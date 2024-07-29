import React from 'react'
import "../assets/Transactions.css";
import Currency from "../data/Currency.json";

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
          <div>
            <select
              className="form-select mr-3"
              aria-label="Default select example"
              // onChange={(e) => setFilterSearch(e.target.value)}
              defaultValue={""}
              // value={filterSearch}
            >
              <option defaultValue={""} selected>
                Select Currency
              </option>
              {Currency.currency.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
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
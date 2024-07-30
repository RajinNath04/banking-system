import React, { useState } from "react";
import Currency from "../data/Currency.json";

const TransactionDetails = ({ header }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmout] = useState("");
  const [currencyType, setCurrencyType] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const errors = validateForm();
    const fundTransfer =
      accountNumber.length === 10 && accountNumber !== "" && amount !== "";
    const multiTransfer = currencyType !== "";

    if (Object.keys(errors).length === 0) {
      if (fundTransfer && header === "Fund Transfer") {
        alert(`Fund transfered to Account Number: ${accountNumber} `);
        setAccountNumber("");
        setAmout("");
        setErrors({});
      } else if (
        fundTransfer &&
        multiTransfer &&
        header === "Multi currency transfer"
      ) {
        alert(`Multi currency transfered to Account Number: ${accountNumber} `);
        setAccountNumber("");
        setAmout("");
        setCurrencyType("");
        setErrors({});
      }
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (accountNumber.trim() === "") {
      errors.phone = "Account Number is required";
    }
    if (accountNumber.length < 10) {
      errors.phone = "Account Number is Invalid";
    }
    if (!/^[0-9]{10,15}$/.test(accountNumber)) {
      errors.phone = "Account Number is Invalid";
    }
    if (amount.trim() === "") {
      errors.amount = "Amount is required";
    }
    if (isNaN(amount)) {
      errors.amount = "Amount is Invalid";
    }
    if (header === "Multi currency transfer") {
      if (currencyType.trim() === "") {
        errors.currencyType = "Currency Type is required";
      }
    }

    return errors;
  };

  return (
    <div>
      <div className="container p-4 transaction-container mt-4">
        <h3 className="transaction-account-number">{header}</h3>
        <div className="m-3 transaction-account-number transaction-account">
          Account Number: <b>1234567890</b>{" "}
        </div>
        <div className="m-3 transaction-input-container">
          <div className="transaction-input mr-2">
            <input
              type="text"
              className="form-control"
              value={accountNumber}
              maxLength={10}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter Account Number"
            />
            {errors.accountNumber && <span className="error-fields">{errors.accountNumber}</span>}
          </div>
          <div className="transaction-input mr-2">
            <input
              type="text"
              className="form-control"
              value={amount}
              onChange={(e) => setAmout(e.target.value)}
              placeholder="Enter Amount"
            />
            {errors.amount && <span className="error-fields">{errors.amount}</span>}
          </div>
          {header === "Multi currency transfer" && (
            <div>
              <select
                className="form-select mr-3"
                aria-label="Default select example"
                onChange={(e) => setCurrencyType(e.target.value)}
                defaultValue={""}
                value={currencyType}
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
              {errors.currencyType && <span className="error-fields">{errors.currencyType}</span>}
            </div>
          )}
        </div>

        <div className="m-3 transaction-button-section">
          <div className="transaction-button">
            <button type="submit" onClick={() => handleSubmit()}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;

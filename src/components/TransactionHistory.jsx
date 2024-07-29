import React from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../assets/Users.css";

const TransactionHistory = ({ transactionData, setIsTransactionEnabled }) => {
  return (
    <div>
      <div className="mb-3 button-container">
        <button
          className="btn btn-danger transaction-button"
          onClick={() => setIsTransactionEnabled(false)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <div>Back to Users List</div>
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td>{item.type}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionHistory;

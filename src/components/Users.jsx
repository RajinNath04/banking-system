import React, { useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import UsersData from "../data/Users.json";
import "../assets/Users.css";
import TransactionHistory from "./TransactionHistory";

const Users = ({ setData, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterSearch, setFilterSearch] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [isTransactionEnabled, setIsTransactionEnabled] = useState(false);
  const [transactionData, setTransationData] = useState([]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const searchButton = () => {
    setData(UsersData.users);
    if (filterValue !== "" && filterSearch === "name") {
      const filterResult = UsersData.users.filter((item) =>
        item.name.toLowerCase().includes(filterValue.toLowerCase())
      );
      setData(filterResult);
    } else if (filterValue !== "" && filterSearch === "accountNumber") {
      const filterResult = UsersData.users.filter((item) =>
        item.bankAccount.accountNumber.includes(filterValue)
      );
      setData(filterResult);
    } else if (filterValue !== "" && filterSearch === "balance") {
      const filterResult = UsersData.users.filter((item) =>
        item.bankAccount.balance.toString().includes(filterValue)
      );
      setData(filterResult);
    }
  };

  const clearButton = () => {
    setFilterValue("");
    setData(UsersData.users);
    setFilterSearch("");
  };

  const transactionsInfo = (transactions) => {
    setIsTransactionEnabled(true);
    setTransationData(transactions);
  };

  return (
    <div>
      {transactionData.length > 0 && isTransactionEnabled ? (
        <TransactionHistory
          transactionData={transactionData}
          setIsTransactionEnabled={setIsTransactionEnabled}
        />
      ) : (
        <>
          <div className="search-container mb-3">
            <div className="mr-3">
              <input
                type="text"
                className="form-control"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                placeholder="Search with.."
              />
            </div>
            <div className="mr-3">
              <select
                className="form-select mr-3"
                aria-label="Default select example"
                onChange={(e) => setFilterSearch(e.target.value)}
                defaultValue={""}
                value={filterSearch}
              >
                <option defaultValue={""} selected>
                  Open to select filter
                </option>
                <option value="name">Name</option>
                <option value="accountNumber">Account Number</option>
                <option value="balance">Balance</option>
              </select>
            </div>
            <div className="mr-3">
              <button
                className="btn btn-success"
                type="button"
                onClick={() => searchButton()}
              >
                Search
              </button>
            </div>
            <div>
              <button
                className="btn btn-danger mr-3"
                type="button"
                onClick={() => clearButton()}
              >
                Clear
              </button>
            </div>
          </div>
          <h4>Total Accounts: {data.length}</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Account Number</th>
                <th>Balance</th>
                <th>Transaction History</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.bankAccount.accountNumber}</td>
                  <td>{item.bankAccount.balance}</td>
                  <td>
                    <button
                      onClick={() =>
                        transactionsInfo(item.bankAccount.transactions)
                      }
                    >
                      Transactions History
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            {Array.from({ length: Math.ceil(data.length / 10) }, (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={currentPage === i + 1}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Last
              onClick={() => handlePageChange(Math.ceil(data.length / 10))}
            />
          </Pagination>
        </>
      )}
    </div>
  );
};

export default Users;

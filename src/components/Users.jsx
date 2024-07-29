import React, { useState, useEffect } from "react";
import { Table, Pagination } from "react-bootstrap";
import UsersData from "../data/Users.json";
import "../assets/Users.css";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterSearch, setFilterSearch] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [data, setData] = useState(UsersData.users);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterResult = data.filter((item) => {
    return item.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const searchButton = () => {
    // if (filterValue !== "" && filter) {
    // }
  };

  return (
    <div>
      <div className="search-container mb-3">
        <div className="mr-3">
          <input
            type="search"
            className="form-control"
            typeof="text"
            onChange={(e) => setFilterValue(e.target.value)}
            placeholder="search with.."
          />
        </div>
        <div className="mr-3">
          <select
            className="form-select mr-3"
            aria-label="Default select example"
            onChange={(e) => setFilterSearch(e.target.value)}
            defaultValue={""}
          >
            <option selected>Open to select filter</option>
            <option value="name">Name</option>
            <option value="accountNumber">Account Number</option>
            <option value="balance">Balance</option>
          </select>
        </div>
        <div>
          <button
            className="btn btn-success mr-3"
            type="button"
            onClick={() => searchButton()}
          >
            Search
          </button>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Account Number</th>
            <th>Balance</th>
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
    </div>
  );
};

export default Users;

import React, { useState } from "react";
import "../assets/Account.css";

const Account = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [balance, setBalance] = useState(10000);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const newUser = {
        firstName,
        lastName,
        dateOfBirth,
        address,
        accountNumber: generateAccountNumber(),
        balance,
        isActive: true,
      };
      setUsers([...users, newUser]);
      setFirstName("");
      setLastName("");
      setDateOfBirth("");
      setAddress("");
      setErrors("");
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (firstName.trim() === "") {
      errors.firstName = "First name is required";
    }
    if (lastName.trim() === "") {
      errors.lastName = "Last name is required";
    }
    if (dateOfBirth.trim() === "") {
      errors.dateOfBirth = "Date of birth is required";
    }
    if (address.trim() === "") {
      errors.address = "Address is required";
    }
    if (!isValidDate(dateOfBirth)) {
      errors.dateOfBirth = "Invalid date of birth";
    }
    return errors;
  };

  const isValidDate = (date) => {
    const dateParts = date.split("-");
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);
    const dateObject = new Date(year, month - 1, day);
    return (
      dateObject.getFullYear() === year &&
      dateObject.getMonth() === month - 1 &&
      dateObject.getDate() === day
    );
  };

  const generateAccountNumber = () => {
    const accountNumber = Math.floor(Math.random() * 10000000000);
    return accountNumber.toString();
  };

  return (
    <div className="login-section">
      <div className="login-container">
        <h2>Create Saving Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
          <div className="input-container">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
          <div className="input-container">
            <label>Date of Birth:</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            {errors.dateOfBirth && <span>{errors.dateOfBirth}</span>}
          </div>
          <div className="input-container">
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <span>{errors.address}</span>}
          </div>
          <button type="submit">Create Account</button>
        </form>
        <h2>Users</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <p>
                {user.firstName} {user.lastName}
              </p>
              <p>Account Number: {user.accountNumber}</p>
              <p>Balance: {user.balance}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Account;

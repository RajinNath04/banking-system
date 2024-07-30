import React, { useState } from "react";
import "../assets/Account.css";

const Account = ({ setData, data, setTab }) => {
  const [firstName, setFirstName] = useState("");
  const [midName, setMidName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const balance = 10000;
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
        phone,
        email,
        address,
        city,
        pin,
        accountNumber: generateAccountNumber(),
        balance,
        isActive: true,
      };
      setUsers([...users, newUser]);
      setData([...data, newUser]);
      setTab("Users");
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
    if (email.trim() === "") {
      errors.email = "Email is required";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is InValid";
    }
    if (phone.trim() === "") {
      errors.phone = "Phone is required";
    }
    if (!/^[0-9]{10,15}$/.test(phone)) {
      errors.phone = "Phone Number is Invalid";
    }
    if (address.trim() === "") {
      errors.address = "Address is required";
    }
    if (city.trim() === "") {
      errors.city = "City is required";
    }
    if (pin.trim() === "") {
      errors.pin = "Pin is required";
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
    <div className="acc-section">
      <div className="acc-container">
        <h2>Create Saving's Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="acc-input-wrapper">
            <div className="acc-input-container">
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <span>{errors.firstName}</span>}
            </div>
            <div className="acc-input-container acc-input-style">
              <label>Middle Name:</label>
              <input
                type="text"
                value={midName}
                onChange={(e) => setMidName(e.target.value)}
              />
            </div>
            <div className="acc-input-container acc-input-style">
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <span>{errors.lastName}</span>}
            </div>
          </div>
          <div className="acc-input-wrapper">
            <div className="acc-input-container">
              <label>DOB</label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
              {errors.dateOfBirth && <span>{errors.dateOfBirth}</span>}
            </div>
            <div className="acc-input-container acc-input-style">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className="acc-input-container acc-input-style">
              <label>Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <span>{errors.phone}</span>}
            </div>
          </div>
          <div className="acc-input-wrapper">
            <div className="acc-input-container">
              <label>Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.address && <span>{errors.address}</span>}
            </div>
            <div className="acc-input-container acc-input-style">
              <label>City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {errors.city && <span>{errors.city}</span>}
            </div>
            <div className="acc-input-container acc-input-style">
              <label>Pin Code</label>
              <input
                type="text"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
              {errors.pin && <span>{errors.pin}</span>}
            </div>
          </div>
          <button className="acc-button" type="submit">
            Create Account
          </button>
        </form>
        {/* <h2>Users</h2>
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
        </ul> */}
      </div>
    </div>
  );
};

export default Account;

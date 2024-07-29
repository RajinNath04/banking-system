import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Home.css";
import Account from "../components/Account";
import Users from "../components/Users";
import Transactions from "../components/Transactions";

const Home = () => {
  const [tab, setTab] = useState("Account");
  const [tabActive, setTabActive] = useState(0);
  const navigate = useNavigate();

  const tabList = [
    { id: 1, name: "Account" },
    { id: 2, name: "Users" },
    { id: 3, name: "Transaction" },
  ];

  const toggleTab = (index) => {
    setTabActive(tabActive === index ? null : index);
    setTab(tabList[index].name);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="logo">
          <h2>Banking System</h2>
        </div>
        <ul className="menu">
          <li>
            <button onClick={() => logout()}>Logout</button>
          </li>
        </ul>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {tabList.map((item, index) => {
              return (
                <button
                  className={`nav-item nav-link tab-item ${
                    tabActive === index ? "active" : null
                  }`}
                  key={item.id}
                  onClick={() => toggleTab(index)}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
      <div className="content">
        {tab === "Account" && <Account />}
        {tab === "Users" && <Users />}
        {tab === "Transaction" && <Transactions />}
      </div>
    </div>
  );
};

export default Home;

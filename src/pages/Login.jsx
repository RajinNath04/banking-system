import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Login.css";

const users = [
  { id: 1, email: "admin@example.com", password: "password123", role: "admin" },
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setIsLoggedIn(true);
      setError("");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home", { replace: true });
    } else {
      setError("Invalid credentials");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-section">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container password-container">
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={togglePasswordVisibility} className="eye-icon">
                {showPassword ? (
                  <i className="fas fa-eye-slash" />
                ) : (
                  <i className="fas fa-eye" />
                )}
              </span>
            </div>
          </div>
          <button type="submit">Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {isLoggedIn && <p>Welcome, {email}!</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;

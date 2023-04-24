import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Registr.css"
const Register = ({ setUser }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const clickSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) return;
    setUser({ name: name, password: password });
    navigate("/Dashboard");
  };

  return (
    <div className="login-container">
      <form id="login-form" className="login-form" onSubmit={clickSubmit}>
        <h2>Login</h2>
        <div className="form-control">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
        <div className="signup-link">
         
        </div>
      </form>
    </div>
  );
};

export default Register;

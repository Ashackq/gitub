import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig.js";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setEmail("");
      setPassword("");
      setLoggedIn(true);
      props.handleLogin();
       // Assuming this function updates the login status in your parent component
       
    } catch (error) {
   
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-form-container">
      <h1>Your Certificates</h1>
      <h5>are few clicks away</h5>
      <form className="login-form py-5" onSubmit={handleSubmit}>
        <input
          type="email" // Use "email" type for email input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password" // Use "password" type for password input
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    
      {loggedIn && <Link to="/congo">Get Certificates</Link>}
    </div>
  );
};

export default Login;

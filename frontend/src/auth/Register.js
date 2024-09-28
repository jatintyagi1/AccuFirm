import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../config/serverApiConfig";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== passwordCheck) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const newUser = { email, password, displayName };
      await Axios.post(`${API_BASE_URL}register`, newUser);

      const loginRes = await Axios.post(`${API_BASE_URL}login`, {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem(ACCESS_TOKEN_NAME, loginRes.data.token);
      navigate("/");
    } catch (err) {
      console.error(err.response?.data); // chaining for safety
      if (err.response?.data?.msg) {
        setError(err.response.data.msg);
      } else {
        setError("An error occurred. Please try again."); // Fallback error message
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h2>Register</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError("")} />
      )}
      <form className="form" onSubmit={submit}>
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="register-password-check">Verify Password</label>
        <input
          id="register-password-check"
          type="password"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          required
        />

        <label htmlFor="register-display-name">Display Name</label>
        <input
          id="register-display-name"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />

        <input type="submit" value="Register" disabled={loading} /> {/* Disable while loading */}
      </form>
    </div>
  );
}

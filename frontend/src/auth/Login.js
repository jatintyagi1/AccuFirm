import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../config/serverApiConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(`${API_BASE_URL}login`, loginUser);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem(ACCESS_TOKEN_NAME, loginRes.data.token);
      navigate("/");
    } catch (err) {
      console.log(err.response?.data);
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h2>Log in</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError("")} />
      )}
      <form className="form" onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input type="submit" value="Log in" disabled={loading} />
      </form>
    </div>
  );
}

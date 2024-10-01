import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../config/serverApiConfig";
import Axios from "axios";

// Logout function
export function logout(setUserData) {
  localStorage.removeItem(ACCESS_TOKEN_NAME);
  setUserData({
    token: undefined,
    user: undefined,
  });
}

// Login function
export const login = async (loginUser, setUserData, setError, navigate) => {
  try {
    const loginRes = await Axios.post(`${API_BASE_URL}login`, loginUser);
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem(ACCESS_TOKEN_NAME, loginRes.data.token);
    navigate('/');  
  } catch (err) {
    console.log(err.response.data);
    if (err.response && err.response.data.error) {
      setError(err.response.data.error);
    }
  }
};

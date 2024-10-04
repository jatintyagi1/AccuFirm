import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../config/serverApiConfig";
import Cookies from "js-cookie";
import axios from "axios";
import errorHandler from "../request/errorhandler";
import successHandler from "../request/successHandler";
import storePersist from "../redux/storePersist";

// Token management
export const token = {
  get: () => Cookies.get(ACCESS_TOKEN_NAME),

  set: (newToken) => {
    if (newToken) {
      Cookies.set(ACCESS_TOKEN_NAME, newToken);
    }
  },

  remove: () => Cookies.remove(ACCESS_TOKEN_NAME),
};

// Login function
export const login = async (loginUserData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, loginUserData);
    
    if (response?.data?.result?.token) {
      token.set(response.data.result.token);
    }

    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

// Logout function
export const logout = () => {
  token.remove();
  storePersist.clear();
};

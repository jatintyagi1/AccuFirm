import axios from "axios";
import { API_BASE_URL } from "../config/serverApiConfig";

// Function to handle Axios requests
const handleRequest = async (request) => {
  try {
    const response = await request;
    return response.data; // Return the response data directly
  } catch (error) {
    // Handle error consistently
    return error.response ? error.response.data : { success: false, message: "Network error" };
  }
};

export const createSync = async (target, jsonData) => {
  return handleRequest(axios.post(`${API_BASE_URL}${target}/create`, jsonData));
};

export const readSync = async (target, id) => {
  return handleRequest(axios.get(`${API_BASE_URL}${target}/read/${id}`));
};

export const updateSync = async (target, id, jsonData) => {
  return handleRequest(axios.patch(`${API_BASE_URL}${target}/update/${id}`, jsonData));
};

export const deleteSync = async (target, id) => {
  return handleRequest(axios.delete(`${API_BASE_URL}${target}/delete/${id}`));
};

export const filterSync = async (target, options = {}) => {
  const query = new URLSearchParams({
    filter: options.filter || "",
    equal: options.equal || "",
  }).toString();

  return handleRequest(axios.get(`${API_BASE_URL}${target}/filter?${query}`));
};

export const axiosRequest = () => {
  const CancelToken = axios.CancelToken;
  return CancelToken.source(); // Return the source directly
};

export const searchSync = async (target, source, options = {}) => {
  const query = new URLSearchParams({
    fields: options.fields || "",
    q: options.question || "",
  }).toString();

  return handleRequest(axios.get(`${API_BASE_URL}${target}/search?${query}`, { cancelToken: source.token }));
};

export const listSync = async (target, options = {}) => {
  const query = new URLSearchParams({
    page: options.page || "",
    items: options.items || "",
  }).toString();

  return handleRequest(axios.get(`${API_BASE_URL}${target}/list?${query}`));
};

export const postDataSync = async (targetUrl, jsonData) => {
  return handleRequest(axios.post(`${API_BASE_URL}${targetUrl}`, jsonData));
};

export const getDataSync = async (targetUrl) => {
  return handleRequest(axios.get(`${API_BASE_URL}${targetUrl}`));
};

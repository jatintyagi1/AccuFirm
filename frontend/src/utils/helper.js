import { parse } from 'querystring';

/* A function that parses the query parameters from the URL */

export const getPageQuery = () => {
  const queryString = window.location.search; // More reliable way to access the query string
  return parse(queryString.slice(1)); // Remove the '?' and parse
};

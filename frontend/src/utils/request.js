/**
 * request - Network request utility
 * More detailed API documentation: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';

// Status code messages
const codeMessage = {
  200: 'The server successfully returned the requested data.',
  201: 'Successfully created or modified data.',
  202: 'A request has entered the background queue (asynchronous task).',
  204: 'Successfully deleted data.',
  400: 'There was an error with the request, and the server did not create or modify any data.',
  401: 'User does not have permission (token, username, or password is incorrect).',
  403: 'User is authorized, but access is forbidden.',
  404: 'The request is for a non-existent record, and the server did not take any action.',
  406: 'The requested format is not available.',
  410: 'The requested resource has been permanently deleted and is no longer obtainable.',
  422: 'A validation error occurred when creating an object.',
  500: 'An error occurred on the server. Please check the server.',
  502: 'Bad gateway.',
  503: 'Service unavailable, the server is temporarily overloaded or under maintenance.',
  504: 'Gateway timeout.',
};

/**
 * Error handling function
 */
const errorHandler = (error) => {
  const { response } = error;

  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    notification.error({
      message: `Request error ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: 'There was a network error and unable to connect to the server.',
      message: 'Network Error',
    });
  }

  return response;
};

/**
 * Configure the default parameters for request requests
 */
const request = extend({
  errorHandler,
  // Default error handling
  credentials: 'include', // Whether to include cookies with requests by default
});

export default request;

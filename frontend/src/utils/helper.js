import { parse } from 'querystring';

/* eslint no-useless-escape: 0 import/prefer-default-export: 0 */

const reg = /(((^https?:\/\/)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www\.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

/**
 * Check if the given path is a valid URL.
 * @param {string} path - The URL string to test.
 * @returns {boolean} - True if the path is a valid URL, false otherwise.
 */
export const isUrl = (path) => reg.test(path);

/**
 * Check if the current environment is Ant Design Pro.
 * @returns {boolean} - True if in Ant Design Pro environment, false otherwise.
 */
export const isAntDesignPro = () => {
  return process.env.ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site' ||
         window.location.hostname === 'preview.pro.ant.design';
};

/**
 * Check if the current environment is Ant Design Pro or in development mode.
 * @returns {boolean} - True if in Ant Design Pro or development mode, false otherwise.
 */
export const isAntDesignProOrDev = () => {
  const { NODE_ENV } = process.env;

  return NODE_ENV === 'development' || isAntDesignPro();
};

/**
 * Get the page query parameters from the URL.
 * @returns {object} - Parsed query parameters.
 */
export const getPageQuery = () => {
  const queryString = window.location.href.split('?')[1];
  return queryString ? parse(queryString) : {};
};

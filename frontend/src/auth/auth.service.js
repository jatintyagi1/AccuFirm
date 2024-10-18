import { API_BASE_URL } from '../config/serviceApiConfig';

import axios from 'axios';
import errorHandler from '../request/errorHandler';
import successHandler from '../request/succeshandler';

export const register = async ({ registerData }) => {
    try {
        const response = await axios.post(API_BASE_URL + `register`, registerData);

        const { status, data } = response;

        successHandler(
            { data, status },
            {
                notifyOnSuccess: true,
                notifyOnFailed: true,
            }
        );
        return data;
    } catch (error) {
        return errorHandler(error);
    }
}


export const login = async ({ loginData }) => {
    try {
        const response = await axios.post(
            API_BASE_URL + `login?timestamp=${new Date().getTime()}`,
            loginData
        );

        const { status, data } = response;

        successHandler(
            { data, status },
            {
                notifyOnSuccess: false,
                notifyOnFailed: true,
            }
        );
        return data;
    } catch (error) {
        errorHandler(error)
    }
}


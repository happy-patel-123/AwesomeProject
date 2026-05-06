export const BASE_URL = 'http://127.0.0.1:5001/api/';

import NetInfo from '@react-native-community/netinfo';

// Function to check internet connectivity
const checkInternet = async () => {
    const state = await NetInfo.fetch();
    return state.isConnected;
};

// API request function
const request = async (endpoint, method = 'GET', data = null, headers = {}) => {
    const isConnected = await checkInternet();

    if (!isConnected) {
        console.error('No Internet Connection');
        throw new Error(
            'No Internet Connection. Please check your network and try again.',
        );
    }

    try {
        const requestOptions = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: data ? JSON.stringify(data) : null,
        };

        const response = await fetch(`${BASE_URL}${endpoint}`, requestOptions);
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Something went wrong');
        }

        return result;
    } catch (error) {
        // console.error('API Request Error:', error.message);
        throw error;
    }
};

// Exporting API methods
export const get = async (endpoint, headers = {}) =>
    await request(endpoint, 'GET', null, headers);
export const post = async (endpoint, data, headers = {}) =>
    await request(endpoint, 'POST', data, headers);
export const put = async (endpoint, data, headers = {}) =>
    await request(endpoint, 'PUT', data, headers);
export const del = async (endpoint, headers = {}) =>
    await request(endpoint, 'DELETE', null, headers);

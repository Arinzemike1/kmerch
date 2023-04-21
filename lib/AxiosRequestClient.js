import axios from 'axios'
import config from '../config/config'

const apiBaseUrl = config.api.base_url;

const getHeaders = (addContentType = true, ContentType = '') => {
    const headers = {
        source: 'merchant_web',
        mode: config.web.mode,
    };

    if (addContentType) {
        headers['Content-Type'] = ContentType || 'application/json';
    }

    // if (store.getState().auth.sessionToken) {
    //     headers['Authorization-Token'] = `bearer ${store.getState().auth.sessionToken}`;
    // }

    return headers;
};

const axiosRequestClient = (options = {}) => {
    const headers = getHeaders();
    const opts = Object.assign(headers, options);

    return axios.create({
        baseURL: apiBaseUrl,
        timeout: 120000,
        headers: opts,
    });
};

export default axiosRequestClient;

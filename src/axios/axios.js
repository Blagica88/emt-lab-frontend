import axios from 'axios';

export const AUTH_TOKEN = 'auth_token';

const instance = axios.create({
    baseURL: `http://localhost:8080`,
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
});

export default instance;
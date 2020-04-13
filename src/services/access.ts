/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios';
import qs from 'qs';

export interface Token {
    access_token?: string;
    expires_in?: number;
    error?: any;
}

const postToken = async (): Promise<Token> => {
    const url = process.env.API_ACCOUNTS_URL;

    const clientId = process.env.CLIENT_ID;

    const clientSecret = process.env.CLIENT_SECRET;

    const headers = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
            username: clientId,
            password: clientSecret,
        },
    };

    const data = {
        grant_type: 'client_credentials',
    };

    try {
        const response = await axios.post(`${url}/api/token`, qs.stringify(data), headers);
        return response.data;
    } catch (err) {
        return {
            error: err,
        };
    }
};

const expireToken = (expireIn: number): Date => {
    let timeObject = new Date();

    const expires = (timeObject = new Date(timeObject.getTime() + expireIn * 1000));

    return expires;
};

const setToken = async (): Promise<boolean> => {
    const requestToken = await postToken();

    if (!requestToken.error) {
        localStorage.setItem('token', requestToken.access_token);
        localStorage.setItem('expires_in', expireToken(requestToken.expires_in).toString());
    }

    return true;
};

export const checkExpiresToken = async (): Promise<boolean> => {
    const token = localStorage.getItem('token');

    if (!token) {
        await setToken();
    } else {
        const expires = localStorage.getItem('expires_in');
        const dateNow = new Date();
        const dateExpiresToken = new Date(expires);

        if (dateNow > dateExpiresToken) {
            await setToken();
        }
    }

    return true;
};

/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios';
import qs from 'qs';
import { checkExpiresToken } from './access';

export const getSearch = async (value: string, type: string, limit?: number): Promise<any> => {
    try {
        await checkExpiresToken();

        const url = process.env.API_URL;

        const token = localStorage.getItem('token');

        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(`${url}/search?q=${value}&type=${type}${limit ? `&limit=${limit}` : ''}`, { headers });
        return response.data;
    } catch (err) {
        return {
            error: err,
        };
    }
};

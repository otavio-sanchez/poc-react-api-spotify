/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios';
import { checkExpiresToken } from './access';

export const getAlbums = async (id: string): Promise<any> => {
    try {
        await checkExpiresToken();

        const url = process.env.API_URL;

        const token = localStorage.getItem('token');

        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(`${url}/albums/${id}`, {
            headers,
        });

        return response.data;
    } catch (err) {
        return {
            error: err,
        };
    }
};

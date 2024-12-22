import axios from 'axios';
import { ISettings } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const updateConfig = async (key: keyof ISettings, value: ISettings[keyof ISettings]) => {
  await api.post('/config', { key, value });
};

export const fetchTemperature = async () => {
  const response = await api.get('/temp');
  return response.data.temp;
};

export const fetchSettings = async () => {
  const response = await api.get('/settings');
  return response.data;
};


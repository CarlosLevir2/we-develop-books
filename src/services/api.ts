import axios from 'axios';

export const API_BASE_URL = 'https://api.jikan.moe/v3/';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3004/',
});
export enum endPoints {
  feedback = 'feedback',
}

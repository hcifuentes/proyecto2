import axios from 'axios';
import { LOGIN_API_URL } from './APIsURL';

export const getUsers = async url => await axios.get(url);

export const login = async (user) => await axios.post(LOGIN_API_URL, user);

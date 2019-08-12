import axios from 'axios';

export const getUsers = async url => await axios.get(url);

export const postUser = async (url, user) => await axios.post(url, user);

export const putUser = async (url, user) => await axios.post(url, user);
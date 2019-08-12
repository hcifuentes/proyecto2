import axios from 'axios';

export const getUsers = async url => await axios.get(url);

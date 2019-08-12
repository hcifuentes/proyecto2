import axios from 'axios';
import { logout } from './../store/sesion/actions';

export const getCharacters = async url => await axios.get(url);


export const isLogged = () => {
    const token = localStorage.getItem('token');
    if(token && token !== '') {
        console.log("tooooooooooooooken", true)
        return true;
    }
    console.log("tooooooooooooooken", false)
    return false;
}

export const logOut = () => {
    logout()
    localStorage.removeItem('token');
    localStorage.removeItem('activeUser');
}

export const loginUser = user => {
    console.log("A logear", user)
    localStorage.setItem('token', user.email);
    localStorage.setItem('activeUser', JSON.stringify(user));
}

export const loggedUser = () => {
    return JSON.parse(localStorage.getItem("activeUser"));
}
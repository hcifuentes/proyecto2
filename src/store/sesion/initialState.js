import { loggedUser } from './../../services/loginService';

export const initialState = {
    activeUser: loggedUser(),
    activeUserLoading: false,
    activeUserError: false
}
import React from 'react';
import { Link }  from 'react-router-dom';
import { logOut } from './../../services/loginService';

const LoggedMenuTile = props => {

    const closeSession = () => {
        console.log("close session");
        logOut();
    }

    return (
        <div>
            <Link to='/characters'>Personajes</Link>
            <Link to='/episodes'>Episodios</Link>
            <Link to='/users'>Usuarios</Link>
            <Link to='/login' onClick={closeSession}>Cerrar sesion</Link>
        </div>
    )
}

export default LoggedMenuTile;
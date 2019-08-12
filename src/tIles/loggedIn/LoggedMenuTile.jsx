import React from 'react';
import { Link }  from 'react-router-dom';

const LoggedMenuTile = props => {
    return (
        <div>
            <Link to='/characters'>Personajes</Link>
            <Link to='/episodes'>Episodios</Link>
            <Link to='/users'>Usuarios</Link>
        </div>
    )
}

export default LoggedMenuTile;
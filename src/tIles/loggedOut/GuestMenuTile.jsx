import React from 'react';
import { Link }  from 'react-router-dom';

const GuestHeaderTile = props => {

    return (
        <div>
           <Link to='/login'>Login</Link>
           <Link to='/signUp'>Crear cuenta</Link>
        </div>
    )
}

export default GuestHeaderTile;
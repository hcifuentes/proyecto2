import React from 'react';
import GuestTemplate from './../../templates/GuestTemplate';

const LoginPage = props => {
    const { component } = props;
    return (
        <GuestTemplate component={component}/>
    )
}

export default LoginPage;
import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import User from './../../models/user';
import { connect } from 'react-redux';
import { loginAction } from './../../store/sesion/actions';
import { isLogged } from './../../services/loginService';

const LoginForm = props => {

    const [ user, setUser ] = useState(new User());
    const [ redirect, setRedirect ] = useState(isLogged());
    const { activeUser, activeUserError, activeUserLoading, loginComponent } = props;
    console.log(loginComponent);
    
    useEffect(() => {
        if(activeUser && isLogged() ) {
            setRedirect(true);
        }
    }, [activeUser])

    if(redirect) {
        return ( <Redirect from='/login' to='/users' />) 
    }

    const doLogin = event => {
        event.preventDefault();
        loginComponent(user);
        console.log("formu", isLogged())
    }

    const handlerOnControlChange = ({ target }) => {
        setUser({
            ...user,
            [target.name]: target.value
        });
    }

    return (
        <form>
            <input type="text" name="email" onChange={handlerOnControlChange}></input>
            <input type="password" name="password" onChange={handlerOnControlChange}></input>
            <button type="submit" onClick={doLogin}>Ingresar</button>

            {activeUserLoading && <span>Cargando</span>}
            {activeUserError && <span>ERROR DE LOGIN</span> }
            
        </form>
    );
}

const mapStateToProps = state => {
    console.log("estado ", state)
    return ({
        activeUser: state.sesionReducer.activeUser,
        activeUserLoading: state.sesionReducer.activeUserLoading,
        activeUserError: state.sesionReducer.activeUserError
    });
}

const mapDispatchToProps = dispatch => ({
    loginComponent: payload => dispatch(loginAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
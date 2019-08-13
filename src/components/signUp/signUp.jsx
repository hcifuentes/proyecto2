import React, { useState, useEffect } from 'react';
import User from './../../models/user';
import { connect } from 'react-redux';
import { createUserAction, getUsersAction } from './../../store/users/actions';

const SignUp = props => {

    const [ user, setUser ] = useState(new User());
    const [ errorMessage, setErrorMessage] = useState('');

    const { 
        signUpLoading, 
        signUpError, 
        postUserMessage,
        createUser, users, getUsers } = props;

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const doSignUp = event => {
        event.preventDefault();
        if(validateForm()) {
            createUser(user);
        }
    }

    const validateForm = () => {
        let validate = true;
        console.log(user.email.length)
        console.log(user.name.length)
        if(user.email.length < 4) {
            setErrorMessage('Debe ingresar un email valido');
            validate = false;
        }

        if(user.name.length < 5 ) {
            setErrorMessage('Debe ingresar un nombre valido');
            validate = false;
        }

        users.map(u => {
            if(u.email === user.email) {
                validate = false;
                setErrorMessage('El email ingresado ya existe');
            }
            return u;
        });

        if(validate){
            setErrorMessage('');
        }
        return validate;
    }

    const handlerOnControlChange = ({ target }) => {
        setUser({
            ...user,
            [target.name]: target.value
        });
    }

    return (
        <form>
            <input type="text" name="name" onChange={handlerOnControlChange}></input>
            <input type="email" name="email" onChange={handlerOnControlChange}></input>
            <button type="submit" onClick={doSignUp}>Crear usuario</button>

            {errorMessage};

            {signUpLoading && <span>Cargando</span>}
            {signUpError && <span>ERROR AL CREAR LA CUENTA</span> }
            <span>{postUserMessage}</span>

        </form>
    );
}

const mapStateToProps = state => {
    console.log("estado ", state)
    return ({
        activeUser: state.sesionReducer.activeUser,
        activeUserLoading: state.sesionReducer.activeUserLoading,
        activeUserError: state.sesionReducer.activeUserError,
        postUserMessage: state.usersReducer.postUserMessage,
        signUpLoading: state.usersReducer.signUpLoading,
        signUpError: state.usersReducer.signUpError,
        users: state.usersReducer.users
    });
}

const mapDispatchToProps = dispatch => ({
    createUser: payload => dispatch(createUserAction(payload)),
    getUsers: payload => dispatch(getUsersAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
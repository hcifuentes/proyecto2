import React from 'react';
import { Route, Redirect }  from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './../store/store';

const PrivateRouter = props => {

    const {component, isLoggedIn, template: Template} = props;

    return (
        <Provider store={store}>
        <Route
            render = { props => {
                if (isLoggedIn) {
                    return <Template component={component} {...props} /> 
                } else {
                    return <Redirect to='/login'/>
                }
            }}
        />
        </Provider>
    )
}

export default PrivateRouter;
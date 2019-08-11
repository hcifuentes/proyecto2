import React from 'react';
import { Route, Redirect }  from 'react-router-dom';

const PrivateRouter = props => {

    const {component, isLoggedIn, template: Template} = props;

    return (
        <Route
            render = { props => {
                if (isLoggedIn) {
                    return <Template component={component} {...props} /> 
                } else {
                    return <Redirect to='/login'/>
                }
            }}
        />
    )
}

export default PrivateRouter;
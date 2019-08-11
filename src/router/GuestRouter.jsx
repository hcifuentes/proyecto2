import React from 'react';
import { Route }  from 'react-router-dom';

const GuestRouter = props => {

    const {component, template: Template} = props;

    return (
        <Route
            render = { props => {
                return <Template component={component} {...props} /> 
            }}
        />
    )
}

export default GuestRouter;
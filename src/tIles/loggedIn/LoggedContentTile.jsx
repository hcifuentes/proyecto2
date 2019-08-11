import React from 'react';

const LoggedContentTile = props => {

    const { component : Component } = props;
    
    return (
        <div>
            <Component/>
        </div>
    )
}

export default LoggedContentTile;
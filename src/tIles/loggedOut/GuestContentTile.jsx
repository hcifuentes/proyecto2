import React from 'react';

const GuestContentTile = props => {

    const { component : Component } = props;
    
    return (
        <div>
            <Component />
        </div>
    )
}

export default GuestContentTile;
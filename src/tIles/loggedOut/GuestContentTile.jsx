import React from 'react';

const GuestContentTile = props => {

    const { component : Component } = props;
    console.log(Component)
    
    return (
        <div>
            <Component/>
        </div>
    )
}

export default GuestContentTile;
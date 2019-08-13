import React from 'react';
import GuestHeaderTile from '../tIles/loggedOut/GuestHeaderTile';
import GuestContentTile from '../tIles/loggedOut/GuestContentTile';
import GuestMenuTile from '../tIles/loggedOut/GuestMenuTile';

import Container from '@material-ui/core/Container';

const GuestTemplate = props => {

    const { component } = props;

    return (
        <Container>
            <GuestHeaderTile/>
            <GuestMenuTile/>>
            <GuestContentTile component={component}/>
        </Container>
    )
}

export default GuestTemplate;
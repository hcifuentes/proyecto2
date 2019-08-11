import React from 'react';
import GuestHeaderTile from '../tIles/loggedOut/GuestHeaderTile';
import GuestContentTile from '../tIles/loggedOut/GuestContentTile';
import Container from '@material-ui/core/Container';

const GuestTemplate = props => {

    const { component } = props;

    return (
        <Container>
            <GuestHeaderTile/>
            <GuestContentTile component={component}/>
        </Container>
    )
}

export default GuestTemplate;
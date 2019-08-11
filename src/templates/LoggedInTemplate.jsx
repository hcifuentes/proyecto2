import React from 'react';
import Container from '@material-ui/core/Container';
import LoggedHeaderTile from '../tIles/loggedIn/LoggedHeaderTile';
import LoggedContentTile from '../tIles/loggedIn/LoggedContentTile';
import LoggedMenuTile from '../tIles/loggedIn/LoggedMenuTile';

const LoggedInTemplate = props => {

    const { component } = props;

    return(
        <Container>
            <LoggedHeaderTile/>
            <LoggedMenuTile/>
            <LoggedContentTile component={component}/>
        </Container>
    )

}

export default LoggedInTemplate;
import React from 'react';
// import Character from './../../models/character';
import IconButton from '@material-ui/core/IconButton';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 250,
        height: 225,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const CharacterGridTile = props => {
    const { character } = props;

    return (
        <GridListTile key={character.id}
        style={{ height: 'auto' }}>
            <img src={character.image} alt={character.name} />
            <ListSubheader component="div">sub header</ListSubheader>
            <GridListTileBar
                
                title={character.name}
                subtitle={<span>by: {character.species}</span>}
                actionIcon={
                    <IconButton aria-label={`info about ${character.name}`} className={useStyles.icon}>
                        <InfoIcon />
                    </IconButton>
                }
            />
        </GridListTile>
    );
}

export default CharacterGridTile
import React  from 'react';
import CharacterGridTile from './CharacterGridTile';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

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

const CharactersGridList = props => {

    const { characters, activeUser, removeFavorite, addFavorite } = props;

    return (
        <GridList cellHeight={90} className={useStyles.gridList}>
            {characters.map(character => (
                <CharacterGridTile 
                    key={character.id} 
                    character={character} 
                    activeUser={activeUser}
                    removeFavorite={removeFavorite} 
                    addFavorite={addFavorite} />
            ))}
        </GridList>
    );
}

export default CharactersGridList;
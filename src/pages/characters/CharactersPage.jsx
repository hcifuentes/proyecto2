import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import CharactersGridList from '../../components/characters/CharactersGridList';
import { getCharactersAction } from './../../store/characters/actions';
import { updateFavorites } from './../../store/users/actions'

const CharactersPage = props => {
    
    const { characters, charactersPrevPage, charactersNextPage, getCharactersComponent, userComponent, activeUser  } = props;
    const prevPage = () => props.getCharactersComponent(charactersPrevPage);
    const nextPage = () => props.getCharactersComponent(charactersNextPage);
    
    const addFavorite = id => {
        const user = activeUser;
        user.favoriteCharacters.push(id+'');
        userComponent(user);
    }

    const removeFavorite = id => {
        const user = activeUser;
        user.favoriteCharacters = user.favoriteCharacters.filter(characterId => {
            return characterId+'' !== id+'';
        });
        userComponent(user);
    }

    useEffect(() => {
        getCharactersComponent();
    },[getCharactersComponent, characters]);


    return ( 
        <Container maxWidth="xl">
            <button onClick={prevPage}>Anterior</button>
            <button onClick={nextPage}>Siguiente</button>
            <CharactersGridList characters={characters} addFavorite={addFavorite} removeFavorite={removeFavorite} activeUser={activeUser}/>
        </Container>
    )
}

const mapStateToProps = state => ({
    characters: state.charactersReducer.characters,
    charactersLoading: state.charactersReducer.charactersLoading,
    charactersError: state.charactersReducer.charactersError,
    charactersCount: state.charactersReducer.charactersCount,
    charactersPages: state.charactersReducer.charactersPages,
    charactersNextPage: state.charactersReducer.charactersNextPage,
    charactersPrevPage: state.charactersReducer.charactersPrevPage,
    activeUser: state.sesionReducer.activeUser,
    putUserLoading: state.sesionReducer.putUserLoading,
    putUserError: state.sesionReducer.putUserError,
});

const mapDispatchToProps = dispatch => ({
    getCharactersComponent: payload => dispatch(getCharactersAction(payload)),
    userComponent: payload => dispatch(updateFavorites(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
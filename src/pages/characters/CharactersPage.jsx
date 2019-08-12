import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import CharactersGridList from '../../components/characters/CharactersGridList';
import { getCharactersAction } from './../../store/characters/actions';

const CharactersPage = props => {
    
    const { characters, charactersPrevPage, charactersNextPage, getCharactersComponent } = props;
    const prevPage = () => props.getCharactersComponent(charactersPrevPage);
    const nextPage = () => props.getCharactersComponent(charactersNextPage);
    

    useEffect(() => {
        getCharactersComponent();
    },[getCharactersComponent]);

    

    return ( 
        <Container maxWidth="xl">
            <button onClick={prevPage}>Anterior</button>
            <button onClick={nextPage}>Siguiente</button>
            <CharactersGridList characters={characters}/>
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
    charactersPrevPage: state.charactersReducer.charactersPrevPage
    });

const mapDispatchToProps = dispatch => ({
    getCharactersComponent: payload => dispatch(getCharactersAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
import React from 'react';
import Container from '@material-ui/core/Container';
import Character from '../../models/character';
import CharactersGridList from '../../components/characters/CharactersGridList';

const CharactersPage = props => {
    const char = new Character();
    char.name = 'El nombre';
    char.species = 'La especia';
    char.gender = 'el genero';
    char.id = 1;
    char.image = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';

    const chars = [];
    chars.push(char);
    chars.push(char);
    chars.push(char);
    chars.push(char);
    chars.push(char);

    return ( 
        <Container maxWidth="false">
            <CharactersGridList characters={chars}/>
        </Container>
    )
}

export default CharactersPage;
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import EpisodesList from './../../components/episodes/EpisodesList'
import { getEpisodesAction } from './../../store/episodes/actions'

const EpisodesPage = props => {
    console.log("props" , props)
    const { episodes, episodesPrevPage, episodesNextPage, getEpisodesComponent } = props;
    const prevPage = () => props.getEpisodesComponent(episodesPrevPage);
    const nextPage = () => props.getEpisodesComponent(episodesNextPage);
    

    useEffect(() => {
        getEpisodesComponent();
    },[getEpisodesComponent]);


    return ( 
        <Container maxWidth="xl">
            <button onClick={prevPage}>Anterior</button>
            <button onClick={nextPage}>Siguiente</button>
            <EpisodesList episodes={episodes}/>
        </Container>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return ({
    episodes: state.episodesReducer.episodes,
    episodesLoading: state.episodesReducer.episodesLoading,
    episodesError: state.episodesReducer.episodesError,
    episodesCount: state.episodesReducer.episodesCount,
    episodesPages: state.episodesReducer.episodesPages,
    episodesNextPage: state.episodesReducer.episodesNextPage,
    episodesPrevPage: state.episodesReducer.episodesPrevPage
    });
}

const mapDispatchToProps = dispatch => ({
    getEpisodesComponent: payload => dispatch(getEpisodesAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesPage);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import EpisodesList from './../../components/episodes/EpisodesList'
import { getEpisodesAction, reloadAction } from './../../store/episodes/actions'
import { updateFavoritesAction } from './../../store/users/actions'

const EpisodesPage = props => {
    const { episodes, episodesPrevPage, episodesNextPage, getEpisodesComponent, activeUser, userComponent, reloadEpisodes, episodesActualPage } = props;
    const prevPage = () => props.getEpisodesComponent(episodesPrevPage);
    const nextPage = () => props.getEpisodesComponent(episodesNextPage);
    
    const addFavorite = id => {
        const user = activeUser;
        user.favoriteEpisodes.push(id+'');
        userComponent(user);
        reloadEpisodes(episodesActualPage)
    }

    const removeFavorite = id => {
        const user = activeUser;
        user.favoriteEpisodes = user.favoriteEpisodes.filter(episodeId => {
            return episodeId+'' !== id+'';
        });
        userComponent(user);
        reloadEpisodes(episodesActualPage)
    }

    useEffect(() => {
        getEpisodesComponent();
        console.log("paso")
    },[getEpisodesComponent, activeUser, userComponent]);


    return ( 
        <Container maxWidth="xl">
            <button onClick={prevPage}>Anterior</button>
            <button onClick={nextPage}>Siguiente</button>
            <EpisodesList 
                episodes={episodes} 
                addFavorite={addFavorite} 
                removeFavorite={removeFavorite}
                activeUser={activeUser}
            />
        </Container>
    )
}

const mapStateToProps = state => ({
    episodes: state.episodesReducer.episodes,
    episodesLoading: state.episodesReducer.episodesLoading,
    episodesError: state.episodesReducer.episodesError,
    episodesCount: state.episodesReducer.episodesCount,
    episodesPages: state.episodesReducer.episodesPages,
    episodesNextPage: state.episodesReducer.episodesNextPage,
    episodesPrevPage: state.episodesReducer.episodesPrevPage,
    activeUser: state.sesionReducer.activeUser,
    putUserLoading: state.sesionReducer.putUserLoading,
    putUserError: state.sesionReducer.putUserError,
});

const mapDispatchToProps = dispatch => ({
    getEpisodesComponent: payload => dispatch(getEpisodesAction(payload)),
    userComponent: payload => dispatch(updateFavoritesAction(payload)),
    reloadEpisodes: payload => dispatch(reloadAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesPage);
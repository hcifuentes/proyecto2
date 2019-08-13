import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const EpisodeRow = props => {
    const { episode, removeFavorite, addFavorite, activeUser } = props;

    const makeButton = episode => {
        if (activeUser.favoriteEpisodes.indexOf(episode.id + '') > -1) {
            return <IconButton aria-label={`info about ${episode.name}`} onClick={() => removeFavorite(episode.id)}>
                SACA
                    </IconButton>
        } else {
            return <IconButton aria-label={`info about ${episode.name}`} onClick={() => addFavorite(episode.id)}>
                PONE
                    </IconButton>
        }
    }

    return (
        <TableRow key={episode.id}>
            <TableCell component="th" scope="row">{episode.name}</TableCell>
            <TableCell >{episode.air_date}</TableCell>
            <TableCell >{episode.episode}</TableCell>
            <TableCell >{episode.episode}</TableCell>
            <TableCell >
                { makeButton(episode) }
            </TableCell>
        </TableRow>
    );
}

export default EpisodeRow
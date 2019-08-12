import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const EpisodeRow = props => {
    const { episode } = props;

    return (
        <TableRow key={episode.id}>
            <TableCell component="th" scope="row">{episode.name}</TableCell>
            <TableCell align="right">{episode.air_date}</TableCell>
            <TableCell align="right">{episode.episode}</TableCell>
        </TableRow>
    );
}

export default EpisodeRow
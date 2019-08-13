import React from 'react';

import EpisodeRow from './EpisodeRow';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const EpisodesList = props => {

    const { episodes, activeUser, addFavorite, removeFavorite } = props;

    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="right">Fecha de emision</TableCell>
                        <TableCell align="right">Episodio</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {episodes.map((episode) => (
                        <EpisodeRow 
                            key={episode.id} 
                            episode={episode} 
                            activeUser={activeUser}
                            addFavorite={addFavorite}
                            removeFavorite={removeFavorite}
                        />
                    ))}
                 </TableBody>
            </Table>
        </Paper>
    );
}

export default EpisodesList;
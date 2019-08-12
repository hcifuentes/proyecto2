import React from 'react';

import UserRow from './UserRow';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const UsersList = props => {

    const { users } = props;
    
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user) => <UserRow key={user.id} user={user} />)
                    }

                 </TableBody>
            </Table>
        </Paper>
    );
}

export default UsersList;
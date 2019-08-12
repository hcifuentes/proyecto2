import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const UserRow = props => {
    const { user } = props;
    return (
        (
        <TableRow key={user.id}>
            <TableCell component="th" scope="row">{user.name}</TableCell>
            <TableCell >{user.email}</TableCell>
        </TableRow>
        )
    );
}

export default UserRow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import UsersList from '../../components/users/UsersList'
import { getUsersAction } from '../../store/users/actions';

const UsersPage = props => {

    const { users, getUsersComponent } = props;
    
    useEffect(() => {getUsersComponent()} ,[getUsersComponent]);

    return ( 
        <Container maxWidth="xl">
            <UsersList users={users}/>
        </Container>
    )
}

const mapStateToProps = state => ({
    users: state.usersReducer.users,
    usersLoading: state.usersReducer.usersLoading,
    usersError: state.usersReducer.usersError,
});

const mapDispatchToProps = dispatch => ({
    getUsersComponent: payload => dispatch(getUsersAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
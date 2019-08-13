import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import UsersList from '../../components/users/UsersList'
import { getUsersAction } from '../../store/users/actions';

const UsersPage = props => {

    const { users, getUsersComponent, activeUser } = props;

    useEffect(() => {getUsersComponent()} ,[getUsersComponent]);

    const similarUsers = user => {
        let similar = false;
        for(let activeFavorite of activeUser.favoriteEpisodes) {
            for(let userFavorite of user.favoriteEpisodes) {
                if(activeFavorite === userFavorite) {
                    similar = true;
                    break;
                }
            }
        }

        return similar;
    }

    return ( 
        <Container maxWidth="xl">
            <UsersList users={users.filter(user => {
                return user.id !== activeUser.id && similarUsers(user);
            })}/>
        </Container>
    )
}

const mapStateToProps = state => ({
    users: state.usersReducer.users,
    usersLoading: state.usersReducer.usersLoading,
    usersError: state.usersReducer.usersError,
    activeUser: state.sesionReducer.activeUser
});

const mapDispatchToProps = dispatch => ({
    getUsersComponent: payload => dispatch(getUsersAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
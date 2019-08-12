import React from 'react';
import CharactersPage from '../pages/characters/CharactersPage';
import { BrowserRouter as Router, Switch}  from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import GuestRouter from './GuestRouter';
import LoginPage from './../pages/login/LoginPage';
import SignUpPage from '../pages/signUp/SignUpPage';
import { isLogged } from './../services/loginService';
import LoggedInTemplate from './../templates/LoggedInTemplate';
import GuestTemplate from './../templates/GuestTemplate';
import EpisodesPage from '../pages/episodes/EpisodesPage';
import UsersPage from '../pages/users/UsersPage';

const Routes = props => {
    const isLoggedIn = isLogged();

    return (
        <Router>
            <Switch>
                <PrivateRouter exact path='/' template={LoggedInTemplate} component={EpisodesPage} isLoggedIn={isLoggedIn}/>
                <PrivateRouter exact path='/episodes' template={LoggedInTemplate} component={EpisodesPage} isLoggedIn={isLoggedIn}/>
                <PrivateRouter exact path='/characters' template={LoggedInTemplate} component={CharactersPage} isLoggedIn={isLoggedIn}/>
                <PrivateRouter exact path='/users' template={LoggedInTemplate} component={UsersPage} isLoggedIn={isLoggedIn}/>
                <GuestRouter exact path='/login' template={GuestTemplate} component={LoginPage} />
                <GuestRouter exact path='/signUp' template={GuestTemplate} component={SignUpPage} />
            </Switch>
        </Router>
    )
}

export default Routes;
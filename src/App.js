import React from 'react';
import Routes from './router/Routes'
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = props => {

  return (
      <Provider store={store}>
        <Routes>
        </Routes>
      </Provider>
  );
}

export default (App);

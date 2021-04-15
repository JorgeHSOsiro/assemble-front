import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import DetailsPage from './pages/DetailsPage';
import Provider from './context/provider';
import DetailsPageBy from './pages/DetailsPageBy';
import Profile from './pages/Profile';
import Favorite from './pages/FavoritesPage';
import './App.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/login" component={ Login } />
        <Route path="/home" component={ Home } />
        <Route path="/register" component={ Register } />
        <Route path="/profile" component={ Profile } />
        <Route path="/favorites" component={ Favorite } />
        <Route exact path="/details/:subject/:id" component={ DetailsPage } />
        <Route exact path="/details/:subject/:id/:option/:name" component={ DetailsPageBy } />
      </Switch>
    </Provider>
  );
}

export default App;

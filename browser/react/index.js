import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import {  Router
        , Route
        , hashHistory
        , IndexRedirect
        } from 'react-router';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer} >
       <Route path="/albums" component={Albums} />
       <Route path="/albums/:albumId" component={Album} />
       <IndexRedirect to="/albums" />
    </Route>
  </Router>,
  document.getElementById('app')
);


// <Link to="/albums">Go to Albums</Link>
// <Link to={`/albums/${this.props.albumId}`}>Go to an Album</Link>

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.component';
import { StyledMain } from './App.styles';
import DetailedView from './views/DetailedViews/DetailedView.component';
import MovieView from './views/MovieView/MovieView.component';
import HomeView from './views/HomeView/HomeView.component';
import TvView from './views/TvView/TvView.component';
import MediaView from './views/MediaView/MediaView.component';
import PersonView from './views/PersonView/PersonView.component';



const App = () => {
  return (
    <Router>
      <NavBar />
      <StyledMain>
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route exact path='/movie' component={MovieView} />
          <Route exact path='/tv' component={TvView} />
          <Route exact path='/:media/:type/page/:pageNumber' component={MediaView} />
          <Route exact path='/person/:id/:section' component={PersonView} />
          <Route path='/:media/:id/:section/:seasonNumber?' component={DetailedView} />

        </Switch>
      </StyledMain>
    </Router>
  );
}

export default App;

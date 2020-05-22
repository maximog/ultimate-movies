import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.component';
import { StyledMain } from './App.styles';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const MovieView = lazy(() => import('./views/MovieView/MovieView.component'));
const HomeView = lazy(() => import('./views/HomeView/HomeView.component'));
const TvView = lazy(() => import('./views/TvView/TvView.component'));
const MediaView = lazy(() => import('./views/MediaView/MediaView.component'));
const PersonView = lazy(() => import('./views/PersonView/PersonView.component'));
const DetailedView = lazy(() => import('./views/DetailedViews/DetailedView.component'));

const App = () => {
  return (
    <Router>
      <NavBar />
      <StyledMain>
        <ErrorBoundary>
          <Suspense fallback={<div style={{ color: 'white' }}>Loading....</div>}>
            <Switch>
              <Route exact path='/' component={HomeView} />
              <Route exact path='/movie' component={MovieView} />
              <Route exact path='/tv' component={TvView} />
              <Route exact path='/:media/:type/page/:pageNumber' component={MediaView} />
              <Route exact path='/:media/:genreName/:genreNumber/page/:pageNumber' component={MediaView} />
              <Route exact path='/person/:id/:section' component={PersonView} />
              <Route exact path='/:media/:id/:section/:seasonNumber?' component={DetailedView} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </StyledMain>
    </Router>
  );
}

export default App;

import React from 'react';
import { useFetch } from './hooks/useFetch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.component';
import CardContainer from './components/CardContainer/CardContainer.component';
import { StyledMain } from './App.styles';
import DetailedView from './views/DetailedView/DetailedView.component';



const App = () => {
  const movies = useFetch(['movie', 'popular'], {page: 2});
  return (
    <Router>
      <NavBar />
      <StyledMain>
        <Switch>

          <Route exact path='/'>
            {movies &&
              <>
                <CardContainer title={"Peliculas Populares"} type={"movie"} movies={movies.results} link={true} />
                <CardContainer title={"Peliculas Tendencia"} type={"movie"} movies={movies.results} link={false} />
              </>
            }
          </Route>
          <Route path='/:type/:id/:info' component={DetailedView} />


        </Switch>
      </StyledMain>
    </Router>
  );
}

export default App;

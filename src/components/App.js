import '../assets/css/App.css';

import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import TvShowPage from '../pages/TvShowPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import AddMoviePage from '../pages/AddMoviePage';
import AddTvShowPage from '../pages/AddTvShowPage';

function App() {

  let location = useLocation();

  return (

    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route exact path="/tvShows" component={TvShowPage} />
      <Route exact path="/sign-Up" component={SignUpPage} />
      <Route exact path="/log-in" component={LoginPage} />
      <Route exact path="/add-movie" component={AddMoviePage} />
      <Route exact path="/add-tv-show" component={AddTvShowPage} />
    </Switch>

  );
}

export default App;

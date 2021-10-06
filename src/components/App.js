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

function App() {

  let location = useLocation();

  return (

    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies"  component={HomePage} />
      <Route exact path="/tvShows"  component={TvShowPage} />
      <Route exact path="/Sign Up"  component={SignUpPage} />
      <Route exact path="/Login"  component={LoginPage} />
    </Switch>
  
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUSer} from './actions/authActions';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));


// if(localStorage.jwtToken){
//   setAuthToken(localStorage.jwtToken);
//   const decode = jwt_decode(localStorage.jwtToken);
//   store.dispatch(setCurrentUser(decode));
// }

if (localStorage.jwtToken) {
  //set auth token header auth
      setAuthToken(localStorage.jwtToken);
  //decode token and get user info and exp
      const decoded = jwt_decode(localStorage.jwtToken);
  //set user and is authenticated
      store.dispatch(setCurrentUser(decoded));
  // check for expire token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
      //logout user
      store.dispatch(logoutUSer());
          // store.dispatch(logoutUser());
      //clear current profile

      //redirect to login
      //window.location.href = "/login";
      this.props.history.push('/login')
  }
}

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;

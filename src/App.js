import React from 'react';
import './App.css';
// import LoginPage from './containers/LoginPage';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import HomeHeader from './components/HomeHeader';
// import ProfilePage from './containers/ProfilePage';
// import SignupPage from './containers/SignupPage';
import Pages from './pages';

class App extends React.Component {

  // state = {
    
  // }

  // // fetchDataFromAPI = () => {
  // //   return fetch('http://localhost:3000/profile', {
  // //       headers: {
  // //       Authorization: localStorage.token
  // //     }
  // //   })
  // //   .then(res => res.json())
  // //   .then(profileInfo => this.setState({ userInfo: profileInfo }));
  // // }

  render = () => {
    return (
      <React.Fragment>
          <HomeHeader />
            <Switch>
              <Route exact path='/signup' component={Pages.SignupPage} />
              <Route exect path='/home' render={(routerProps)=> <HomePage  {...routerProps} component={HomePage} /> }/>
              <Route exact path="/myProfile" component={Pages.ProfilePage} />
              <Route path='/' component={Pages.LoginPage} />
            </Switch>
      </React.Fragment>
    );
  }
}

export default App;

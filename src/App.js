import React from 'react';
import './App.css';
import LoginPage from './containers/LoginPage';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProfilePage from './containers/ProfilePage';
import SignupPage from './containers/SignupPage';

class App extends React.Component {

  state = {
    // userInfo: {}
  }

  componentDidMount = () => {
    if (localStorage.token) {
     fetch('http://localhost:3000/profile', {
       headers: {
         Authorization: localStorage.token
       }
     })
     .then(res => res.json())
     .then(profileInfo => this.setState({ userInfo: profileInfo }));
    }
  }

  render = () => {
    return (
      <React.Fragment>
          <Switch>
            <Route exact path='/signup' render={(routerProps)=> <SignupPage  {...routerProps} component={SignupPage} />} />
            <Route exect path='/home' render={(routerProps)=> <HomePage  {...routerProps} userInfo={this.state.userInfo} component={HomePage} /> }/>
            <Route exact path='/myProfile' render={(routerProps)=> <ProfilePage  {...routerProps} userInfo={this.state.userInfo} component={ProfilePage} />} />
            <Route path='/' render={(routerProps)=> <LoginPage  {...routerProps} component={LoginPage} />} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;

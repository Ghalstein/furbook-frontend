import React from 'react';
import './App.css';
import LoginPage from './containers/LoginPage';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProfilePage from './containers/ProfilePage';

class App extends React.Component {

  componentDidMount = () => {
    if (localStorage.token) {
     fetch('http://localhost:3000/profile', {
       headers: {
         Authorization: localStorage.token
       }
     })
     .then(res => res.json())
     .then(profileInfo => this.setState({ username: profileInfo.username }));
    }
  }

  render = () => {
    return (
      <React.Fragment>
        <Switch>
           <Route exact path='/' render={(routerProps)=> <LoginPage  {...routerProps} component={LoginPage} />} />
           <Route  path='/home' render={(routerProps)=> <HomePage  {...routerProps} component={HomePage} />} />
           <Route path='/myProfile' render={(routerProps)=> <ProfilePage  {...routerProps} component={ProfilePage} />} />
          }
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

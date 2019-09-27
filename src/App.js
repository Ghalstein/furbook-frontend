import React from 'react';
import './App.css';
// import LoginPage from './containers/LoginPage';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import HomeHeader from './components/HomeHeader';
// import ProfilePage from './containers/ProfilePage';
// import SignupPage from './containers/SignupPage';
import Pages from './pages';
import { connect } from 'react-redux';
import MessageHeader from './components/MessageHeader';
import { HashRouter } from 'react-router-dom';

class App extends React.Component {


  render = () => {
    return (
      <React.Fragment>
          <HomeHeader />
          <MessageHeader />
            <Switch>
              <Route exact path='/signup' component={Pages.SignupPage} />
              <Route exect path='/home' render={(routerProps)=> <HomePage  {...routerProps} component={HomePage} /> }/>
              <Route exact path='/users/:id' component={Pages.ProfilePage} />
              <Route path='/' component={Pages.LoginPage} />
            </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  // debugger
  return {
    user: state.currentUser
  }
}

export default connect(mapStateToProps)(App)

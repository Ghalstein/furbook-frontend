import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/userActions';

class HomePage extends React.Component {

  state = {
    username: ''
  }
  componentDidMount() {
    if ((!localStorage.token) && this.props.hasOwnProperty('history')) this.props.history.push("/")
    fetch('http://localhost:3000/profile', {
      headers: {
        Authorization: localStorage.token
      }
    })
    .then(res => res.json())
    .then(profileInfo => this.setState({ username: profileInfo.username }))
  }

  render = () => {
    // debugger
    return (
      <div className="HomePage">
        <h1> {this.state.username ? `Hello ${this.state.username}!` : 'Getting your profile...'}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  setCurrentUser: getCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

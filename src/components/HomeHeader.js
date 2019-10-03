import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions/userActions';
import SearchBar from './SearchBar';
import Notifications from './Notifications';

class HomeHeader extends React.Component {

  onLogout = () => {
    this.props.logOut()
  }

  state = {
    notificationsClicked: false
  }

  // handle whether the notfication was clicked
  handleNotifClick = () => {
    this.setState({notificationsClicked: !this.state.notificationsClicked})
  }

  // exits out of the notfications modal
  handleExitNotifications = () => {
    this.setState({
      // posts: this.props.currentUser.posts,
      notificationsClicked: false
    })
  }

  render = () => {
    // checks for whether token is authentic
    if (localStorage.token === "undefined") {
      alert("Invalid login")
      this.props.logOut()
    }
    
    // checking for token to see the header
    if (!localStorage.token && this.props.hasOwnProperty('history')) this.props.history.push("/")
    
    // double checking that the data traced from the backend is valid
    if (!this.props.user.id) return null;
    
    return (
      <div className="dropdownmenu">
        <ul>
          <li><h2>furbook</h2></li>
          <li><SearchBar/></li>
          <li><Link to="/home">Feed</Link></li> 
          <li><Link to={`/users/${this.props.user.id}`}>Profile</Link></li> 
          <li><a className="notif" onClick={this.handleNotifClick}>Notifications ({this.props.user.pending_friend_requests.length})</a></li>
          <li onClick={this.onLogout}><Link to="/login">Logout</Link></li>
        </ul>
        {this.state.notificationsClicked ?
        <div className="notifications-modal">
          <Notifications handleExitNotifications={this.handleExitNotifications} requests={this.props.user.pending_friend_requests}/>
        </div>
        :
          null
        }
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
  logOut: logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
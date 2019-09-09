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

  goToProfile = () => {

  }

  state = {
    notificationsClicked: false
  }

  handleNotifClick = () => {
    this.setState({notificationsClicked: !this.state.notificationsClicked})
  }

  render = () => {
  	if (!localStorage.token && this.props.hasOwnProperty('history')) this.props.history.push("/")
      // console.log(this.props)
    // debugger
    return (
      <div className="dropdownmenu">
        <ul>
          <li><h2>furbook</h2></li>
          <li><SearchBar/></li>
          <li><Link to="/home">Feed</Link></li> 
        	<li><Link onClick={this.goToProfile} to={`/users/${this.props.user.id}`}>Profile</Link></li> 
          <li><a onClick={this.handleNotifClick}>Notifications</a></li>
          <li onClick={this.onLogout}><Link to="/login">Logout</Link></li>
        </ul>
        <div className="notifications-modal">
          {this.state.notificationsClicked ?
            <Notifications requests={this.props.user.pending_friend_requests}/>
          :
            null
          }
        </div>
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
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { getCurrentUser } from '../actions/userActions';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';

class MessageHeader extends React.Component {

  render = () => {
  	if (!localStorage.token && this.props.hasOwnProperty('history')) this.props.history.push("/")
      // console.log(this.props)
    return (
      <div className="message-menu">
        <ul>
          <li><h2>messages</h2></li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  setCurrentUser: getCurrentUser
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(MessageHeader)))
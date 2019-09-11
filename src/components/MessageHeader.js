import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { getCurrentUser } from '../actions/userActions';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';
import MessagesContainer from './MessagesContainer';

class MessageHeader extends React.Component {

  state ={
      open: false
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render = () => {
  	// if (!localStorage.token && this.props.hasOwnProperty('history')) this.props.history.push("/")
      if (!this.props.user.id) return null;
      console.log(this.props)
      // debugger
      let notifications = this.props.user.messages_info[0].messages.filter(message => !message.viewed && user.id !== this.props.user.id)
    return (
      <div className="message-setup">
        {this.state.open ? 
          <div className="messages-modal">
            <MessagesContainer handleClose={this.handleClose} messagesInfo={this.props.user.messages_info}/>
          </div>
        :
          null
        }
        <div className="message-menu">
            <a onClick={this.handleOpen} className="messages-header">messages ({notifications.length})</a>
        </div>
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
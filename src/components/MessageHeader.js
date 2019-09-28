import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { getCurrentUser } from '../actions/userActions';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';
import MessagesContainer from './MessagesContainer';
import { getMessages } from '../actions/messageActions';

class MessageHeader extends React.Component {

  state ={
      open: false
  }

  handleOpen = () => {
    this.setState({open: true})
    this.props.getMessages()
  }

  handleClose = () => {
    this.setState({open: false})
    this.props.getMessages()
  }

  updateMessage = (message) => {
    fetch(`https://furbook-api.herokuapp.com/messages/${message.id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': localStorage.token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
          "viewed": true
        })
    })
  
  }

  render = () => {
  	// if (!localStorage.token && this.props.hasOwnProperty('history')) this.props.history.push("/")
      if (!this.props.user.id) return null;
      // console.log(this.props)
      if (!this.props.user.friends.length) return null
      // debugger
      let messages = this.props.user.messages_info.map(messages => messages.messages).flat()
      // debugger

      let notifications = messages.filter(message => !message.viewed && message.user_id !== this.props.user.id)

    return (
      <div className="message-setup">
        {this.state.open ? 
          <div className="messages-modal">
            <MessagesContainer updateMessage={this.updateMessage} friends={this.props.user.friends} handleClose={this.handleClose} messagesInfo={this.props.user.messages_info}/>
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
  setCurrentUser: getCurrentUser,
  getMessages: getMessages
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(MessageHeader)))
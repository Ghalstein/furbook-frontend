import React from 'react';
import CreateMessage from './CreateMessage';
import { getMessages, viewedMessage } from '../../actions/messageActions';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';
import { withRouter } from 'react-router-dom';
import Message from './Message';

class MessageFriend extends React.Component {

  componentDidMount() {
    this.props.getMessages()
  }


  // opens the messages from the specfic user
  handleOpenMessages = (notifications) => {
    this.props.openMessage(this.props.messageInfo.friendship_id);
    notifications.forEach( message => this.props.updateMessage(message))
  }

  // closes the messages currently viewing
  handleCloseMessages = () => {
    this.props.closeMessage();
    this.props.getMessages();
  }

  messageCreated = () => {
    // this.props.getMessages();
  }

  render = () => {
   
    // figures out how many viewed messages are in the list
    let notifications = this.props.messages.filter(message => !message.viewed && message.user.id === this.props.messageInfo.friend.id)
    // sorts the messages
    let sortedMessages = this.props.messages.sort(function(a, b) { return a.id-b.id})
   
    return (
      <div className="chat-container">
        {this.props.openedMessage === this.props.messageInfo.friendship_id ?
          <div className="chat">
            <div className="top-chat">
              <a onClick={this.handleCloseMessages} className="close x-out">x</a>
            </div>
            <div className="message-friend-name">
              {this.props.messageInfo.friend.username}
            </div>
            <div className="dm-container">
              {sortedMessages.map(message => <Message messageInfo={message} friendship_id={this.props.messageInfo.friendship_id} friend={this.props.messageInfo.friend}/>)}
            </div>
            <div>
              <CreateMessage messageInfo={this.props.messageInfo} messageCreated={this.messageCreated}/>
            </div>
          </div>
        :
          <div onClick={() => this.handleOpenMessages(notifications)} className="message-friend">
            {this.props.messageInfo.friend.username} ({notifications.length})
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.currentUser,
    messages: state.messageReducer.messages
  }
}

const mapDispatchToProps = {
  // more to do for getComments redux
  getMessages: getMessages,
  viewedMessage: viewedMessage
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(MessageFriend)))
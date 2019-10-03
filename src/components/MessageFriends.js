import React from 'react';
import MessageFriend from './MessageFriend';
class MessageFriends extends React.Component {
  state = {
    openedMessage: 0
  }

  // opens the specfic message with the firendship id
  openMessage = (friendshipId) => {
    this.setState({openedMessage: friendshipId})
  }

  //closes that specfic message
  closeMessage = () => {
    this.setState({openedMessage: 0})
  }
  
  render = () => {
    return (
      <div className="message-friends">
        {this.props.messagesInfo.map( messageInfo => <MessageFriend closeMessage={this.closeMessage} openMessage={this.openMessage} openedMessage={this.state.openedMessage} updateMessage={this.props.updateMessage} messageInfo={messageInfo}/>)}
      </div>
    )
  }
}

export default MessageFriends
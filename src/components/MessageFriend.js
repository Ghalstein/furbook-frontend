import React from 'react';
import CreateMessage from './CreateMessage';
import { getMessages, viewedMessage } from '../actions/messageActions';
// import { viewedMessage } from '../actions/messageActions';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';
import Message from './Message';

class MessageFriend extends React.Component {

	// state = {
	// 	messageOpend: false
	// }

	// loop = setInterval(() => {this.props.getMessages()}, 3000)

	componentDidMount() {
		this.props.getMessages()
	}

  // componentWillUnmount() {
  // 	clearInterval(this.loop)
  // }

	handleOpenMessages = (notifications) => {
		this.props.openMessage(this.props.messageInfo.friendship_id);
		notifications.forEach( message => this.props.updateMessage(message))
	}

	handleCloseMessages = () => {
		this.props.closeMessage();
		this.props.getMessages();
	}

	messageCreated = () => {
		// this.props.getMessages();
	}

	render = () => {
		// debugger

		// console.log(this.props)
		// debugger

		// debugger
		// if (!Object.keys(this.props.messages).length) return null
			
		let notifications = this.props.messages.filter(message => !message.viewed && message.user.id === this.props.messageInfo.friend.id)
		// debugger
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
								{this.props.messages.map(message => <Message messageInfo={message} friendship_id={this.props.messageInfo.friendship_id} friend={this.props.messageInfo.friend}/>)}
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
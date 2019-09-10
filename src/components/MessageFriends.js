import React from 'react';
import MessageFriend from './MessageFriend';
class MessageFriends extends React.Component {

	render = () => {
		return (
			<div className="message-friends">
				{this.props.messagesInfo.map( messageInfo => <MessageFriend messageInfo={messageInfo}/>)}
			</div>
		)
	}
}

export default MessageFriends
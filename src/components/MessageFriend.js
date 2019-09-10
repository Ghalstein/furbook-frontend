import React from 'react';

class MessageFriend extends React.Component {

	render = () => {
		// debugger
		console.log(this.props.messageInfo.friend.username)
		return (
			<div className="message-friend">
				{this.props.messageInfo.friend.username}
			</div>
		)
	}
}

export default MessageFriend
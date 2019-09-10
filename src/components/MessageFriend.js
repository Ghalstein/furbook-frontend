import React from 'react';

class MessageFriend extends React.Component {

	state = {
		messageOpend: false
	}

	handleOpenMessages = () => {
		this.setState({messageOpend: true})
	}
	render = () => {
		// debugger
		console.log(this.props.messageInfo)
		return (
				<div>
					{this.state.messageOpend ?
						<div className="chat">
							Chat Box
						</div>
					:
						<div onClick={this.handleOpenMessages} className="message-friend">
							{this.props.messageInfo.friend.username}
						</div>
					}
				</div>
		)
	}
}

export default MessageFriend;
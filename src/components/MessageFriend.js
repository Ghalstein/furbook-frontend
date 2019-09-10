import React from 'react';
import CreateMessage from './CreateMessage'

class MessageFriend extends React.Component {

	state = {
		messageOpend: false
	}

	handleOpenMessages = () => {
		this.setState({messageOpend: true})
	}

	handleCloseMessages = () => {
		this.setState({messageOpend: false})
	}

	render = () => {
		// debugger
		console.log(this.props.messageInfo)
		return (
				<div>
					{this.state.messageOpend ?
						<div className="chat">
							<div className="top-chat">
								<a onClick={this.handleCloseMessages} className="close x-out">x</a>
							</div>
							<div>
								<CreateMessage messageInfo={this.props.messageInfo}/>
							</div>
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
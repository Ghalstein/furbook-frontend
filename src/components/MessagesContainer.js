import React from 'react';
import MessageFriends from './MessageFriends'

class MessagesContainer extends React.Component {

	render = () => {

		return (
			<div className="messages-container-modal">
				<div onClick={() => this.props.handleClose()} className="your-dms">
					Your DM's
				</div>
				<MessageFriends friends={this.props.friends} updateMessage={this.props.updateMessage} messagesInfo={this.props.messagesInfo}/>
			</div>
		)
	}
}

export default MessagesContainer
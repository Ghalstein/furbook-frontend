import React from 'react';
import MessageFriends from './MessageFriends'

class MessagesContainer extends React.Component {

	render = () => {

		return (
			<div className="messages-container-modal">
				<div className="your-dms">
					Your DM's
				</div>
				<MessageFriends messagesInfo={this.props.messagesInfo}/>
			</div>
		)
	}
}

export default MessagesContainer
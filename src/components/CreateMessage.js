import React from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../actions/messageActions';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';

class CreateMessage extends React.Component {
	
	state = {
    // posts: this.props.currentUser.posts,
    messageContent: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

	handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.messageInfo !== undefined) {
      this.props.dispatch(createMessage(this.state.messageContent, this.props.user.id, this.props.messageInfo.friendship_id))
      this.setState({messageContent: ''}) 
    }
  }

	render = () => {
    // console.log("createComment:", this.props)
	  return (
		  <form className="messageForm" onSubmit={this.handleSubmit}>
        <div className="messageInputs">
  		    <textarea className="messageInput" type="text" placeholder="Write a message..." value={this.state.commentContent} onChange={this.handleChange} name="messageContent"/>
  		    <input className="messageSubmit" type="submit" value="Send"/>
        </div>
		  </form>
		)
	}
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.currentUser
  }
}

export default withAuth(connect(mapStateToProps)(withRouter(CreateMessage)));
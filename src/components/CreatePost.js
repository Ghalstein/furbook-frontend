import React from 'react';
import { createPost } from '../actions/postActions';

class CreatePost extends React.Component {
	
	state = {
    // posts: this.props.currentUser.posts,
    postContent: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

	handleSubmit = (event) => {
    event.preventDefault();
     this.props.dispatch(createPost(this.state.postContent, this.props.user.id))
  }

	render = () => {
	  return (
			<div className="postForm">
			  <form className="postForm" onSubmit={this.handleSubmit}>
			    <h1>Make a post</h1>
			    <textarea className="postInput" type="text" placeholder="What's on your mind?" value={this.state.postContent} onChange={this.handleChange} name="postContent"/>
			    <input className="postSubmit" type="submit" value="Post"/>
			  </form>
			</div>
		)
	}
}

export default connect()(CreatePost);
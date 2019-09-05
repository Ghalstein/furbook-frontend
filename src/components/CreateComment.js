import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions/commentActions';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';

class CreateComment extends React.Component {
	
	state = {
    // posts: this.props.currentUser.posts,
    commentContent: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

	handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.postInfo !== undefined) {
      this.props.dispatch(createComment(this.state.commentContent, this.props.postInfo.user.id, this.props.postInfo.id))
      this.setState({commentContent: ''}) 
    }
  }

	render = () => {
    // console.log("createComment:", this.props)
	  return (
		  <form className="commentForm" onSubmit={this.handleSubmit}>
		    <h3>Write a comment</h3>
        <div className="commentInputs">
  		    <textarea className="commentInput" type="text" placeholder="Leave a comment..." value={this.state.commentContent} onChange={this.handleChange} name="commentContent"/>
  		    <input className="commentSubmit" type="submit" value="Comment"/>
        </div>
		  </form>
		)
	}
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    comments: state.commentReducer.comments,
    user: state.currentUser,
    posts: state.postReducer.posts
  }
}

export default withAuth(connect(mapStateToProps)(withRouter(CreateComment)));
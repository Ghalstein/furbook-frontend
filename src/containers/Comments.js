import React from 'react';
import { Link } from 'react-router-dom';
import Comment from '../components/Comment';
import CreateComment from '../components/CreateComment';
import { getComments } from '../actions/commentActions';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';

class Comments extends React.Component {

  state = {
    username: ''
  }

  componentDidMount() {
  	this.props.getComments();
  }
  
  render = () => {
  	// console.log("FROM COMMENTS: ", this.props)
  	let comments = this.props.comments.filter(comment => comment.post_id === this.props.info.id)
    this.props.commentsLength(comments.length)
    return (
    	<div className="all-comments">
	      <div className="comment-container">
	      	{comments.length ? comments.map(comment => <Comment comment={comment}/>) : <div className="no-comments">There are no comments...</div>}
	      </div>
	     </div>
    );
  }
}
// might have to move comments to posts
const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.currentUser,
    comments: state.commentReducer.comments
  }
}

const mapDispatchToProps = {
  // more to do for getComments redux
  getComments: getComments
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(Comments)))
import React from 'react';
import Comments from '../containers/Comments';
import CreateComment from './CreateComment';
import { getPostById } from '../actions/targetPostActions';
import { getUserById } from '../actions/targetUserActions';
import withAuth from '../hocs/withAuth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfilePost extends React.Component {
	state = {
    commentsClicked: false
  }

  handleCommentsClick = () => {
    this.setState({commentsClicked: !this.state.commentsClicked})
  }

  componentDidMount = () => {
  	this.props.getPostById(this.props.post.id);
  	this.props.getUserById(this.props.post.user_id);
  }

	render = () => {
		if (!Object.keys(this.props.userPost).length) return null;
		if (!Object.keys(this.props.postUser).length) return null;
		// debugger
		let date = new Date(this.props.post.created_at)
    date = date.toString();
    date = date.split(' ');
    date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
		return(
			<div className="profile-post-div">
          <div className="icon-date">
            <div className="icon-img-text"> 
                <div className="icon-img-text">
                  {this.props.postUser.pro_pic ?
			              <img className="icon-img" src={this.props.user.pro_pic.picture.url} />
			            :
			              <img className="icon-img" src='https://image.flaticon.com/icons/png/512/17/17479.png' />
			            }
                  <div className="icon"> 
                    {this.props.postUser.username}
                  </div>
                </div>
            </div>
            <div className="date">
              {date.toString()}
            </div>
          </div>
          <div className="content">
            {this.props.post.content}
          </div>
          {this.state.commentsClicked ? 
            <div className="comments-container">
              <a className="comment-tag" onClick={this.handleCommentsClick}>
                comments ({this.props.userPost.comments.length})
              </a>
              <Comments postComments={this.props.userPost.comments} info={this.props.userPost}/>
            </div>
          : 
            <a className="comment-tag" onClick={this.handleCommentsClick}>comments ({this.props.userPost.comments.length})</a>}
          <div className="createComment">
            <CreateComment postInfo={this.props.post} />
          </div>
        </div>
		)
	}
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.currentUser,
    userPost: state.targetPostReducer.post,
    postUser: state.userReducer.user
  }
}

const mapDispatchToProps = {
  getPostById: getPostById,
  getUserById: getUserById
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePost))
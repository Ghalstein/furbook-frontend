import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/userActions';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';
import Post from '../components/Feed/Post';
import CreatePost from '../components/Feed/CreatePost';
import { getPosts } from '../actions/postActions';

class HomePage extends React.Component {

  // makes sure there is a token and gets all global posts
  componentDidMount() {
    if ((!localStorage.token ) && this.props.hasOwnProperty('history')) this.props.history.push("/")
      this.props.getPosts();
  }

  render = () => {
    
    // enforcing user auth
    if (!this.props.user.id) return null

    return (
      <div className="HomePage">
        <h1 className="Hi"> {this.props.user.id ? `Here is your feed ${this.props.user.username}!` : 'Getting your profile...'}</h1>
        <div className="post-form-container">
          <div className="postForm">
            <CreatePost postCreated={this.postCreated} user={this.props.user}/>
          </div>
        </div>
        <div className="posts-container">
          <div className="posts">{this.props.hasOwnProperty("posts") && this.props.posts.length && Array.isArray(this.props.posts) ? this.props.posts.map(post => <Post post={post} comments={post.comments} />) : 'Getting your feed...'}</div>
        </div>
      </div>
    );
  }
}

// gets current user and posts
const mapStateToProps = state => {
  return {
    user: state.currentUser,
    posts: state.postReducer.posts
  }
}

const mapDispatchToProps = {
  setCurrentUser: getCurrentUser,
  getPosts: getPosts
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage)))
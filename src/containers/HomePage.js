import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/userActions';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';
import Post from '../components/Post';
import CreatePost from '../components/CreatePost';
import { getPosts } from '../actions/postActions';

class HomePage extends React.Component {

  // state = {
  //   // posts: this.props.currentUser.posts,
  //   postContent: ''
  // }

  // handleChange = (event) => {
  //   this.setState({[event.target.name]: event.target.value})
  // }



  componentDidMount() {
    if ((!localStorage.token) && this.props.hasOwnProperty('history')) this.props.history.push("/")
      this.props.getPosts();
      // console.log("rerendered homepage")
      // console.log(this.props);
  }

  render = () => {
    
    // console.log("homepage: ", this.props)
    return (
      <div className="HomePage">
        <h1 className="Hi"> {this.props.user.id ? `Here is your feed ${this.props.user.username}!` : 'Getting your profile...'}</h1>
        <div className="postForm">
          <CreatePost user={this.props.user}/>
        </div>
        <div className="posts-container">
          <ul className="posts">{this.props.posts && this.props.user.id ? this.props.posts.map(post => <Post post={post} comments={post.comments} />) : 'Getting your feed...'}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
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
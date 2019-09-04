import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/userActions';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';
import Post from '../components/Post'

class HomePage extends React.Component {

  state = {
    // posts: this.props.currentUser.posts,
    postContent: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  makePost = (postContent, userId) => {
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      },
      body: JSON.stringify({
        user_id: userId,
        content: postContent
      })
    })
     .then(res => res.json())
     .then(this.props.history.push("/home"))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.makePost(this.state.postContent, this.props.user.id)
  }

  componentDidMount() {
    if ((!localStorage.token) && this.props.hasOwnProperty('history')) this.props.history.push("/")
  }

  render = () => {
    return (
      <div className="HomePage">
        <h1> {this.props.user.id ? `Hello ${this.props.user.username}!` : 'Getting your profile...'}</h1>
        <div className="postForm">
          <form className="postForm" onSubmit={this.handleSubmit}>
            <h1>Make a post</h1>
            <textarea className="postInput" type="text" placeholder="What's on your mind?" value={this.state.postContent} onChange={this.handleChange} name="postContent"/>
            <input className="postSubmit" type="submit" value="Post"/>
          </form>
        </div>
        <div className="posts-container">
          <ul className="posts">{this.props.user.id ? this.props.user.posts.map(post => <Post post={post}/>) : 'Getting your feed...'}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.currentUser)
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  setCurrentUser: getCurrentUser
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage)))
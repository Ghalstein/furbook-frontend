import React from 'react';
import { Link } from 'react-router-dom';
import Comments from '../containers/Comments'

class Post extends React.Component {

  state = {
    username: '',
    commentsClicked: false
  }

  handleCommentsClick = () => {
    this.setState({commentsClicked: !this.commentsClicked})
  }


  
  componentDidMount() {
    console.log(this.props.post)
    fetch(`http://localhost:3000/users/${this.props.post.user_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      } 
    })
    .then(res => res.json())
    .then(info => this.setState({username: info.object.username}))
  }
  render = () => {
    let date = new Date(this.props.post.created_at)
    date = date.toString();
    date = date.split(' ');
    date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
    return (
      <li className="post-content post-info views">
        <div className="post-div">
          <div className="icon"> {this.state.username}</div>
          <div className="date">
            {date.toString()}
          </div>
          <div className="content">
            {this.props.post.content}
          </div>
          {this.state.commentsClicked ? <Comments info={this.props.post}/> : <a onClick={this.handleCommentsClick}>comments</a>}
        </div>
      </li>
    );
  }
}

export default Post;
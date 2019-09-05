import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {

  state = {
    username: ''
  }
  
  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.comment.user_id}`, {
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
    console.log(this.state)
    console.log("COMMENT:", this.props)
    let date = new Date(this.props.comment.created_at)
    date = date.toString();
    date = date.split(' ');
    date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
    // debugger
    return (
      <li className="comment-content views">
        <div className="comment-content comment-div">
          <div className="icon-date">
            <div className="comment-icon"> {this.state.username}</div>
            <div className="comment-date">
              {date.toString()}
            </div>
          </div>
          <div className="comment-text">
            {this.props.comment.content}
          </div>
        </div>
      </li>
    );
  }
}

export default Comment;
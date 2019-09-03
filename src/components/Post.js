import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component {

  state = {
    username: ''
  }
  
  componentDidMount() {
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
    return (
      <li className="post-content post-info views">
        <div>
          {this.props.post.content}
        </div>
        <a className="icon"> {this.state.username}</a>
      </li>
    );
  }
}

export default Post
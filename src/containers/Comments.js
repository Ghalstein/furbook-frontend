import React from 'react';
import { Link } from 'react-router-dom';
import Comment from '../components/Comment';
import CreateComment from '../components/CreateComment';

class Comments extends React.Component {

  state = {
    username: ''
  }
  
  // componentDidMount() {
  //   console.log(this.props.comment)
  //   fetch(`http://localhost:3000/users/${this.props.comment.user_id}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //        Authorization: localStorage.token
  //     } 
  //   })
  //   .then(res => res.json())
  //   .then(info => this.setState({username: info.object.username}))
  // }
  render = () => {
    return (
      <div className="comment-container">
      	{this.props.info.comments ? this.props.info.comments.map(comment => <Comment comment={comment}/>) : null}
      	<CreateComment postInfo={this.props.info} />
      </div>
    );
  }
}

export default Comments;
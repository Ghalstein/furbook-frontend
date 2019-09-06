import React from 'react';
import { Link } from 'react-router-dom';
import Comments from '../containers/Comments';
import CreateComment from './CreateComment';
import { getComments } from '../actions/commentActions';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';
// import IconPhoto from './IconPhoto';

class Post extends React.Component {

  state = {
    username: '',
    commentsClicked: false
  }

  handleCommentsClick = () => {
    this.setState({commentsClicked: !this.state.commentsClicked})
  }


  
  componentDidMount() {
    // console.log(this.props.post)
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
    console.log("post: ", this.props)
    // console.log(this.props.post)
    let date = new Date(this.props.post.created_at)
    date = date.toString();
    date = date.split(' ');
    date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
    return (
      <li className="post-content">
        <div className="post-div">
          <div className="icon-date">
            <div className="icon-img-text"> 
              <div className="icon-img-text">
                <div className="icon-img">
                  <img src={`${this.props.user.pro_pic.picture.url}`} />
                </div>
                <div className="icon"> 
                  {this.state.username}
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
                comments
              </a>
              <Comments postComments={this.props.comments} info={this.props.post}/>
            </div>
          : 
            <a className="comment-tag" onClick={this.handleCommentsClick}>comments</a>}
          <div className="createComment">
            <CreateComment postInfo={this.props.post} />
          </div>
        </div>
      </li>
    );
  }
}


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

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(Post)))
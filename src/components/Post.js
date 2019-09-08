import React from 'react';
import { Link } from 'react-router-dom';
import Comments from '../containers/Comments';
import CreateComment from './CreateComment';
import { getComments } from '../actions/commentActions';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';
import { getPostById } from '../actions/targetPostActions';
import { getUserById } from '../actions/targetUserActions';
// import IconPhoto from './IconPhoto';

class Post extends React.Component {

  state = {
    commentsClicked: false
  }

  handleCommentsClick = () => {
    this.setState({commentsClicked: !this.state.commentsClicked})
  }


  
  componentDidMount() {
    // console.log(this.props.post)
    this.props.getComments();
    this.props.getUserById(this.props.post.user_id)
    // this.props.getUserById(this.props.post.user_id)
    // this.props.getPostById(this.props.post.id)
    // fetch(`http://localhost:3000/users/${this.props.post.user_id}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //      Authorization: localStorage.token
    //   } 
    // })
    // .then(res => res.json())
    // .then(info => this.setState({postUser: info}))

  }


  render = () => {
    console.log("post: ", this.props)
    // console.log(this.props)
    // let comments = this.props.comments.filter(comment => comment.post_id === this.props.post.id)
    let date = new Date(this.props.post.created_at)
    date = date.toString();
    date = date.split(' ');
    date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
    if (!Object.keys(this.props.postUser).length) return null;
    // if (this.props.postUser.id !== this.props.post.user_id) return null;
    // debugger
    return (
      <li className="post-content">
        <div className="post-div">
          <div className="icon-date">
            <div className="icon-img-text"> 
              <Link to={`users/${this.props.post.user_id}`} >
                <div className="icon-img-text">
                 {this.props.postUser.pro_pic ?
                    <img className="icon-img" src={this.props.postUser.pro_pic.picture.url} />
                  :
                    <img className="icon-img" src='https://image.flaticon.com/icons/png/512/17/17479.png' />
                  }
                  <div className="icon"> 
                    {this.props.post.user.username}
                  </div>
                </div>
              </Link>
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
                comments ({this.props.post.comments.length})
              </a>
              <Comments postComments={this.props.post.comments} info={this.props.post}/>
            </div>
          : 
            <a className="comment-tag" onClick={this.handleCommentsClick}>comments ({this.props.post.comments.length})</a>}
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
    comments: state.commentReducer.comments,
    postUser: state.userReducer.user,
    postInfo: state.targetPostReducer.post
  }
}

const mapDispatchToProps = {
  // more to do for getComments redux
  getComments: getComments,
  getPostById: getPostById,
  getUserById: getUserById
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post))
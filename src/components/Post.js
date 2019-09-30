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

  // state keeps track of comments clicked and comments length
  state = {
    commentsClicked: false,
    commentsLength: 0
  }

  handleCommentsClick = () => {
    this.setState({commentsClicked: !this.state.commentsClicked})
  }

  commentsLength = (length) => {
    this.setState({commentsLength: length})
  }


  
  componentDidMount() {
    // console.log(this.props.post)
    // gets the specfic users of the post
    this.props.getComments();
    fetch(`https://furbook-api.herokuapp.com/users/${this.props.post.user_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      } 
    })
    .then(res => res.json())
    .then(info => this.setState({postUser: info}))
    // debugger
  }

  commentCreated = () => {
    this.props.getComments();
  }

  render = () => {
    // console.log("post: ", this.props)
    // console.log(this.props.post)
    let comments = this.props.comments.filter(comment => comment.post_id === this.props.post.id)
    let date = new Date(this.props.post.created_at)
    date = date.toString();
    date = date.split(' ');
    date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
    // console.log("hi from posts")
    return (
      <div className="post-content">
        <div className="post-div">
          <div className="icon-date">
            <div className="icon-img-text"> 
              <Link to={`/users/${this.props.post.user.id}`} >
                <div className="icon-img-text">
                  {this.props.post.user.pro_pic_url.length ?
                    <img className="icon-img" src={this.props.post.user.pro_pic_url.slice(-1)[0].url} />
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
                comments ({comments.length})
              </a>
              <Comments commentsLength={this.commentsLength} postComments={this.props.comments} info={this.props.post}/>
            </div>
          : 
            <a className="comment-tag" onClick={this.handleCommentsClick}>comments ({comments.length})</a>}
          <div className="createComment">
            <CreateComment commentCreated={this.commentCreated} postInfo={this.props.post} />
          </div>
        </div>
      </div>
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
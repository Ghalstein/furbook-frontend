
import React from 'react';
import { Link } from 'react-router-dom';
import Comments from '../containers/Comments';
import CreateComment from './CreateComment';
import { getComments } from '../actions/commentActions';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';
// import IconPhoto from './IconPhoto';

class ProfilePost extends React.Component {

  state = {
    commentsClicked: false,
    commentsLength: 0
  }

  handleCommentsClick = (e) => {
    var commentsScroll = e.target.parentElement.parentElement.parentElement.parentElement;
      // if (commentsScroll) {
      //   commentsScroll.scrollTop = commentsScroll.scrollHeight;
      // }
    this.setState({commentsClicked: !this.state.commentsClicked})
  }

  commentsLength = (length) => {
    this.setState({commentsLength: length})
  }


  
  componentDidMount() {
    // console.log(this.props.post)
    this.props.getComments();
    fetch(`http://furbook-api.herokuapp.com/users/${this.props.post.user_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      } 
    })
    .then(res => res.json())
    .then(info => this.setState({postUser: info}))
  }


  render = () => {
    // console.log("post: ", this.props)
    // console.log(this.props.post)
    // debugger
    let comments = this.props.comments.filter(comment => comment.post_id === this.props.post.id)
    let date = new Date(this.props.post.created_at)
    date = date.toString();
    date = date.split(' ');
    date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
    if (this.state.postUser === undefined) return null;
    return (
      <div className="post-content">
        <div className="profile-post-div">
          <div className="icon-date">
            <div className="icon-img-text"> 
              <Link className= "profile-post-link "to={`/users/${this.state.postUser.id}`} >
                <div className="icon-img-text">
                  {this.state.postUser.pro_pics.length ?
                    <img className="icon-img" src={this.state.postUser.pro_pics.slice(-1)[0].picture.url} />
                  :
                    <img className="icon-img" src='https://image.flaticon.com/icons/png/512/17/17479.png' />
                  }
                  <div className="icon"> 
                    {this.state.postUser.username}
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
              <a className="comment-tag" onClick={e => this.handleCommentsClick(e)}>
                comments ({comments.length})
              </a>
              <Comments commentsLength={this.commentsLength} postComments={this.props.comments} info={this.props.post}/>
            </div>
          : 
            <a className="comment-tag" onClick={this.handleCommentsClick}>comments ({comments.length})</a>}
          <div className="createComment">
            <CreateComment postInfo={this.props.post} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePost)
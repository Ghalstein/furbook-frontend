// import React from 'react';
// import Comments from '../containers/Comments';
// import CreateComment from './CreateComment';
// import { getPostById } from '../actions/postActions';
// import withAuth from '../hocs/withAuth';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

// class ProfilePost extends React.Component {
// 	state = {
//     commentsClicked: false
//   }

//   handleCommentsClick = () => {
//     this.setState({commentsClicked: !this.state.commentsClicked})
//   }

//   componentDidMount = () => {
//   	this.props.getPostById(this.props.post.id);
//   }

// 	render = () => {
// 		if (!Object.keys(this.props.userPost).length) return null;
// 		let date = new Date(this.props.post.created_at)
//     date = date.toString();
//     date = date.split(' ');
//     date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
// 		return(
// 			<div className="profile-post-div">
//           <div className="icon-date">
//             <div className="icon-img-text"> 
//                 <div className="icon-img-text">
//                   {this.props.user.pro_pic ?
// 			              <img className="icon-img" src={this.props.user.pro_pic.picture.url} />
// 			            :
// 			              <img className="icon-img" src='https://image.flaticon.com/icons/png/512/17/17479.png' />
// 			            }
//                   <div className="icon"> 
//                     {this.props.post.username}
//                   </div>
//                 </div>
//             </div>
//             <div className="date">
//               {date.toString()}
//             </div>
//           </div>
//           <div className="content">
//             {this.props.post.content}
//           </div>
//           {this.state.commentsClicked ? 
//             <div className="comments-container">
//               <a className="comment-tag" onClick={this.handleCommentsClick}>
//                 comments ({this.props.userPost.comments.length})
//               </a>
//               <Comments postComments={this.props.userPost.comments} info={this.props.userPost}/>
//             </div>
//           : 
//             <a className="comment-tag" onClick={this.handleCommentsClick}>comments ({this.props.userPost.comments.length})</a>}
//           <div className="createComment">
//             <CreateComment postInfo={this.props.post} />
//           </div>
//         </div>
// 		)
// 	}
// }

// const mapStateToProps = state => {
//   // console.log(state)
//   return {
//     user: state.currentUser,
//     userPost: state.postReducer.post
//   }
// }

// const mapDispatchToProps = {
//   getPostById: getPostById
// }

// export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePost)))

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

  handleCommentsClick = () => {
    this.setState({commentsClicked: !this.state.commentsClicked})
  }

  commentsLength = (length) => {
    this.setState({commentsLength: length})
  }


  
  componentDidMount() {
    // console.log(this.props.post)
    this.props.getComments();
    fetch(`http://localhost:3000/users/${this.props.post.user_id}`, {
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
    let comments = this.props.comments.filter(comment => comment.post_id === this.props.post.id)
    let date = new Date(this.props.post.created_at)
    date = date.toString();
    date = date.split(' ');
    date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
    if (this.state.postUser === undefined) return null;
    return (
      <li className="post-content">
        <div className="profile-post-div">
          <div className="icon-date">
            <div className="icon-img-text"> 
              <Link className= "profile-post-link "to={`/users/${this.state.postUser.id}`} >
                <div className="icon-img-text">
                  {this.state.postUser.pro_pic.length ?
                    <img className="icon-img" src={this.state.postUser.pro_pic.slice(-1)[0].picture.url} />
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
              <a className="comment-tag" onClick={this.handleCommentsClick}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePost)
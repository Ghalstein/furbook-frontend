import React from 'react';
import { Link } from 'react-router-dom';
import { getUserById } from '../actions/usersActions';
import { connect } from 'react-redux';

class Comment extends React.Component {

  state = {
    user: {}
  }
  
  componentDidMount() {
    // debugger
    fetch(`https://furbook-api.herokuapp.com/users/${this.props.comment.user_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
         Authorization: localStorage.token
      } 
    })
    .then(res => res.json())
    .then(info => this.setState({user: info}))
  }
  render = () => {
    // console.log(this.state)
    // console.log("COMMENT:", this.props)
    let date = new Date(this.props.comment.created_at)
    date = date.toString();
    date = date.split(' ');
    date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
    if (Object.keys(this.state.user).length) {
      // debugger
      return (
        <li className="comment-content views">
          <div className="comment-content comment-div">
            <div className="icon-date">
              <Link className="comment-link" to={`/users/${this.state.user.id}`} >
                <div className="icon-img-text">
                  {this.props.comment.user.pro_pic_url.length ?
                    <img className="icon-img" src={this.props.comment.user.pro_pic_url.splice(-1)[0].url} />
                  :
                    <img className="icon-img" src='httpss://image.flaticon.com/icons/png/512/17/17479.png' />
                  }
                  <div className="comment-icon"> 
                    {this.state.user.username}
                  </div>
                </div>
              </Link>
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
    else return null
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
  getUserById: getUserById
}

export default connect()(Comment);
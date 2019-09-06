import React from 'react';
import { Link } from 'react-router-dom';
import Comments from '../containers/Comments';
import CreateComment from './CreateComment';
import { getComments } from '../actions/commentActions';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';
import { getUserById } from '../actions/usersActions';

class IconPhoto extends React.Component {

  // state = {
  //   username: '',
  //   commentsClicked: false
  // }

  // handleCommentsClick = () => {
  //   this.setState({commentsClicked: !this.state.commentsClicked})
  // }


  
  // componentDidMount() {
  //   // console.log(this.props.post)
  //   fetch(`http://localhost:3000/users/${this.props.post.user_id}`, {
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
    // console.log("posts: ", this.props)
    console.log(this.props)
    return (
      <div>
        <img src=""/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = {
  // more to do for getComments redux
  getUserById: getUserById
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(IconPhoto)))
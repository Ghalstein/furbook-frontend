import React from 'react';
import { Link } from 'react-router-dom';
import Comments from '../containers/Comments';
import CreateComment from './CreateComment';
import { getComments } from '../actions/commentActions';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';
import { getUserById } from '../actions/usersActions';

// icon photos that may show up on comments or posts
class IconPhoto extends React.Component {

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
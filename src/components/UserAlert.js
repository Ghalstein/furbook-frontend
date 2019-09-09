import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getCurrentUser } from '../actions/userActions';
// import withAuth from '../hocs/withAuth';
// import { withRouter } from 'react-router-dom';
// import Post from '../components/Post';
// import CreatePost from '../components/CreatePost';
// import { getPosts } from '../actions/postActions';

class UserAlert extends React.Component {

  render = () => {
    if (!this.props.user.id) return null;
    // console.log("homepage: ", this.props)
    // console.log(this.props)
    // debugger
    return (
      <div className="notfication-alert">
        <Link to={`/users/${this.props.user.id}`} onClick={() => this.props.handleExitNotifications()}>
          {this.props.user.username} wants to be friends. Click here to checkout {this.props.user.username}'s page. 
        </Link>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   // console.log(state)
//   return {
//     user: state.currentUser,
//     posts: state.postReducer.posts
//   }
// }

// const mapDispatchToProps = {
//   setCurrentUser: getCurrentUser,
//   getPosts: getPosts
// }

export default UserAlert
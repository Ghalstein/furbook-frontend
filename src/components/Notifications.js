import React from 'react';
import UserAlert from './UserAlert';
// import { connect } from 'react-redux';
// import { getCurrentUser } from '../actions/userActions';
// import withAuth from '../hocs/withAuth';
// import { withRouter } from 'react-router-dom';
// import Post from '../components/Post';
// import CreatePost from '../components/CreatePost';
// import { getPosts } from '../actions/postActions';

class Notifications extends React.Component {

  render = () => {
    // console.log("homepage: ", this.props)
    return (
      <div className="notfications-modal-content">
        <span className="close" onClick={() => this.props.handleExitNotifications()}>x</span>
        <h2> Your Notifications: </h2>
        {this.props.requests.length ? this.props.requests.map(request => <UserAlert user={request.user} handleExitNotifications={this.props.handleExitNotifications}/>) : <div className="no-notifications-found"> No notifications... </div>}
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

export default Notifications
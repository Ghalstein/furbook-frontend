import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions/commentActions';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';
import UploadProPic from './uploadProPic';

class EditProfilePic extends React.Component {


  render = () => {
    // console.log("createComment:", this.props)
    return (
      <div className="profile-modal-content">
        <h3 className="close">x</h3>
        <UploadProPic />
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    comments: state.commentReducer.comments,
    user: state.currentUser,
    posts: state.postReducer.posts
  }
}

export default withAuth(connect(mapStateToProps)(withRouter(EditProfilePic)));
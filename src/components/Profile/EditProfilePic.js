import React from 'react';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';
import { withRouter } from 'react-router-dom';
import UploadProPic from './uploadPhoto';

class EditProfilePic extends React.Component {


  render = () => {
    return (
      <div className="profile-modal-content">
        <h3 className="profile-close" onClick={() => this.props.handleCloseIcon()}>x</h3>
        <UploadProPic type={"pro_pic"} />
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
import React from 'react';
import UploadPhoto from '../components/uploadPhoto';
import UploadProPic from '../components/uploadProPic';
import withAuth from '../hocs/withAuth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCurrentUser } from '../actions/userActions';



class ProfilePage extends React.Component {

  componentDidMount = () => {
    if (!localStorage.token && this.props.hasOwnProperty('history')) this.props.history.push("/")
  }

  render = () => {
    // debugger;
    return (
      <div className="ProfilePage">
        <h1> {this.props.user.username ? `Hello ${this.props.user.username}!` : 'Getting your profile...'}</h1>
        <UploadPhoto userInfo={this.props.userInfo}/>
        <UploadProPic userInfo={this.props.userInfo}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  setCurrentUser: getCurrentUser
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage)))
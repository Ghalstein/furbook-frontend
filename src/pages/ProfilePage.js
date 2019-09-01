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
    return (
      <div className="ProfilePage">
        ProfilePage
        <UploadPhoto userInfo={this.props.userInfo}/>
        <UploadProPic userInfo={this.props.userInfo}/>
      </div>
    );
  }
}

export default ProfilePage;
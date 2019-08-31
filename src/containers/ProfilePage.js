import React from 'react';
import UploadButton from '../components/UploadButton';
import UploadPhoto from '../components/uploadPhoto';


class ProfilePage extends React.Component {

  render = () => {
  	if (!localStorage.token) this.props.history.push("/")
    return (
      <div className="ProfilePage">
        ProfilePage
        <UploadPhoto userInfo={this.props.userInfo}/>
      </div>
    );
  }
}

export default ProfilePage;
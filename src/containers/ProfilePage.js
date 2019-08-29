import React from 'react';
import UploadButton from '../components/UploadButton';

class ProfilePage extends React.Component {

  render = () => {
  	if (!localStorage.token) this.props.history.push("/")
    return (
      <div className="ProfilePage">
        ProfilePage
        <UploadButton />
      </div>
    );
  }
}

export default ProfilePage;
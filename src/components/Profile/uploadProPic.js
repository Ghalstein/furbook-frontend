import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// simialr to upload photos except for profile pics
class uploadProPic extends React.Component {

  state = { 
    proPicFile: null
  }

  handleSubmit = (e) => {
    // debugger;
    e.preventDefault();
    const formData = new FormData();
    formData.append('pro_pic[user_id]', this.props.user.id);
    formData.append('pro_pic[picture]', this.state.proPicFile);
    // const formData = { user_id: this.props.userInfo.id, picture: this.state.photoFile};
    axios({
      method: 'POST',
      url: `https://furbook-api.herokuapp.com/pro_pics`,
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${localStorage.token}` }}
    })
    .then(() => window.location.reload(false))
  }

  handleFile = (e) => {
    this.setState({proPicFile: e.currentTarget.files[0]});
  }

  render() {
    // console.log(this.props);
    return (
      <div className="uplaod-form">
        Upload a new profile picture
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleFile}/>
          <button className="upload-button">Upload Photo </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

export default connect(mapStateToProps)(uploadProPic);
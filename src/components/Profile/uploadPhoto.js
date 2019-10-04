import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class uploadPhoto extends React.Component {

  state = { 
    photoFile: null
  }

  // uploads the photo 
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(`${this.props.type}[user_id]`, this.props.user.id);
    formData.append(`${this.props.type}[picture]`, this.state.photoFile);

    // customized fetch for creating the image in rails
    axios({
      method: 'POST',
      url: `https://furbook-api.herokuapp.com/${this.props.type}s`,
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${localStorage.token}` }}
    })
    .then(() => window.location.reload(false));
  }

  handleFile = (e) => {
    this.setState({photoFile: e.currentTarget.files[0]});
  }

  render() {
    return (
      <div>
        Upload a new {this.props.type === "photos" ? "photo" : "profile picture"}.
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

export default connect(mapStateToProps)(uploadPhoto);
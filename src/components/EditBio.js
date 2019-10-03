import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions/commentActions';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';

class EditProfilePic extends React.Component {

// manages state of the bio typed
state = {
  // posts: this.props.currentUser.posts,
  bioContent: ''
}

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value})
}


// edits the bio of the user and posts it to the data base 
handleSubmit = (event) => {
  event.preventDefault();
  // if (this.props.messageInfo !== undefined) {
  fetch(`https://furbook-api.herokuapp.com/users/${this.props.profileUser.id}`, {
    'method': 'PATCH',
    'headers': {
      'Authorization': localStorage.token,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    'body': JSON.stringify({
      "bio": this.state.bioContent
    }) 
  })
}


  render = () => {

  return (
    <div className="profile-modal-content">
      <h3 className="profile-close" onClick={() => this.props.handleEditProfile()}>x</h3>
      <form className="bioForm" onSubmit={this.handleSubmit}>
        <div className="bioInputs">
          <textarea className="bioInput" type="text" placeholder={this.props.profileUser.bio} value={this.state.bioContent} onChange={this.handleChange} name="bioContent"/>
          <input className="bioSubmit" type="submit" value="Change"/>
        </div>
      </form>
    </div>
  )
  }
}

const mapStateToProps = state => {

  return {
    user: state.currentUser
  }
}

export default withAuth(connect(mapStateToProps)(withRouter(EditProfilePic)));
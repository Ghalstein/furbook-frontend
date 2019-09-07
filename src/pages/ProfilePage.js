import React from 'react';
import UploadPhoto from '../components/uploadPhoto';
import UploadProPic from '../components/uploadProPic';
import withAuth from '../hocs/withAuth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserById } from '../actions/usersActions';

// make a working redux fetch for the specific profile you are on

class ProfilePage extends React.Component {

  componentDidMount = () => {
    if (!localStorage.token && this.props.hasOwnProperty('history')) this.props.history.push("/")
    // if (this.props.location.pathname === "/profile") {
    //   console.log(this.props)
    //   this.setState({user: this.props.user})
    // }
    // this.setState({userID: this.props.location.pathname.split("/")[2]})
    this.props.getUserById(this.props.location.pathname.split("/")[2]);
  }

  render = () => {
    console.log(this.props)
    if (!Object.keys(this.props.profileUser).length) return null;
    return (
      <div className="/profile">
        <div className="ProfilePage">
          <h1 className="Hi"> {this.props.profileUser.username ? `${this.props.profileUser.username}'s page` : 'Getting your profile...'}</h1>
          <div className="profile-icon-div">
            <img className="profile-icon" src={this.props.profileUser.pro_pic.picture.url} />
            <h2>{this.props.profileUser.username}</h2>
          </div>
          <div className="posts-photos-div">
            
            <div className="posts">
              Posts
            </div>

            <div className="photos">
              Photos
            </div>
          </div>
          <UploadPhoto userInfo={this.props.userInfo}/>
          <UploadProPic userInfo={this.props.userInfo}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.currentUser,
    profileUser: state.usersReducer.user
  }
}

const mapDispatchToProps = {
  getUserById: getUserById
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage)))
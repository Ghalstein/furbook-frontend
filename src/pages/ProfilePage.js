import React from 'react';
import UploadPhoto from '../components/uploadPhoto';
import UploadProPic from '../components/uploadProPic';
import withAuth from '../hocs/withAuth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserById } from '../actions/usersActions';
import ProfilePhotos from '../components/ProfilePhotos';
import ProfilePosts from '../components/ProfilePosts';
import EditProfilePic from '../components/EditProfilePic';

// make a working redux fetch for the specific profile you are on

class ProfilePage extends React.Component {

  state = {
    iconClicked: false
  }
  componentDidMount = () => {
    if (!localStorage.token && this.props.hasOwnProperty('history')) this.props.history.push("/")
    // if (this.props.location.pathname === "/profile") {
    //   console.log(this.props)
    //   this.setState({user: this.props.user})
    // }
    // this.setState({userID: this.props.location.pathname.split("/")[2]})
    this.props.getUserById(this.props.location.pathname.split("/")[2]);
  }

  handleIconClick = () => {
    if (this.props.user.id === parseInt(this.props.location.pathname.split("/")[2])) {
      this.setState({iconClicked: true})
    }
  }

  handleCloseIcon = () => {
    this.setState({iconClicked: false})
  }

  handleFriendRequest = () => {
    fetch(`http://localhost:3000/friendships`, {
      method: "POST",
      headers: {
        'Authorization': localStorage.token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
          'user_id': this.props.user.id,
          'friend_user_id': this.props.profileUser.id
        })

    }).then(res => res.json())
    .then(this.setState({friendRequestSent: true}))
  }

  handleAccept = () => {
    let id = this.props.user.pending_friend_requests.find(friendRequest => friendRequest.user.id === this.props.profileUser.id).id;
    fetch(`http://localhost:3000/friendships/${id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': localStorage.token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
          "pending": false
        })
    }).then(res => res.json())
    .then(this.setState({acceptedRequest: true}))

  }

  handleUnfriend = () => {
    let id = this.props.user.pending_friend_requests.find(friendRequest => friendRequest.user.id === this.props.profileUser.id).id;
    fetch(`http://localhost:3000/friendships/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': localStorage.token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => res.json())
    .then(this.setState({unfriended: true}))
  }


  render = () => {
    if (!Object.keys(this.props.profileUser).length) return null;
    if (!this.props.user.id) return null;
    console.log(this.props)
    // debugger
    return (
      <div className="/profile">
        <div className="ProfilePage">
        {this.state.iconClicked ? 
          <div className="profile-modal">
            <EditProfilePic handleCloseIcon={this.handleCloseIcon}/>
          </div>
        :
          null
        }
          <h1 className="Hi"> {this.props.profileUser.username ? `${this.props.profileUser.username}'s page` : 'Getting your profile...'}</h1>
          <div className="profile-icon-div">
            {this.props.profileUser.pro_pic.length ?
              <img onClick={this.handleIconClick} className="profile-icon" src={this.props.profileUser.pro_pic.slice(-1)[0].picture.url} />
            :
              <img onClick={this.handleIconClick} className="profile-icon" src='https://image.flaticon.com/icons/png/512/17/17479.png' />
            }
            <h2 className="profile-username">{this.props.profileUser.username}</h2>
          </div>
          <div className="friend-options">
            {this.props.user.id === parseInt(this.props.location.pathname.split("/")[2]) ?
              null
            :
              this.props.profileUser.friends.find(friend => friend.user.id === this.props.user.id) || this.state.acceptedRequest ?
                <button className="unfriend">Unfriend</button>
              :
                this.props.profileUser.pending_friend_requests.find(friendRequest => friendRequest.user.id === this.props.user.id) || this.state.friendRequestSent ?
                  <a className="request-pending">Request Pending</a>
                :
                  this.props.user.pending_friend_requests.find(friendRequest => friendRequest.user.id === this.props.profileUser.id) || !this.state.unfriended?
                    <button onClick={this.handleAccept} className="accept-request"> Accept their Request </button>
                  :
                    <button onClick={this.handleFriendRequest} className="friend-request">Friend Request</button>
            }
          </div>
          <div className="posts-photos-div">
            {this.props.profileUser.posts.length ? 
              <div className="profile-posts-container">
                <h2> Posts</h2>
                <ProfilePosts user={this.props.profileUser} />
              </div>
            :
              <h2 className="no-posts-to-show">No posts to show...</h2>
            }

            {this.props.profileUser.photos.length ? 
              <div className="profile-photos">
                <h2> Photos</h2>
                <ProfilePhotos photos={this.props.profileUser.photos}/>
                {this.props.user.id === parseInt(this.props.location.pathname.split("/")[2]) ?
                  <UploadPhoto userInfo={this.props.userInfo}/>
                :
                  null
                }
              </div>
            :
              <div className="profile-photos">
                <h2 className="no-photos-to-show">No photos to show...</h2>
                {this.props.user.id === parseInt(this.props.location.pathname.split("/")[2]) ?
                  <UploadPhoto userInfo={this.props.userInfo}/>
                :
                  null
                }
              </div>
            }
          </div>
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
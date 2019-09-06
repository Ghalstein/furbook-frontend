import React from 'react';
import UploadPhoto from '../components/uploadPhoto';
import UploadProPic from '../components/uploadProPic';
import withAuth from '../hocs/withAuth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class ProfilePage extends React.Component {

  state = {
    user: {}
  }

  componentDidMount = () => {
    if (!localStorage.token && this.props.hasOwnProperty('history')) this.props.history.push("/")
    // if (this.props.location.pathname === "/profile") {
    //   console.log(this.props)
    //   this.setState({user: this.props.user})
    // }
  }

  render = () => {
    // debugger;
    // console.log(this.props)
    console.log(this.props)
    return (
      <div className="/profile">
        {this.props.location.pathname === "/profile" ?
        <div className="ProfilePage">
          <h1 className="Hi"> {this.props.user.username ? `${this.props.user.username}'s page` : 'Getting your profile...'}</h1>
          <UploadPhoto userInfo={this.props.userInfo}/>
          <UploadProPic userInfo={this.props.userInfo}/>
        </div>
        :
        <div>
          other user
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.currentUser
  }
}

export default withAuth(connect(mapStateToProps)(withRouter(ProfilePage)))
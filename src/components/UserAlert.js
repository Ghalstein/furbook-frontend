import React from 'react';
import { Link } from 'react-router-dom';

// the notfication for a pending request
class UserAlert extends React.Component {

  render = () => {
    if (!this.props.user.id) return null;
    // console.log("homepage: ", this.props)
    // console.log(this.props)
    // debugger
    return (
      <div className="notfication-alert">
        <Link to={`/users/${this.props.user.id}`} onClick={() => this.props.handleExitNotifications()}>
          {this.props.user.username} wants to be friends. Click here to checkout {this.props.user.username}'s page. 
        </Link>
      </div>
    );
  }
}

export default UserAlert
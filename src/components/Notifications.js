import React from 'react';
import UserAlert from './UserAlert';

class Notifications extends React.Component {

  render = () => {
    // console.log("homepage: ", this.props)
    return (
      <div className="notfications-modal-content">
        <span className="close" onClick={() => this.props.handleExitNotifications()}>x</span>
        <h2> Your Notifications: </h2>
        {this.props.requests.length ? this.props.requests.map(request => <UserAlert user={request.user} handleExitNotifications={this.props.handleExitNotifications}/>) : <div className="no-notifications-found"> No notifications... </div>}
      </div>
    );
  }
}


export default Notifications
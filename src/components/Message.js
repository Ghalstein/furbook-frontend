import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Message extends React.Component {

  state = {
    info: {}
  }
  
  componentDidMount() {
    if (this.props.messageInfo.user_id === this.props.user.id) {
      this.setState({info: this.props})
      this.setState({friend: false})
    }
    else {
      this.setState({info: this.props})
      this.setState({friend: true})
    }
  }

  componentDidUpdate() {
    var objDiv = document.querySelector(".dm-container");
    if (objDiv) {
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  }

  render = () => {

    if (!Object.keys(this.state.info).length) return null
    if (this.state.info.messageInfo.friendship.id !== this.props.friendship_id) return null;
    console.log(this.props)

    return (
      <li className="message-content views">
        <div className="message-content comment-div">
          { this.state.info.messageInfo.user.id !== this.props.user.id ?
            <div className="friend-message-text">
              {this.state.info.messageInfo.content}
            </div>
          :
            <div className="user-message-text">
              {this.state.info.messageInfo.content}
            </div>
          }
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.currentUser
  }
}

export default connect(mapStateToProps)(Message);
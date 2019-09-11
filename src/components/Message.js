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

  render = () => {
    // debugger
    if (!Object.keys(this.state.info).length) return null
    if (this.state.info.messageInfo.friendship.id !== this.props.friendship_id) return null;
    console.log(this.props)
    // console.log("COMMENT:", this.props)
    // let date = new Date(this.props.mesageInfo.created_at)
    // date = date.toString();
    // date = date.split(' ');
    // date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
    // debugger
    return (
      <li className="message-content views">
        <div className="message-content comment-div">
          <div className="icon-date">
          </div>
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
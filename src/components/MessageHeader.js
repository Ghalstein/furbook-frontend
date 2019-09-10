import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { getCurrentUser } from '../actions/userActions';
import withAuth from '../hocs/withAuth';
import { withRouter } from 'react-router-dom';
import MessagesContainer from './MessagesContainer';

class MessageHeader extends React.Component {

  state ={
      open: false
  }

  handleClick = () => {
    this.setState({open: !this.state.open})
  }

  render = () => {
  	// if (!localStorage.token && this.props.hasOwnProperty('history')) this.props.history.push("/")
      console.log(this.state)
    
    return (
      <div className="message-setup">
        {this.state.open ? 
          <div className="messages-modal">
            <MessagesContainer messagesInfo={this.props.user.messages_info}/>
          </div>
        :
          null
        }
        <div className="message-menu">
            <a onClick={this.handleClick} className="messages-header">messages</a>
        </div>
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

const mapDispatchToProps = {
  setCurrentUser: getCurrentUser
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(MessageHeader)))
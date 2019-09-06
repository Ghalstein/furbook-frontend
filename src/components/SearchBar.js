import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers } from '../actions/usersActions'

class SearchBar extends React.Component {

  state = {
    // posts: this.props.currentUser.posts,
    search: '',
    users: []
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    let search = this.props.users.map(user => user.username).filter(username => username.toLowerCase().includes(this.state.search.toLowerCase()))
    this.setState({users: search})
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }


  componentDidMount = () => {
    this.props.getUsers();
  }

  render = () => {
    console.log(this.state);
    return (
      <div className="user-search-bar">
        <form className="search-user-form" onSubmit={this.handleSubmit}>
        <div className="search-inputs">
          <textarea className="search-user" type="text" placeholder="Find your friends..." value={this.state.postContent} onChange={this.handleChange} name="search"/>
          <input className="submit-search-user" type="submit" value="search"/>
        </div>
      </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    users: state.usersReducer.users
  }
}

const mapDispatchToProps = {
  getUsers: getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
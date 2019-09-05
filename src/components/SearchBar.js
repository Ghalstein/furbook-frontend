import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchBar extends React.Component {

  state = {
    // posts: this.props.currentUser.posts,
    search: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.search)
  }

  render = () => {
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
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
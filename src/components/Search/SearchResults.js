import React from 'react';
import UserFound from './UserFound';

class SearchResults extends React.Component {

  render = () => {
    // the search bar
    return (
      <div className="search-modal-content">
        <span className="close" onClick={() => this.props.handleExit()}>x</span>
        <h2> search results: </h2>
        {this.props.users.length ? this.props.users.map(user => <UserFound user={user} handleExit={this.props.handleExit}/>) : <div className="no-user-found"> No users found... </div>}
      </div>
    );
  }
}

export default SearchResults
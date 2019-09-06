import React from 'react';
import UserFound from '../components/UserFound';
// import { connect } from 'react-redux';
// import { getCurrentUser } from '../actions/userActions';
// import withAuth from '../hocs/withAuth';
// import { withRouter } from 'react-router-dom';
// import Post from '../components/Post';
// import CreatePost from '../components/CreatePost';
// import { getPosts } from '../actions/postActions';

class SearchResults extends React.Component {


  render = () => {
    
    // console.log("homepage: ", this.props)
    return (
      <div className="search-results-container">
        <h2> search results: </h2>
        {this.props.users.map(user => <UserFound user={user}/>)}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   // console.log(state)
//   return {
//     user: state.currentUser,
//     posts: state.postReducer.posts
//   }
// }

// const mapDispatchToProps = {
//   setCurrentUser: getCurrentUser,
//   getPosts: getPosts
// }

export default SearchResults
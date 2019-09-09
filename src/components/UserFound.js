import React from 'react';
// import { connect } from 'react-redux';
// import { getCurrentUser } from '../actions/userActions';
// import withAuth from '../hocs/withAuth';
// import { withRouter } from 'react-router-dom';
// import Post from '../components/Post';
// import CreatePost from '../components/CreatePost';
// import { getPosts } from '../actions/postActions';

class UserFound extends React.Component {


  render = () => {
    
    // console.log("homepage: ", this.props)
    console.log(this.props.user)
    return (
      <div className="user-found">
	      {this.props.user.pro_pic.length ?
	        <img className="search-icon-img" src={this.props.user.pro_pic.slice(-1)[0].picture.url} />
	      :
	        <img className="search-icon-img" src='https://image.flaticon.com/icons/png/512/17/17479.png' />
	      }
        {this.props.user.username}
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

export default UserFound;
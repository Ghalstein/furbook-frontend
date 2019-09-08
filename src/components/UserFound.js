import React from 'react';
import { Link } from 'react-router-dom';
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
    return (
    	<li>
	    	<Link to={`users/${this.props.user.id}`} >
		      <div className="user-found">
		      	{this.props.user.pro_pic ?
		          <img className="found-profile-link-icon" src={this.props.user.pro_pic.picture.url} />
		        :
		          <img className="found-profile-link-icon" src='https://image.flaticon.com/icons/png/512/17/17479.png' />
		        }
		        {this.props.user.username}
		      </div>
		    </Link>
		  </li>
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
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
    console.log(this.props.user)
    return (
      <div className="user-found">
      	<Link className="user-found-name"onClick={() => this.props.handleExit()} to={`/users/${this.props.user.id}`}>
		      {this.props.user.pro_pics.length ?
		        <img className="search-icon-img" src={this.props.user.pro_pics.slice(-1)[0].picture.url} />
		      :
		        <img className="search-icon-img" src='https://image.flaticon.com/icons/png/512/17/17479.png' />
		      }
	        {this.props.user.username}
        </Link>
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
import React from 'react';
import { Link } from 'react-router-dom';

class UserFound extends React.Component {


  render = () => {
    
    // if a user is found he/she is added to the found list
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


export default UserFound;
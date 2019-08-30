import React from 'react';
import { Link } from 'react-router-dom';

class HomeHeader extends React.Component {

  render = () => {
  	if (!localStorage.token) this.props.history.push("/")
    return (
      <div className="HomeHeader">
        <ul>
        	<li><Link to="/myProfile"> Profile</Link></li> 
        </ul>
      </div>
    );
  }
}

export default HomeHeader;
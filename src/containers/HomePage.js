import React from 'react';
import HomeHeader from '../components/HomeHeader';

class HomePage extends React.Component {


  render = () => {
  	if ((!localStorage.token) && this.props.hasOwnProperty('history')) this.props.history.push("/")
  		console.log(this.props.userInfo)
    return (
      <div className="HomePage">
        <HomeHeader userInfo={this.props.userInfo}/>
      </div>
    );
  }
}

export default HomePage;

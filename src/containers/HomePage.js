import React from 'react';
import HomeHeader from '../components/HomeHeader';
import { connect } from 'react-redux';

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

/*
// anytime you want info form your store
const mapStatesToProps = (state, props) => {
	
	return {}
}

// any time you want to pass to store 
const mapDispatchToProps = (dispatch, props) => {
	
	return {}
}

*/
export default HomePage;
// export default connect()(HomePage)

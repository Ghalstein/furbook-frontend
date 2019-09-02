import React from 'react';
import HomeHeader from '../components/HomeHeader';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/userActions';

class HomePage extends React.Component {

  state = {
    username: ''
  }
  componentDidMount() {
    if ((!localStorage.token) && this.props.hasOwnProperty('history')) this.props.history.push("/")
    fetch('http://localhost:3000/profile', {
      headers: {
        Authorization: localStorage.token
      }
    })
    .then(res => res.json())
    .then(profileInfo => this.setState({ username: profileInfo.username }))
  }

  render = () => {
    // debugger
    return (
      <div className="HomePage">
        <HomeHeader userInfo={this.props.userInfo}/>
        <h1> {this.state.username ? `Hello ${this.state.username}!` : 'Getting your profile...'}</h1>
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
  setCurrentUser: getCurrentUser
}


// anytime you want info form your store
// const mapStatesToProps = (state, props) => {
	
// 	return {
//     user: state.currentUser
//   }
// }

// any time you want to pass to store 
// const mapDispatchToProps = (dispatch, props) => {
	
// 	return {
// 		dispatch({type:  })
// 	}
// }


// export default HomePage;
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

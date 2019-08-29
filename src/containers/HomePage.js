import React from 'react';

class HomePage extends React.Component {

	componentDidMount = () => {
		fetch('http://localhost:3000/profile', {
			headers: {
				Authorization: localStorage.token
			}
		})
		.then(res => res.json())
		.then(profileInfo => {
			console.log(profileInfo)
			this.setState({ username: profileInfo.username })})
	}

  render = () => {
  	if (!localStorage.token) this.props.history.push("/")
    return (
      <div className="HomePage">
        Home
      </div>
    );
  }
}

export default HomePage;

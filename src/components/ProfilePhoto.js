import React from 'react';

export default class ProfilePhoto extends React.Component {

	render = () => {
		// debugger
		return(
			<img className="profile-photo" src={this.props.photo.picture.url} />
		)
	}
}
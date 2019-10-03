import React from 'react';

export default class ProfilePhoto extends React.Component {

	state = {
		clicked:false
	}

	// enlarges the image
	enlarge = () => {
		this.setState({clicked: !this.state.clicked})
	}

	leave = (event) => {
		if (event.target.className === "pic-modal") {
			this.setState({clicked: false})
		}
	}

	render = () => {
		
		// conditionally renders a photo or video based on the file its processing
		return(
			<div>
				{this.state.clicked ? 
					<div className="pic-modal" onClick={this.leave}>
							<img className="profile-photo" className="profile-photo" src={this.props.photo.picture.url} />
					</div> 
				: 
					null
				}
				{this.props.photo.picture.url.split('.').slice(-1)[0].toLowerCase() === 'mp4' || this.props.photo.picture.url.split('.').slice(-1)[0].toLowerCase() === 'mov' ?
					<video className="profile-photo" controls src={this.props.photo.picture.url}/>
				:
					<img onClick={this.enlarge} className="profile-photo" src={this.props.photo.picture.url} />
				}
			</div>
		)
	}
}
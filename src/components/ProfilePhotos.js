import React from 'react';
import ProfilePhoto from './ProfilePhoto';

export default class ProfilePhotos extends React.Component {

	render = () => {
		return(
			<div className="profile-photos" >
				{this.props.photos.map(photo => <ProfilePhoto photo={photo}/>)}
			</div>
		)
	}
}
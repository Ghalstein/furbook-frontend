import React from 'react';
import ProfilePost from './ProfilePost';

export default class ProfilePhotos extends React.Component {

	render = () => {
		return(
			<div className="profile-posts" >
				{this.props.user.posts.map(post => <ProfilePost post={post} user={this.props.user}/>)}
			</div>
		)
	}
}
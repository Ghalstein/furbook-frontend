import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class uploadPhoto extends React.Component {

	state = { 
		photoFile: null
	}

	handleSubmit = (e) => {
		// debugger;
		e.preventDefault();
		const formData = new FormData();
		formData.append('photo[user_id]', this.props.user.id);
		formData.append('photo[picture]', this.state.photoFile);
		// const formData = { user_id: this.props.userInfo.id, picture: this.state.photoFile};
		debugger;
		axios({
	    method: 'POST',
	    url: `http://localhost:3000/photos`,
	    data: formData,
	    config: { headers: {'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${localStorage.token}` }}
	  });
	}

	handleFile = (e) => {
		this.setState({photoFile: e.currentTarget.files[0]});
	}

	render() {
		console.log(this.state);
		return (
			<div>
				Upload a new photo
				<form onSubmit={this.handleSubmit}>
					<input type="file" onChange={this.handleFile}/>
					<button className="upload-button">Upload Photo </button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.currentUser
	}
}

export default connect(mapStateToProps)(uploadPhoto);
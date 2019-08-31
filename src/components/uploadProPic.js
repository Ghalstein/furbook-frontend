import React from 'react';
import axios from 'axios';

export default class uploadProPic extends React.Component {

	state = { 
		proPicFile: null
	}

	handleSubmit = (e) => {
		// debugger;
		e.preventDefault();
		const formData = new FormData();
		formData.append('pro_pic[user_id]', this.props.userInfo.id);
		formData.append('pro_pic[picture]', this.state.proPicFile);
		// const formData = { user_id: this.props.userInfo.id, picture: this.state.photoFile};
		debugger;
		axios({
	    method: 'POST',
	    url: `http://localhost:3000/pro_pics`,
	    data: formData,
	    config: { headers: {'Content-Type': 'multipart/form-data', Authorization: localStorage.token }}
	  });
	}

	handleFile = (e) => {
		this.setState({proPicFile: e.currentTarget.files[0]});
	}

	render() {
		console.log(this.state);
		return (
			<div>
				Upload a new profile picture
				<form onSubmit={this.handleSubmit}>
					<input type="file" onChange={this.handleFile}/>
					<button>Upload Photo </button>
				</form>
			</div>
		);
	}
}
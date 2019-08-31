import React from 'react';
import axios from 'axios';

export default class uploadPhoto extends React.Component {

	state = { 
		photoFile: null
	}

	handleSubmit = (e) => {
		// debugger;
		e.preventDefault();
		const formData = new FormData();
		formData.append('photo[user_id]', this.props.userInfo.id);
		formData.append('photo[picture]', this.state.photoFile);
		// const formData = { user_id: this.props.userInfo.id, picture: this.state.photoFile};
		debugger;
		axios({
	    method: 'POST',
	    url: `http://localhost:3000/photos`,
	    data: formData,
	    config: { headers: {'Content-Type': 'multipart/form-data', Authorization: localStorage.token }}
	  });
		// fetch('http://localhost:3000/photos', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		'Accept': 'application/json',
		// 		'Authorization': localStorage.token
		// 	},
		// 	body: JSON.stringify(formData)
		// }).then(res => res.json())
		// 	.then(console.log)
		// $.ajax({
		// 	url:'/photos',
		// 	method: 'POST',
		// 	data: formData,
		// 	contentType: false,
		// 	processData: false
		// })
	}

	handleFile = (e) => {
		this.setState({photoFile: e.currentTarget.files[0]});
	}

	render() {
		console.log(this.state);
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="file" onChange={this.handleFile}/>
				<button>Upload Photo </button>
			</form>
		);
	}
}
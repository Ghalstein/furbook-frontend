import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/userActions'

class Logout extends React.Component {

	render = () => {
		return (
			<div>
				Logout
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
		user: state.currentUser
	}
}

const mapDispatchToProps = {
	logOut: logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
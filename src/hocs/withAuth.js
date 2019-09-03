import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCurrentUser } from '../actions/userActions'

export default function withAuth(ComponentToBeWrapped) {
  class Something extends React.Component {
    componentDidMount() {
      if (!localStorage.token) {
        // this.props.history.push("/login")
      }
      try {
        this.props.setCurrentUser()
          .catch(e => {
            console.log("try")
            this.props.history.push("/myProfile")
          })
      } catch (e) {
        if (e.message === "Please log in") {
          console.log("catch")
          this.props.history.push("/login")
        }
      }
    }

    render() {
      return <ComponentToBeWrapped
        loggedIn={this.props.loggedIn}
        {...this.props} />
    }
  }

  const mapStateToProps = state => {
    return {
      loggedIn: state.loggedIn
    }
  }

  const mapDispatchToProps = {
    setCurrentUser: getCurrentUser
  }

  return withRouter(connect(mapStateToProps, mapDispatchToProps)(Something))
}
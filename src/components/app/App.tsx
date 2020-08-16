import React, { Component } from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import { Route } from "components"
import { Login, Dashboard } from "views"

import { Props, mapDispatcherToProps } from "./models"

class AppComponent extends Component<Props> {
	// #region Lifecycle Methods
	componentDidMount() {
		const token = localStorage.getItem("token")

		if (token) {
			const user = {
				id: "1",
				name: "Isaac",
				email: "suarezmota@gmail.com"
			}
	
			this.props.login(user, token)
		}
	}
	// #endregion

	// #region JSX
	render() {
		return (
			<Router>
				<Route public exact path="/login" component={ Login } />
				<Route path="/" component={ Dashboard } />
			</Router>
		)
	}
	// #endregion
}

export const App = connect(null, mapDispatcherToProps)(AppComponent)

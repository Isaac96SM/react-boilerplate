import React, { Component } from "react"
import { connect } from "react-redux"

import { Props, mapDispatcherToProps } from "./models"

class LoginComponent extends Component<Props> {
	// #region Constructor
	onClick = this._onClick.bind(this)
	// #endregion

	// #region JSX
	render() {
		return (
			<button
				onClick={ this.onClick }
			>
				Login
			</button>
		)
	}
	// #endregion

	// #region Methods
	private _onClick() {
		const user = {
			id: "1",
			name: "Isaac",
			email: "suarezmota@gmail.com"
		}

		this.props.login(user, "fl dslfh sdhfkjshd")
	}
	// #endregion
}

export const Login = connect(null, mapDispatcherToProps)(LoginComponent)

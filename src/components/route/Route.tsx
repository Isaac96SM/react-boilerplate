import React, { Component } from "react"
import { connect } from "react-redux"
import { Route as InternalRoute, Redirect, RouteProps, RouteComponentProps } from "react-router-dom"

import { Props, State, mapStateToProps } from "./models"

class RouteComponent extends Component<Props, State> {
	// #region Constructor
	state = {
		isAuthenticated: false
	}
	// #endregion

	// #region Lifecycle Methods
	static getDerivedStateFromProps(props: Props, state: State): State {
		if (props.isAuthenticated !== state.isAuthenticated) {
			return {
				isAuthenticated: props.isAuthenticated
			}
		}

		return state
	}
	// #endregion

	// #region Getters
	get isLogged(): boolean {
		return this.state.isAuthenticated
	}
	// #endregion

	// #region JSX
	render() {
		const routeProps: RouteProps = {
			location: this.props.location,
			children: this.props.children,
			path: this.props.path,
			exact: this.props.exact,
			sensitive: this.props.sensitive,
			strict: this.props.strict
		}

		routeProps.render = (props: RouteComponentProps) => {
			if (this.props.public ? !this.isLogged : this.isLogged) {
				const ReturnComponent = this.props.component as any

				return <ReturnComponent />
			}

			if (this.props.public)
				return <Redirect to={ "/" } />
			
			return <Redirect to={ "/login" } />
		}

		return (
			<InternalRoute
				{ ...routeProps }
			/>
		)
	}
	// #endregion
}

export const Route = connect(mapStateToProps, {})(RouteComponent)

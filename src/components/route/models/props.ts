import { RouteProps } from "react-router-dom"

import { AppState } from "store/app.state"

export const mapStateToProps = ({ auth }: AppState) => {
	const { isAuthenticated } = auth

	return { isAuthenticated }
}

export interface Props extends RouteProps, ReturnType<typeof mapStateToProps> {
	public?: boolean
}

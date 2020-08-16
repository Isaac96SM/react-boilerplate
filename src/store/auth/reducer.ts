import { AuthState, AuthActions, Constants } from "./types"

const initialState: AuthState = {
	token: "",
	user: null,
	isAuthenticated: false
}

export function authReducer(state: AuthState = initialState, action: AuthActions): AuthState {
	switch (action.type) {
		case Constants.LOGIN:
			return {
				token: action.payload.token,
				user: action.payload.user,
				isAuthenticated: true
			}
		case Constants.LOGOUT:
			return {
				token: "",
				user: null,
				isAuthenticated: false
			}
		default:
			return state
	}
}

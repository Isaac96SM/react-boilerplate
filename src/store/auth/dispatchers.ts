import { Dispatch } from "redux"

import { User } from "models"

import * as actions from "./actions"
import { AuthActions } from "./types"

export const login = (dispatch: Dispatch<AuthActions>, payload: { user: User, token: string }) => {
	const { user, token } = payload

	localStorage.setItem("token", token)
	dispatch(actions.login(user, token))
}

export const logout = (dispatch: Dispatch<AuthActions>) => {
	localStorage.removeItem("token")
	dispatch(actions.logout())
}

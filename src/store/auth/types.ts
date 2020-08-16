import { ActionType } from "typesafe-actions"
import * as actions from "./actions"

import { User } from "models"

export type AuthActions = ActionType<typeof actions>

export interface AuthState {
	token: string
	user: User | null
	isAuthenticated: boolean
}

export enum Constants {
	LOGIN = "LOGIN",
	LOGOUT = "LOGOUT"
}

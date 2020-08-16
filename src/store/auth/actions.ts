import { action } from "typesafe-actions"
import { Constants } from "./types"

import { User } from "models"

export const login = (user: User, token: string) => action(Constants.LOGIN, { user, token })

export const logout = () => action(Constants.LOGOUT)

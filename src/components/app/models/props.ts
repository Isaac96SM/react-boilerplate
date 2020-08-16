import { Dispatch } from "redux"

import { User } from "models"
import * as dispatchers from "store/auth/dispatchers"
import { AuthActions } from "store/auth/types"

export const mapDispatcherToProps = (dispatch: Dispatch<AuthActions>) => {
	return {
		login: (user: User, token: string) => dispatchers.login(dispatch, { user, token })
	}
}

export type Props = ReturnType<typeof mapDispatcherToProps>

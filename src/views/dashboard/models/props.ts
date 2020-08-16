import { Dispatch } from "redux"

import * as dispatchers from "store/auth/dispatchers"
import { AuthActions } from "store/auth/types"

export const mapDispatcherToProps = (dispatch: Dispatch<AuthActions>) => {
	return {
		logout: () => dispatchers.logout(dispatch)
	}
}

export type Props = ReturnType<typeof mapDispatcherToProps>

import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/reducer"
import { AppState } from "./app.state"

const middleware = [thunk]

const store = createStore<AppState, any, any, any>(
	combineReducers({
		auth: authReducer
	}),
	compose(
		applyMiddleware(...middleware),
		(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
	)
)

export default store

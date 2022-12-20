import { combineReducers } from 'redux'

import setAuthReducer from './reducers/setAuth'

const rootReducer = combineReducers({
	auth: setAuthReducer,
})

export default rootReducer
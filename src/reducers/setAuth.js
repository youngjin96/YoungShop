const initialState = {
	value: false
}

const setAuthReducer = (state = initialState, action) => {
  switch (action.type) {
		case 'signIn': 
			return {
				value: true
			}
		case 'signOut':
			return {
				value: false
			}
		default:
			return state
	}
}

export default setAuthReducer;
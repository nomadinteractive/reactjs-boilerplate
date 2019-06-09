import {
	INCREASE_CLICK_COUNT,
	USER_DATA_LOADED
} from '../constants/action-types'

const initialState = {
	clicks: 0,
	users: []
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	case INCREASE_CLICK_COUNT:
		return Object.assign({}, state, {
			clicks: state.clicks + 1
		})
	case USER_DATA_LOADED:
		return Object.assign({}, state, {
			users: action.users
		})
	default:
		return state
	}
}

export default rootReducer

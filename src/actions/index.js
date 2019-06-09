import axios from 'axios'

import {
	INCREASE_CLICK_COUNT,
	USER_DATA_LOADED
} from '../constants/action-types'

export const increaseClickCountAction = () => ({ type: INCREASE_CLICK_COUNT })

export const getUsersDataAction = () => (
	dispatch => axios('https://jsonplaceholder.typicode.com/users')
		.then((response) => {
			dispatch({
				type: USER_DATA_LOADED,
				users: response.data
			})
		})
)

export default {}

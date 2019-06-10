// @flow

import React from 'react'
import { connect } from 'react-redux'

import { getUsersDataAction } from '../../actions/index'

const mapStateToProps = state => ({
	users: state.users
})

const mapDispatchToProps = dispatch => ({
	getUsersData: () => {
		dispatch(getUsersDataAction())
	}
})

type Props = {
	users?: Object[],
	getUsersData?: Function
}

class Users extends React.Component<Props> {
	static defaultProps = {
		users: [],
		getUsersData: () => {}
	}

	componentDidMount() {
		const { getUsersData } = this.props
		// $FlowIgnore
		getUsersData()
	}

	render() {
		const {
			users,
		} = this.props

		return (
			<div>
				<h2>Users</h2>
				<ul>
					{users && users.map(user => (
						<li key={user.id}>
							{user.name}
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

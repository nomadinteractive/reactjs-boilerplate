import React from 'react'
import PropTypes from 'prop-types'
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

class Users extends React.Component {
	componentDidMount() {
		const { getUsersData } = this.props
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
					{users.map(user => (
						<li key={user.id}>
							{user.name}
						</li>
					))}
				</ul>
			</div>
		)
	}
}

Users.propTypes = {
	users: PropTypes.array,
	getUsersData: PropTypes.func
}

Users.defaultProps = {
	users: [],
	getUsersData: () => {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
